import type { Metadata } from "next";

import { Footer } from "./ui/components/footer";
import { Navbar } from "./ui/components/navbar";
import { SectionDivider } from "./ui/components/section-divider";
import { Contact } from "./ui/sections/contact";
import { workSans } from "./fonts";

import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://dev.rahmlad.com"),
  title: {
    default: "Abdrahman Oladimeji (Rahmlad) | Software Engineer",
    template: "%s | Rahmlad",
  },
  description: `A Fullstack Web and Cross-Platform Mobile App
          Developer with a foundation in high-performance Frontend Engineering.
          Specializing in transforming complex ideas into pixel-perfect,
          user-friendly interfaces that captivate users across web and mobile
          ecosystems & Founder of Rahmlad Solutions.`,
  openGraph: {
    title: "Abdrahman Oladimeji (Rahmlad)",
    description: "Software Engineer & Founder of Rahmlad Solutions.",
    url: "https://dev.rahmlad.com",
    siteName: "Rahmlad Portfolio",
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
  twitter: {
    card: "summary_large_image",
    title: "Abdrahman Oladimeji (Rahmlad)",
    creator: "@Dev_Rahmlad",
  },
  keywords: [
    "Abdrahman Oladimeji",
    "Rahmlad",
    "Portfolio",
    "Developer",
    "Fullstack Developer",
    "Web Developer",
    "Mobile App Developer",
    "Frontend Engineer",
    "Backend Engineer",
    "Rahmlad Solutions",
    "Software Engineer",
  ],
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
          <>{children}</>
          <SectionDivider heading="Contact" />
          <Contact />
        </main>
        <Footer />
      </body>
    </html>
  );
}
