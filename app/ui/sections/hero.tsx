import { stalinistOne } from "@/app/fonts";
import Image from "next/image";
import hero from "@/app/assets/images/hero.webp";
import Link from "next/link";
import { FacebookIcon, GithubIcon, LinkedInIcon, XIcon } from "@/app/assets/svg";

export const socialLinks = [
    {label: "Github", href: "https://github.com/rahmlad-aramide", icon: <GithubIcon />},
  { label: "LinkedIn", href: "https://www.linkedin.com/in/rahmlad", icon: <LinkedInIcon />},
  {label: "X (formerly Twitter)", href: "https://x.com/Dev_Rahmlad", icon: <XIcon />},
  {label: "Facebook", href: "https://web.facebook.com/abdrahman.oladimeji.aramide", icon: <FacebookIcon />}
]

export const Hero = () => {

  return (
    <section id="home" className="flex flex-col-reverse md:flex-row justify-between py-10 md:py-[100px] pattern-before">
      <div className="flex flex-col md:flex-col md:basis-[60%] md:max-w-[60%] md:overflow-visible">
        <h1 className="order-2 md:order-1 md:max-w-[45ch] lg:max-w-[55ch] md:-mr-[162px] md:ml-auto mt-5 mb-4 md:mt-12 lg:mt-24 md:mb-20 xl:mb-[147px] font-medium z-20 relative">
          Abdrahman Oladimeji - A Professional Frontend Developer that helps
          brands and businesses thrive and grow by creating visually appealing
          and user-friendly web and mobile applications.
        </h1>
        <div className="order-1 md:order-2 max-w-fit">
            <hgroup
            className={`${stalinistOne.className} uppercase md:-mr-[162px] md:ml-auto clamped-h2 z-20 relative`}
            >
            <h2>Frontend</h2>
            <h2 className={`stalinist-outline`}>Engineer</h2>
            </hgroup>
        </div>
        <div className="order-3 flex gap-4">
            {socialLinks.map((link, idx) =>(
                <Link aria-label={`My ${link.label} profile`} href={link.href} key={idx} target="_blank" className="h-10 md:h-12 w-10 md:w-12 bg-dark border border-dark hover:border-primary transition duration-200 flex justify-center items-center rounded-full">
                    {link.icon}
                </Link>
            ))}
        </div>
      </div>
      <div className="md:basis-[60%] md:max-w-[60%] h-auto mb-6 md:mb-0">
        <Image
          src={hero}
          alt="Abdrahman Oladimeji holding a microphone at a session"
          className="rounded-[5px]"
        />
      </div>
    </section>
  );
};
