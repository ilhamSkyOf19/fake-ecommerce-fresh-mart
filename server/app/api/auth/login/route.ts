import { SessionData, sessionOptions } from "@/lib/session";
import { UserRequest } from "@/models/user-model";
import { AuthService } from "@/services/auth.service";
import { getIronSession } from "iron-session";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest, res: NextResponse): Promise<NextResponse> {
    try {

        // get body
        const body = await req.json() as UserRequest;
        // login
        const result = await AuthService.login(body);


        // cek result 
        if (!result.success) {
            return NextResponse.json(result, { status: 401 });
        }

        // save session
        const res = new NextResponse();
        const session = await getIronSession<SessionData>(req, res, sessionOptions);

        session.id = result.data.id;
        session.email = result.data.email;
        await session.save();

        // berhasil
        return NextResponse.json(result, { status: 200, headers: res.headers });




    } catch (error) {
        console.error(error);
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}