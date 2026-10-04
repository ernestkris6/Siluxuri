import HomeHero from "../Components/Homecomponents/HomeHero"
import HomeAbout from "../Components/Homecomponents/HomeAbout"
import HomeBrands from "../Components/Homecomponents/HomeBrands"
import HomeServices from "../Components/Homecomponents/HomeServices"
import ServicesMetrics from "../Components/ServicesComponents/ServicesMetrics";

export default function Home() {
  return (
    <main>
      <HomeHero/>
      <HomeAbout />
      <HomeServices />
      <ServicesMetrics />
      {/* <HomeBrands /> */}
    </main>
  )
}
