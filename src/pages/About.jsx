import { Helmet } from "react-helmet-async";
import { useEffect } from "react";
import { motion } from "framer-motion";
import FAQs from "../components/main/FAQs";
import Location from "../components/main/Location";
import CompanyAbout from "../components/main/CompanyAbout";
import Stats from "../components/main/Stats";
import Team from "../components/main/Team";

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  };

  return (
    <div>
      <Helmet>
        <title>About | XSuite Digital</title>
        <meta
          name="description"
          content="Learn more about XSuite Digital's vision, mission, and services."
        />
      </Helmet>

      {/* Hero Section */}
      <div className="bg-black text-white py-16 lg:py-52 relative overflow-hidden ">
        <div className="container mx-auto px-4">
          <div className="relative z-10">
            <h1 className="text-5xl text-center font-bold">About Us</h1>
          </div>
        </div>
        <div className="relative inset-0 ">
              <div className="absolute w-96 h-96 -top-0 -left-0 bg-orange-500/20 rounded-full blur-3xl animate-pulse"></div>
              <div className="absolute w-96 h-96 -bottom-0 -right-0 bg-orange-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
            </div>

      {/* Vision and Mission Section */}
      <div className=" bg-black px-5 py-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
              loading="lazy"
                src="vision.webp"
                alt="Innovation"
                height={200}
                width={200}
                className="w-full h-auto object-cover"
              />
              {/* Floating Cards */}
              <motion.div
                className="absolute -right-8 -bottom-8 bg-orange-500 rounded-xl p-4 shadow-lg w-48"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                <div className="flex items-center gap-2">
                  <div className="h-3 w-3 rounded-full bg-orange-500" />
                  <span className="text-sm font-medium text-black">Innovation First</span>
                </div>
              </motion.div>
              <motion.div
                className="absolute -left-8 -top-8 bg-orange-500 rounded-xl p-4 shadow-lg w-48"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
              >
                <div className="flex items-center gap-2">
                  <div className="h-3 w-3 rounded-full bg-orange-500" />
                  <span className="text-sm font-medium text-black">Future Ready</span>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Right Column */}
          <div className="space-y-12">
            <motion.div className="space-y-6" {...fadeInUp}>
              <div className="inline-block">
                <motion.span
                  className="inline-block text-sm font-semibold text-orange-500 tracking-wider uppercase"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                >
                  Our Vision
                </motion.span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
                Illuminating Pathways to{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-500">
                  Progress
                </span>
              </h2>
              <p className="text-lg text-white leading-relaxed">
                Through visionary innovation and purposeful solutions, we're shaping the future of digital transformation.
              </p>
            </motion.div>

            <motion.div className="space-y-6" {...fadeInUp} transition={{ delay: 0.2 }}>
              <div className="inline-block">
                <motion.span
                  className="inline-block text-sm font-semibold text-orange-400 tracking-wider uppercase"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  Our Mission
                </motion.span>
              </div>
              <div className="space-y-4">
                {[
                  "Reshaping industry standards through dynamic strategies",
                  "Crafting unparalleled brand experiences",
                  "Leveraging extensive experience for optimal solutions",
                ].map((text, index) => (
                  <motion.div
                    key={index}
                    className="p-4 rounded-lg bg-white/5 backdrop-blur-lg border border-white/10 hover:border-white/20 transition-colors"
                    whileHover={{ scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <div className="flex items-center gap-3">
                      <svg
                        className="text-orange-400"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M9 18l6-6-6-6" />
                      </svg>
                      <p className="text-white">{text}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Other Sections */}
      <CompanyAbout />
      <Team />
      {/* <Stats /> */}
      <FAQs />
      {/* <Location /> */}
    </div>
    </div>

  );
};

export default About;

