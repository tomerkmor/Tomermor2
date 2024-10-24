"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
// /projects/products/new
const NewProduct = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [error, setError] = useState("");

  const router = useRouter()
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!title) {
      setError("Title is required!");
      return;
    }
    if (!description) {
      setError("Description is required!");
      return;
    }
    if (!price) {
      setError("Price is required!");
      return;
    }

    // Reset error message if validation passes
    setError("");

    try {
      const response = await fetch("/api/ecommerce/new-product", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          productName: title,
          productDescription: description,
          productPrice: price,
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || "Creation failed");
      }

      const successData = await response.json();
      setMessage(successData.message);

      router.push("/projects/ecommerce/products");
    } catch (error) {
      setMessage(`${error}`);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Create new item</h2>
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
          Create
        </button>
      </div>
    </form>
  );
};

export default NewProduct;
