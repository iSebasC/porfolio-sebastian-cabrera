"use client";
import Link from "next/link";
import { Button } from "./ui/button";

// import swiper react components
import { Swiper, SwiperSlide } from "swiper/react";

// import swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";

// components
import ProjectCard from "./ProjectCard";

const projectData = [
  {
    image: "/work/1.png",
    category: "Next JS",
    name: "GoInmuebles",
    description:
    "Un sitio web privada de crowdfunding inmobiliario con nextjs, tailwindcss, laravel y nestjs.",
    link: "https://www.goinmuebles.com/",
    github: "#",
  },
  {
    image: "/work/3.png",
    category: "ReactJS",
    name: "Website Nike",
    description:
      "Un sitio web de la marca Nike hecho con Reactjs y tailwindcss.",
    link: "https://amazon-clone-ten-lemon.vercel.app/",
    github: "https://github.com/iSebasC/website-nike",
  },
  {
    image: "/work/5.png",
    category: "VueJS",
    name: "Mi blog",
    description:
      "Es un sitio web hecho con Bootstrap-Vue",
    link: "/https://lms-platform-liard.vercel.app/",
    github: "/https://github.com/premvarma2002/lms-platform",
  },
];

const Work = () => {
  return (
    <section className="relative mb-12 xl:mb-48">
      <div className="container mx-auto">
        {/* text  */}
        <div className="max-w-[400px] mx-auto xl:mx-0 text-center xl:text-left mb-12 xl:h-[400px] flex flex-col justify-center items-center xl:items-start">
          <h2 className="section-title mb-4">Últimos proyectos</h2>
          <p className="subtitle mb-8">
          Ingrese al código que he creado.
          </p>
          <Link href="/projects">
            <Button>Todos los proyectos</Button>
          </Link>
        </div>
        {/* slider  */}
        <div className="xl:max-w-[1000px] xl:absolute right-0 top-0">
          <Swiper
            className="h-[480px]"
            slidesPerView={1}
            breakpoints={{
              640: {
                slidesPerView: 2,
              },
            }}
            spacebetween={30}
            modules={[Pagination]}
            pagination={{ clickable: true }}
          >
            {/* show only the first 4 projects for the slides  */}
            {projectData.slice(0, 4).map((project, index) => {
              return (
                <SwiperSlide key={index}>
                  <ProjectCard project={project} />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Work;
