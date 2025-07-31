import { NextRequest, NextResponse } from 'next/server';
import { NewsService } from '@/services/news.service';


export async function DELETE(
    req: NextRequest, 
    context: {params: Promise<{id: string}>}): Promise<NextResponse> {
    try {
        const { id } = await context.params;

        if (!id) {
            return NextResponse.json(
                { message: 'ID is required' },
                { status: 400 }
            );
        }
        // panggil service untuk menghapus berita
        const result = await NewsService.delete(id);

        if (!result) {
            return NextResponse.json(
                { message: 'News not found' },
                { status: 404 }
            );
        }

        return NextResponse.json(
            { message: 'News deleted successfully' },
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