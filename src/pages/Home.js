import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';
import JourneySection from '../components/JourneySection';

const Home = () => (
  <>
    <Head>
      <title>My Portfolio</title>
      <meta name="description" content="My personal portfolio website" />
    </Head>
    <Header />
    <main>
      <JourneySection />
      {/* Add more sections like Blog, About, Contact here */}
    </main>
    <Footer />
  </>
);

export default Home;
