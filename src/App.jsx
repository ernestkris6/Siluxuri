import { BrowserRouter, Route, Routes } from "react-router";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Services from "./Pages/Services";
import Contact from "./Pages/Contact";
import Team from "./Pages/Team";
import Terms from "./Pages/Terms";
import TeamDetails from "./Components/TeamComponents/TeamDetails";
import Error from "./Pages/Error";
import Navbar from "./UI/Navbar";
import Footer from "./UI/Footer";
import ScrollToTop from "./ScrollToTop";


// /menu/:category/:foodId"

export default function App() {
  return (
    <div> 
        <BrowserRouter>
        <ScrollToTop />
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="services" element={<Services />} />
            <Route path="contact" element={<Contact />} />
            <Route path="team" element={<Team />} />
            <Route path="/team/:teamId" element={<TeamDetails />} /> 
            <Route path="terms" element={<Terms />} />
            <Route path="*" element={<Error />} />
          </Routes>
          <Footer />
        </BrowserRouter>
    </div>
  )
}
