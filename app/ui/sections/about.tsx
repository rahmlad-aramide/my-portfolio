import { jakarta, stalinistOne } from "@/app/fonts";

export const About = () => {
  return (
    <section id="about" className="grid grid-cols-10 pattern-after h-full pt-[30px] md:pt-[50px] pb-[52px] md:pb-[106px]">
      <div className="w-full h-full col-span-10 md:col-span-6">
        <h2 className={`${stalinistOne.className} text-[22px] md:text-4xl mb-3`}>
        Creating experiences that spark connection and leave a mark.
        </h2>
        <p className="text-xs sm:text-base !leading-[18px] md:!leading-7 mb-4 md:mb-3">
          As a growing individual, I&apos;ve had the privilege of working alongside inspiring engineering leaders who have continually elevated my standards for frontend excellence. 
          Now, I am on a mission to translating ideas into impactful digital experiences that drive engagement and business growth. Committed to helping brands, startups and organizations thrive, 
          I build interfaces that not only intuitive but also resonate deeply with users and leave a lasting impression.
        </p>
      </div>
      <div className="w-full h-full col-span-10 md:col-span-4 flex flex-row md:flex-col flex-grow justify-center items-end">
        <div className="flex flex-grow justify-center items-center">
            <hgroup className="flex flex-col flex-grow md:justify-center md:text-right">
                <h3 className={`${jakarta.className} outfit-outline text-3xl md:text-6xl flex items-start md:justify-center`}>20<sup className="text-xl">+</sup></h3>
                <h3 className="text-xs md:text-lg font-medium md:font-semibold">Live Projects</h3>
            </hgroup>
        </div>
        <hgroup className="flex flex-col flex-grow md:justify-center md:text-right">
            <h3 className={`${jakarta.className} outfit-outline text-3xl md:text-6xl flex items-start md:justify-center`}>15<sup className="text-xl">+</sup></h3>
            <h3 className="text-xs md:text-lg font-medium md:font-semibold">Certifications</h3>
        </hgroup>
      </div>
      {/* <div className="mt-5">
        <button className="uppercase w-full md:w-fit whitespace-nowrap">Download CV</button>
      </div> */}
    </section>
  );
};
