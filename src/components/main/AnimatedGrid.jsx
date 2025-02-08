import { motion } from "framer-motion";

const cards = [
  {
    id: 1,
    // title: "Nature Inspired",
    image: "/Architect.webp",
    category: "Design",
    style: "tall",
    // link: "https://example.com/nature-inspired"
  },
  {
    id: 2,
    // title: "Hotel Digital Marketing",
    image: "/terz.webp",
    category: "Social Media Marketing",
    style: "wide",
    // link: "https://example.com/digital-interface"
  },
  // {
  //   id: 3,
  //   title: "Data Visualization",
  //   image: "/PizzaPan.webp",
  //   category: "Analytics",
  //   style: "normal",
  //   // link: "https://example.com/data-visualization"
  // },
  {
    id: 4,
    // title: "Product Photography",
    image: "/Agency.webp",
    category: "Marketing",
    style: "normal",
    // link: "https://example.com/product-photography"
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
};

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 30
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.1, 0.25, 1]
    }
  }
};

const getCardClassName = (style) => {
  const baseClass =
    "relative group overflow-hidden rounded-2xl transition-transform duration-700";
  switch (style) {
    case "tall":
      return `${baseClass} col-span-1 row-span-2 h-[600px]`;
    case "wide":
      return `${baseClass} col-span-2 h-[350px] w-[800px] mb-8`;
    default:
      return `${baseClass} col-span-1 h-[250px] w-[400px] mt-10`;
  }
};

export default function AnimatedGrid() {
  return (
    <div className="min-h-screen bg-black p-8">
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto auto-rows-[300px]"
        variants={containerVariants}
        initial="hidden"
        animate="show"
      >
        {cards.map((card) => (
          <motion.div
            key={card.id}
            className={getCardClassName(card.style)}
            variants={cardVariants}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <div className="relative bg-gradient-to-br from-violet-600/20 to-fuchsia-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

            <img
              src={card.image}
              alt={card.title}
              className=" absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />

            {/* Glowing border effect */}
            <div className="absolute inset-0 border-2 border-transparent group-hover:border-white/20 rounded-2xl transition-all duration-700" />

            {/* Content overlay with glassmorphism */}
            <div className="absolute inset-0 flex flex-col justify-end p-8 translate-y-10 group-hover:translate-y-0 transition-transform duration-700">
              <div className="relative z-10 bg-black/30 backdrop-blur-lg rounded-xl p-6 transform-gpu translate-y-full group-hover:translate-y-0 transition-transform duration-700">
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.4, delay: 0.2 }}
                >
                  <span className="inline-block px-3 py-1 bg-orange-500/20 text-orange-400 text-xs font-medium rounded-full mb-3">
                    {card.category}
                  </span>
                  <h3 className="text-2xl font-bold text-white mb-3">
                    {card.title}
                  </h3>
                  <a
                    href={card.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/btn relative inline-flex items-center gap-2 px-4 py-2 bg-white/10 hover:bg-white/20 text-white text-sm font-medium rounded-lg transition-colors duration-300"
                  >
                    <motion.span
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="inline-flex items-center"
                    >
                      Explore Project
                      <svg
                        className="w-4 h-4 transform transition-transform duration-300 group-hover/btn:translate-x-1"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </motion.span>
                  </a>
                </motion.div>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
