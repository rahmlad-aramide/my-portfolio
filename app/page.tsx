import { SectionDivider } from "@/app/ui/components/section-divider";
import { About } from "@/app/ui/sections/about";
import { Hero } from "@/app/ui/sections/hero";
import { TechStacks } from "@/app/ui/sections/tech-stacks";
import { Projects } from "@/app/ui/sections/projects";

export default function Home() {
  return (
    <>
    <div className="flex gap-4 overflow-hidden">
      <p className="scrolling-text">
        <span>🔥 This is still a work in progress—cool new projects coming soon! 🛠️ Stay tuned! 🚀</span>
      </p>
      <p className="scrolling-text">
        <span>🔥 This is still a work in progress—cool new projects coming soon! 🛠️ Stay tuned! 🚀</span>
      </p>
      <p className="scrolling-text">
        <span>🔥 This is still a work in progress—cool new projects coming soon! 🛠️ Stay tuned! 🚀</span>
      </p>
    </div>
      <Hero />
      <SectionDivider heading="About" />
      <About />
      <SectionDivider heading="Tech Stacks" />
      <TechStacks />
      <SectionDivider heading="Projects" />
      <Projects />
    </>
  );
}
