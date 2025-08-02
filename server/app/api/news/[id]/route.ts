import { NextRequest, NextResponse } from 'next/server';
import { NewsService } from '@/services/news.service';
import { Prisma } from 'generated/prisma';

export async function DELETE(
    req: NextRequest,
    context: { params: Promise<{ id: string }> }
): Promise<NextResponse> {
    const { id } = await context.params; // ✅ harus di-await sekarang

    if (!id) {
        return NextResponse.json({ message: 'ID is required' }, { status: 400 });
    }

    try {
        const result = await NewsService.delete(id);

        if (!result.success) {
            return NextResponse.json(
                { message: result.message },
                { status: 404 }
            );
        }

        return NextResponse.json(
            { message: result.message },
            { status: 200 }
        );

    } catch (error) {
        console.error('DELETE /news/:id error:', error);
        return NextResponse.json({ message: 'Internal Server Error' }, { status: 500 });
    }
}
