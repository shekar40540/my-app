import Link from "next/link";

export default function Nav() {
    return (
        <nav className="flex justify-center gap-4">
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/blog/hello-world">First Post</Link>
            <Link href="/content">Content</Link>
            <Link href="/products">Products</Link>
            <Link href="/productsCache">ProductsCache</Link>
        </nav>
    )
}