import connectToDB from "@/lib/db";
import bcrypt from "bcrypt";
import User from "@/models/User";
import jwt from "jsonwebtoken"; // Use JWT for token generation

export async function POST(req) {
  await connectToDB();

  try {
    const { username, password } = await req.json();

    console.log(username, password);
    // Check if the user exists
    const user = await User.findOne({ username });
    if (!user) {
      return new Response(JSON.stringify({ error: "User not found" }), {
        status: 404,
      });
    }

    // Compare the password with the stored hash
    const isPasswordCorrect = await bcrypt.compare(password, user.password);
    if (!isPasswordCorrect) {
      return new Response(JSON.stringify({ error: "Invalid credentials" }), {
        status: 401,
      });
    }

    // Generate a JWT token for authentication
    if (!process.env.JWT_SECRET) {
      throw new Error("Missing JWT_SECRET environment variable");
    }

    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });

    return new Response(
      JSON.stringify({ message: "Login successful", token, username: user.username, email: user.email }),
      { status: 200 }
    );
  } catch (error) {
    console.error("Login Error:", error); // Add this for better error debugging
    return new Response(JSON.stringify({ error: "An error occurred" }), {
      status: 500,
    });
  }
}
