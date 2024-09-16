import { Card, CardContent } from "@/components/ui/card";
import { Quote } from "lucide-react";
const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Gestor de proyectos en TechCorp",
    comment:
      "La capacidad de Sebastian para resolver problemas es excepcional. Siempre ha aportado soluciones innovadoras que han superado nuestras expectativas.",
  },
  {
    name: "Mike Chen",
    role: "Desarrollador senior en WebSolutions",
    comment:
      "Trabajar con Sebastian fue un placer. Su trabajo en equipo y su capacidad de comunicación hicieron que nuestra colaboración fuera fluida y productiva.",
  },
  {
    name: "Emily Rodriguez",
    role: "Director Técnico de StartupX",
    comment:
      "La calidad del código de Sebastian es excepcional. Es limpio, bien documentado y fácil de mantener. Es un verdadero profesional.",
  },
  {
    name: "David Lee",
    role: "Propietario de producto en InnovateTech",
    comment:
      "Sebastian tiene un don para cumplir plazos ajustados sin comprometer la calidad. Su ética de trabajo es realmente encomiable.",
  },
];

export const Testimonial = () => {
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
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="bg-background border-gray-800/20 dark:border-white/20"
            >
              <CardContent className="p-6">
                <Quote className="h-8 w-8 mb-4" />
                <p className="text-muted-foreground mb-4">
                  {testimonial.comment}
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center text-primary-foreground font-bold text-xl mr-4 dark:bg-white">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
