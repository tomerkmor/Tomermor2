"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
// /projects/products
const ProductsPage = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("/api/ecommerce/products");
        if (!response.ok) {
          throw new Error("Failed to fetch products");
        }
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div>
      <h2>Products page</h2>
      <Link
        className="bg-mastik text-white py-1 px-2 rounded-md"
        href="/projects/ecommerce/products/new"
      >
        Add New Product
      </Link>

      <table>
        <thead>
          <tr>
            <td>Product name</td>
            <td></td>
          </tr>
        </thead>
        <tbody>
          {products.map(product => (
            <tr key={product._id}>
              <td>{product.title}</td>
              <td>some buttons..</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductsPage;
