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
import { motion } from "framer-motion";
const LetterAnimation = ({ letter, delay }) => {
  const letterVariants = {
    hidden: { opacity: 0, scale: 0.5 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 260,
        damping: 20,
        delay: delay, // Using delay for stagger effect
      },
    },
  };

  return (
    <motion.span
      variants={letterVariants}
      initial="hidden"
      animate="visible"
      // Ensuring each letter is treated individually
    >
      {letter}
    </motion.span>
  );
};
const Hero = () => {
  const name = "Sebastian Cabrera";
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
    <section className="container px-0 grid gap-[3rem] py-[3.5rem] sm:gap-[4rem] xl:items-center xl:grid-cols-3 xl:py-0 xl:min-h-[calc(100vh-88px)]">
      <div className="text-center xl:text-end">
        <h1 className="font-semibold text-[35px] xl:text-[55px]">
          {name.split("").map((char, index) => (
            <LetterAnimation
              key={index}
              letter={char}
              delay={index * delayStep}
            />
          ))}
        </h1>
        <p>Destinado en Lima, Perú</p>
        <div className="flex items-center gap-2 justify-center xl:justify-end">
          <div className="w-[8px] h-[8px] bg-[#98fe7f] rounded-full flex-none" />
          <p>Disponible para un puesto a tiempo completo</p>
        </div>
      </div>
      <div className="grid mb-[20px] sm:mb-[30px]">
        <motion.svg
          viewBox="0 0 1321 1321"
          xmlns="http://www.w3.org/2000/svg"
          width="1em"
          height="1em"
          fill="none"
          className="text-[230px] mx-auto sm:text-[379px] col-start-1 row-start-1 xl:text-[400px]"
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
          src="https://jorisbrianti.fr/_astro/images/Joris.DToCMZOR_Z26QOH5.avif"
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
          <span>D</span>
          <span>i</span>
          <span>s</span>
          <span>e</span>
          <span>ñ</span>
          <span>a</span>
          <span>d</span>
          <span>o</span>
          <span>r</span>
          <span> </span>
          <span>d</span>
          <span>i</span>
          <span>g</span>
          <span>i</span>
          <span>t</span>
          <span>a</span>
          <span>l</span>
          <span> </span>
          <span>y</span>
          <span> </span>
          <span>d</span>
          <span>e</span>
          <span>s</span>
          <span>a</span>
          <span>r</span>
          <span>r</span>
          <span>o</span>
          <span>l</span>
          <span>l</span>
          <span>a</span>
          <span>d</span>
          <span>o</span>
          <span>r</span>
          <span> </span>
          <span>w</span>
          <span>e</span>
          <span>b</span>
        </p>
      </div>
    </section>
  );
};

export default Hero;
