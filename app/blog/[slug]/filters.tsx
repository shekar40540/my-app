"use client"

import { useSearchParams } from "next/navigation";
export default function Filters() {
    const searchParams = useSearchParams();
    const postNumber = searchParams.get("postNumber"); // this reads ?postNumber=1

    return <p>The post number is : {postNumber}</p>
}