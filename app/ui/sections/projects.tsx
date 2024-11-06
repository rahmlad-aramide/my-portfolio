'use client';
import { useState } from "react";
import { stalinistOne } from "@/app/fonts";
import { Project } from "@/app/ui/components/project";
import { projectsData } from "@/app/data";

export const Projects = () => {
    const [projectsType, setProjectsType] = useState<"Web"|"Mobile">("Web");

     return (
        <section id="projects" className="pattern-before">
            <h2 className={`${stalinistOne.className} text-[22px] md:text-4xl mb-8 md:mb-9 max-w-[12ch]`}>
                Few Selected Works
            </h2>
            <div className="flex justify-center items-center gap-8 mb-14 md:mb-20 relative">
                <button onClick={()=> setProjectsType("Web")} className={`${stalinistOne.className} text-lg md:text-2xl ${projectsType === "Web" ?"text-white": "text-[#FFFFFF80]"} transition duratin-200`}>Web</button>
                <div className="w-0.5 h-8 bg-[#C4C4C4]"></div>
                <button onClick={()=> setProjectsType("Mobile")} className={`${stalinistOne.className} text-lg md:text-2xl ${projectsType === "Mobile" ?"text-white": "text-[#FFFFFF80]"} transition duratin-200`}>Mobile App</button>
            </div>
            <div className="flex flex-col gap-10 md:gap-20 mb-[77px] md:mb-20">
                {projectsData.map((project, idx)=> (
                    <Project key={idx} projectTitle={project.name} description={project.description} imageLink={project.image} pageLink={project.pageUrl} type={idx % 2 === 0? 'imageFirst': 'textFirst'} />
                ))}
            </div>
        </section>
    )
}