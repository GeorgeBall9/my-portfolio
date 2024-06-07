import { motion } from 'framer-motion';
import Link from 'next/link';
import {
  SiReact,
  SiFirebase,
  SiPython,
  SiScikitlearn,
  SiPandas,
  SiSpotify,
} from 'react-icons/si';
import './ProjectCard.css';

const techIcons = {
  React: <SiReact />,
  Firebase: <SiFirebase />,
  Python: <SiPython />,
  'Scikit-learn': <SiScikitlearn />,
  Pandas: <SiPandas />,
  'Spotify API': <SiSpotify />,
};

const ProjectCard = ({ date, title, description, link, tech }) => (
  <Link href={link}>
    <motion.div className="project-card" whileHover={{ scale: 1.05 }}>
      <time className="project-date">{date}</time>
      <h3>{title}</h3>
      <p>{description}</p>
      <div className="tech-icons">
        {tech.map((techName, index) => (
          <span key={index} className="tech-icon">
            {techIcons[techName]}
          </span>
        ))}
      </div>
    </motion.div>
  </Link>
);

export default ProjectCard;
