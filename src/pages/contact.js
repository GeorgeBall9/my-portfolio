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
      <section className="contact-section">
        <h1>Contact Me</h1>
        <ContactForm />
      </section>
    </main>
    <Footer />
  </>
);

export default Contact;
