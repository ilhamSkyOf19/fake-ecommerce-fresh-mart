import { NewsService } from "@/services/news.service";
import { NextRequest, NextResponse } from "next/server";

// create news 
export async function POST(req: NextRequest): Promise<NextResponse> {
    try {

        const body = await req.json();
        const response = await NewsService.create(body);

        if (!response.success) {
            return NextResponse.json(
                { message: response.errors },
                { status: 400 }
            );
        }

        return NextResponse.json(
            {
                success: true,
                status: 201,
                message: "News created successfully",
                data: response.data
            },
            { status: 201 }
        );

    } catch (error) {
        console.error(error);
        return NextResponse.json(
            { message: 'Internal Server Error' },
            { status: 500 }
        );
    }
}



export async function GET(req: NextRequest): Promise<NextResponse> {
    try {
        // ambil parameter dari query string
        const searchParams = req.nextUrl.searchParams;
        const take: number = Number(searchParams.get("take")) || 3; // default 3
        const order: string = searchParams.get("order") || "desc"; // default desc


        // cek order 
        if (order !== "asc" && order !== "desc") {
            return NextResponse.json(
                { message: 'Invalid order parameter' },
                { status: 400 }
            );
        }



        // query 
        const response = await NewsService.getNews(take, order);

        if (!response.success) {
            return NextResponse.json(
                { message: response.errors },
                { status: 400 }
            );
        }


        return NextResponse.json(
            {
                success: true,
                status: 200,
                message: "News fetched successfully",
                data: response.data
            },
            { status: 200 }
        );

    } catch (error) {
        console.error(error);
        return NextResponse.json(
            { message: 'Internal Server Error' },
            { status: 500 }
        );
    }
}


