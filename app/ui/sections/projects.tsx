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
    (searchParams.get("platform") as "web" | "mobile") || "web";

  const handleFilterChange = (newPlatform: string) => {
    const params = new URLSearchParams(searchParams);
    params.set("platform", newPlatform);
    router.push(`?${params.toString()}`, {scroll: false});
  };

  return (
    <Suspense fallback={<Loading />}>
      <section id="projects" className="pattern-before py-8">
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
