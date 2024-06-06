"use client";
import React, { useState } from "react";
import { Tabs, TabsList, TabsContent, TabsTrigger } from "@/components/ui/tabs";
import ProjectCard from "@/components/ProjectCard";

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
  {
    image: "/work/4.jpg",
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
  "all projects",
  ...new Set(projectData.map((item) => item.category)),
];

const Projects = () => {
  const [categories, setCategories] = useState(uniqueCategories);
  const [category, setCategory] = useState("all projects");

  const filteredProjects = projectData.filter((project) => {
    // if category is all projects then return all projects , else filter by category.
    return category === "all projects"
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
        <Tabs defaultValue={category} className="mb-24 xl:mb-48">
          <TabsList className="w-full grid h-full md:grid-cols-4 lg:max-w-[640px] mb-12 mx-auto md:border dark:border-none">
            {categories.map((category, index) => {
              return (
                <TabsTrigger
                  onClick={() => setCategory(category)}
                  value={category}
                  key={index}
                  className="capitalize w-[162px] md:w-auto"
                >
                  {category}
                </TabsTrigger>
              );
            })}
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
