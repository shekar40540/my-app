import { NextResponse } from "next/server";

export async function GET() {
    const posts = [
        {id: 1, title: "Hello World"},
        {id: 2, title: "Second Post"},
        {id: 3, title: "Third Post"},
    ];
    return NextResponse.json(posts);
}

// Example
// /api/posts