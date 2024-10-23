// app/api/auth/[...nextauth]/route.js

import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { MongoDBAdapter } from "@auth/mongodb-adapter"
import client from "@/lib/db"

const authOptions = {
  adapter: MongoDBAdapter(client),
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    }),
  ],
  pages: {
    error: '/auth/error', // Custom error page
  },
  secret: process.env.NEXTAUTH_SECRET,

  
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST }; // Export GET and POST handlers
