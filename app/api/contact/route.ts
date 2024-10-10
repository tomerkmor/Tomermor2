import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  const { name, email, message } = await req.json();

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.GMAIL_USER, // Use your Gmail address
      pass: process.env.GMAIL_APP_PASSWORD, // Use your app password here
    },
  });

  console.log("Using user:", process.env.GMAIL_USER);
  console.log("Using app password:", process.env.GMAIL_APP_PASSWORD);

  try {
    await transporter.sendMail({
      from: process.env.GMAIL_USER, // Your email (sender)
      to: process.env.RECIPIENT_EMAIL, // Your email where you receive the form submission
      subject: `New message from ${name}`, // Subject line
      text: message, // Plain text body
      html: `<p><strong>Name:</strong> ${name}</p><p><strong>Email:</strong> ${email}</p><p><strong>Message:</strong> ${message}</p>`, // HTML body
      replyTo: email, // This allows you to reply to the user's email directly from your inbox
    });

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { success: false, message: "Failed to send message." },
      { status: 500 }
    );
  }
}
