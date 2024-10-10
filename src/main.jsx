import { StrictMode, lazy, Suspense } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import "./index.css";
import App from "./App.jsx";
// Lazy load components

const Header = lazy(() => import("./components/Header/Header.jsx"));
const Footer = lazy(() => import("./components/Footer/Footer.jsx"));
const Loader = lazy(() => import("./components/Loader.jsx")); // Assuming you have a Loader component
const RootComponent = () => {
  return (
    <>
      <>
        <Suspense fallback={<Loader />}>
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

// import  { StrictMode, useState, useEffect, lazy, Suspense } from "react";
// import { createRoot } from "react-dom/client";
// import { BrowserRouter } from "react-router-dom";
// import { HelmetProvider } from "react-helmet-async";
// import "./index.css";
// const  Header = lazy(()=> import("./components/Header/Header.jsx")) ;
// const  Footer = lazy(()=> import("./components/Footer/Footer.jsx")) ;
// import Loader from "./components/Loader.jsx"
// // Lazy load the App component
// const App = lazy(() => import("./App.jsx")); // Lazy loading App component

// const RootComponent = () => {
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setLoading(false);
//     }, 450);

//     return () => clearTimeout(timer);
//   }, []);

//   return (
//     <>
//       {loading && (

//         <Suspense fallback={<Loader />}>
//           <Header />
//           <App />
//           <Footer />
//         </Suspense>
//       )}
//     </>
//   );
// };

// createRoot(document.getElementById("root")).render(
//   <StrictMode>
//     <BrowserRouter>
//       <HelmetProvider>
//         <RootComponent />
//       </HelmetProvider>
//     </BrowserRouter>
//   </StrictMode>
// );

// <Suspense fallback={<Loader />}>
//           <Loader />
//         </Suspense>
//       ) :
