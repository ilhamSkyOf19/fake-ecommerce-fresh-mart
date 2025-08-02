import { UserService } from "@/services/user.service";
import argon2 from "argon2";
import { NextRequest, NextResponse } from "next/server";
import { success } from "zod";

export async function POST(req: NextRequest): Promise<NextResponse> {
    try {
        // get body
        const body = await req.json();
        const { name, email, username, password } = body;

        // hast password 
        const hashPassword: string = await argon2.hash(password, {
            type: argon2.argon2id,
            memoryCost: 12288,
            timeCost: 2,
            parallelism: 1,
        });

        // create user 
        const response = await UserService.create({ name, email, username, password: hashPassword });

        // cek error 
        if (!response.success) {
            return NextResponse.json(
                { success: false, errors: response.errors },
                { status: 400 });
        }


        return NextResponse.json(
            {
                success: true,
                status: 201,
                message: "User created successfully",
                data: response.data
            }, { status: 201 });

    } catch (error) {
        console.error(error);
        return NextResponse.json(
            { errors: 'Internal Server Error' },
            { status: 500 });
    }
}