import { NextRequest, NextResponse } from 'next/server'
import { ProductService } from '@/services/product.service'

export async function GET(
    req: NextRequest,
    context: { params: Promise<{ category: string }> },
) {
    const { category } = await context.params;

    try {
        const products = await ProductService.getCategory(category)
        return NextResponse.json(products, { status: 200 })
    } catch (error) {
        console.error(error)
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })
    }
}
