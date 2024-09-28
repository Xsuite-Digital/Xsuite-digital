import { Icon } from "@iconify/react/dist/iconify.js";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const ScrollToTop = () => {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const togglevisibility = () => {
      if (window.scrollY > 300) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };
    window.addEventListener("scroll", togglevisibility);
    return () => {
      window.removeEventListener("scroll", togglevisibility);
    };
  }, []);
  const scrolltotop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div>
      <div className=" fixed animate-pulse bottom-4 right-4">
        {visible && (
          <motion.button
            whileHover={{ scale: 1.2 }}
            className="bg-blue-500 flex items-center justify-center w-12 h-12 rounded-full focus:outline-none text-white"
            onClick={scrolltotop}
          >
            <Icon icon="tabler:arrow-merge" />
          </motion.button>
        )}
      </div>
    </div>
  );
};

export default ScrollToTop;
