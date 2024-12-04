import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import About from "./pages/About";
import TermsOfServices from "./components/Footer/TermsOfServices";
import Security from "./components/Footer/Security";
import PrivacyPolicy from "./components/Footer/PrivacyPolicy";
import ChatIcon from "./components/ChatIcon";
import Services from "./pages/Services";
import ServiceDetails from "./components/main/SubServices/ServicesDetails";
import PackageDetails from "./pages/PackageDetails";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Services" element={<Services />} />
        <Route path="/Services/:id" element={<ServiceDetails />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/About" element={<About />} />
        <Route path="/TermsOfServices" element={<TermsOfServices />} />
        <Route path="/Security" element={<Security />} />
        <Route path="/PrivacyPolicy" element={<PrivacyPolicy />} />
        <Route path="/PackageDetails" element={<PackageDetails />} />
      </Routes>
      <ChatIcon />
    </>
  );
}

export default App;
