import localFont from "next/font/local";
import "./globals.css";

import AlignmentContainer from "../components/UI/AlignmentContainer";
import { AuthProvider } from "../context/AuthContext";

const geistSans = localFont({
  src: "../fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "../fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charSet={"UTF-8"} />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>React App</title>
        <link
          href="https://fonts.googleapis.com/css2?family=Kanit:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <AuthProvider>
          <div id="modal"></div>
          <AlignmentContainer>{children}</AlignmentContainer>
        </AuthProvider>
      </body>
    </html>
  );
}
