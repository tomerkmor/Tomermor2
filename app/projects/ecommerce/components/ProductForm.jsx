"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
// /projects/products/new
const ProductForm = ({
  _id,
  title: existingTitle,
  description: existingDescription,
  price: existingPrice,
}) => {
  const [title, setTitle] = useState(existingTitle || "");
  const [description, setDescription] = useState(existingDescription || "");
  const [price, setPrice] = useState(existingPrice | "");
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");

  const router = useRouter();
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!title) {
      setError("Title is required!");
      return;
    }

    if (!price) {
      setError("Price is required!");
      return;
    }

    // Reset error message if validation passes
    setError("");

    const data = {
      productName: title,
      productDescription: description,
      productPrice: price,
    };
    try {
      if (!_id) {
        const response = await fetch("/api/ecommerce/products", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        });

        if (!response.ok) {
          const errorData = await response.json();
          throw new Error(errorData.error || "Creation failed");
        }

        const successData = await response.json();
        setMessage(successData.message);
      } else {
        // we are editing - we have an product _id
        const response = await fetch("/api/ecommerce/products", {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({...data, _id}),
        });
      }

      router.push("/projects/ecommerce/products");
    } catch (error) {
      setMessage(`${error}`);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="ml-2">
        <label>Product Name</label>
        <input
          value={title}
          onChange={(ev) => setTitle(ev.target.value)}
          type="text"
          placeholder="product name"
        />

        <label>Description</label>
        <textarea
          value={description}
          onChange={(ev) => setDescription(ev.target.value)}
          placeholder="description"
        ></textarea>

        <label>Price (in USD)</label>
        <input
          value={price}
          onChange={(ev) => setPrice(ev.target.value)}
          type="number"
          placeholder="price"
        />

        <button type="submit" className="btn-primary">
          Save
        </button>
      </div>
    </form>
  );
};

export default ProductForm;
