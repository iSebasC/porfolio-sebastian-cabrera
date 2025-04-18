"use client";
import Link from "next/link";
import { Button } from "./ui/button";
import { Download, Send } from "lucide-react";
// cc
import { RiBriefcase4Fill, RiTodoFill, RiArrowDownSLine } from "react-icons/ri";

// Components
import DevImg from "./DevImg";
import Badge from "./Badge";
import Socials from "./Socials";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
const LetterAnimation = ({ letter, delay, direction }) => {
  const letterVariants = {
    hidden: {
      opacity: 0,
      x: direction === "left" ? -50 : 50, // Cambia la dirección de acuerdo con la prop `direction`
      scale: 0.5,
    },
    visible: {
      opacity: 1,
      x: 0, // Vuelve a su posición original
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 260,
        damping: 20,
        delay: delay, // Usando delay para el efecto de escalonado
      },
    },
  };

  return (
    <motion.span variants={letterVariants} initial="hidden" animate="visible">
      {letter}
    </motion.span>
  );
};
const Hero = () => {
  const name = "Sebastian Cabrera";
  const description = "Diseñador digital y desarrollador web";
  const delayStep = 0.05;

  return (
    // <section className="py-12 xl:py-24 h-[84vh] xl:pt-28 bg-hero bg-no-repeat bg-bottom bg-cover dark:bg-none">
    //   <div className="container mx-auto">
    //     <div className="flex justify-between gap-x-8">
    //       {/* text  */}
    //       <div className="flex max-w-[600px] flex-col justify-center mx-auto xl:mx-0 text-center xl:text-left">
    //         <div className="text-sm uppercase font-semibold mb-4 text-primary tracking-[4px]">
    //           🖥️ Backend Developer
    //         </div>
    //         <h1 className="h1 mb-4">Hola 👋, mi nombre es Sebastian Cabrera</h1>
    //         <p className="subtitle max-w-[490] mx-auto xl:mx-0">
    //           Breve descripción con conocimientos sobre mí mismo, mi trayectoria
    //           vocacional y a qué me dedico profesionalmente.
    //         </p>
    //         {/* buttons  */}
    //         <div className="flex flex-col gap-y-3 md:flex-row gap-x-3 mx-auto xl:mx-0 mb-12">
    //           <Link href={"/contact"}>
    //             <Button className="gap-x-2">
    //               Contáctame <Send size={18} />
    //             </Button>
    //           </Link>

    //           <a href="/CV_SEBASTIANCABRERAALCALA.pdf" download="cv.pdf">
    //             <Button variant="secondary" className="gap-x-2">
    //               Descargar CV <Download size={18} />
    //             </Button>
    //           </a>
    //         </div>
    //         {/* socials  */}
    //         <Socials
    //           containerStyles="flex gap-x-6 m-auto xl:mx-0"
    //           iconsStyles="text-foreground text-[22px] hover:text-primary transition-all"
    //         />
    //       </div>
    //       {/* image  */}
    //       <div className="hidden xl:flex relative">
    //         {/* badge  */}
    //         <Badge
    //           containerStyles="absolute top-[24%] -left-[5rem]"
    //           icon={<RiBriefcase4Fill />}
    //           endCountNum={2}
    //           badgeText="Año de experiencia"
    //         />
    //         {/* badge 3  */}
    //         <Badge
    //           containerStyles="absolute top-[55%] -right-8"
    //           icon={<RiTodoFill />}
    //           endCountNum={10}
    //           // endCountText={'k'}
    //           badgeText="Proyectos Finalizados"
    //         />
    //         <div className="bg-hero_shape2_light dark:bg-hero_shape2_dark w-[500px] h-[500px] bg-no-repeat absolute -top-1 -right-2 "></div>
    //         <DevImg
    //           containerStyles="bg-hero_shape w-[530px] h-[460px] bg-no-repeat relative bg-bottom"
    //           imgSrc="/hero/dev1.png"
    //         />
    //       </div>
    //     </div>
    //     {/* icon   */}
    //     <div className="hidden md:flex absolute left-2/4 botton-44 xl:bottom-12 animate-bounce">
    //       <RiArrowDownSLine className="text-3xl text-primary" />
    //     </div>
    //   </div>
    // </section>

    <section className="container px-0 grid gap-[3rem] py-[3.5rem] sm:gap-[4rem] xl:items-center xl:grid-cols-3 xl:py-0 xl:min-h-[calc(100vh-88px)] overflow-hidden relative w-full">

      <div className="text-center xl:text-end">
        <h1 className="font-semibold text-[35px] xl:text-[55px]">
          {name.split("").map((char, index) => (
            <LetterAnimation
              key={index}
              letter={char}
              direction="right" // Aquí todas las letras del nombre vienen de la derecha
              delay={index * delayStep}
            />
          ))}
        </h1>
        <motion.div
          variants={{
            hidden: { y: 50, opacity: 0 }, // Comienza 50px abajo y con opacidad 0
            visible: {
              y: 0,
              opacity: 1,
              transition: {
                type: "spring",
                stiffness: 120,
                damping: 20,
                duration: 0.5,
              },
            },
          }}
          initial="hidden"
          animate="visible"
        >
          <p>Destinado en Lima, Perú</p>
          <div className="flex items-center gap-2 justify-center xl:justify-end">
            <div className="w-[8px] h-[8px] bg-[#98fe7f] rounded-full flex-none" />
            <p>Disponible para un puesto a tiempo completo</p>
          </div>
          <div className="flex flex-col items-center gap-y-3 md:flex-row justify-center xl:justify-end gap-x-3 xl:mx-0 my-6">
            <Link href={"/contact"}>
              <Button className="gap-x-2">
                Contáctame <Send size={18} />
              </Button>
            </Link>

            <a href="/CV_SEBASTIANCABRERAALCALA.pdf" download="cv.pdf">
              <Button variant="secondary" className="gap-x-2">
                Descargar CV <Download size={18} />
              </Button>
            </a>
          </div>
          <Socials
            containerStyles="flex gap-x-6 justify-center xl:justify-end xl:mx-0"
            iconsStyles="text-foreground text-[22px] hover:text-primary transition-all"
          />
        </motion.div>
      </div>
      <div className="grid mb-[20px] sm:mb-[30px]">
        <motion.svg
          viewBox="0 0 1321 1321"
          xmlns="http://www.w3.org/2000/svg"
          width="1em"
          height="1em"
          fill="none"
          className="text-[230px] sm:text-[379px] xl:text-[400px] max-w-full mx-auto col-start-1 row-start-1"
          variants={{
            hidden: { y: 100, scale: 0 }, // Comienza desde abajo y con escala 0
            visible: {
              y: 0,
              scale: 1,
              transition: {
                type: "spring",
                stiffness: 100,
                damping: 10,
                duration: 0.5,
              },
            },
          }}
          initial="hidden"
          animate="visible"
        >
          <path
            fill="#FB4566"
            d="M1321 660.5c0 364.78-295.72 660.5-660.5 660.5C295.716 1321 0 1025.28 0 660.5 0 295.716 295.716 0 660.5 0 1025.28 0 1321 295.716 1321 660.5Zm-1314.268 0c0 361.07 292.702 653.77 653.768 653.77 361.07 0 653.77-292.7 653.77-653.77 0-361.066-292.7-653.768-653.77-653.768C299.434 6.732 6.732 299.434 6.732 660.5Z"
          />

          <circle cx="660.5" cy="660.5" r="641.529" fill="url(#a)" />

          <defs>
            <linearGradient
              id="a"
              x1="660.5"
              x2="833.738"
              y1="18.972"
              y2="937.082"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0%" stopColor="#F9976F">
                <animate
                  attributeName="stop-color"
                  values="#F9976F; #FB4566; #7F86FF; #6FF9F9; #F9976F"
                  dur="6s"
                  repeatCount="indefinite"
                />
              </stop>
              <stop offset="25%" stopColor="#FB4566">
                <animate
                  attributeName="stop-color"
                  values="#FB4566; #6FF9F9; #F9976F; #7F86FF; #FB4566"
                  dur="6s"
                  repeatCount="indefinite"
                />
              </stop>
              <stop offset="50%" stopColor="#7F86FF">
                <animate
                  attributeName="stop-color"
                  values="#7F86FF; #F9976F; #FB4566; #6FF9F9; #7F86FF"
                  dur="6s"
                  repeatCount="indefinite"
                />
              </stop>
              <stop offset="75%" stopColor="#6FF9F9">
                <animate
                  attributeName="stop-color"
                  values="#6FF9F9; #7F86FF; #F9976F; #FB4566; #6FF9F9"
                  dur="6s"
                  repeatCount="indefinite"
                />
              </stop>
              <stop offset="100%" stopColor="#F9976F">
                <animate
                  attributeName="stop-color"
                  values="#F9976F; #FB4566; #7F86FF; #6FF9F9; #F9976F"
                  dur="6s"
                  repeatCount="indefinite"
                />
              </stop>
            </linearGradient>
          </defs>
        </motion.svg>
        <motion.img
          className="max-w-[200px] translate-y-[20px] mx-auto mt-auto sm:max-w-[340px] xl:max-w-[370px] col-start-1 row-start-1 sm:translate-y-[30px]"
          src="/hero/yo.png"
          alt="Sebas"
          variants={{
            hidden: { y: 100, opacity: 0 }, // Comienza desde abajo con opacidad 0
            visible: {
              y: 0,
              opacity: 1,
              transition: {
                type: "spring",
                stiffness: 100,
                damping: 10,
                duration: 0.5,
                delay: 0.5,
              }, // Se añade opacidad a la transición
            },
          }}
          initial="hidden"
          animate="visible"
        />
      </div>
      <div className="text-center xl:text-start">
        <p className="font-semibold text-[35px] xl:text-[45px]">
          {description.split("").map((char, index) => (
            <LetterAnimation
              key={index}
              letter={char}
              direction="left" // Aquí todas las letras de la descripción vienen de la izquierda
              delay={index * delayStep}
            />
          ))}
        </p>
      </div>
    </section>
  );
};

export default Hero;
