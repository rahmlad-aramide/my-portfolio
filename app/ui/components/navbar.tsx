'use client'
import { CloseMenu, Icon, JamMenu } from "@/app/assets/svg";
import Link from "next/link";
import { useEffect, useState } from "react";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/#about" },
  { label: "Stacks", href: "/#stacks" },
  { label: "Projects", href: "/#projects" },
  { label: "Contact", href: "/#contact" },
  // { label: "Blog", href: "/blog" },
];

export const Navbar = () => {
    const [isNavOpened, setIsNavOpened] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    useEffect(() => {
      const handleScroll = () => {
        if (window.scrollY > 20) {
          setIsScrolled(true);
        } else {
          setIsScrolled(false);
        }
      };
  
      window.addEventListener('scroll', handleScroll);
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);

  return (
    <header className={`fixed left-0 z-50 w-full transition-all duration-300 ease-in-out py-2 md:py-4 ${isScrolled? "bg-black/70 backdrop-blur-md top-0": "top-6"} ${isNavOpened? "h-full md:h-auto bg-black/70 backdrop-blur-md !top-0": null}`}>
      <nav className="flex justify-between items-center w-full custom-container mx-auto">
        <Link
          href={"/"}
          className="font-bold text-sm md:text-lg uppercase flex items-center gap-1 z-50 ml-6 md:ml-10 lg:ml-20"
        >
          <Icon />
          Dev. Rahmlad
        </Link>
        <ul className={`${isNavOpened? "translate-x-0": "-translate-x-full"} md:translate-x-0 transition duration-200 flex flex-col md:flex-row items-center gap-14 md:gap-10 lg:gap-[60px] fixed md:relative top-0 left-0 pt-28 md:pt-0 pr-6 md:pr-10 lg:pr-20 w-full md:w-auto h-screen md:h-fit`}>
          {navLinks.map((link, idx) => (
            <li key={idx} onClick={()=>setIsNavOpened(!isNavOpened)} className="md:font-semibold text-xl md:text-base opacity-[0.85] hover:opacity-100">
              <Link href={link.href}>{link.label}</Link>
            </li>
          ))}
        </ul>
        <button onClick={()=>setIsNavOpened(!isNavOpened)} className="flex md:hidden hover:scale-90 active:scale-90 transition duration-200 p-2.5 pr-6 z-50">{isNavOpened? <CloseMenu /> :<JamMenu />}</button>
      </nav>
    </header>
  );
};
