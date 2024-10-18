import { StrictMode, lazy, Suspense } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import "./index.css";
import App from "./App.jsx";
import { ToastContainer } from "react-toastify";
// Lazy load components

const Header = lazy(() => import("./components/Header/Header.jsx"));
const Footer = lazy(() => import("./components/Footer/Footer.jsx"));
const Loader = lazy(() => import("./components/Loader.jsx")); // Assuming you have a Loader component
const RootComponent = () => {
  return (
    <>
      <>
        <Suspense fallback={<Loader />}>
        <ToastContainer/>
          <Header />
        </Suspense>
        <App />
        <Suspense>
          <Footer />
        </Suspense>
      </>
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

