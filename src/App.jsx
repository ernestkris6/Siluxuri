import { BrowserRouter, Route, Routes } from "react-router";
import Navbar from "./UI/Navbar";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Services from "./Pages/Services";
import Contact from "./Pages/Contact";
import Team from "./Pages/Team";
import Terms from "./Pages/Terms";
import TeamDetails from "./Components/TeamComponents/TeamDetails";
import Work from "./Pages/Work";
import CaseStudy from "./Components/Workcomponents/CaseStudy";
import Error from "./Pages/Error";
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

            {/* Works index */}
            <Route path="work" element={<Work />} />

            {/* Individual brand pages */}
            <Route path="/work/:slug" element={<CaseStudy />} />
            
            {/* Team index */}
            <Route path="team" element={<Team />} />
            
            {/* Individual team pages */}
            <Route path="/team/:teamId" element={<TeamDetails />} /> 

            <Route path="contact" element={<Contact />} />
            <Route path="terms" element={<Terms />} />
            <Route path="*" element={<Error />} />
          </Routes>
          <Footer />
        </BrowserRouter>
    </div>
  )
}
