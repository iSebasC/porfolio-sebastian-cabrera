import DevImg from "./DevImg";
import Image from "next/image";
import { Habilidades } from "@/constants";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { Button, Tooltip } from "@nextui-org/react";

import {
  User2,
  MailIcon,
  HomeIcon,
  PhoneCall,
  GraduationCap,
  Calendar,
  Briefcase,
} from "lucide-react";

const infoData = [
  {
    icon: <User2 size={20} />,
    text: "Sebastian Cabrera",
  },
  {
    icon: <PhoneCall size={20} />,
    text: "+51 993 106 111",
  },
  {
    icon: <MailIcon size={20} />,
    text: "cabreralcalasebastian@gmail.com",
  },
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
        university: "Diseño Grafico Digital",
        qualification: "Idat",
        years: "2021 - 2021",
      },
      {
        university: "Desarrollo de Software",
        qualification: "Senati",
        years: "2017 - 2021",
      },
      // {
      //   university: "LPU University",
      //   qualification: "Master of Computer Applications",
      //   years: "2024 - Present",
      // },
      // {
      //     university: 'IIT Patna',
      //     qualification: 'M.Tech in Cloud Computing',
      //     years:'2026- 2028',
      // },
    ],
  },

  {
    title: "Experiencia",
    data: [
      {
        company: "Sociedad Peruana de Bienes Raices",
        role: "Desarrollador Backend",
        years: "Jul 2023 - Abr 2024",
      },

      {
        company: "Gestora",
        role: "Desarrollador FullStack",
        years: "Mar 2023 - Jul 2023 ",
      },
      {
        company: "Agencia Lima Digital",
        role: "Desarrollador Backend",
        years: "Sep 2022 - Nov 2022",
      },
    ],
  },
];

const skillData = [
  {
    title: "Habilidades",
    data: [
      {
        name: "HTML , CSS, JavaScript ",
      },
      {
        name: "React , Next , Bootstrap",
      },
      {
        name: "Typescript ,Tailwind , Sass CSS ",
      },
      {
        name: "Redux, MUI , shadcn-UI, Prisma ",
      },
    ],
  },
  {
    title: "tools",
    data: [
      {
        imgPath: "/about/vscode.svg",
      },
      {
        imgPath: "/about/docker.svg",
      },
      {
        imgPath: "/about/firebase.svg",
      },
    ],
  },
];

const About = () => {
  const getData = (arr, title) => {
    return arr.find((item) => item.title === title);
  };
  //  console.log(getData(qualificationData , 'Experiencia'))
  return (
    <section className="xl:h-[800px] pb-12 pt-1 xl:py-24 ">
      <div className="container mx-auto">
        <h2 className="section-title mb-8 xl:mb-16 text-center mx-auto pt-2">
          Acerca de mi
        </h2>
        <div className="flex flex-col xl:flex-row">
          {/* image  */}
          <div className="hidden xl:flex flex-1 relative">
            <DevImg
              containerStyles="bg-about_shape_light dark:bg-about_shape_dark w-[505px] h-[505px] bg-no-repeat relative"
              imgSrc="/about/1x/dev.png"
            />
          </div>
          {/* tabs  */}
          <div className="flex-1">
            <Tabs defaultValue="personal">
              <TabsList className="w-full grid xl:grid-cols-3 xl:max-w-[520px] xl:border dark:border-none">
                <TabsTrigger className="w-[162px] xl:w-auto" value="personal">
                  Mi Información
                </TabsTrigger>
                <TabsTrigger
                  className="w-[162px] xl:w-auto"
                  value="qualifications"
                >
                  Calificaciones
                </TabsTrigger>
                <TabsTrigger
                  className="w-[162px] xl:w-auto"
                  value="Habilidades"
                >
                  Habilidades
                </TabsTrigger>
              </TabsList>
              {/* tabs content  */}
              <div className="text-lg mt-12 xl:mt-8">
                {/* personal  */}
                <TabsContent value="personal">
                  <div className="text-center xl:text-left">
                    <h3 className="h3 mb-4">
                      Especialista en Desarrollo Backend
                    </h3>
                    <p className="subtitle max-w-xl max-auto xl:mx-0">
                      Profesional de backend con más de un año creando sistemas
                      robustos y eficientes. Recientemente ampliando Habilidades
                      hacia el desarrollo móvil, combinando fundamentos sólidos
                      y nuevas tecnologías para soluciones innovadoras.
                    </p>
                    {/* icons  */}
                    <div className="grid xl:grid-cols-2 gap-4 mb-12">
                      {infoData.map((item, index) => {
                        return (
                          <div
                            className="flex items-center gap-x-4 mx-auto xl:mx-0"
                            key={index}
                          >
                            <div className="text-primary ">{item.icon}</div>
                            <div>{item.text}</div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </TabsContent>
                {/* qualifications  */}
                <TabsContent value="qualifications">
                  <div>
                    <h3 className="h3 mb-8 text-center xl:text-left">
                      My Awesome Journey
                    </h3>
                    {/* Experiencia and educacion wrapper  */}
                    <div className="grid md:grid-cols-2 gap-y-8">
                      {/* Experiencia  */}
                      <div className="flex flex-col gap-y-6">
                        <div className="flex gap-x-4 items-center text-[22px] text-primary">
                          <Briefcase />
                          <h4 className="capitalize font-medium">
                            {getData(qualificationData, "Experiencia").title}
                          </h4>
                        </div>
                        {/* list  */}
                        <div className="flex flex-col gap-y-8">
                          {getData(qualificationData, "Experiencia").data.map(
                            (item, index) => {
                              const { company, role, years } = item;
                              return (
                                <div className="flex gap-x-8 group" key={index}>
                                  <div className="h-[84px] w-[1px] bg-border relative ml-2">
                                    <div className="w-[11px] h-[11px] rounded-full bg-primary absolute -left-[5px] group-hover:translate-y-[84px] transition-all duration-500"></div>
                                  </div>
                                  <div>
                                    <div className=" font-semibold text-xl leading-none mb-2">
                                      {company}
                                    </div>
                                    <div className="text-lg leading-none text-muted-foreground mb-4">
                                      {role}
                                    </div>
                                    <div className="text-base font-medium">
                                      {years}
                                    </div>
                                  </div>
                                </div>
                              );
                            }
                          )}
                        </div>
                      </div>
                      {/* educacion  */}
                      <div className="flex flex-col gap-y-6">
                        <div className="flex gap-x-4 items-center text-[22px] text-primary">
                          <GraduationCap size={28} />
                          <h4 className="capitalize font-medium">
                            {getData(qualificationData, "educacion").title}
                          </h4>
                        </div>
                        {/* list  */}
                        <div className="flex flex-col gap-y-8">
                          {getData(qualificationData, "educacion").data.map(
                            (item, index) => {
                              const { university, qualification, years } = item;
                              return (
                                <div className="flex gap-x-8 group" key={index}>
                                  <div className="h-[84px] w-[1px] bg-border relative ml-2">
                                    <div className="w-[11px] h-[11px] rounded-full bg-primary absolute -left-[5px] group-hover:translate-y-[84px] transition-all duration-500"></div>
                                  </div>
                                  <div>
                                    <div className=" font-semibold text-xl leading-none mb-2">
                                      {university}
                                    </div>
                                    <div className="text-lg leading-none text-muted-foreground mb-4">
                                      {qualification}
                                    </div>
                                    <div className="text-base font-medium">
                                      {years}
                                    </div>
                                  </div>
                                </div>
                              );
                            }
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </TabsContent>
                <TabsContent value="Habilidades">
                  <div className="xl:text-left">
                    <h3 className="h3 mb-7">
                      Herramientas que Utilizo Diariamente
                    </h3>
                    <div className="mb-16">
                      {/* Habilidades */}
                      <div className="mb-4">
                        <h4 className="text-md text-primary mb-2">Habilidades</h4>
                        <p className="text-lg mb-2">React, NextJS</p>
                        <p className="text-lg mb-2">Desarrollo Front-end</p>
                        <p className="text-lg mb-2">Laravel, Slim, NestJS</p>
                        <p className="text-lg">Desarrollo Back-end</p>
                      </div>
                        <h4 className="text-md text-primary mb-2">Otras herramientas</h4>
                      <div className="mt-10 flex flex-wrap sm:gap-12 gap-4 justify-center items-center">
                        {Habilidades.map((Habilidades) => (
                          <div
                            className="block-container w-20 h-20"
                            key={Habilidades.name}
                          >
                            <div className="rounded-xl " />
                            <Tooltip
                              content={Habilidades.name}
                              className="border border-primary bg-transparent text-primary rounded-md"
                            >
                              <Button className="border backdrop-blur-2xl dark:bg-zinc-800/10 dark:border-neutral-800/60 rounded-xl flex justify-center items-center h-20 w-20">
                                <Image
                                  src={Habilidades.imageUrl}
                                  alt={Habilidades.name}
                                  // className="w-1/2 h-1/2 object-contain"
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
