import connectToDB from '@/utils/db';
import User from '@/models/User';
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  await connectToDB();

  const { fullname, email, password } = await req.json();

  const newUser = new User({ fullname, email, password });
  await newUser.save();

  return NextResponse.json({ message: 'User created successfully' });
}

export async function GET() {
  await connectToDB();

  const users = await User.find();
  return NextResponse.json(users);
}
