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
          Hey, I&apos;m George. I&apos;m an aspiring software developer based in the UK.
          I&apos;m passionate about creating innovative solutions and building
          engaging user experiences. I&apos;ve recently obtained an MSc in Computer
          Science from Newcastle University, where I developed my skills in
          software development and computer science theory. I also obtained a
          BSc in Mathematics with Finance from there as well!
        </p>
        <p>
          My journey in technology started during my studies, where I developed
          a keen interest in programming and software development. Over the
          years, I&apos;ve honed my skills in front-end and back-end development,
          working with technologies such as Java, Python, React, Firebase, and
          various others.
        </p>
        <p>
          When I&apos;m not coding, I enjoy sports and weight training,
          and exploring new places. I&apos;m always eager to learn and grow, both
          personally and professionally.
        </p>
        <p>
          Thank you for visiting my website. Feel free to browse through my
          projects and get in touch if you would like to collaborate or learn
          more about my work.
        </p>
      </section>
      <section className="tech-stack">
        <h2>Tech Stack Used for This Website</h2>
        <p>
          This website was built using <strong>Next.js</strong>, a powerful
          React framework that enables server-side rendering and static site
          generation. Next.js provides a seamless developer experience with
          built-in routing, API routes, and extensive support for modern web
          development practices.
        </p>
        <p>
          For deployment, the site is hosted on <strong>Vercel</strong>, a platform
          optimized for Next.js applications. Vercel offers automatic deployments,
          serverless functions, and a global CDN, ensuring fast and reliable
          performance.
        </p>
        <p>
          The combination of Next.js and Vercel allows for rapid development and
          deployment, making it easier to maintain and scale the website as needed.
        </p>
      </section>
    </main>
    <Footer />
  </>
);

export default About;
