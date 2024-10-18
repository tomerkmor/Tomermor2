import connectToDB from "@/utils/db"; // Adjust the import path as needed
import bcrypt from "bcrypt";
import User from "@/models/User"; // Import your User model

export async function POST(req, res) {
  await connectToDB(); // Ensure the database is connected
  console.log("trying to access the request..");

  try {
    const { username, email, password } = await req.json(); // Parse JSON body

    // Validate input
    if (!username || !email || !password) {
      return new Response(
        JSON.stringify({ error: "All fields are required" }),
        { status: 400 }
      );
    }

    // Check if username or email already exists
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

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new user
    const newUser = new User({ username, email, password: hashedPassword });
    await newUser.save(); // Save the user to the database

    return new Response(
      JSON.stringify({ message: "User registered successfully!" }),
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
