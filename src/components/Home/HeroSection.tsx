import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Download } from "lucide-react";
import Typed from "typed.js";
import Button from "../UI/Button";
import hero from "../../asset/hero2.jpg";

const HeroSection: React.FC = () => {
  const typedElement = useRef<HTMLSpanElement | null>(null);

  useEffect(() => {
    const typed = new Typed(typedElement.current!, {
      strings: ["UI/UX Designer", "Creative Thinker", "Problem Solver"],
      typeSpeed: 70,
      backSpeed: 50,
      loop: true,
      showCursor: true,
      cursorChar: "|",
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <section className="relative min-h-screen flex items-center bg-gradient-to-br from-white to-primary-50 dark:from-dark-900 dark:to-dark-800 overflow-hidden py-16 sm:py-20 md:py-0">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute -right-24 -top-24 w-80 h-80 rounded-full bg-primary-300 dark:bg-primary-900/20 blur-3xl opacity-50 xl:w-96 xl:h-96"
          animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.6, 0.5] }}
          transition={{ duration: 8, repeat: Infinity, repeatType: "reverse" }}
        />
        <motion.div
          className="absolute -left-24 bottom-24 w-96 h-96 rounded-full bg-secondary-300 dark:bg-secondary-900/20 blur-3xl opacity-50 xl:w-[400px] xl:h-[400px]"
          animate={{ scale: [1, 1.3, 1], opacity: [0.5, 0.7, 0.5] }}
          transition={{
            duration: 10,
            repeat: Infinity,
            repeatType: "reverse",
            delay: 1,
          }}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
        <div className="flex flex-col-reverse md:flex-row items-center justify-center gap-y-12 md:gap-x-16">
          <div className="w-full md:w-1/2 text-center md:text-left">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <h2 className="text-xl sm:text-2xl font-semibold text-secondary-600 dark:text-primary-400 mb-2 sm:mb-3">
                Hi, I'm Dewmi
              </h2>
              <h1 className="text-4xl sm:text-4xl md:text-4xl lg:text-6xl font-extrabold text-dark-900 dark:text-white leading-tight mb-4 sm:mb-6">
                <span className="text-black dark:text-primary-300">
                  <span ref={typedElement} />
                </span>
              </h1>
              <p className="text-base sm:text-lg lg:text-xl text-dark-600 dark:text-dark-300 mb-8 sm:mb-10 max-w-xl mx-auto md:mx-0 font-light leading-relaxed">
                Crafting beautiful, intuitive interfaces and powerful full-stack
                applications. I transform ideas into exceptional digital
                experiences.
              </p>
              <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-4">
                <Button variant="primary" size="lg" to="/projects">
                  View Projects
                </Button>
                <a
                  href="/Dewmi_resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  download
                  className="inline-flex items-center justify-center px-6 py-3 text-base font-medium border border-gray-300 dark:border-dark-600 text-dark-700 dark:text-dark-300 rounded-md shadow-sm transition-all duration-300 hover:bg-gray-100 dark:hover:bg-dark-700 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-secondary-500 dark:focus:ring-primary-300 focus:ring-offset-2 dark:focus:ring-offset-dark-800"
                >
                  <Download className="w-5 h-5 mr-2" />
                  Download Resume
                </a>
              </div>
            </motion.div>
          </div>

          <div className="w-full md:w-1/2 flex justify-center order-first md:order-last">
            <motion.div
              className="relative p-4 sm:p-6 bg-white dark:bg-dark-700 rounded-full shadow-xl border border-gray-100 dark:border-dark-600"
              initial={{ opacity: 0, scale: 0.7 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            >
              <div className="w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-white dark:border-dark-900 shadow-inner">
                <img
                  src={hero}
                  alt="Dewmi Rajapakshe - UI/UX Designer"
                  className="w-full h-full object-cover object-center"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;