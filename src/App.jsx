import { BrowserRouter, Route, Routes } from "react-router";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Services from "./Pages/Services";
import Contact from "./Pages/Contact";
import Team from "./Pages/Team";
import Logo from "./UI/Logo";

export default function App() {
  return (
    <div>
        <BrowserRouter>
        <Logo />
          <Routes>
            <Route path="/" element={<Home />}>Home</Route>
            <Route path="about" element={<About />}>About</Route>
            <Route path="services" element={<Services />}>Services</Route>
            <Route path="team" element={<Team />}>Team</Route>
            <Route path="contact" element={<Contact />}>Contact</Route>
          </Routes>
        </BrowserRouter>
    </div>
  )
}
