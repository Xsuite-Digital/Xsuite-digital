import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import About from "./pages/About";
import TermsOfServices from "./components/Footer/TermsOfServices";
import Security from "./components/Footer/Security";
import PrivacyPolicy from "./components/Footer/PrivacyPolicy";
import ChatIcon from "./components/ChatIcon";
import Services from "./pages/Services";
<<<<<<< HEAD
import ExpertiseSection from "./components/main/ExpertiseSection";
=======
>>>>>>> bfc73ff99b1eb1fa9c0668807858bd06a7da927b

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
<<<<<<< HEAD
        {/* <Route path="/ExpertiseSection" element={<ExpertiseSection />} /> */}
      </Routes>
      <ChatIcon/>
=======
      </Routes>
      <ChatIcon />
>>>>>>> bfc73ff99b1eb1fa9c0668807858bd06a7da927b
    </>
  );
}

export default App;
