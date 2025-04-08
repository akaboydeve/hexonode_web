// API Service for client-side API calls

// Server interface based on Pterodactyl API response
export interface Server {
    id: string;
    name: string;
    description: string;
    status: string;
    // Add other fields as needed
}

// Generic error handling for API requests
async function handleApiResponse(response: Response) {
    if (!response.ok) {
        const errorData = await response.json().catch(() => null);
        const errorMessage = errorData?.error || `API error: ${response.status}`;
        throw new Error(errorMessage);
    }
    return response.json();
}

// API client for server operations
export const apiService = {
    // Get all servers for the user
    async getServers(): Promise<Server[]> {
        try {
            const response = await fetch('/api/pterodactyl/servers');
            const data = await handleApiResponse(response);
            return data.data || [];
        } catch (error) {
            console.error('Error fetching servers:', error);
            throw error;
        }
    },

    // Create a new server
    async createServer(serverData: any): Promise<Server> {
        try {
            const response = await fetch('/api/pterodactyl/servers', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(serverData),
            });
            const data = await handleApiResponse(response);
            return data.data;
        } catch (error) {
            console.error('Error creating server:', error);
            throw error;
        }
    },

    // Get a specific server by ID
    async getServer(serverId: string): Promise<Server> {
        try {
            const response = await fetch(`/api/pterodactyl/servers/${serverId}`);
            const data = await handleApiResponse(response);
            return data.data;
        } catch (error) {
            console.error(`Error fetching server ${serverId}:`, error);
            throw error;
        }
    },

    // Delete a server
    async deleteServer(serverId: string): Promise<void> {
        try {
            const response = await fetch(`/api/pterodactyl/servers/${serverId}`, {
                method: 'DELETE',
            });
            await handleApiResponse(response);
        } catch (error) {
            console.error(`Error deleting server ${serverId}:`, error);
            throw error;
        }
    },

    // Additional API methods can be added here
}; 