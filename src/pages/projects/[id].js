import { useRouter } from 'next/router';
import ReactMarkdown from 'react-markdown';
import projects from '../../utils/projects';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import './ProjectPage.css';

const ProjectPage = () => {
  const router = useRouter();
  const { id } = router.query;
  const project = projects.find((project) => project.id === id);

  if (!project) {
    return <p>Project not found</p>;
  }

  return (
    <>
      <Header />
      <main className="project-page">
        <h1>{project.title}</h1>
        <ReactMarkdown className="extended-description">
          {project.extendedDesc}
        </ReactMarkdown>
        <div className="project-images-grid">
          {project.images.map((image, index) => (
            <div key={index} className="image-container">
              <Image src={image.src} alt={`${project.title} image ${index + 1}`}  width={image.width} height={image.height} />
              <p className="image-caption">{image.caption}</p>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
};

export default ProjectPage;
