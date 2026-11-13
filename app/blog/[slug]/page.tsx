// //appp/blog/[slug]/page.tsx --> matches /blog/anything

import type { Metadata } from "next";
import { Suspense } from "react";
import { notFound } from "next/navigation";
import Filters from "./filters";

export const metadata: Metadata = {
    title: "Blog",
    description: "Learn more about our team and mission",
};

type BlogProps = {
    params: Promise<{
        slug: string;
    }>;
};

export default function BlogPostPage({ params }: BlogProps) {
    return (
        <Suspense fallback={<p>Loading blog post...</p>}>
            <BlogPost params={params} />
        </Suspense>
    );
}

async function BlogPost({ params }: BlogProps) {
    const { slug } = await params;

    if (slug === "notFound") {
        notFound();
    }

    if (slug === "error") {
        throw new Error("Something went wrong");
    }

    await new Promise((resolve) => setTimeout(resolve, 3000));

    return (
        <div>
            <h1>Reading Post: {slug}</h1>

            <Suspense fallback={<p>Loading filters...</p>}>
                <Filters />
            </Suspense>
        </div>
    );
}