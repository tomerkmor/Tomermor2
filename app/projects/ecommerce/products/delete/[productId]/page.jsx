"use client";

import { useParams, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

const DeletePage = () => {
  const params = useParams();
  const router = useRouter();
  const [product, setProduct] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchProduct() {
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

  const handleCancelDelete = () => {
    router.push("..");
  };

  const handleDelete = async () => {
    try {
      const response = await fetch(
        `/api/ecommerce/products?id=${params.productId}`,
        {
          method: "DELETE",
        }
      );

      // Log response details for debugging
      console.log("Response status:", response.status);
      const responseBody = await response.json();
      console.log("Response body:", responseBody);

      if (response.ok) {
        router.push(".."); // Redirect after successful deletion
      } else {
        console.log("Failed to delete product");
      }
    } catch (error) {
      console.log("An error occurred:", error);
    }
  };

  if (isLoading) {
    return <h1>the page is loading</h1>;
  }

  return (
    <div className="text-center">
      <h2>Delete Product</h2>
      <p>
        Do you really want to delete product{" "}
        <em className="text-mastik">{product.title}</em>?
      </p>
      <div className="flex gap-2 justify-center">
        <button onClick={handleDelete} className="btn-delete">
          Yes
        </button>
        <button onClick={handleCancelDelete} className="btn-primary ">
          No
        </button>
      </div>
    </div>
  );
};

export default DeletePage;
