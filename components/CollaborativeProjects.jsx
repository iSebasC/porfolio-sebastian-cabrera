"use client";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowUpRight } from "lucide-react";

const projectData = [
  {
    image: "/work/1.png",
    type: "Frontend",
    title: "GoInmuebles",
    category: "Frontend",
    description:
      "Un sitio web privada de crowdfunding inmobiliario con nextjs, tailwindcss, laravel y nestjs.",
    link: "https://www.prestopolis.com/plataforma",
  },
  {
    image: "/work/carpio.png",
    type: "Frontend",
    title: "Carpio",
    category: "Frontend",
    description: "Un sitio web de la marca Carpio.",
    link: "https://www.carpiosac.com.pe/",
  },
];

export const CollaborativeProjects = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  return (
    <section className="container">
      <div className="flex flex-col items-center lg:items-start">
        <h2 className="section-title mb-4">
          Proyectos en los que he participado
        </h2>
        <p className="subtitle mb-8 max-w-[800px]">
          Descubre los proyectos en los que he tenido la oportunidad de
          colaborar. Cada uno refleja mi dedicación, habilidades y el esfuerzo
          conjunto para lograr resultados excepcionales.
        </p>
      </div>

      <Tabs
        defaultValue={activeCategory}
        className="w-full"
        onValueChange={setActiveCategory}
      >
        <TabsList className="no-scrollbar !rounded-none mb-[30px] h-auto w-full justify-start overflow-auto !bg-transparent lg:mb-[46px] 2xl:mb-[92px]">
          <div className="mx-auto flex gap-[1px] rounded-[6px] bg-tertiary p-[1px]">
            <TabsTrigger
              value="All"
              className="rounded-[5px_0_0_5px] bg-white px-[20px] py-[8px] text-[17px] font-normal hover:bg-[#EF6D58] hover:text-white data-[state=active]:bg-[#EF6D58] data-[state=active]:text-white"
            >
              All
            </TabsTrigger>
            <TabsTrigger
              value="Frontend"
              className="rounded-none bg-white px-[20px] py-[8px] text-[17px] font-normal hover:bg-[#EF6D58] hover:text-white data-[state=active]:bg-[#EF6D58] data-[state=active]:text-white"
            >
              Frontend
            </TabsTrigger>

            <TabsTrigger
              value="Backend"
              className="rounded-none bg-white px-[20px] py-[8px] text-[17px] font-normal hover:bg-[#EF6D58] hover:text-white data-[state=active]:bg-[#EF6D58] data-[state=active]:text-white"
            >
              Backend
            </TabsTrigger>
            <TabsTrigger
              value="Fullstack"
              className="rounded-none bg-white px-[20px] py-[8px] text-[17px] font-normal hover:bg-[#EF6D58] hover:text-white data-[state=active]:bg-[#EF6D58] data-[state=active]:text-white"
            >
              Fullstack
            </TabsTrigger>
            <TabsTrigger
              value="Mobile"
              className="rounded-[0_5px_5px_0] bg-white px-[20px] py-[8px] text-[17px] font-normal hover:bg-[#EF6D58] hover:text-white data-[state=active]:bg-[#EF6D58] data-[state=active]:text-white"
            >
              Mobile
            </TabsTrigger>
          </div>
        </TabsList>
        <TabsContent
          value={activeCategory}
          className="grid max-w-[450px] mx-auto md:mx-0 md:max-w-[initial] md:grid-cols-2 xl:grid-cols-3 gap-5"
        >
          {Array.isArray(projectData) && projectData.length > 0 ? (
            projectData
              .filter((project) =>
                activeCategory === "All"
                  ? true
                  : project.type === activeCategory
              )
              .map((project, index) => (
                <Card
                  className="w-full bg-tertiary dark:bg-white overflow-hidden rounded-xl"
                  key={index}
                >
                  <CardContent className="p-6">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="aspect-[16/8.5] h-full rounded-lg mb-4 object-cover"
                    />
                    <h3 className="text-lg font-bold mb-2 text-gray-800">
                      {project.title}
                    </h3>
                    <p className="text-sm text-gray-400 mb-4">
                      {project.description}
                    </p>
                    <div className="flex justify-between items-center">
                      <div className="text-xs text-[#EF6D58]">
                        {project.type}
                      </div>
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs text-[#EF6D58] underline hover:text-[#EF6D58]/80"
                      >
                        Ver más
                      </a>
                    </div>
                  </CardContent>
                </Card>
              ))
          ) : (
            <p>No hay proyectos disponibles</p>
          )}
        </TabsContent>
      </Tabs>
    </section>
  );
};
