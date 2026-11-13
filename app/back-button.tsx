"use client";

import { useRouter, usePathname } from "next/navigation";

export default function BackButton() {
    const router = useRouter();
    const pathname = usePathname();

    return (
        <div className="flex justify-between gap-4">
            <p>You are on: {pathname}</p>

            <button onClick={() => router.push("/")}>
                Go Home
            </button>

            <button onClick={() => router.back()}>
                Back
            </button>
        </div>
    );
}