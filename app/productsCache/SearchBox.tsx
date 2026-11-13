//  ProductsCache/SearchBox.tsx
"use client";
import { useState, ChangeEvent } from "react";

interface Product {
    id: number;
    title: string;
    price: number;
}

interface SearchBoxProps {
    products: Product[];
}

export default function SearchBox({ products }: SearchBoxProps) {
    // query holds the input value, results holds the fetched matching products
    const [query, setQuery] = useState("");

    function handleChange(event: ChangeEvent<HTMLInputElement>) {
        setQuery(event.target.value);
    }

    // fitlter products based on search query input

    const filteredProducts = products.filter((product) =>
        product.title.toLowerCase().includes(query.toLowerCase())
    );

    return (
        <div>
            <input value={query} onChange={handleChange} placeholder="Search products..." className="border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500" />    
            <ul>
                {
                    filteredProducts.map((result) => (
                        <li key={result.id}>{result.title} - ${result.price.toFixed(2)}</li>
                    ))
                }
            </ul>
        </div>
    )
}