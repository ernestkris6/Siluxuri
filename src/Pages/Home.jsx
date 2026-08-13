// import HomeHero from "../Components/meHero";
import HomeAbout from "../Components/Homecomponents/HomeAbout"
import HomeBrands from "../Components/Homecomponents/HomeBrands"
import HomeHero from "../Components/Homecomponents/HomeHero"
// import HomeServices from "../Components/Homecomponents/HomeServices"

export default function Home() {
  return (
    <div className="bg-white px-3 sm:px-6">
      <HomeHero/>
      <HomeAbout />
      {/* <HomeServices /> */}
      <HomeBrands />
    </div>
  )
}
