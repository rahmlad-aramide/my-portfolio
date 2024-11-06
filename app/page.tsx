import { SectionDivider } from "@/app/ui/components/section-divider";
import { About } from "@/app/ui/sections/about";
import { Hero } from "@/app/ui/sections/hero";
import { TechStacks } from "@/app/ui/sections/tech-stacks";
import { Projects } from "@/app/ui/sections/projects";
import { Contact } from "@/app/ui/sections/contact";

export default function Home() {
  return (
    <>
      <Hero />
      <SectionDivider heading="About" />
      <About />
      <SectionDivider heading="Tech Stacks" />
      <TechStacks />
      <SectionDivider heading="Projects" />
      <Projects />
      <SectionDivider heading="Contact" />
      <Contact />
    </>
  );
}
