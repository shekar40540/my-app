// // appp/docs/[...slug]/page.tsx - matchs /docs/a, /docs/a/b, /docs/a/b/c, .etc

// export default async function DocsPage({params,} : {params: Promise<{slug: string[]}>;}) {
//     const { slug } = await params;
//     return <h1>Docs path: {slug.join(" / ")}</h1>
// }


import { Suspense } from "react";

type DocsProps = {
    params: Promise<{
        slug: string[];
    }>;
};

export default function DocsPage({ params }: DocsProps) {
    return (
        <Suspense fallback={<h1>Loading documentation...</h1>}>
            <DocsContent params={params} />
        </Suspense>
    );
}

async function DocsContent({ params }: DocsProps) {
    const { slug } = await params;

    return (
        <h1>Docs path: {slug.join(" / ")}</h1>
    );
}