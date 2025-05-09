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

  return (
    <main className="flex flex-col pt-24 py-10 md:py-[100px] pattern-after">
      <div className="flex flex-col gap-10">
        <div className="pt-5">
          <Link href={"/#projects"} className="flex gap-2 hover:opacity-80 active:opacity-100 transition-opacity duration-200">
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
            className="text-white bg-primary border border-primary disabled:bg-primary/50 hover:bg-transparent active:bg-primary w-full md:w-fit max-w-[342px] min-h-[60px] rounded-[40px] px-6 md:px-10 flex justify-center items-center transition duration-200 gap-[5px] whitespace-nowrap"
          >
            Visit Website <ArrowRight />
          </Link>
        </div>
        <div className="flex justify-between gap-10">
          <div className={`${workSans.className} flex flex-col gap-3`}>
            <h3 className={`font-semibold text-2xl`}>STACK</h3>
            <p className="text-sm">{project?.languages.join(", ")}</p>
          </div>
          <div className={`${workSans.className} flex flex-col gap-3`}>
            <h3 className={`font-semibold text-2xl text-center`}>STATUS</h3>
            <p className="text-sm text-center">{project?.status}</p>
          </div>
          <div className={`${workSans.className} flex flex-col gap-3 relative`}>
            <h3 className={`font-semibold text-2xl text-right`}>GITHUB REPO</h3>
            <p className="text-sm text-right">
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
          <p>{project?.description}</p>
        </div>
        <div className="flex flex-col gap-4">
          <h3 className={`${stalinistOne.className} text-2xl`}>CHALLENGES</h3>
          <p className={`${workSans.className}`}>{project?.challenge}</p>
        </div>
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
        <div className="flex flex-col gap-4">
          <h3 className={`${stalinistOne.className} text-2xl`}>GOAL</h3>
          <p className={`${workSans.className}`}>{project?.gains}</p>
        </div>
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
