import { stalinistOne } from "@/app/fonts";
import Image from "next/image";
import hero from "@/app/assets/images/hero-new.webp";
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
    <section
      id="home"
      className="flex flex-col-reverse md:flex-row justify-between pt-24 py-10 md:py-[100px] pattern-before"
    >
      <div className="flex flex-col md:flex-col md:basis-[60%] md:max-w-[60%] md:overflow-visible relative">
        <h1 className="order-2 md:order-1 md:max-w-[45ch] lg:max-w-[55ch] md:-mr-[162px] md:ml-auto mt-5 mb-4 md:mt-12 lg:mt-24 md:mb-20 xl:mb-[147px] font-medium z-20 relative">
          Abdrahman Oladimeji - A Fullstack Web and Cross-Platform Mobile App
          Developer with a foundation in high-performance Frontend Engineering.
          Specializing in transforming complex ideas into pixel-perfect,
          user-friendly interfaces that captivate users across web and mobile
          ecosystems.
        </h1>
        <div className="order-1 md:order-2 max-w-fit">
          <hgroup
            className={`${stalinistOne.className} uppercase md:-mr-[162px] md:ml-auto clamped-h2 z-20 relative`}
          >
            <h2>Software</h2>
            <h2 className={`stalinist-outline`}>Engineer</h2>
          </hgroup>
        </div>
        <div className="order-3 flex gap-4">
          {socialLinks.map((link, idx) => (
            <Link
              aria-label={`My ${link.label} profile`}
              href={link.href}
              key={idx}
              target="_blank"
              className="h-10 md:h-12 w-10 md:w-12 bg-dark border border-dark hover:border-primary transition duration-200 flex justify-center items-center rounded-full"
            >
              {link.icon}
            </Link>
          ))}
        </div>
      </div>
      <div className="md:basis-[60%] md:max-w-[60%] h-auto mb-6 md:mb-0 relative bg-black/50 bg-blend-multiply">
        <Image
          src={hero}
          alt="Abdrahman Oladimeji holding a microphone at a session"
          className="rounded-[5px] aspect-[3/3.6] object-cover z-20"
          placeholder="blur"
          // blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEAYABgAAD/4QCCRXhpZgAATU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAABJADAAIAAAAUAAAAUJAEAAIAAAAUAAAAZJKRAAIAAAADMDAAAJKSAAIAAAADMDAAAAAAAAAyMDI1OjA0OjIyIDE0OjMwOjE5ADIwMjU6MDQ6MjIgMTQ6MzA6MTkAAAD/4QGcaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLwA8P3hwYWNrZXQgYmVnaW49J++7vycgaWQ9J1c1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCc/Pg0KPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyI+PHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj48cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0idXVpZDpmYWY1YmRkNS1iYTNkLTExZGEtYWQzMS1kMzNkNzUxODJmMWIiIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyI+PHhtcDpDcmVhdGVEYXRlPjIwMjUtMDQtMjJUMTQ6MzA6MTk8L3htcDpDcmVhdGVEYXRlPjwvcmRmOkRlc2NyaXB0aW9uPjwvcmRmOlJERj48L3g6eG1wbWV0YT4NCjw/eHBhY2tldCBlbmQ9J3cnPz7/2wBDAFA3PEY8MlBGQUZaVVBfeMiCeG5uePWvuZHI////////////////////////////////////////////////////2wBDAVVaWnhpeOuCguv/////////////////////////////////////////////////////////////////////////wAARCAAUABQDASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwBgG5gDyOpp2PQfhTUGWIPH9afGwUkt346UraALgkD6UVOHjA6iiiwFQHBBp0nf/eoopgRZNFFFAH//2Q=="
        />
      </div>
    </section>
  );
};
