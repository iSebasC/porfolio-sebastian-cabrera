"use client";
import Link from "next/link";
// import swiper react components
import { Swiper, SwiperSlide } from "swiper/react";

// import swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-cards";

// import required modules
import { EffectCards } from "swiper/modules";

import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Code } from "lucide-react";
const projectData = [
  {
    image: "/work/anime.png",
    category: "VueJS",
    name: "Rastreador de Anime",
    description: "Un sitio web para buscar animes.",
    link: "https://animetrackervuejs.netlify.app/",
    github: "https://github.com/iSebasC/AnimeTracker-VueJs",
  },
  {
    image: "/work/3.png",
    category: "ReactJS",
    name: "Website Nike",
    description:
      "Un sitio web de la marca Nike hecho con Reactjs y tailwindcss.",
    link: "https://website-nike.netlify.app/",
    github: "https://github.com/iSebasC/website-nike",
  },
  {
    image: "/work/5.png",
    category: "VueJS",
    name: "Mi blog",
    description: "Es un sitio web hecho con Bootstrap-Vue",
    link: "https://proyectobootstrapvue.netlify.app/",
    github: "https://github.com/iSebasC/ProjectBoostrapVue",
  },
  {
    image: "/work/4.png",
    category: "Next JS",
    name: "Hilink",
    description:
      "El proyecto Hilink es un sitio web dinámico y moderno desarrollado con Next.js, Tailwind CSS y TypeScript",
    link: "https://travelhk.netlify.app",
    github: "https://github.com/iSebasC/hilink_project",
  },
];

const Work = () => {
  return (
    <section className="mb-12 xl:mb-48 gap-[4rem] container grid lg:gap-0 lg:grid-cols-2">
      {/* text  */}
      <div className="flex flex-col items-center lg:items-start">
        <h2 className="section-title mb-4">Proyectos Personales</h2>
        <p className="subtitle mb-8">
          Explora el código detrás de los proyectos que he creado. Cada uno
          refleja mi pasión por el desarrollo y mi compromiso con la calidad.
        </p>
        <Link href="/projects">
          <Button>Todos los proyectos</Button>
        </Link>
      </div>

      {/* slider  */}

      <Swiper
        effect={"cards"}
        grabCursor={true}
        modules={[EffectCards]}
        className="max-w-[270px] sm:max-w-[400px]"
      >
        {projectData.map((project, index) => (
          <SwiperSlide key={index} className="rounded-[25px]">
            <Card className="rounded-[25px] overflow-hidden">
              <div className="relative overflow-hidden bg-white">
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full aspect-[16/10] object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
              <CardContent className="p-6 bg-white">
                <h3 className="text-2xl font-bold mb-2 text-black">
                  {project.name}
                </h3>
                <p className="text-muted-foreground mb-4 leading-relaxed h-[100px] sm:h-[78px]">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-secondary text-secondary-foreground">
                    <Code className="h-4 w-4" />
                    <span className="ml-1">{project.category}</span>
                  </span>
                </div>
              </CardContent>
              <CardFooter className="p-6 pt-0 bg-white flex flex-wrap gap-3 justify-center sm:justify-between">
                <Button asChild>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Ver proyecto
                  </a>
                </Button>
                <Button
                  variant="outline"
                  className="transition-all duration-300 hover:bg-[#333] hover:text-white"
                  asChild
                >
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github className="h-4 w-4 mr-2" />
                    Ver repositorio
                  </a>
                </Button>
              </CardFooter>
            </Card>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Work;
