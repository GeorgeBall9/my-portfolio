import { motion } from 'framer-motion';
import projects from '../utils/projects';
import './JourneySection.css';

const JourneySection = () => {
  return (
    <section className="section">
      <div className="journey-container">
        <h2>Hey, I'm George</h2>
        {projects.map((project, index) => (
          <motion.div 
            key={index} 
            className="project-card" 
            whileHover={{ scale: 1.05 }}
          >
            <h3>{project.title}</h3>
            <div className="image-container">
              {project.images.map((image, imgIndex) => (
                <img
                  key={imgIndex}
                  src={image}
                  alt={`${project.title} image ${imgIndex + 1}`}
                />
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default JourneySection;
