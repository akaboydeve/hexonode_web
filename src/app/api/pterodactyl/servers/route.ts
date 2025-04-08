import { createClient } from '@supabase/supabase-js';
import { NextRequest, NextResponse } from 'next/server';

// Get environment variables
const PTERODACTYL_URL = process.env.PTERODACTYL_URL;
const PTERODACTYL_API_KEY = process.env.PTERODACTYL_API_KEY;
const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL;
const SUPABASE_ANON_KEY = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

// Route to get servers from Pterodactyl
export async function GET(request: NextRequest) {
    // Create a Supabase client
    const supabase = createClient(SUPABASE_URL!, SUPABASE_ANON_KEY!);

    // Get session from auth cookie
    const authCookie = request.cookies.get('sb-auth-token')?.value;

    if (!authCookie) {
        return NextResponse.json(
            { error: 'Unauthorized' },
            { status: 401 }
        );
    }

    // Set auth cookie
    supabase.auth.setSession({
        access_token: authCookie,
        refresh_token: '',
    });

    // Get user session
    const { data: { session } } = await supabase.auth.getSession();

    if (!session) {
        return NextResponse.json(
            { error: 'Unauthorized' },
            { status: 401 }
        );
    }

    try {
        // Make request to Pterodactyl API
        const response = await fetch(`${PTERODACTYL_URL}/api/application/servers`, {
            headers: {
                'Authorization': `Bearer ${PTERODACTYL_API_KEY}`,
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        });

        if (!response.ok) {
            throw new Error(`Pterodactyl API error: ${response.status}`);
        }

        const data = await response.json();
        return NextResponse.json(data);
    } catch (error) {
        console.error('Pterodactyl API error:', error);
        return NextResponse.json(
            { error: 'Failed to fetch servers' },
            { status: 500 }
        );
    }
}

// Route to create a server in Pterodactyl
export async function POST(request: NextRequest) {
    // Create a Supabase client
    const supabase = createClient(SUPABASE_URL!, SUPABASE_ANON_KEY!);

    // Get session from auth cookie
    const authCookie = request.cookies.get('sb-auth-token')?.value;

    if (!authCookie) {
        return NextResponse.json(
            { error: 'Unauthorized' },
            { status: 401 }
        );
    }

    // Set auth cookie
    supabase.auth.setSession({
        access_token: authCookie,
        refresh_token: '',
    });

    // Get user session
    const { data: { session } } = await supabase.auth.getSession();

    if (!session) {
        return NextResponse.json(
            { error: 'Unauthorized' },
            { status: 401 }
        );
    }

    try {
        // Get request body
        const body = await request.json();

        // Make request to Pterodactyl API
        const response = await fetch(`${PTERODACTYL_URL}/api/application/servers`, {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${PTERODACTYL_API_KEY}`,
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
        });

        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(JSON.stringify(errorData));
        }

        const data = await response.json();

        // You could also save to Supabase DB here to keep track of user servers
        await supabase
            .from('user_servers')
            .insert({
                user_id: session.user.id,
                server_id: data.attributes.id,
                name: data.attributes.name,
                created_at: new Date().toISOString()
            });

        return NextResponse.json(data);
    } catch (error) {
        console.error('Error creating server:', error);
        return NextResponse.json(
            { error: 'Failed to create server' },
            { status: 500 }
        );
    }
} 