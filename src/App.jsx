import { BrowserRouter, Route, Routes } from "react-router";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Services from "./Pages/Services";
import Contact from "./Pages/Contact";
import Team from "./Pages/Team";
import Error from "./Pages/Error";
import Navbar from "./UI/Navbar";


export default function App() {
  return (
    <div>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />}>Home</Route>
            <Route path="about" element={<About />}>About</Route>
            <Route path="services" element={<Services />}>Services</Route>
            <Route path="contact" element={<Contact />}>Contact</Route>
            <Route path="team" element={<Team />}>Team</Route>
            <Route path="*" element={<Error />}>Error</Route>
          </Routes>
        </BrowserRouter>
    </div>
  )
}
