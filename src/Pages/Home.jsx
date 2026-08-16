import HomeHero from "../Components/Homecomponents/HomeHero"
import HomeAbout from "../Components/Homecomponents/HomeAbout"
import HomeBrands from "../Components/Homecomponents/HomeBrands"
import HomeServices from "../Components/Homecomponents/HomeServices"

export default function Home() {
  return (
    <div className="">
      <HomeHero/>
      <HomeAbout />
      <HomeServices />
      <HomeBrands />
    </div>
  )
}
