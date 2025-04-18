"use client";

import { useEffect, useRef, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Linkedin, Quote, ChevronRight } from "lucide-react";

const getTestimonials = async () => {
  const response = await fetch(
    "https://backend-portfolio-production-d539.up.railway.app/api/valoraciones/portfolio"
  );
  const data = await response.json();
  return data;
};

export const Testimonial = () => {
  const [testimonials, setTestimonials] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollRef = useRef(null);

  useEffect(() => {
    const fetchTestimonials = async () => {
      const data = await getTestimonials();
      setTestimonials(data.data);
    };
    fetchTestimonials();
  }, []);

  const scrollToCard = (index) => {
    if (!scrollRef.current || !scrollRef.current.children[index]) return;
    const target = scrollRef.current.children[index];
    scrollRef.current.scrollTo({
      left: target.offsetLeft,
      behavior: "smooth",
    });
  };

  const handleNext = () => {
    const nextIndex =
      currentIndex < testimonials.length - 1 ? currentIndex + 1 : 0;
    scrollToCard(nextIndex);
    setCurrentIndex(nextIndex);
  };

  useEffect(() => {
    if (testimonials.length === 0) return;
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => {
        const nextIndex =
          prevIndex + 1 < testimonials.length ? prevIndex + 1 : 0;
        scrollToCard(nextIndex);
        return nextIndex;
      });
    }, 5000);
    return () => clearInterval(interval);
  }, [testimonials]);

  return (
    <section className="py-20 overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="mb-12 text-left max-w-xl">
          <p className="section-title text-primary mb-4">
            Testimonios
          </p>
          <p className="text-muted-foreground text-sm leading-relaxed">
            Descubre lo que dicen mis clientes y colaboradores sobre el trabajo
            que hemos realizado juntos. Estas experiencias reflejan mi
            compromiso con la calidad y el éxito en cada proyecto.
          </p>
        </div>

        <div className="relative">
          {/* Right Arrow Button */}
          <button
            onClick={handleNext}
            className="hidden md:flex absolute right-[-20px] top-1/2 -translate-y-1/2 z-10 p-3 bg-primary text-white rounded-full shadow hover:scale-110 transition"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          {/* Carousel */}
          <div
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto scroll-smooth snap-x snap-mandatory px-1 hide-scrollbar"
          >
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-full max-w-[500px] h-[355px] snap-start px-2"
              >
                <Card className="w-full h-full bg-card text-card-foreground rounded-xl flex flex-col justify-between border border-border">
                  <CardContent className="p-6 flex flex-col justify-between h-full">
                    <Quote className="w-6 h-6 text-primary mb-4" />
                    <p className="text-muted-foreground mb-6 text-sm leading-relaxed">
                      {testimonial.comentario}
                    </p>
                    <div className="flex items-center gap-4 mt-auto">
                      <div className="w-10 h-10 rounded-full bg-secondary text-secondary-foreground font-bold flex items-center justify-center">
                        {testimonial.nombre_completo.charAt(0)}
                      </div>
                      <div>
                        <p className="font-semibold text-sm text-foreground">
                          {testimonial.nombre_completo}
                        </p>
                        <p className="text-xs text-muted-foreground">
                          {testimonial.area}
                        </p>
                      </div>
                      <a
                        href={testimonial.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="ml-auto"
                      >
                        <Linkedin className="w-5 h-5 text-primary" />
                      </a>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
