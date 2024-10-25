import connectToDB from "@/lib/db"; // Adjust the import path as needed
import Product from "@/models/Product"; // Import your User model

export async function POST(req, res) {
  await connectToDB();
  console.log("trying to access the request..");

  try {
    const { productName, productDescription, productPrice } = await req.json(); // Parse JSON body

    // Validate input
    if (!productName || !productDescription || !productPrice) {
      return new Response(
        JSON.stringify({ error: "All fields are required" }),
        { status: 400 }
      );
    }

    // Create a new Product
    const newProduct = new Product({
      title: productName,
      description: productDescription,
      price: productPrice,
    });
    await newProduct.save();

    console.log("new Product added!");
    return new Response(
      JSON.stringify({
        message: "Product registered successfully! redirrecting...",
      }),
      { status: 201 }
    );
  } catch (error) {
    console.error(error);
    return new Response(
      JSON.stringify({ error: "An error occurred while registering the user" }),
      { status: 500 }
    );
  }
}

// Handle GET request to fetch all products
export async function GET(req) {
  await connectToDB();

  const { searchParams } = new URL(req.url);
  const id = searchParams.get("id");

  try {
    if (id) {
      // Fetch specific product by ID
      const product = await Product.findById(id);
      if (!product) {
        return new Response(JSON.stringify({ error: "Product not found" }), {
          status: 404,
        });
      }
      return new Response(JSON.stringify(product), { status: 200 });
    } else {
      // Fetch all products
      const products = await Product.find();
      return new Response(JSON.stringify(products), { status: 200 });
    }
  } catch (error) {
    console.error("Error fetching products:", error);
    return new Response(
      JSON.stringify({ error: "An error occurred while fetching products" }),
      { status: 500 }
    );
  }
}

export async function PUT(req, res) {
  await connectToDB();
  console.log("trying to access the PUT request..");

  try {
    const { productName, productDescription, productPrice, _id } =
      await req.json(); // Parse JSON body

    // Validate input
    if (!productName || !productDescription || !productPrice || !_id) {
      return new Response(
        JSON.stringify({
          error: "All fields are required, including product ID",
        }),
        { status: 400 }
      );
    }

    // Find and update the existing product
    const existingProduct = await Product.findById(_id);
    if (!existingProduct) {
      return new Response(JSON.stringify({ error: "Product not found" }), {
        status: 404,
      });
    }

    // Update fields
    existingProduct.title = productName;
    existingProduct.description = productDescription;
    existingProduct.price = productPrice;

    // Save the updated product
    await existingProduct.save();

    console.log("Product updated successfully!");
    return new Response(
      JSON.stringify({ message: "Product updated successfully!" }),
      { status: 200 }
    );
  } catch (error) {
    console.error(error);
    return new Response(
      JSON.stringify({ error: "An error occurred while updating the product" }),
      { status: 500 }
    );
  }
}

export async function DELETE(req) {
  const { searchParams } = new URL(req.url);
  const productId = searchParams.get("id");

  if (!productId) {
    return new Response(JSON.stringify({ error: "Product ID is required" }), {
      status: 400,
      headers: { "Content-Type": "application/json" },
    });
  }

  try {
    // Perform the deletion logic here, such as deleting the product by ID in your database
    console.log("Attempting to delete product with ID:", productId);
    await Product.findByIdAndDelete(productId);
    console.log("Attempting to delete product with ID:", productId);
    return new Response(
      JSON.stringify({ message: "Product deleted successfully" }),
      {
        status: 200,
        headers: { "Content-Type": "application/json" },
      }
    );
  } catch (error) {
    return new Response(
      JSON.stringify({ error: "An error occurred while deleting the product" }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
}
