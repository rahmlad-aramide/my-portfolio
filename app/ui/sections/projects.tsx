"use client";
import { useRouter, useSearchParams } from "next/navigation";
import { Suspense } from "react";

import { stalinistOne } from "@/app/fonts";
import { Project } from "@/app/ui/components/project";
import { projectsData } from "@/app/data";
import Loading from "@/app/loading";

import Organized from "./organized";

export const Projects = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const platformFilter =
    (searchParams.get("platform") as "web" | "mobile") || "mobile";

  const handleFilterChange = (newPlatform: string) => {
    const params = new URLSearchParams(searchParams);
    params.set("platform", newPlatform);
    router.push(`?${params.toString()}`, {scroll: false});
  };

  return (
    <Suspense fallback={<Loading />}>
      <section id="projects" className="pattern-before py-8">
        <div className="flex gap-4 mb-6 md:mb-10 mx-auto w-fit relative">
          <button
            onClick={() => handleFilterChange("web")}
            className={`${stalinistOne.className} text-sm sm:text-lg md:text-2xl ${
              platformFilter === "web" ? "text-white" : "text-[#FFFFFF80]"
            } transition duration-200`}
          >
            Web Apps
          </button>
          <div className="w-0.5 h-4 sm:h-6 md:h-8 bg-[#C4C4C4]"> </div>
          <button
            onClick={() => handleFilterChange("mobile")}
            className={`${stalinistOne.className} text-sm sm:text-lg md:text-2xl ${
              platformFilter === "mobile" ? "text-white" : "text-[#FFFFFF80]"
            } transition duration-200`}
          >
            Mobile Apps
          </button>
        </div>
        {platformFilter === "mobile" ? (
          <>
            <div className="flex flex-col gap-10 md:gap-20 mb-5 md:mb-20 relative">
              <div className="flex flex-col gap-10 md:gap-20 relative">
                {projectsData
                  .filter((p) => p.platform === "mobile")
                  .map((project, idx) => (
                    <Project
                      key={idx}
                      projectTitle={project.name}
                      description={project.description}
                      imageLink={project.framedImage}
                      pageLink={project.slug}
                      projectLink={project.projectUrl}
                      demoVideo={project.demoVideo}
                      isFeatured={project.isFeatured}
                      type={idx % 2 === 0 ? "imageFirst" : "textFirst"}
                    />
                  ))}
              </div>
            </div>
          </>
        ) : (
          <>
            <div className="flex flex-col gap-10 md:gap-20 mb-5 md:mb-20 relative">
              <Organized />
            </div>
          </>
        )}
      </section>
    </Suspense>
  );
};
