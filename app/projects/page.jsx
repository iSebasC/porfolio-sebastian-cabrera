"use client";
import React, { useState } from "react";
import { Tabs, TabsList, TabsContent, TabsTrigger } from "@/components/ui/tabs";
import ProjectCard from "@/components/ProjectCard";
import clsx from "clsx";

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
      "El proyecto Hilink es un sitio web dinámico y moderno desarrollado con Next.js, Tailwind CSS y TypeScript para proporcionar una experiencia de usuario excepcional.",
    link: "https://travelhk.netlify.app",
    github: "https://github.com/iSebasC/hilink_project",
  },
];

//  remove category duplicates
const uniqueCategories = [
  "Todos los proyectos",
  ...new Set(projectData.map((item) => item.category)),
];

const Projects = () => {
  const [categories, setCategories] = useState(uniqueCategories);
  const [category, setCategory] = useState("Todos los proyectos");

  const filteredProjects = projectData.filter((project) => {
    // if category is all projects then return all projects , else filter by category.
    return category === "Todos los proyectos"
      ? project
      : project.category === category;
  });

  return (
    <section className="min-h-screen pt-12">
      <div className="container mx-auto">
        <h2 className="section-title mb-8 xl:mb-16 text-center mx-auto">
          Mis Proyectos
        </h2>
        {/* tabs  */}
        <Tabs defaultValue={category} className="w-full">
          <TabsList className="no-scrollbar !rounded-none mb-[30px] h-auto w-full justify-start overflow-auto !bg-transparent lg:mb-[46px] 2xl:mb-[92px]">
            <div className="mx-auto flex gap-[1px] rounded-[6px] bg-tertiary p-[1px]">
              {categories.map((category, index) => {
                return (
                  <TabsTrigger
                    onClick={() => setCategory(category)}
                    value={category}
                    key={index}
                    className={clsx(
                      "bg-white px-[20px] py-[8px] text-[17px] font-normal hover:bg-[#EF6D58] hover:text-white data-[state=active]:bg-[#EF6D58] data-[state=active]:text-white",
                      {
                        "rounded-[5px_0_0_5px]": index === 0,
                        "rounded-[0_5px_5px_0]":
                          index === categories.length - 1,
                        "rounded-none":
                          index !== 0 && index !== categories.length - 1,
                      }
                    )}
                  >
                    {category}
                  </TabsTrigger>
                );
              })}
            </div>
          </TabsList>
          {/* tabs content  */}
          <div className="text-lg xl:mt-8 grid grid-cols-1 lg:grid-cols-3 gap-4">
            {filteredProjects.map((project, index) => {
              return (
                <TabsContent value={category} key={index}>
                  <ProjectCard project={project} />
                </TabsContent>
              );
            })}
          </div>
        </Tabs>
      </div>
    </section>
  );
};

export default Projects;
