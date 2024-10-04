import React, { StrictMode, useState, useEffect } from "react"; 
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import "./index.css";
import Loader from "./components/Loader.jsx";
import App from "./App.jsx"; 
import Header from "./components/Header/Header.jsx";
import Footer from "./components/Footer/Footer.jsx";

const RootComponent = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false); 
    }, 450);

    return () => clearTimeout(timer); 
  }, []);

  return (
    <>
      {loading && <Loader />} 
      {!loading && (
        <>
          <Header />
          <App />
          <Footer />
        </>
      )}
    </>
  );
};

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <HelmetProvider>
        <RootComponent />
      </HelmetProvider>
    </BrowserRouter>
  </StrictMode>
);
