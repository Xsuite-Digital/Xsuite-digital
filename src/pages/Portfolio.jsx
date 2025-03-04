import { motion } from "framer-motion"
import AnimatedGrid from "../components/main/AnimatedGrid";
import TrustedPartners from "../components/main/TrustedPartners";


export default function Portfolio() {
  return (
    <>
    <div className="relative min-h-[50vh] bg-black overflow-hidden min-w">
      {/* Background pattern */}
      <div 
        className="absolute inset-0 opacity-50"
        style={{
          backgroundImage: `repeating-linear-gradient(
            45deg,
            transparent,
            transparent 20px,
            rgba(255,255,255,0.03) 20px,
            rgba(255,255,255,0.03) 40px
          )`
        }}
      />

      {/* Main content */}
      <div className="relative z-10 container mx-auto px-4">
        <motion.h1 
          className="text-white text-center  mt-8 text-7xl font-bold pt-20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          Portfolio
        </motion.h1>
      </div>

      {/* Navigation strip */}
      <motion.div 
        className="absolute bottom-0 left-0"
        initial={{ x: "-100%" }}
        animate={{ x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
      >
        <div 
          className="bg-[#FF6600] text-white py-4 px-8 text-lg font-medium"
          style={{
            clipPath: "polygon(0 0, 100% 0, 95% 100%, 0% 100%)"
          }}
        >
          <nav className="flex items-center gap-2">
            <motion.a 
              href="/"
              className="hover:opacity-80 transition-opacity"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Home
            </motion.a>
            <span>/</span>
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              Portfolio
            </motion.span>
          </nav>
        </div>
      </motion.div>


      <div>
      </div>
    </div>
        <AnimatedGrid/>
        <TrustedPartners/>
    </>
  )
}

