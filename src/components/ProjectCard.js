import { motion } from 'framer-motion';
import Link from 'next/link';
import './ProjectCard.css';

const ProjectCard = ({ date, title, description, link }) => (
  <Link href={link}>
    <motion.div className="project-card" whileHover={{ scale: 1.05 }}>
      <time>{date}</time>
      <h3>{title}</h3>
      <p>{description}</p>
    </motion.div>
  </Link>
);

export default ProjectCard;
