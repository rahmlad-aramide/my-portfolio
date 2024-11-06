import { stalinistOne } from "@/app/fonts"
import { socialLinks } from "./hero"
import Link from "next/link"

export const Contact = () => {
    return (
        <section className="pattern-after">
            <div className="flex flex-col md:flex-row justify-between gap-5">

         <h2 className={`${stalinistOne.className} text-[24px] md:text-4xl max-w-[14ch]`}>
          Ready to Work With Me on a Project?
         </h2>
         <div className="flex gap-4 relative">
            {socialLinks.slice(1).map((link, idx) =>(
                <Link aria-label={`My ${link.label} profile`} href={link.href} key={idx} target="_blank" className="h-12 w-12 bg-transparent border border-[#B7B7B7] hover:border-primary transition duration-200 flex justify-center items-center rounded-full">
                    {link.icon}
                </Link>
            ))}
        </div>
            </div>
        </section>
    )
}