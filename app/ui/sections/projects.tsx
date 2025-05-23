"use client";
import { useState } from "react";
import { stalinistOne } from "@/app/fonts";
import { Project } from "@/app/ui/components/project";
import { projectsData } from "@/app/data";
import Organized from "./organized";

export const Projects = () => {
  const [viewType, setViewType] = useState<"Featured" | "Organized">(
    "Featured"
  );
  const [showArchived, setShowArchived] = useState(false);

  return (
    <section id="projects" className="pattern-before py-8">
      <div className="flex justify-center items-center gap-2 sm:gap-4 md:gap-8 mb-6 sm:mb-8 md:mb-10 relative">
        <button
          onClick={() => setViewType("Featured")}
          className={`${stalinistOne.className} text-sm sm:text-lg md:text-2xl ${
            viewType === "Featured" ? "text-white" : "text-[#FFFFFF80]"
          } transition duration-200`}
        >
          Featured
        </button>
        <div className="w-0.5 h-4 sm:h-6 md:h-8 bg-[#C4C4C4]">{" "}</div>
        <button
          onClick={() => setViewType("Organized")}
          className={`${stalinistOne.className} text-sm sm:text-lg md:text-2xl ${
            viewType === "Organized" ? "text-white" : "text-[#FFFFFF80]"
          } transition duration-200`}
        >
          Organized
        </button>
      </div>
      <div className="flex flex-col gap-10 md:gap-20 mb-5 md:mb-20 relative">
        {viewType === "Featured" ? (
          <div className="flex flex-col gap-10 md:gap-20 relative">
            {projectsData.filter(p=>p.isFeatured).map((project, idx) => (
              <Project
                key={idx}
                projectTitle={project.name}
                description={project.description}
                imageLink={project.framedImage}
                pageLink={project.slug}
                projectLink={project.projectUrl}
                type={idx % 2 === 0 ? "imageFirst" : "textFirst"}
              />
            ))}
            <div className="flex flex-col gap-10 md:gap-20 relative">
              <button
                onClick={() => setShowArchived(!showArchived)}
                className={`${stalinistOne.className} text-sm sm:text-lg md:text-2xl text-white hover:text-primary transition duration-200 underline underline-offset-3 hover:decoration-primary`}
              >
                {!showArchived? "Show": "Hide"} Archived Projects
              </button>
              {showArchived && projectsData.filter(p=>p.isArchived).map((project, idx) => (
              <Project
                key={idx}
                projectTitle={project.name}
                description={project.description}
                imageLink={project.framedImage}
                pageLink={project.slug}
                projectLink={project.projectUrl}
                type={idx % 2 === 0 ? "imageFirst" : "textFirst"}
              />
            ))}
            </div>
          </div>
        ) : (
          <Organized />
        )}
      </div>
    </section>
  );
};
