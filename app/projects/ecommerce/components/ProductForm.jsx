"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

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
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [imagePreviews, setImagePreviews] = useState(existingImages || []);
  const [imagesAreEdited, setImagesAreEdited] = useState(false);

  const [error, setError] = useState("");
  const [message, setMessage] = useState("");

  const router = useRouter();

  const handleUpdatePhoto = (e) => {
    setImagesAreEdited(true);
    const files = Array.from(e.target.files);
    setSelectedFiles(files);

    const previews = files.map((file) => URL.createObjectURL(file));
    setImagePreviews(previews);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!title || !price) {
      setError("Title and Price are required!");
      return;
    }

    setError("");

    const formData = new FormData();
    if (selectedFiles.length) {
      selectedFiles.forEach((file) => formData.append("images", file));
    }
    console.log("Selected Files: ", selectedFiles);

    try {
      // Post to upload the files to S3
      console.log("Trying to upload to /api/ecommerce/upload");

      const uploadRes = await fetch("/api/ecommerce/upload", {
        method: "POST",
        body: formData,
      });

      console.log(uploadRes);

      const uploadedData = await uploadRes.json();
      console.log("uploadedData.data:", uploadedData.data);
      const awsImagesNames = [];
      uploadedData.data.forEach((item) => {
        awsImagesNames.push(item.fileName);
      });
      console.log("the URLs in aws are:");
      console.log(awsImagesNames);

      // Check the response
      if (!uploadRes.ok) throw new Error("Image upload failed");
      console.log("succeeded in uploading the images!!");
      console.log("succeeded in uploading the images!!");
      console.log("succeeded in uploading the images!!");

      // Add uploaded images to the form submission
      const data = {
        productName: title,
        productDescription: description,
        productPrice: price,
        productImages: awsImagesNames, // URLS FROM AWS
      };

      if (!_id) {
        console.log("Trying to create product");
        const response = await fetch("/api/ecommerce/products", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(data),
        });

        if (!response.ok) throw new Error("Creation failed");
      } else {
        console.log("Trying to edit product");
        const response = await fetch("/api/ecommerce/products", {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ ...data, _id }),
        });

        if (!response.ok) throw new Error("Update failed");
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
          <label className="w-24 h-24 text-sm cursor-pointer gap-1 bg-gray-200 rounded-lg flex items-center justify-center">
            <input
              type="file"
              name="file"
              className="hidden"
              onChange={handleUpdatePhoto}
              accept="image/*"
              multiple
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-5 text-gray-500"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5m-13.5-9L12 3m0 0 4.5 4.5M12 3v13.5"
              />
            </svg>

            <span className="text-gray-500">Upload</span>
          </label>

          <div className="image-preview-container">
            {imagePreviews.length > 0 ? (
              <div className="flex gap-2">
                {imagePreviews.map((image, index) => {
                  const imageUrl = `https://${process.env.NEXT_PUBLIC_AWS_S3_BUCKET_NAME}.s3.${process.env.NEXT_PUBLIC_AWS_REGION}.amazonaws.com/${image}`;

                  return (
                    <img
                      key={index}
                      src={imagesAreEdited ? image : imageUrl}
                      alt={`preview-${index}`}
                      className="w-24 h-24 object-cover rounded-md"
                    />
                  );
                })}
              </div>
            ) : (
              <div>No photos in this product</div>
            )}
          </div>
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
      {error && <p className="text-red-500">{error}</p>}
      {message && <p className="text-green-500">{message}</p>}
    </form>
  );
};

export default ProductForm;
