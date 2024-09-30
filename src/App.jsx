import { Route, Routes } from "react-router-dom";
// import { useEffect } from "react";
import Services from "./pages/Services";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import ScrollToTop from "./components/ScrollToTop";
import About from "./pages/About";
import TermsOfServices from "./components/Footer/TermsOfServices";
import Security from "./components/Footer/Security";
import PrivacyPolicy from "./components/Footer/PrivacyPolicy";

function App() {
 

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Services" element={<Services />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/About" element={<About />} />
        <Route path="/TermsOfServices" element={<TermsOfServices />} />
        <Route path="/Security" element={<Security />} />
        <Route path="/PrivacyPolicy" element={<PrivacyPolicy />} />
      </Routes>
      <ScrollToTop />
    </>
  );
}

export default App;