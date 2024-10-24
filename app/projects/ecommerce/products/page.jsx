import Link from "next/link";
import React from "react";
// /projects/products
const ProductsPage = () => {
  return (
    <div>
      <h2>Products page</h2>
      <Link
        className="bg-mastik text-white py-1 px-2 rounded-md"
        href="/projects/ecommerce/products/new"
      >
        Add New Product
      </Link>
    </div>
  );
};

export default ProductsPage;
