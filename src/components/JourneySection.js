import { motion } from "framer-motion";
import projects from "../utils/projects";
import "./JourneySection.css";
import Image from "next/image";

const JourneySection = () => {
  return (
    <section className="section">
      <div className="journey-container">
        <h2>Hey, I&apos;m George</h2>
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="project-card"
            whileHover={{ scale: 1.05 }}
          >
            <h3>{project.title}</h3>
            <div className="image-container">
              {project.images.map((image, imgIndex) => (
                <Image
                  key={imgIndex}
                  src={image}
                  alt={`${project.title} image ${imgIndex + 1}`}
                  width={200}
                  height={200}
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
