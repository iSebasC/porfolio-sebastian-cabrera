'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const techStack = [
  { name: 'Next.js', logo: '/tech/nextjs.svg' },
  { name: 'React', logo: '/tech/react.svg' },
  { name: 'Laravel', logo: '/tech/laravel.svg' },
  { name: 'NestJS', logo: '/tech/nest.svg' },
  { name: 'Docker', logo: '/tech/docker.svg' },
  { name: 'TailwindCSS', logo: '/tech/tailwind.svg' },
];

const TechShowcase = () => {
  return (
    <section className="py-10 md:py-16 bg-background">
      <div className="container mx-auto text-center">
        <p className="text-muted-foreground mb-6 text-sm md:text-base">
          Estas son las tecnologías que uso para desarrollar soluciones modernas y escalables
        </p>
        <div className="flex flex-wrap items-center justify-center gap-6 md:gap-10">
          {techStack.map((tech, index) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="opacity-70 hover:opacity-100 transition"
              title={tech.name}
            >
              <Image
                src={tech.logo}
                alt={tech.name}
                width={70}
                height={70}
                className="h-10 md:h-12 w-auto object-contain"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechShowcase;
