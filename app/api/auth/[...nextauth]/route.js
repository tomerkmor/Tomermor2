// app/api/auth/[...nextauth]/route.js

import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    }),
  ],
  pages: {
    error: '/auth/error', // Custom error page
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST }; // Export GET and POST handlers
