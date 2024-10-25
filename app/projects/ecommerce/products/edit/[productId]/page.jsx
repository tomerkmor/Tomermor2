"use client";

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import ProductForm from "../../../components/ProductForm";
export default function EditProductPage() {
  const params = useParams();
  const [product, setProduct] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchProduct() {
      console.log(params);
      const response = await fetch(
        `/api/ecommerce/products?id=${params.productId}`
      );
      const data = await response.json();
      setProduct(data);
      console.log(product);
      setIsLoading(false);
    }

    fetchProduct();
  }, [params]);


  if (isLoading) {
    return <div>the page is loading...</div>;
  }

  return (
    <div>
      <h2>Edit Product</h2>
      <ProductForm {...product} />
    </div>
  );
}
