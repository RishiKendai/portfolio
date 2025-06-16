import ContactForm from '../components/ContactForm';
import ContactInfo from '../components/ContactInfo';
import lazyLoad from '../lazyLoad';
import './contact.css';

const Toaster = lazyLoad(() => import('sonner'), 'Toaster')

function Contact() {
  return (
    <>
      <title>Contact | Rishikendai Portfolio</title>
      <meta property="og:title" content="Contacts | Rishikesh K M" />
      <meta name="twitter:title" content="Contacts | Rishikesh K M" />
      <link rel="canonical" href="https://yourdomain.com/contact" />
      <section
        aria-labelledby="contact-heading"
        className="flex-1 flex justify-center px-4  py-6 md:py-0"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 w-full max-w-5xl">
          <ContactForm />
          <ContactInfo />
        </div>
      </section>
      <Toaster position="top-center" richColors={true} />
    </>
  );
}

export default Contact;
