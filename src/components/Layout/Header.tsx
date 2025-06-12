import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Sun, Moon, Menu, X } from "lucide-react";
import { useTheme } from "../../context/ThemeContext";
import logolight from "../../asset/logolight.png";
import logodark from "../../asset/logodark.png";

const Header: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: "Home", to: "/" },
    { name: "Projects", to: "/projects" },
    { name: "Resume", to: "/resume" },
    { name: "Contact", to: "/contact" },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
    scrollToTop();
  }, [location.pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/90 dark:bg-dark-900/90 backdrop-blur-md shadow-sm py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo & Title */}
          <Link
            to="/"
            onClick={scrollToTop}
            className="flex items-center space-x-2"
          >
            <img
              src={theme === "dark" ? logodark : logolight}
              alt="Logo"
              className="h-10 w-auto object-contain"
            />
            <span className="text-xl font-display font-bold text-dark-800 dark:text-white">
              Dewmi Rajapakshe
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.to}
                className={`text-base font-medium transition-colors ${
                  location.pathname === item.to
                    ? "text-secondary-600 dark:text-primary-500"
                    : "text-dark-600 dark:text-dark-300 hover:text-secondary-600 dark:hover:text-primary-500"
                }`}
              >
                {item.name}
              </Link>
            ))}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full bg-gray-100 dark:bg-dark-800 text-dark-600 dark:text-dark-300 hover:bg-gray-200 dark:hover:bg-dark-700 focus:outline-none focus:ring"
              aria-label={
                theme === "dark"
                  ? "Switch to light mode"
                  : "Switch to dark mode"
              }
            >
              {theme === "dark" ? (
                <Sun className="h-5 w-5" />
              ) : (
                <Moon className="h-5 w-5" />
              )}
            </button>
          </nav>

          {/* Mobile Menu Toggle */}
          <div className="flex items-center space-x-4 md:hidden">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full bg-gray-100 dark:bg-dark-800 text-dark-600 dark:text-dark-300 hover:bg-gray-200 dark:hover:bg-dark-700 focus:outline-none focus:ring"
              aria-label={
                theme === "dark"
                  ? "Switch to light mode"
                  : "Switch to dark mode"
              }
            >
              {theme === "dark" ? (
                <Sun className="h-5 w-5" />
              ) : (
                <Moon className="h-5 w-5" />
              )}
            </button>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-md text-dark-600 dark:text-dark-300 hover:bg-gray-200 dark:hover:bg-dark-800 focus:outline-none focus:ring"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white dark:bg-dark-900 shadow-lg border-t border-gray-200 dark:border-dark-700"
          >
            <nav className="px-6 py-4 flex flex-col space-y-3">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.to}
                  className={`text-base font-medium px-3 py-2 rounded-md transition-colors ${
                    location.pathname === item.to
                      ? "bg-secondary-50 dark:bg-secondary-900/30 text-secondary-600 dark:text-primary-500"
                      : "text-dark-600 dark:text-dark-300 hover:bg-gray-100 dark:hover:bg-dark-800"
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
