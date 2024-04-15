"use client";

import {
  RiLinkedinFill,
  RiGithubFill,
} from "react-icons/ri";

import Link from "next/link";

// icons for the current user and the current user's profile

const icons = [
  {
    path: "https://github.com/iSebasC",
    name: <RiGithubFill />,
  },
  {
    path: "https://www.linkedin.com/in/sebastian-cabrera-alcala/",
    name: <RiLinkedinFill />,
  },
];

const Socials = ({ containerStyles, iconsStyles }) => {
  return (
    <div className={`${containerStyles}`}>
      {icons.map((icon, index) => {
        return (
          <Link href={icon.path} key={index}>
            <div className={`${iconsStyles}`}>{icon.name}</div>
          </Link>
        );
      })}
    </div>
  );
};

export default Socials;
