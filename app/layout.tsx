import type { Metadata } from "next";
import "./globals.css";
import { workSans } from "./fonts";
import { Navbar } from "./ui/components/navbar";

export const metadata: Metadata = {
  title: "Abdrahman Oladimeji - Frontend Engineer Portfolio Website.",
  description: "Abdrahman Oladimeji - A Professional Frontend Developer that helps brands and businesses grow and thrive by creating visually appealing and user-friendly web and mobile applications.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${workSans.className} bg-black text-white custom-container transition duration-200 antialiased`}
      >
        <Navbar />
        <main className="px-6 md:px-10 lg:px-20">
          {children}
        </main>
      </body>
    </html>
  );
}
