import Link from "next/link";
import { ArrowRight } from "../assets/svg";
import { projectsData } from "../data";
import { stalinistOne, workSans } from "../fonts";
import Image from "next/image";

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projectsData.find((proj) => proj.slug === slug);

  if (!project) {
    return (
      <main className="flex flex-col pt-24 py-10 md:py-[100px] pattern-after">
        <div className="flex flex-col justify-center items-center gap-10 pattern-before min-h-[50vh]">
          <h1 className={`${stalinistOne.className} uppercase clamped-h2 z-20 text-center`}>
            Project not found!
          </h1>
        </div>
      </main>
    );
  }

  return (
    <main className="flex flex-col pt-24 py-10 md:py-[100px] pattern-after">
      <div className="flex flex-col gap-10 pattern-before">
        <div className="pt-5 relative">
          <Link
            href={"/#projects"}
            className="flex gap-2 hover:opacity-80 active:opacity-100 transition-opacity duration-200"
          >
            <span className="rotate-180">
              <ArrowRight animated={false} />
            </span>
            Project Details
          </Link>
        </div>
        <div className="flex flex-col md:flex-row md:items-center justify-between relative gap-2">
          <h1
            className={`${stalinistOne.className} uppercase clamped-h2 z-20 relative`}
          >
            {project?.name}
          </h1>
          <Link
            href={project?.projectUrl || ""}
            target={"_blank"}
            className="text-white bg-primary border border-primary disabled:bg-primary/50 hover:bg-transparent active:bg-primary w-full md:w-fit max-w-[342px] min-h-12 md:min-h-[60px] rounded-[40px] px-6 md:px-10 flex justify-center items-center transition duration-200 gap-[5px] whitespace-nowrap"
          >
            Visit Website <ArrowRight />
          </Link>
        </div>
        <div className="flex flex-col md:flex-row justify-between gap-10">
          <div className={`${workSans.className} flex flex-col gap-3`}>
            <h3 className={`font-semibold text-lg md:text-2xl`}>STACK</h3>
            <p className="text-sm">{project?.languages.join(", ")}</p>
          </div>
          <div className="flex gap-3 justify-between order-3 md:order-2">
              <div
                className={`${workSans.className} flex flex-col gap-3 order-3 md:order-2`}
              >
                <h3 className={`font-semibold text-lg md:text-2xl md:text-center`}>TYPE</h3>
                <p className="text-sm md:text-center">{project?.type}</p>
              </div>
              <div
                className={`${workSans.className} flex md:hidden flex-col gap-3 order-3 md:order-2`}
              >
                <h3 className={`font-semibold text-lg md:text-2xl md:text-center`}>STATUS</h3>
                <p className="text-sm md:text-center">{project?.status}</p>
              </div>
          </div>
          <div
                className={`${workSans.className} hidden md:flex flex-col gap-3 order-3 md:order-2`}
              >
                <h3 className={`font-semibold text-lg md:text-2xl md:text-center`}>STATUS</h3>
                <p className="text-sm md:text-center">{project?.status}</p>
              </div>
          <div
            className={`${workSans.className} flex flex-col gap-3 relative order-2 md:order-3`}
          >
            <h3 className={`font-semibold text-lg md:text-2xl md:text-right`}>
              GITHUB REPO
            </h3>
            <p className="text-sm md:text-right">
              <Link
                href={project?.repo ?? ""}
                target="_blank"
                className="text-primary hover:text-primary/80 underline transition duration-200"
              >
                {project?.repo}
              </Link>
            </p>
          </div>
        </div>
        {project?.image ? (
          <div className="relative py-10">
            <div className="h-full w-full top-0 left-0 blur absolute">
              <Image
                src={project?.image}
                width={724}
                height={516}
                alt={`${project?.name}'s screenshot`}
                className="w-full h-full flex mx-auto"
              />
            </div>
            <Image
              src={project?.image}
              width={724}
              height={516}
              alt={`${project?.name}'s screenshot`}
              className="relative flex mx-auto border border-dark"
            />
          </div>
        ) : null}
        <div>
          <p className={`${workSans.className} text-justify sm:text-left`}>{project?.detail}</p>
        </div>
        {project?.gains ? (
          <div className="flex flex-col gap-4">
            <h3 className={`${stalinistOne.className} text-2xl`}>GOALS</h3>
            <p className={`${workSans.className} text-justify sm:text-left`}>{project?.gains}</p>
          </div>
        ) : null}
        {project?.image2 ? (
          <div className="relative py-10">
            <div className="h-full w-full top-0 left-0 blur absolute">
              <Image
                src={project?.image2}
                width={724}
                height={516}
                alt={`${project?.name}'s screenshot`}
                className="w-full h-full flex mx-auto"
              />
            </div>
            <Image
              src={project?.image2}
              width={724}
              height={516}
              alt={`${project?.name}'s screenshot`}
              className="relative flex mx-auto border border-dark"
            />
          </div>
        ) : null}
        {project?.challenge ? (
          <div className="flex flex-col gap-4">
            <h3 className={`${stalinistOne.className} text-2xl`}>CHALLENGES</h3>
            <p className={`${workSans.className} text-justify sm:text-left`}>{project?.challenge}</p>
          </div>
        ) : null}
        {project?.image3 ? (
          <div className="relative py-10">
            <div className="h-full w-full top-0 left-0 blur absolute">
              <Image
                src={project?.image3}
                width={724}
                height={516}
                alt={`${project?.name}'s screenshot`}
                className="w-full h-full flex mx-auto"
              />
            </div>
            <Image
              src={project?.image3}
              width={724}
              height={516}
              alt={`${project?.name}'s screenshot`}
              className="relative flex mx-auto border border-dark"
            />
          </div>
        ) : null}
      </div>
    </main>
  );
}
