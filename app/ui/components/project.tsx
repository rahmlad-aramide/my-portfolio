import { ArrowRight, ChevronRight } from "@/app/assets/svg";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import React from "react";

interface ITextsAndLink {
  projectTitle: string;
  description: string;
  pageLink: string;
  projectLink: string;
  type: "imageFirst" | "textFirst" | "organized";
  demoVideo?: string;
}
interface IProject extends ITextsAndLink {
  imageLink?: string | StaticImageData;
}

const TextsAndLink: React.FC<ITextsAndLink> = ({
  projectTitle,
  description,
  pageLink,
  projectLink,
  type,
}) => {
  return (
    <div
      className={`flex flex-col flex-shrink-0 w-full ${
        type === "organized" ? null : "md:w-1/2"
      } items-start justify-end`}
    >
      <h4 className="text-base font-semibold text-[#E3E4E6] uppercase">
        {projectTitle}
      </h4>
      <p
        className={`${
          type === "organized"
            ? "text-xs md:text-sm"
            : "text-base md:text-[28px]"
        } md:leading-tight text-white opacity-70 mt-3 md:mt-4 mb-4 md:mb-8`}
      >
        {description}
      </p>
      <Link
        href={type === "organized" ? projectLink : pageLink}
        className={`text-xs ${type === "organized" ? "md:text-sm py-1.5 px-3" : "md:text-base py-2 px-4"} gap-1 uppercase border border-[#E3E4E68C] rounded-full bg-transparent hover:bg-primary transition duration-200 inline-flex items-center`}
      >
        {type === "organized" ? "Visit Website" : "View Work"}
        {
          type === "organized"?
            <ArrowRight type="external" />
          : <ChevronRight />
        }
      </Link>
    </div>
  );
};
export const Project: React.FC<IProject> = ({
  type,
  projectTitle,
  description,
  pageLink,
  projectLink,
  imageLink,
  demoVideo,
}) => {
  return (
    <div
      className={`relative flex ${
        type === "imageFirst"
          ? "md:flex-row"
          : type === "textFirst"
            ? "md:flex-row-reverse"
            : "flex-col"
      } flex-col gap-4 md:gap-8`}
    >
      <div
        className={`bg-[#1C1C1C] rounded-[10px] w-full ${
          type === "organized" ? "flex-col" : "md:w-1/2"
        } h-full p-4 sm:p-7 flex justify-center items-center border border-[#1C1C1C] hover:border-primary group`}
      >
        <div className="flex w-full h-auto">
          {demoVideo ? (
            <div className="aspect-[1/1.5] overflow-hidden rounded-lg mx-auto">
              <iframe
                src={demoVideo}
                title={`${projectTitle} demo video`}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="h-full w-full"
              ></iframe>
            </div>
          ) : imageLink ? (
            <Image
              src={imageLink}
              width={434}
              height={434}
              alt={`${projectTitle} image on desktop, tablet and mobile`}
              className="transition duration-200 group-hover:scale-95 w-full flex"
            />
          ) : null}
        </div>
        {type === "organized" ? (
          <TextsAndLink
            description={description}
            pageLink={pageLink}
            projectLink={projectLink}
            projectTitle={projectTitle}
            type={type}
          />
        ) : null}
      </div>
      {type !== "organized" ? (
        <TextsAndLink
          description={description}
          pageLink={pageLink}
          projectLink={projectLink}
          projectTitle={projectTitle}
          type={type}
        />
      ) : null}
    </div>
  );
};
