import { motion } from "framer-motion";
import Link from "next/link";
import "./ProjectCard.css";
import Image from "next/image";

const techIcons = {
  React: "/images/icons/react.svg",
  Firebase: "/images/icons/database.svg",
  Python: "/images/icons/python.svg",
  "Scikit-learn": "/images/icons/scikit-learn.svg",
  Pandas: "/images/icons/Pandas.svg",
  "Spotify API": "/images/icons/spotify.svg",
  Zustand: "/images/icons/bear.svg",
};

const ProjectCard = ({ date, title, description, link, tech }) => (
  <Link href={link}>
    <motion.div className="project-card" whileHover={{ scale: 1.05 }}>
      <time className="project-date">{date}</time>
      <h3>{title}</h3>
      <p>{description}</p>
      <div className="tech-icons">
        {tech.map((techName, index) => (
          <Image
            key={index}
            src={techIcons[techName]}
            alt={`${techName} Icon`}
            width={200}
            height={200}
            className="tech-icon"
          />
        ))}
      </div>
    </motion.div>
  </Link>
);

export default ProjectCard;
