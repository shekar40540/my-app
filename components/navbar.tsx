import Link from "next/link";

type navbarProps = {
    name: string;
    age: number;
}

// Array
const items = ["Routing", "Rendering", "Caching", "Next menu"]
export default function Navbar({name, age}: navbarProps) {
    console.log("I am a navbar")
    return (
        <nav className="flex items-center justify-between px-8 py-4 border-b">
            <h1 className="text-xl font-bold">
                My Website {name}, 
                my age is {age}
            </h1>

            <div className="flex gap-6">
                <ul className="flex">
                    {items.map((item) => (
                        <li key={item} className="px-2">{item}</li> 
                    ))}
                </ul>
                {/* <Link href="/">Home</Link>
                <Link href="/about">About</Link>
                <Link href="/contact">Contact</Link> */}
            </div>
        </nav>
    )
}
