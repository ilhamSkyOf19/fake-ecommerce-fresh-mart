import { NextRequest, NextResponse } from "next/server";


export function middleware(req: NextRequest) {
    const res = NextResponse.next();

    res.headers.set('Access-Control-Allow-Origin', 'http://localhost:5173');
    res.headers.set('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    res.headers.set('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    res.headers.set('Access-Control-Allow-Credentials', 'true');

    // Handle preflight requests
    if (req.method === 'OPTIONS') {
        return new NextResponse(null, {
            status: 204,
            headers: res.headers
        });
    }

    return res;
}


export const config = {
    matcher: "/api/:path*"
}