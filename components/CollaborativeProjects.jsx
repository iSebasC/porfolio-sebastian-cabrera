"use client";

import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";

const projectData = [
  {
    image: "/work/7.png",
    type: "Backend",
    title: "Prestopolis",
    category: "Frontend",
    description:
      "Plataforma peruana de crowdfunding inmobiliario desarrollada con Laravel, NestJS y Next.js.",
    link: "https://www.prestopolis.com/plataforma",
  },
  {
    image: "/work/carpio.png",
    type: "Fullstack",
    title: "Carpio",
    category: "Frontend",
    description:
      "Sitio web corporativo de la empresa Carpio Automotriz desarrollado con Laravel.",
    link: "https://www.carpiosac.com.pe/",
  },
  {
    image: "/work/8.png",
    type: "Fullstack",
    title: "Gestora", 
    category: "Frontend",
    description:
      "Sitio institucional para gestión financiera e hipotecaria creado con Slim y Next.js.",
    link: "https://www.crececongestora.com/",
  }
  
];

export const CollaborativeProjects = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        {/* Título */}
        <div className="mb-12 text-left max-w-2xl">
          <h2 className="section-title text-primary mb-2">
            Proyectos en los que he participado
          </h2>
          <p className="text-muted-foreground text-sm leading-relaxed">
            Descubre los proyectos en los que he tenido la oportunidad de colaborar. Cada uno refleja mi dedicación, habilidades y el esfuerzo conjunto para lograr resultados excepcionales.
          </p>
        </div>

        {/* Tabs */}
        <Tabs defaultValue={activeCategory} onValueChange={setActiveCategory}>
          <TabsList className="no-scrollbar flex flex-wrap gap-2 mb-10 p-0 bg-transparent dark:bg-transparent shadow-none border-none">
            {["All", "Frontend", "Backend", "Fullstack", "Mobile"].map((tab, index) => (
              <TabsTrigger
                key={index}
                value={tab}
                className="px-4 py-2 text-sm font-medium rounded-lg bg-transparent text-foreground hover:bg-primary hover:text-white data-[state=active]:bg-primary data-[state=active]:text-white transition"
              >
                {tab}
              </TabsTrigger>
            ))}
          </TabsList>



          {/* Contenido de proyectos */}
          <TabsContent
            value={activeCategory}
            className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6"
          >
            {projectData
              .filter((project) =>
                activeCategory === "All" ? true : project.type === activeCategory
              )
              .map((project, index) => (
                <Card
                  key={index}
                  className="w-full bg-card text-card-foreground rounded-xl overflow-hidden border border-border"
                >
                  <CardContent className="p-6">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="rounded-lg mb-4 aspect-video object-cover"
                    />
                    <h3 className="text-lg font-semibold mb-2 text-foreground">
                      {project.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      {project.description}
                    </p>
                    <div className="flex justify-between items-center">
                      <span className="text-xs text-primary font-medium">
                        {project.type}
                      </span>
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs text-primary underline hover:opacity-80 transition"
                      >
                        Ver más
                      </a>
                    </div>
                  </CardContent>
                </Card>
              ))}
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};
