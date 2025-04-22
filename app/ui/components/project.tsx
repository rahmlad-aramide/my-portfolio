import Image, { StaticImageData } from "next/image"
import Link from "next/link"
import React from "react"

export const Project: React.FC<{type: "imageFirst"|"textFirst", projectTitle: string, description: string, pageLink: string, imageLink: string|StaticImageData}> = ({type, projectTitle, description, pageLink, imageLink}) => {
    return (
        <div className={`relative flex flex-col ${type === 'imageFirst' ? "md:flex-row": 'md:flex-row-reverse'} gap-4 md:gap-8 h-full`}>
            <div className={`bg-[#1C1C1C] rounded-[10px] w-full md:w-1/2 h-full p-4 sm:p-7 flex justify-center items-center border border-[#1C1C1C] hover:border-primary group`}>
                <Image src={imageLink} width={434} height={434} alt={`${projectTitle} image on desktop, tablet and mobile`} className="transition duration-200 group-hover:scale-95"  />
            </div>
            <div className="flex flex-col flex-shrink-0 w-full md:w-1/2 items-start justify-end">
                <h4 className="text-base font-semibold text-[#E3E4E6] uppercase">{projectTitle}</h4>
                <p className="text-base md:text-[28px] md:leading-tight text-white opacity-70 mt-3 md:mt-4 mb-4 md:mb-8">{description}</p>
                <Link href={pageLink} className="text-xs md:text-base px-4 py-2 gap-2 uppercase border border-[#E3E4E68C] rounded-full bg-transparent hover:bg-primary transition duration-200">View Work</Link>
            </div>
        </div>
    )
}