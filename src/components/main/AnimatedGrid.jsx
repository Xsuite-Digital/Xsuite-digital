"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

// import { Inter } from "next/font/google";

// const inter = Inter({ subsets: ["latin"] });

const projects = [
  { id: 1, title: "Mobile App Development", category: "Mobile", imageUrl: "/P11.webp" },
  { id: 2, title: "Branding & Marketing", category: "Social Media Marketing", imageUrl: "/P18.webp" },
  { id: 3, title: "Branding & UXUI design", category: "Graphic Designing", imageUrl: "/P17.webp" },
  { id: 4, title: "E-commerce Platform", category: "Full Stack", imageUrl: "/P14.gif" },
];

export default function Home() {
  const [hoveredItem, setHoveredItem] = useState(null);

  return (
    <div className={`min-h-screen bg-black text-white p-8 md:p-16 `}>
      {/* Header Section */}
      <motion.div className="mb-16 md:mb-24" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
        <div className="flex items-center mb-4">
          <motion.div className="h-1 bg-orange-500 mr-4" initial={{ width: 0 }} animate={{ width: 48 }} transition={{ duration: 0.8, delay: 0.2 }}></motion.div>
          <motion.span className="text-sm font-semibold tracking-widest text-orange-500" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay: 0.4 }}>OUR PORTFOLIO</motion.span>
        </div>
        <motion.h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.3 }}>
          Transforming ideas into
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">digital excellence</span>
        </motion.h1>
        <motion.p className="text-xl text-gray-400 max-w-2xl" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.5 }}>
          We craft innovative solutions that drive business growth and enhance user experiences.
        </motion.p>
      </motion.div>

      {/* Project Grid */}
      <motion.div className="grid grid-cols-1 md:grid-cols-2 gap-8" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8, delay: 0.5 }}>
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            className="relative overflow-hidden rounded-2xl cursor-pointer group"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 * index }}
            whileHover={{ scale: 1.02 }}
            onMouseEnter={() => setHoveredItem(project.id)}
            onMouseLeave={() => setHoveredItem(null)}
          >
            {/* Project Image */}
            <div className="relative h-80 md:h-86 bg-gray-800">
              <img src={project.imageUrl} alt={project.title} className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110" />
              {/* Overlay gradient */}
              <motion.div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-60 group-hover:opacity-80" initial={{ opacity: 0.6 }} animate={{ opacity: hoveredItem === project.id ? 0.8 : 0.6 }} transition={{ duration: 0.3 }}></motion.div>
            </div>
            {/* Project Info */}
            <div className="absolute inset-0 flex flex-col justify-end p-8">
              <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.3, delay: 0.1 }}>
                <span className="text-sm font-semibold text-orange-500 mb-2 block">{project.category}</span>
                <h3 className="text-2xl font-bold mb-4 group-hover:text-orange-300 transition-colors">{project.title}</h3>
               
              </motion.div>
            </div>
          </motion.div>
        ))}
      </motion.div>
     
    </div>
  );
}
