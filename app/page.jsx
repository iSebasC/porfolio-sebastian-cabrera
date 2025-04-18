//Components
import Hero from "@/components/Hero";
// import TechShowcase from "@/components/TechShowcase";
import About from "@/components/About";
import Services from "@/components/ui/Services";
import Work from "@/components/Work";
import Reviews from "@/components/Reviews";
import Cta from "@/components/Cta";
import { Testimonial } from "@/components/Testimonial";
import { CollaborativeProjects } from "@/components/CollaborativeProjects";

export default function Home() {
  return (
    <main>
      <Hero />
      {/* <TechShowcase /> */}
      <About />
      {/* <Services /> */}
      <Work />
      <CollaborativeProjects />
      {/* <Reviews /> */}
      <Testimonial />
      <Cta />
    </main>
  );
}
