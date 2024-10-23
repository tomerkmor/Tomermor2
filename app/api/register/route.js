import clientPromise from "@/lib/db"; // Import the MongoDB client connection promise
import bcrypt from "bcrypt";

export async function POST(req, res) {
  try {
    const client = await clientPromise; // Get MongoDB client
    const db = client.db('websiteData'); // Access the specific database

    console.log("trying to access the request..");

    const { username, email, password } = await req.json(); // Parse JSON body

    // Validate input
    if (!username || !email || !password) {
      return new Response(
        JSON.stringify({ error: "All fields are required" }),
        { status: 400 }
      );
    }

    // Check if username or email already exists
    const existingUser = await db.collection('users').findOne({
      $or: [{ username }, { email }]
    });

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

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new user object
    const newUser = { username, email, password: hashedPassword };

    // Insert the new user into the 'users' collection
    await db.collection('users').insertOne(newUser);

    console.log('new account created!');

    return new Response(
      JSON.stringify({ message: "User registered successfully! Redirecting..." }),
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
