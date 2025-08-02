import { SessionData, sessionOptions } from "@/lib/session";
import { getIronSession } from "iron-session";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
    const res = new NextResponse();
    const session = await getIronSession<SessionData>(req, res, sessionOptions);

    if (!session.id) {
        return NextResponse.json({ success: false, message: 'Unauthorized' }, { status: 401 })
    }

    return NextResponse.json({
        success: true,
        message: 'Authorized', data: { id: session.id, email: session.email }
    }, { status: 200 })

}