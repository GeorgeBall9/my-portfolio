import Head from 'next/head';
import Header from '../components/Header';
import Introduction from '../components/Introduction';
import ProjectsSection from '../components/ProjectsSection';
import Footer from '../components/Footer';
import '../styles/global.css';

const Home = () => (
  <>
    <Head>
      <title>My Portfolio</title>
      <meta name="description" content="My personal portfolio website" />
    </Head>
    <Header />
    <main>
      <Introduction />
      <ProjectsSection />
    </main>
    <Footer />
  </>
);

export default Home;
