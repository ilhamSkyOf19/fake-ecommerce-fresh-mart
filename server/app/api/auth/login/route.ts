import { SessionData, sessionOptions } from "@/lib/session";
import { UserRequest } from "@/models/user-model";
import { AuthService } from "@/services/auth.service";
import { getIronSession } from "iron-session";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest): Promise<NextResponse> {
    try {
        // Ambil body request
        const body = await req.json() as UserRequest;

        // Login service
        const result = await AuthService.login(body);

        // Jika gagal login
        if (!result.success) {
            return NextResponse.json(
                { success: false, errors: result.errors }, // ✅ konsisten pakai errors
                { status: 400 }
            );
        }

        // Simpan session
        const res = new NextResponse();
        const session = await getIronSession<SessionData>(req, res, sessionOptions);

        session.id = result.data.id;
        session.email = result.data.email;
        await session.save();

        // Jika berhasil login
        return NextResponse.json(
            {
                success: true,
                message: "Login successful",
                data: result.data
            },
            { status: 200, headers: res.headers }
        );

    } catch (error) {
        console.error(error);
        return NextResponse.json(
            {
                success: false,
                errors: [{ err: "server", message: "Internal Server Error" }] // ✅ konsisten
            },
            { status: 500 }
        );
    }
}
