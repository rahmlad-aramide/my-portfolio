import type { Metadata } from "next";
import "./globals.css";
import { workSans } from "./fonts";
import { Navbar } from "./ui/components/navbar";
import { Contact } from "./ui/sections/contact";
import { Footer } from "./ui/components/footer";
import { SectionDivider } from "./ui/components/section-divider";

export const metadata: Metadata = {
  title: "Abdrahman Oladimeji - Frontend Software Developer Portfolio Website.",
  description: "Abdrahman Oladimeji - An Experienced Frontend Software Developer that helps brands and businesses grow and thrive by creating visually appealing and user-friendly web and mobile applications.",
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
          <>
            {children}
          </>
          <SectionDivider heading="Contact" />
          <Contact />
        </main>
        <Footer />
      </body>
    </html>
  );
}
