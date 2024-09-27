import { Route, Routes, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Services from "./pages/Services";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import ScrollToTop from "./components/ScrollToTop";
import About from "./pages/About";

function App() {
  const location = useLocation();

  useEffect(() => {
    
    const baseTitle = "X Digital Suite";

    switch (location.pathname) {
      case "/":
        document.title = `Home | ${baseTitle}`;
        break;
      case "/Home":
        document.title = `Home | ${baseTitle}`;
        break;
      case "/Services":
        document.title = `Services | ${baseTitle}`;
        break;
      case "/Contact":
        document.title = `Contact | ${baseTitle}`;
        break;
      case "/About":
        document.title = `About | ${baseTitle}`;
        break;
      default:
        document.title = baseTitle;
    }
  }, [location]);
  
  return (
    <>
    
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Services" element={<Services />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/About" element={<About />} />
      </Routes>
      <ScrollToTop />
    </>
  );
}

export default App;
