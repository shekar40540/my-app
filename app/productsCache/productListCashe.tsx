// app/productsCache/page.tsx

import SearchBox from "./SearchBox";

interface ProductC {
  id: number;
  title: string;
  price: number;
}

// async function fetchProducts(): Promise<ProductC[]> {
//     console.time("fetchProducts");
//   const res = await fetch("https://fakestoreapi.com/products", {
//     // next: { revalidate: 10 }, // Revalidate every 10 seconds
//     cache: "force-cache",
//     // cache: "no-store", // Disable caching for demonstration purposes
//   });
//   console.log("Fetched products:", res);
//   console.timeEnd("fetchProducts");

//   if (!res.ok) {
//     throw new Error("Failed to fetch products");
//   }

//   const products: ProductC[] = await res.json();
//   return products;
// }

async function fetchProducts(): Promise<ProductC[]> {
    console.time("fetchProducts");
    const res = await fetch("https://fakestoreapi.com/products", {
        next: { revalidate: 10 }, // Revalidate every 10 seconds
        // cache: "force-cache",
        // cache: "no-store", // Disable caching for demonstration purposes
    });
    console.log("Fetched products:", res);
    console.timeEnd("fetchProducts");

    if (!res.ok) {
        throw new Error("Failed to fetch products");
    }

    const products: ProductC[] = await res.json();
    return products;
}

export default async function ProductsListCache() {
    const products = await fetchProducts();

    return (
        <>
            <SearchBox products={products} />
            {/* <ul>
                {products.map((product) => (
                    <li key={product.id}>
                        {product.title} - ${product.price}
                    </li>
                ))}
            </ul> */}
        </>
    )
}