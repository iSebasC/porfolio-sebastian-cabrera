import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

const links = [
  { path: "/", name: "Inicio" },
  { path: "/cv", name: "Mi CV" },
  { path: "/projects", name: "Mis Proyectos" },
  { path: "/contact", name: "Contacto" },
];

const Nav = ({
  containerStyles = "",
  linkStyles = "",
  underlineStyles = "absolute left-0 top-full w-full h-[2px] bg-primary",
  closeSheet,
}) => {
  const path = usePathname();

  return (
    <nav className={`${containerStyles}`}>
      {links.map((link, index) => {
        const isActive = link.path === path;

        return (
          <Link
            key={index}
            href={link.path}
            onClick={closeSheet}
            className={`relative capitalize transition-colors duration-200
              ${linkStyles} 
              ${isActive ? "text-primary" : "text-foreground"} 
              hover:text-primary`}
          >
            {isActive && (
              <motion.span
                layoutId="underline"
                initial={{ y: "-100%" }}
                animate={{ y: 0 }}
                transition={{ type: "tween" }}
                className={`${underlineStyles}`}
              />
            )}
            {link.name}
          </Link>
        );
      })}
    </nav>
  );
};

export default Nav;
