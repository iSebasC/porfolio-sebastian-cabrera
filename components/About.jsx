"use client";

import DevImg from "./DevImg";
import Image from "next/image";
import { Habilidades } from "@/constants";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { Button, Tooltip } from "@nextui-org/react";

import {
  User2,
  MailIcon,
  PhoneCall,
  GraduationCap,
  Briefcase,
} from "lucide-react";

const infoData = [
  { icon: <User2 size={20} />, text: "Sebastian Cabrera" },
  { icon: <PhoneCall size={20} />, text: "+51 993 106 111" },
  { icon: <MailIcon size={20} />, text: "cabreralcalasebastian@gmail.com" },
  {
    icon: <GraduationCap size={20} />,
    text: "Titulado de Desarrollo de Software",
  },
];

const qualificationData = [
  {
    title: "educacion",
    data: [
      {
        university: "Diseño Gráfico Digital",
        qualification: "Idat",
        years: "2021 - 2021",
      },
      {
        university: "Desarrollo de Software",
        qualification: "Senati",
        years: "2017 - 2021",
      },
    ],
  },
  {
    title: "Experiencia",
    data: [
      {
        company: "Gepeto",
        role: "Desarrollador Frontend",
        years: "Jul 2024 - Actualmente",
      },
      {
        company: "Sociedad Peruana de Bienes Raíces",
        role: "Desarrollador Backend",
        years: "Jul 2023 - Abr 2024",
      },
      {
        company: "Gestora",
        role: "Desarrollador FullStack",
        years: "Mar 2023 - Jul 2023",
      },
    ],
  },
];

const About = () => {
  const getData = (arr, title) => arr.find((item) => item.title === title);

  return (
    <section className="xl:h-[800px] pb-12 pt-1 xl:pb-24">
      <div className="container mx-auto">
        <h2 className="section-title mb-8 xl:mb-16 text-center mx-auto pt-2">
          Acerca de mi
        </h2>

        <div className="flex flex-col xl:flex-row">
          {/* Tabs */}
          <div className="flex-1">
            <Tabs defaultValue="personal">
              <TabsList className="no-scrollbar flex flex-wrap justify-center gap-2 mb-10 p-0 bg-transparent dark:bg-transparent shadow-none border-none">
                {[
                  { label: "Mi Información", value: "personal" },
                  { label: "Calificaciones", value: "qualifications" },
                  { label: "Habilidades", value: "Habilidades" },
                ].map((tab) => (
                  <TabsTrigger
                    key={tab.value}
                    value={tab.value}
                    className="px-4 py-2 text-sm font-medium rounded-lg bg-transparent text-foreground hover:bg-primary hover:text-white data-[state=active]:bg-primary data-[state=active]:text-white transition"
                  >
                    {tab.label}
                  </TabsTrigger>
                ))}
              </TabsList>

              <div className="text-lg mt-12 xl:mt-8">
                {/* Personal Info */}
                <TabsContent value="personal">
                  <div className="text-center xl:text-left">
                    <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                      Especialista en Desarrollo Web y Backend
                    </h2>

                    <p className="text-muted-foreground text-sm leading-relaxed xl:pr-12 xl:mx-0 mb-4">
                    Titulado en Desarrollo de Software por el instituto Senati. Cuento con más de tres años de experiencia desarrollando soluciones eficientes y escalables tanto en el frontend como en el backend, participando en proyectos de alto impacto para instituciones públicas y privadas.
                    </p>

                    <p className="text-muted-foreground text-sm leading-relaxed xl:pr-12 xl:mx-0">
                    Me especializo en construir sistemas robustos, seguros y bien estructurados, aplicando buenas prácticas en arquitectura backend, seguridad de APIs y rendimiento. Además, complemento mi perfil con experiencia en el desarrollo de interfaces modernas, conocimientos en cloud computing básico y fundamentos en seguridad ofensiva para fortalecer entornos digitales.
                    </p>

                    {/* icons */}
                    <div className="grid xl:grid-cols-2 gap-4 mt-10">
                      {infoData.map((item, index) => (
                        <div
                          className="flex items-center gap-x-4 mx-auto xl:mx-0"
                          key={index}
                        >
                          <div className="text-primary">{item.icon}</div>
                          <div className="text-base font-medium text-foreground">
                            {item.text}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </TabsContent>






                {/* Qualifications */}
                <TabsContent value="qualifications">
                  <div>
                    <h3 className="h3 mb-8 text-center xl:text-left">
                      Mi impresionante viaje
                    </h3>

                    <div className="grid md:grid-cols-2 gap-y-8">
                      {/* Experiencia */}
                      <div className="flex flex-col gap-y-6">
                        <div className="flex gap-x-4 items-center text-[22px] text-primary">
                          <Briefcase />
                          <h4 className="capitalize font-medium">
                            {getData(qualificationData, "Experiencia").title}
                          </h4>
                        </div>
                        <div className="flex flex-col gap-y-8">
                          {getData(qualificationData, "Experiencia").data.map(
                            ({ company, role, years }, i) => (
                              <div className="flex gap-x-8 group" key={i}>
                                <div className="h-[84px] w-[1px] bg-border relative ml-2">
                                  <div className="w-[11px] h-[11px] rounded-full bg-primary absolute -left-[5px] group-hover:translate-y-[84px] transition-all duration-500" />
                                </div>
                                <div>
                                  <div className="font-semibold text-xl mb-2">
                                    {company}
                                  </div>
                                  <div className="text-lg text-muted-foreground mb-4">
                                    {role}
                                  </div>
                                  <div className="text-base font-medium">
                                    {years}
                                  </div>
                                </div>
                              </div>
                            )
                          )}
                        </div>
                      </div>

                      {/* Educación */}
                      <div className="flex flex-col gap-y-6">
                        <div className="flex gap-x-4 items-center text-[22px] text-primary">
                          <GraduationCap size={28} />
                          <h4 className="capitalize font-medium">
                            {getData(qualificationData, "educacion").title}
                          </h4>
                        </div>
                        <div className="flex flex-col gap-y-8">
                          {getData(qualificationData, "educacion").data.map(
                            ({ university, qualification, years }, i) => (
                              <div className="flex gap-x-8 group" key={i}>
                                <div className="h-[84px] w-[1px] bg-border relative ml-2">
                                  <div className="w-[11px] h-[11px] rounded-full bg-primary absolute -left-[5px] group-hover:translate-y-[84px] transition-all duration-500" />
                                </div>
                                <div>
                                  <div className="font-semibold text-xl mb-2">
                                    {university}
                                  </div>
                                  <div className="text-lg text-muted-foreground mb-4">
                                    {qualification}
                                  </div>
                                  <div className="text-base font-medium">
                                    {years}
                                  </div>
                                </div>
                              </div>
                            )
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </TabsContent>

                {/* Habilidades */}
                <TabsContent value="Habilidades">
                  <div className="xl:text-left">
                    <h3 className="h3 mb-7">
                      Herramientas que Utilizo Diariamente
                    </h3>

                    <div className="mb-16">
                      <div className="mb-4">
                        <h4 className="text-md text-primary mb-2">Habilidades</h4>
                        <p className="text-lg mb-2">React, NextJS</p>
                        <p className="text-lg mb-2">Desarrollo Front-end</p>
                        <p className="text-lg mb-2">Laravel, Slim, NestJS</p>
                        <p className="text-lg">Desarrollo Back-end</p>
                      </div>

                      <h4 className="text-md text-primary mb-2">
                        Otras herramientas
                      </h4>
                      <div className="mt-10 flex flex-wrap sm:gap-12 gap-4 justify-center items-center">
                        {Habilidades.map((h) => (
                          <div
                            className="block-container w-20 h-20"
                            key={h.name}
                          >
                            <Tooltip
                              content={h.name}
                              className="border border-primary bg-transparent text-primary rounded-md"
                            >
                              <Button className="border backdrop-blur-2xl dark:bg-zinc-800/10 dark:border-neutral-800/60 rounded-xl flex justify-center items-center h-20 w-20">
                                <Image
                                  src={h.imageUrl}
                                  alt={h.name}
                                  className="w-16 h-16 object-contain"
                                />
                              </Button>
                            </Tooltip>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </TabsContent>
              </div>
            </Tabs>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
