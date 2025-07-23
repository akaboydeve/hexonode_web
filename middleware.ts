import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export async function middleware(req: NextRequest) {
    // Normalize pathname to lowercase for case-insensitive matching
    const url = req.nextUrl.clone();
    url.pathname = url.pathname.toLowerCase();
    req.nextUrl.pathname = url.pathname;
    return NextResponse.next();
}

// Specify which routes the middleware should run on
export const config = {
    matcher: [
        /*
         * Match all request paths except for the ones starting with:
         * - _next/static (static files)
         * - _next/image (image optimization files)
         * - favicon.ico (favicon file)
         * - public (public files)
         */
        '/((?!_next/static|_next/image|favicon.ico|public).*)',
    ],
}; 