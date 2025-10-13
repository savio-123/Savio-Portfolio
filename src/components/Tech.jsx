import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { technologies } from "../constants";
import { SectionWrapper } from "../hoc";
import { BallCanvas } from "./canvas";

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, type: "spring", stiffness: 100 },
  }),
};

const Tech = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const isMobile = windowWidth <= 768;

  const getBallSize = () => (windowWidth <= 1024 ? 2.0 : 2.75);

  // --- Mobile: show grid cards ---
  if (isMobile) {
    return (
      <div className="px-4 py-12 md:px-16 bg-primary">
        <h2 className="mb-8 text-3xl font-bold text-center text-white md:text-4xl">
          Technologies & Skills
        </h2>
        <div className="flex flex-wrap justify-center gap-6">
          {technologies.map((tech, index) => (
            <motion.div
              key={tech.name}
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ amount: 0.25, once: false }}
              variants={cardVariants}
              className="flex items-center justify-center w-24 h-24 transition-transform duration-300 rounded-full shadow-lg cursor-pointer bg-gradient-to-br from-white-100 to-blue-500 hover:scale-110"
            >
              <img
                src={tech.icon}
                alt={tech.name}
                className="object-contain w-12 h-12"
              />
            </motion.div>
          ))}
        </div>
      </div>
    );
  }

  // --- Desktop: show auto-rotating 3D balls ---
  return (
    <div className="px-4 py-1 mt-0 md:px-16 bg-primary">
      <h2 className="mb-8 text-3xl font-bold text-center text-white md:text-4xl">
        Technologies & Skills
      </h2>
      <div className="flex flex-row flex-wrap justify-center gap-10">
        {technologies.map((tech, index) => (
          <div key={tech.name} className="transition-all duration-300 w-28 h-28">
            {/* Pass rotationSpeed to auto-rotate */}
            <BallCanvas icon={tech.icon} size={getBallSize()} rotationSpeed={2} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Tech, "tech");
