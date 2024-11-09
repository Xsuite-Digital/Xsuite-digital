import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import About from "./pages/About";
import TermsOfServices from "./components/Footer/TermsOfServices";
import Security from "./components/Footer/Security";
import PrivacyPolicy from "./components/Footer/PrivacyPolicy";
import ChatIcon from "./components/ChatIcon";
import Services from "./pages/Services";
import PackageDetails from "./pages/PackageDetails";
import ServicesPage from "./components/main/ServicesPage";
import {servicesData} from "./components/main/Helpers/Data"
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
        <Route path="PackageDetails" element={<PackageDetails />} />
        {servicesData.map((service, idx) => (
          <Route
            key={idx}
            path={`/services/${service.path}`}
            element={<ServicesPage title={service.name} imgSrc={service.imgSrc} description={service.description} />}
          />
        ))}
      </Routes>
      <ChatIcon />
    </>
  );
}

export default App;