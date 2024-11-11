import { Card, CardContent } from "@/components/ui/card";
import { Linkedin, Quote } from "lucide-react";

const getTestimonials = async () => {
  const response = await fetch(
    "https://backend-portfolio-production-d539.up.railway.app/api/valoraciones/portfolio"
  );
  const data = await response.json();
  return data;
};
export const Testimonial = async () => {
  const testimonials = await getTestimonials();

  return (
    <section className="py-16 container">
      <div className="container mx-auto px-4">
        <h2 className="section-title mb-8 xl:mb-16 text-center mx-auto pt-2">
          Testimonios
        </h2>
        <p className="subtitle text-center mx-auto mb-8 max-w-[700px]">
          Descubre lo que dicen mis clientes y colaboradores sobre el trabajo
          que hemos realizado juntos. Estas experiencias reflejan mi compromiso
          con la calidad y el éxito en cada proyecto.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.data.map((testimonial, index) => (
            <Card
              key={index}
              className="bg-background border-gray-800/20 dark:border-white/20"
            >
              <CardContent className="p-6">
                <Quote className="h-8 w-8 mb-4" />
                <p className="text-muted-foreground mb-4">
                  {testimonial.comentario}
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center text-primary-foreground font-bold text-xl mr-4 dark:bg-white">
                    {testimonial.nombre_completo.charAt(0)}
                  </div>
                  <div>
                    <p className="font-semibold">
                      {testimonial.nombre_completo}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {testimonial.area}
                    </p>
                  </div>
                </div>
                <a href={testimonial.linkedin} target="_blank">
                  <Linkedin className="h-6 w-6 ml-auto mt-4" />
                </a>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
