import Head from "next/head";
import Header from "../components/Header";
import JourneySection from "../components/JourneySection";
import Footer from "../components/Footer";
import { Main } from "next/document";

const Home = () => (
  <>
    <Head>
      <title>My Portfolio</title>
      <meta name="description" content="My personal portfolio website" />
    </Head>
    <Header />
    <main>
      <JourneySection />
      <Footer />
    </main>
  </>
);

export default Home;
