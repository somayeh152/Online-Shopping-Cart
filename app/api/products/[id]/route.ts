import { NextResponse } from "next/server";
import { products } from "../../../data/products";

export async function GET(req: Request, { params }: { params: { id: string } }) {
    const product = products.find((p) => p.id === params.id);
    if (!product) return NextResponse.json({ error: "Product Not Found" }, { status: 404 });

    return NextResponse.json(product);
}
