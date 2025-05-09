import { projectsData } from "@/app/data";
import React, { useState } from "react";
import { Project } from "../components/project";

const Organized = () => {
  const [selectedCategory, setSelectedCategory] = useState(
    projectsData[1].category
  );
  const categories = Array.from(
    new Set(projectsData.map((project) => project.category))
  );

  return (
    <section>
      <div
        id="organized-projects"
        className="relative w-full flex flex-col items-center"
      >
        {/* Full section layout for larger screens */}
        <div className="w-full flex flex-col lg:flex-row">
          <div className="w-full flex justify-center lg:justify-start flex-row lg:flex-col flex-wrap lg:w-1/4 gap-2 lg:gap-0 lg:space-y-2 mb-2 md:mb-10 lg:mb-0">
            {categories.map((category, idx) => (
              <button
                key={idx}
                type="button"
                className={`capitalize flex flex-shrink h-fit md:h-[48px] w-fit lg:w-full lg:mx-auto rounded-full border lg:border-none lg:rounded-none items-center font-medium sm:font-semibold text-sm sm:text-base px-3 sm:px-6 md:px-10 py-2 sm:py-[14px] transition duration-200 whitespace-nowrap ${
                  selectedCategory === category
                    ? "bg-[rgba(255,255,255,0.10)] border-primary"
                    : "bg-transparent hover:bg-[rgba(255,255,255,0.10)] border-[#545666]"
                }`}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>
          <div className="relative hidden lg:block">
            <div className="absolute w-[2.286px] h-full bg-[#2C3043] rounded-[2.286px] top-0"></div>
            {categories.map((category) => (
              <div
                key={category}
                className={`transition duration-200 top-0 absolute w-[2.286px] h-12 rounded-[2.286px] ${
                  selectedCategory === category
                    ? "bg-primary"
                    : "bg-transparent"
                } 
                `}
                style={{
                  transform: `translateY(${
                    categories.findIndex((c) => c === selectedCategory) * 56
                  }px)`,
                }}
              ></div>
            ))}
          </div>
          <div className="mt-4 lg:mt-0 w-full lg:w-[calc(75%_-_2.286px)] px-0 md:pl-11 grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
            {projectsData
              .filter((project) => project.category === selectedCategory)
              .map((proj, idx) => (
                <Project
                  key={idx}
                  type={"organized"}
                  imageLink={proj.framedImage}
                  projectTitle={proj.name}
                  pageLink={proj.slug}
                  projectLink={proj.projectUrl}
                  description={proj.description}
                />
              ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Organized;
