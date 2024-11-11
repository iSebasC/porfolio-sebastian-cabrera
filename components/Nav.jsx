// link (nextjs)
import Link from "next/link";

// next hooks
import { usePathname } from "next/navigation";

// framer motion
import { motion } from "framer-motion";
const links = [
  { path: "/", name: "Inicio" },
  { path: "/cv", name: "Mi CV" },
  { path: "/projects", name: "Mis Proyectos" },
  { path: "/contact", name: "Contacto" },
];

const Nav = ({ containerStyles, linkStyles, underlineStyles, closeSheet }) => {
  const path = usePathname();
  return (
    <nav className={`${containerStyles}`}>
      {links.map((link, index) => {
        return (
          <Link
            onClick={closeSheet}
            href={link.path}
            key={index}
            className={`capitalize ${linkStyles}`}
          >
            {link.path === path && (
              <motion.span
                initial={{ y: "-100%" }}
                animate={{ y: 0 }}
                transition={{ type: "tween" }}
                layoutId="underline"
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
