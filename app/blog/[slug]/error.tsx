"use client";

import { useEffect } from "react";

export default function Error({
    error,
    reset,
}: {
    error: Error & { digest?: string };
    reset: () => void;
}) {

    useEffect(() => {
        console.log("Blog Error:", error);
    }, [error]);

    return (
        <div className="p-5">
            <h1 className="text-2xl text-red-500">
                Blog Error Boundary
            </h1>

            <p>Something went wrong in the blog page!</p>

            <button
                onClick={() => reset()}
                className="bg-blue-500 text-white p-2 rounded"
            >
                Try Again
            </button>
        </div>
    );
}