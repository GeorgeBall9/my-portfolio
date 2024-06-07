import ProjectCard from '../components/ProjectCard';
import projects from '../utils/projects';
import './ProjectsSection.css';

const ProjectsSection = () => (
  <section className="projects">
    <div className="projects-container">
      <h2>Projects</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            id={project.id}
            date={project.date}
            title={project.title}
            description={project.description}
            link={project.link}
            tech={project.tech}
          />
        ))}
      </div>
    </div>
  </section>
);

export default ProjectsSection;
