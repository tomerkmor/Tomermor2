"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
// /projects/products/new
const ProductForm = ({
  _id,
  title: existingTitle,
  description: existingDescription,
  price: existingPrice,
  images: existingImages,
}) => {
  const [title, setTitle] = useState(existingTitle || "");
  const [description, setDescription] = useState(existingDescription || "");
  const [price, setPrice] = useState(existingPrice || "");
  const [selectedFiles, setSelectedFiles] = useState(null); // New images to be uploaded
  const [imagePreviews, setImagePreviews] = useState(existingImages || []); // Image previews (for display)
  const [uploadedImages, setUploadedImages] = useState(existingImages || []); // Store uploaded image URLs
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");

  const router = useRouter();

  useEffect(() => {
    //setImagePreviews()
    
  }, []);

  const handleUpdatePhoto = async (e) => {
    const files = e.target?.files;
    setSelectedFiles(files);

    // Create image previews
    const previews = [];
    for (const file of files) {
      const reader = new FileReader();
      reader.onload = (event) => {
        previews.push(event.target.result);
        console.log('the rendered images are:')
        console.log([...previews])
        setImagePreviews([...previews]);
      };
      reader.readAsDataURL(file);
    }
  };

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

    console.log("selected files:");
    console.log(selectedFiles);

    const formData = new FormData();

    // Append existing images and selected files
    if (selectedFiles) {
      for (const file of selectedFiles) {
        console.log("Appending file:", file.name);
        formData.append("images", file);
      }
    }

    // Post the form data to the upload pictures
    const res = await fetch("/api/ecommerce/upload", {
      method: "POST",
      body: formData,
    });

    const { links } = await res.json();
    if (res.ok) {
      console.log("Uploaded image URLs:", links);
    }

    //  save/edit the form
    const data = {
      productName: title,
      productDescription: description,
      productPrice: price,
      productImages: links,
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
          body: JSON.stringify({ ...data, _id }),
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

        <label>Photos</label>
        <div className="flex gap-2">
          <label className="w-24 h-24 text-sm cursor-pointer gap-1 bg-gray-200  rounded-lg border-mastik flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6 text-gray-500"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5m-13.5-9L12 3m0 0 4.5 4.5M12 3v13.5"
              />
            </svg>
            <span className="text-gray-500">Upload</span>
            <input
              type="file"
              className="hidden"
              onChange={handleUpdatePhoto}
              id="images"
              name="images"
              accept="image/*"
              multiple
            />
          </label>

          <div className="image-preview-container">
            {imagePreviews.length > 0 && (
              <div className="flex gap-2">
                {imagePreviews.map((image, index) => (
                  <img
                    key={index}
                    src={image}
                    alt={`preview-${index}`}
                    className="w-24 h-24 object-cover rounded-md"
                  />
                ))}
              </div>
            )}
          </div>
          {!imagePreviews?.length && <div>No photos in this product</div>}
        </div>

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
