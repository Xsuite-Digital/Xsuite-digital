import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import About from "./pages/About";
import TermsOfServices from "./components/Footer/TermsOfServices";
import Security from "./components/Footer/Security";
import PrivacyPolicy from "./components/Footer/PrivacyPolicy";
import ChatIcon from "./components/ChatIcon";
import Services from "./pages/Services";
import ExpertiseSection from "./components/main/ExpertiseSection";

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
        {/* <Route path="/ExpertiseSection" element={<ExpertiseSection />} /> */}
      </Routes>
      <ChatIcon />
    </>
  );
}

export default App;
