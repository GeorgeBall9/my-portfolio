import Head from "next/head";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "../components/About.css";

const About = () => (
  <>
    <Head>
      <title>About Me</title>
    </Head>
    <Header />
    <main className="about-container">
      <section className="about-content">
        <h1>About Me</h1>
        <p>
          Hey, I'm George. I'm an aspiring software developer based in the UK.
          I'm passionate about creating innovative solutions and building
          engaging user experiences. I've recently obtained an MSc Computer
          Science from the Newcastle univerity, where I developed my skills in
          software development and computer science theory. I also obtained a
          BSc in Mathematics with Finance from here as well!
        </p>
        <p>
          My journey in technology started during my studies, where I developed
          a keen interest in programming and software development. Over the
          years, I've honed my skills in front-end and back-end development,
          working with technologies such as Java, Python, React, Firebase, and
          various others.
        </p>
        <p>
          When I'm not coding, I enjoy sports and weight training, playing video games,
          and exploring new places. I'm always eager to learn and grow, both
          personally and professionally.
        </p>
        <p>
          Thank you for visiting my website. Feel free to browse through my
          projects and get in touch if you would like to collaborate or learn
          more about my work.
        </p>
      </section>
    </main>
    <Footer />
  </>
);

export default About;
