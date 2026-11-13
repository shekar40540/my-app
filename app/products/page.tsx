
// app/products/page.tsx

import { Suspense } from "react";
import ProductList from "./ProductList";
import FavoriteButton from "./FavoriteButton";


import Modal from "./Modal";
import ProductDetails from "./productDetails";  // a Server Component, fetches its own data
import Timestamp from "./Timestamp";

export default function ProductsPage() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Products</h1>

      <Suspense fallback={<p>Loading products...</p>}>
        <ProductList />
      </Suspense>

      <FavoriteButton />

      <Modal>
        <ProductDetails productId={1} />
      </Modal>

      <Timestamp/>
      <br />
      <br />
    </div>
  );
}

