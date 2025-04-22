import { stalinistOne } from "@/app/fonts";
import { socialLinks } from "./hero";
import Link from "next/link";

export const Contact = () => {
  return (
    <section className="pattern-after">
      <div className="flex flex-col justify-between gap-5 relative">
        <div className="flex flex-col md:flex-row justify-between mb-10 md:mb-20 mt-3 gap-5">
            <h2
            className={`${stalinistOne.className} text-[24px] md:text-4xl md:max-w-[14ch]`}
            >
            Ready to Work With Me on a Project?
            </h2>
            <div className="flex gap-4 relative">
            {socialLinks.slice(1).map((link, idx) => (
                <Link
                aria-label={`My ${link.label} profile`}
                href={link.href}
                key={idx}
                target="_blank"
                className="h-12 w-12 bg-transparent border border-[#B7B7B7] hover:border-primary transition duration-200 flex justify-center items-center rounded-full"
                >
                {link.icon}
                </Link>
            ))}
            </div>
        </div>
        <div className="relative pt-5 pb-14 flex flex-col gap-6 md:gap-12">
            <div className="flex flex-col md:flex-row justify-between gap-6 md:gap-8">
                <div className="w-full">
                    <input type="text" name="name" placeholder="Your Preferred Name" className="text-white placeholder:text-white text-sm h-9 p-2.5 bg-transparent w-full border-b border-[#CACACA] focus:border-b-2 outline-none transition duration-200" />
                </div>
                <div className="w-full">
                    <input type="text" name="email" placeholder="Your Email Address" className="text-white placeholder:text-white text-sm h-9 p-2.5 bg-transparent w-full border-b border-[#CACACA] focus:border-b-2 outline-none transition duration-200" />
                </div>
            </div>
            <div>
                <textarea name="message" id="message" rows={5} placeholder="Your Message" className="text-white placeholder:text-white text-sm h-full p-2.5 bg-transparent w-full border-b border-[#CACACA] focus:border-b-2 outline-none transition duration-200"></textarea>
            </div>
            <button className="text-white bg-primary w-full max-w-[342px] min-h-[60px] rounded-[40px] px-6 flex justify-center items-center transition duration-200">Leave me a message</button>
        </div>
      </div>
    </section>
  );
};
