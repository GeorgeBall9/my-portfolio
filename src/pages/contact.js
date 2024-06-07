import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../components/Contact.css';

const Contact = () => (
  <>
    <Head>
      <title>Contact Me</title>
    </Head>
    <Header />
    <main className="contact-container">
      <section className="contact-content">
        <h1>Contact Me</h1>
        <p>
          You can reach me via email at: <a href="mailto:georgeball14@hotmail.com">georgeball14@hotmail.com</a>
        </p>
      </section>
    </main>
    <Footer />
  </>
);

export default Contact;
