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
export async function GET(req, res) {
  try {
    await connectToDB();
    const products = await Product.find();
    return new Response(JSON.stringify(products), { status: 200 });
  } catch (error) {
    console.error(error);
    return new Response(
      JSON.stringify({ error: "An error occurred while fetching products" }),
      { status: 500 }
    );
  }
}
