import type { NextApiRequest, NextApiResponse } from 'next';
import ping from 'ping';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const { ip } = req.query;
    if (!ip || typeof ip !== 'string') {
        return res.status(400).json({ error: 'Missing or invalid IP address' });
    }

    try {
        const result = await ping.promise.probe(ip, { timeout: 2 });
        if (result.alive && result.time) {
            res.status(200).json({ success: true, time: result.time });
        } else {
            res.status(200).json({ success: false, time: null });
        }
    } catch (error) {
        res.status(500).json({ error: 'Ping failed', details: error });
    }
} 