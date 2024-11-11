import Link from "next/link";
import Image from "next/image";
import { Card, CardContent, CardFooter, CardHeader } from "./ui/card";
import { useRouter } from "next/navigation";
import { Code, ExternalLink, Github } from "lucide-react";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";

const ProjectCard = ({ project }) => {
  const router = useRouter();

  // Create onClick handler for whole card
  // const handleCardClick = () => {
  //   router.push(`/projectdetails/${project.id}`); // Use ID for unique routing
  // };

  return (
    // <Card className="group overflow-hidden relative">
    //   <CardHeader className="p-0">
    //     {/* image  */}
    //     <div className="relative w-full h-[300px] flex  items-center justify-center bg-tertiary dark:bg-secondary/40 xl:bg-work_project_bg_light xl:dark:bg-work_project_bg_dark xl:bg-[110%] xl:bg-no-repeat">
    //       <Image
    //         className="absolute bottom-0 shadow-2xl"
    //         src={project.image}
    //         width={247}
    //         height={250}
    //         alt=""
    //         priority
    //       />
    //       {/* btn links */}
    //       <div className="flex gap-x-4">
    //         <Link
    //           target="_blank"
    //           href={project.link}
    //           className="bg-secondary w-[54px] h-[54px] rounded-full flex justify-center items-center scale-0 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-200"
    //         >
    //           <Link2Icon className="text-white" />
    //         </Link>
    //         <Link
    //           target="_blank"
    //           href={project.github}
    //           className="bg-secondary w-[54px] h-[54px] rounded-full flex justify-center items-center scale-0 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-300"
    //         >
    //           <Github className="text-white" />
    //         </Link>
    //       </div>
    //     </div>
    //   </CardHeader>
    //   <div className="h-full px-8 py-6">
    //     <Badge className="uppercase text-sm font-medium mb-2 absolute top-4 left-5">
    //       {project.category}
    //     </Badge>
    //     <h4 className="h4 mb-1">{project.name}</h4>
    //     <p className="text-muted-foreground text-lg">{project.description}</p>
    //   </div>
    // </Card>
    <Card className="rounded-[25px] overflow-hidden">
      <div className="relative overflow-hidden">
        <Image
          width={547}
          height={550}
          src={project.image}
          alt={project.name}
          className="w-full aspect-[16/10] object-cover transition-transform duration-300 hover:scale-105"
        />
      </div>
      <CardContent className="p-6 bg-white">
        <h3 className="text-2xl font-bold mb-2 text-black">{project.name}</h3>
        <p className="text-muted-foreground mb-4 leading-relaxed">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2 mb-4">
          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-secondary text-secondary-foreground">
            <Code className="h-4 w-4" />
            <span className="ml-1">{project.category}</span>
          </span>
        </div>
      </CardContent>
      <CardFooter className="p-6 pt-0 bg-white flex flex-wrap gap-3 justify-center sm:justify-between">
        <Button asChild>
          <a href={project.link} target="_blank" rel="noopener noreferrer">
            <ExternalLink className="h-4 w-4 mr-2" />
            Ver proyecto
          </a>
        </Button>
        <Button
          variant="outline"
          className="transition-all duration-300 hover:bg-[#333] hover:text-white"
          asChild
        >
          <a href={project.github} target="_blank" rel="noopener noreferrer">
            <Github className="h-4 w-4 mr-2" />
            Ver repositorio
          </a>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProjectCard;
