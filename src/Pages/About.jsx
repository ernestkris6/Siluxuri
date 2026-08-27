import AboutCta from "../Components/Aboutcomponents/AboutCta";
import AboutHero from "../Components/Aboutcomponents/AboutHero";
import AboutStory from "../Components/Aboutcomponents/AboutStory";
import AboutValues from "../Components/Aboutcomponents/AboutValues";
import AboutWork from "../Components/Aboutcomponents/AboutWork";

export default function About() {
  return (
    <main>
      <AboutHero />
      <AboutStory />
      <AboutValues />
      <AboutWork />
      <AboutCta />
    </main>
  )
}
