
interface Product {
  id: number;
  title: string;
  price: number;
}

async function getProducts(): Promise<Product[]> {
  const res = await fetch("https://fakestoreapi.com/products");

  if (!res.ok) {
    throw new Error("Failed to fetch products");
  }

  return res.json();
}

export default async function ProductList() {
  const products = await getProducts();

  return (
    <ul>
      {products.map((product) => (
        <li key={product.id} className="border p-3 mb-2 rounded">
          {product.title} - ${product.price}
        </li>
      ))}
    </ul>
  );
}
