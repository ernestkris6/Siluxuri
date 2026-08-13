import ContactForm from "../Components/ContactComponents/ContactForm";
import ContactHero from "../Components/ContactComponents/ContactHero";
import ContactSocials from "../Components/ContactComponents/ContactSocials";
import GetInTouch from "../Components/ContactComponents/GetInTouch";

export default function Contact() {
  return (

      <main>
        <ContactHero />
        <ContactForm />
        <GetInTouch />
        <ContactSocials />
      </main>

  );
}