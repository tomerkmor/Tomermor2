import connectToDB from '@/utils/db'; // Adjust path to your DB connection
import bcrypt from 'bcrypt';
import User from '@/models/User'; // Your User model
import jwt from 'jsonwebtoken'; // Use JWT for token generation

export async function POST(req) {
  await connectToDB();

  try {
    const { username, password } = await req.json();

    console.log(username, password)
    // Check if the user exists
    const user = await User.findOne({ username });
    if (!user) {
      return new Response(JSON.stringify({ error: 'User not found' }), { status: 404 });
    }

    // Compare the password with the stored hash
    const isPasswordCorrect = await bcrypt.compare(password, user.password);
    if (!isPasswordCorrect) {
      return new Response(JSON.stringify({ error: 'Invalid credentials' }), { status: 401 });
    }

    // Generate a JWT token for authentication
    const token = jwt.sign({ userId: user._id }, 'your_jwt_secret', { expiresIn: '1h' });

    return new Response(JSON.stringify({ message: 'Login successful', token }), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ error: 'An error occurred' }), { status: 500 });
  }
}
