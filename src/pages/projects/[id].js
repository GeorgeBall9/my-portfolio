import React, { useState } from "react";
import { useRouter } from "next/router";
import ReactMarkdown from "react-markdown";
import projects from "../../utils/projects";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import "./ProjectPage.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';


import Image from "next/image";

const ProjectPage = () => {
  const router = useRouter();
  const { id } = router.query;
  const project = projects.find((project) => project.id === id);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  if (!project) {
    return <p>Project not found</p>;
  }

  const handleNextImage = () => {
    setCurrentImageIndex(
      (prevIndex) => (prevIndex + 1) % project.images.length
    );
  };

  const handlePreviousImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? project.images.length - 1 : prevIndex - 1
    );
  };

  const currentImage = project.images[currentImageIndex];

  return (
    <>
      <Header />
      <main className="project-page">
        <h1>{project.title}</h1>
        <ReactMarkdown className="extended-description">
          {project.extendedDesc}
        </ReactMarkdown>
        <div className="project-slideshow">
          <div className="image-container">
            <button
              onClick={handlePreviousImage}
              className="slideshow-button previous"
            >
              <FontAwesomeIcon icon={faArrowLeft}/>
            </button>
            <Image
              src={currentImage.src}
              alt={`${project.title} image ${currentImageIndex + 1}`}
              width={currentImage.width}
              height={currentImage.height}
            />
            <button onClick={handleNextImage} className="slideshow-button next">
            <FontAwesomeIcon icon={faArrowRight}/>
            </button>
            <p className="image-caption">{currentImage.caption}</p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default ProjectPage;
