import { NewsService } from "@/services/news.service";
import { NextRequest, NextResponse } from "next/server";

// create news 
export async function POST(req: NextRequest): Promise<NextResponse> {
    try {

        const body = await req.json();
        const news = await NewsService.create(body);

        if (news && 'errors' in news) {
            return NextResponse.json(
                { message: 'Validation Error', errors: news.errors },
                { status: 400 }
            );
        }

        return NextResponse.json(
            { news },
            { status: 201 }
        );

    } catch (error) {
        if (error instanceof Error) {
            return NextResponse.json(
                { message: error.message },
                { status: 500 }
            );
        }
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
        if (order && !["asc", "desc"].includes(order)) {
            return NextResponse.json({
                message: 'Invalid order'
            }, {
                status: 400
            })
        }



        // query 
        const news = await NewsService.getNews(take, order);

        if (news.length === 0) {
            return NextResponse.json(
                { message: 'No news found' },
                { status: 404 }
            );
        }

        return NextResponse.json(
            news,
            { status: 200 }
        );

    } catch (error) {
        return NextResponse.json(
            { message: 'Internal Server Error' },
            { status: 500 }
        );
    }
}


