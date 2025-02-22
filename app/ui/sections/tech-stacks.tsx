'use client';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Bootstrap, CSS, Expo, Firebase, HTML, JavaScript, JQuery, NextJS, React, ReactNative, SASS, Shadcn, Tailwind, TypeScript, Vue } from "@/app/assets/svg"
import { stalinistOne } from "@/app/fonts";
import { useEffect, useState } from "react";

export const TechStacks = () => {
    const stacks = [
        {
            name: "NextJS",
            icon: <NextJS />,
        },
        {
            name: "ReactJS",
            icon: <React />,
        },
        // {
        //     name: "React Native",
        //     icon: <ReactNative />
        // },
        // {
        //     name: "Expo",
        //     icon: <Expo />,
        // },
        {
            name: "TypeScript",
            icon: <TypeScript />,
        },
        {
            name: "JavaScript",
            icon: <JavaScript />,
        },
        {
            name: "TailwindCSS",
            icon: <Tailwind />,
        },
        {
            name: "Shadcn/ui",
            icon: <Shadcn />,
        },
        {
            name: "SASS",
            icon: <SASS />
        },
        {
            name: "HTML",
            icon: <HTML />,
        }, 
        {
            name: "CSS",
            icon: <CSS />,
        },
        {
            name: "Bootstrap",
            icon: <Bootstrap />,
        },
        {
            name: "Firebase",
            icon: <Firebase />,
        },
        {
            name: "jQuery",
            icon: <JQuery />,
        },
        {
            name: "Vue",
            icon: <Vue />
        }
    ];

    const [itemsToShow, setItemsToShow] = useState(0);
    const [seeAll, setSeeAll] = useState(false);

    useEffect(() => {
        const handleResize = () => {
          if (seeAll) {
            setItemsToShow(stacks.length);
          } else {
            if (window.innerWidth > 768) {
              setItemsToShow(7);
            } else {
              setItemsToShow(8);
            }
          }
        };
    
        handleResize();
    
        window.addEventListener('resize', handleResize);
    
        return () => {
          window.removeEventListener('resize', handleResize);
        };
      }, [seeAll, stacks.length]);

    return (
        <section id="stacks" className="grid grid-cols-3 md:grid-cols-4 gap-6 pt-[30px] md:pt-[50px] pb-[52px] md:pb-[106px]">
            {
                stacks.slice(0, itemsToShow).map((stack, idx)=> (
                    <div key={idx} className="min-w-20 sm:min-w-[100px] md:min-w-[150px] h-fit min-h-20 sm:min-h-[100px] md:min-h-[150px] rounded-[5px] bg-[#0F0F0F] p-5 gap-4 flex flex-col justify-center items-center border border-transparent hover:border-primary transition duration-200 group">
                        <div id="stack-icon" className="w-14 sm:w-20 md:w-24 h-14 sm:h-20 md:h-24 aspect-square group-hover:scale-110 transition duration-200">
                            {stack.icon}
                        </div>
                        <p className="text-xs sm:text-sm md:text-lg whitespace-nowrap">{stack.name}</p>
                    </div>
                ))
            }
            <button onClick={()=> setSeeAll(!seeAll)} className="min-w-20 sm:min-w-[100px] md:min-w-[150px] h-full min-h-20 sm:min-h-[100px] md:min-h-[150px] rounded-[5px] bg-[#0F0F0F] p-5 gap-5 flex flex-col justify-center items-center border border-transparent hover:border-primary transition duration-200 group">
                
                    <div id="stack-icon" className={`${stalinistOne.className} stalinist-outline text-2xl sm:text-3xl md:text-4xl h-14 sm:h-20 md:h-24 aspect-square group-hover:scale-125 transition duration-200`}>
                        {seeAll? <span>&#8613;</span>:<span>+{stacks.length - itemsToShow}</span>}
                    </div>
                
                <p className="text-xs sm:text-sm md:text-lg whitespace-nowrap">{seeAll ? "See Less":"See Others"}</p>
            </button>
        </section>
    )
}