import Head from 'next/head';
import Header from '../components/Header';
import ContactForm from '../components/ContactForm';
import Footer from '../components/Footer';

const Contact = () => (
  <>
    <Head>
      <title>Contact Me</title>
    </Head>
    <Header />
    <main>
      <ContactForm />
    </main>
    <Footer />
  </>
);

export default Contact;
