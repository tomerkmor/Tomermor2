import connectToDB from "@/lib/db"; // Adjust the import path as needed
import bcrypt from "bcrypt";
import User from "@/models/User"; // Import your User model

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

    // Check if the item already exists
    const existingUser = await User.findOne({ $or: [{ username }, { email }] });
    if (existingUser) {
      if (existingUser.username === username) {
        return new Response(
          JSON.stringify({ error: "Username already exists" }),
          { status: 409 }
        );
      }
      if (existingUser.email === email) {
        return new Response(JSON.stringify({ error: "Email already exists" }), {
          status: 409,
        });
      }
    }

    // Create a new user
    const newUser = new User({ username, email, password: hashedPassword });
    await newUser.save(); // Save the user to the database

    console.log('new account created!')
    return new Response(
      JSON.stringify({ message: "User registered successfully! redirrecting..." }),
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