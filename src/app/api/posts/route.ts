import { db } from "@/lib/db";
import { NextResponse } from "next/server";

export async function POST (req: Request) {
    try {
        const { title, content, author } = await req.json();
        const post = await db.post.create({
            data: {
                title,
                content,
                username: author,
            },
        });

        return new NextResponse(JSON.stringify(post), { status: 201 });
    } catch (error) {
        console.error(error);
        return new NextResponse("An error occurred", { status: 500 });
    }
}

export async function GET () {
    const posts = await db.post.findMany();

    return new NextResponse(JSON.stringify(posts));
}