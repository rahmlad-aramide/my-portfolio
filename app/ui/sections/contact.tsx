'use client'
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { stalinistOne } from "@/app/fonts";
import { socialLinks } from "./hero";
import emailjs, { EmailJSResponseStatus } from '@emailjs/browser';
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Loader from "../components/loader";
import { ArrowRight } from "@/app/assets/svg";

export const Contact = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [loading, setLoading] = useState(false);

  const validateForm = (
    name: FormDataEntryValue | null,
    email: FormDataEntryValue | null,
    message: FormDataEntryValue | null,
  ) => {
    let isValid = true;
  
    // Validate name
    if (!name || typeof name !== 'string' || name.trim().length === 0) {
      toast('A prefered name is required.', {type: 'info'});
      isValid = false;
    }
  
    // Validate email
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || typeof email !== 'string' || !emailPattern.test(email)) {
      toast('A valid email address is required.', {type: 'info'});
      isValid = false;
    }
  
    // Validate message
    if (!message || typeof message !== 'string' || message.trim().length === 0) {
      toast('Message cannot be empty.', {type: 'info'});
      isValid = false;
    }
  
    return isValid;
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const sendEmail = async (e:any) => {
    e.preventDefault();
    const form = formRef.current;

    if (form) {
      const formData = new FormData(form);
      const name = formData.get('name');
      const email = formData.get('email');
      const message = formData.get('message');
      const isValid = validateForm(name, email, message);

      if (!isValid) return; 

      try {
        setLoading(true);
        await emailjs.send(
          'service_m3o2vc7',
          'template_6cbhbfd',
          {
            name,
            email,
            message,
          },
          {
            publicKey: 'TzSNhl2YRrZyJWx5n',
          },
        );
        toast("Message sent successfully", { type: "success" });
        form.reset();
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      } catch (err: any) {
        console.log("Caught error:", err);
        if (err instanceof EmailJSResponseStatus) {
          console.log('EMAILJS FAILED...', err);
          toast("Message sending failed, try later.", { type: "error" });
          return;
        } 
        toast(`${err?.message || 'An error occured. Try again later.'}`, { type: "error" });
        
      }
      finally{
        setLoading(false); 
      }
    }
  };

  useEffect(()=> {
    console.log(`%c
      ✨🎨💻
      `,
      "font-size: 2em;"
      );
      
      console.log(`%cAbdrahman Oladimeji - Crafting digital experiences that spark connection and leave a mark.`, "font-weight: bold; font-size: 1.1em; color: #2196f3;");
      console.log("%cPsst... curious about the inner workings? Open the 'Elements' and 'Console' tabs in your developer tools for a peek behind the scenes! 😉", "color: #00bcd4; font-style: italic;");
      
      setTimeout(() => {
        console.log("%c🚀 Welcome to my portfolio! Feel free to dive into the code and see the magic happen. Let's build something amazing together!", "color: #4caf50; font-weight: bold;");
      }, 2000);
  },[])

  return (
    <>
      <ToastContainer />
      <section className="pattern-after" id="contact">
        <div className="flex flex-col justify-between gap-5 relative">
          <div className="flex flex-col md:flex-row justify-between mb-10 md:mb-20 mt-3 gap-5">
              <h2
                className={`${stalinistOne.className} text-[24px] md:text-4xl md:max-w-[14ch]`}
              >
                Interested in working with me?
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
          <form ref={formRef} className="relative pt-5 pb-14 flex flex-col gap-6 md:gap-12">
              <div className="flex flex-col md:flex-row justify-between gap-6 md:gap-8">
                  <div className="w-full">
                      <input type="text" name="name" placeholder="Your Preferred Name*" className="text-white placeholder:text-white text-sm h-9 p-2.5 bg-transparent w-full border-b border-[#CACACA] focus:border-b-2 outline-none transition duration-200" />
                  </div>
                  <div className="w-full">
                      <input type="text" name="email" placeholder="Your Email Address*" className="text-white placeholder:text-white text-sm h-9 p-2.5 bg-transparent w-full border-b border-[#CACACA] focus:border-b-2 outline-none transition duration-200" />
                  </div>
              </div>
              <div>
                  <textarea name="message" id="message" rows={5} placeholder="Your Message*" className="text-white placeholder:text-white text-sm h-full p-2.5 bg-transparent w-full border-b border-[#CACACA] focus:border-b-2 outline-none transition duration-200"></textarea>
              </div>
              <button type="submit" onClick={sendEmail} disabled={loading} className="text-white bg-primary border border-primary disabled:bg-primary/50 hover:bg-transparent active:bg-primary w-full md:max-w-[342px] min-h-[60px] rounded-[40px] px-6 flex justify-center items-center transition duration-200">{loading ? <Loader /> : <span className="inline-flex gap-2">Leave me a message <ArrowRight /> </span>}</button>
          </form>
        </div>
      </section>
    </>
  );
};
