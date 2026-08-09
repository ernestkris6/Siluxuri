// import HomeHero from "../Components/meHero";
import HomeAbout from "../Components/Homecomponents/HomeAbout"
import HomeHero from "../Components/Homecomponents/HomeHero"

export default function Home() {
  return (
    <div className="bg-white px-3 sm:px-6">
      <HomeHero/>
      <HomeAbout />
    </div>
  )
}
