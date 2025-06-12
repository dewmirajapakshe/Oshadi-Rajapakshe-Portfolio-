import React from "react";
import { Link } from "react-router-dom";
import { Github, Linkedin, Instagram, Facebook, ArrowUp, Mail } from "lucide-react";

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const socialLinks = [
    {
      name: "GitHub",
      icon: <Github className="h-5 w-5" />, // Added explicit size
      href: "https://github.com/dewmirajapakshe",
      bgColor: "bg-gray-700 dark:bg-gray-600", // More neutral, dark mode friendly
      hoverBgColor: "hover:bg-black dark:hover:bg-gray-900", // Specific hover
    },
    {
      name: "LinkedIn",
      icon: <Linkedin className="h-5 w-5" />,
      href: "https://www.linkedin.com/in/dewmi-rajapakshe-914006366",
      bgColor: "bg-[#0A66C2]",
      hoverBgColor: "hover:bg-[#084D92]",
    },
    {
      name: "Instagram",
      icon: <Instagram className="h-5 w-5" />,
      href: "https://www.instagram.com/dewmi_rajapakshe",
      // Using a gradient for Instagram's iconic look
      bgColor: "bg-gradient-to-tr from-yellow-500 via-pink-500 to-purple-600",
      hoverBgColor: "hover:from-yellow-600 hover:via-pink-600 hover:to-purple-700",
    },
    {
      name: "Facebook",
      icon: <Facebook className="h-5 w-5" />,
      href: "https://www.facebook.com/share/1AVXkBchyQ/?mibextid=wwXIfr",
      bgColor: "bg-[#1877F2]",
      hoverBgColor: "hover:bg-[#145CBF]",
    },
  ];

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary-50 dark:bg-dark-800 text-dark-800 dark:text-white py-12 sm:py-16 transition-colors duration-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl"> {/* Added max-w-7xl */}
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-8 md:gap-16"> {/* Adjusted items-start for md and added more gap */}
          {/* Left section: Call to action */}
          <div className="text-center md:text-left">
            <h3 className="text-2xl sm:text-3xl font-extrabold mb-3">Let's Connect!</h3> {/* Larger, bolder text */}
            <p className="text-dark-600 dark:text-dark-300 max-w-md text-base sm:text-lg mb-6"> {/* Responsive text size, adjusted margin */}
              I'm currently open to new opportunities and collaborations. Feel free to reach out!
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center px-6 py-3 text-base font-semibold bg-secondary-600 text-white rounded-full hover:bg-secondary-700 transition-colors duration-300 shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-secondary-500 focus:ring-offset-2 dark:focus:ring-offset-dark-800" // Enhanced button styling
            >
              <Mail className="h-5 w-5 mr-2" /> {/* Larger icon */}
              Contact Me
            </Link>
          </div>

          {/* Right section: Social links & Scroll to top */}
          <div className="flex flex-col items-center md:items-end gap-6 sm:gap-8"> {/* Adjusted gap and alignment */}
            <div className="flex flex-wrap justify-center gap-4"> {/* flex-wrap for social links on small screens */}
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  title={link.name}
                  className={`p-3 rounded-full flex items-center justify-center transition-all duration-300 text-white shadow-md ${link.bgColor} ${link.hoverBgColor}`} // Enhanced social icon styling
                  aria-label={link.name}
                >
                  {link.icon}
                </a>
              ))}
            </div>

            <button
              onClick={scrollToTop}
              className="flex items-center text-sm sm:text-base font-medium text-dark-600 dark:text-dark-300 hover:text-secondary-600 dark:hover:text-primary-300 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-secondary-500 rounded-full px-3 py-1" // Enhanced button styling
              aria-label="Scroll to top"
            >
              Back to top <ArrowUp className="ml-2 h-4 w-4 sm:h-5 sm:w-5" /> {/* Larger arrow icon */}
            </button>
          </div>
        </div>

        {/* Bottom section: Copyright and Footer Navigation */}
        <div className="pt-8 mt-8 border-t border-gray-200 dark:border-dark-700 flex flex-col sm:flex-row justify-between items-center text-center sm:text-left gap-4 sm:gap-0"> {/* Responsive alignment */}
          <p className="text-dark-500 dark:text-dark-400 text-sm">
            &copy; {currentYear} Dewmi Rajapakshe. All rights reserved.
          </p>

          <div className="flex flex-wrap justify-center sm:justify-start gap-x-6 gap-y-2"> {/* flex-wrap for links, more spacing */}
            <Link
              to="/"
              className="text-dark-500 dark:text-dark-400 text-sm hover:text-secondary-600 dark:hover:text-primary-300 transition-colors duration-300"
            >
              Home
            </Link>
            <Link
              to="/projects"
              className="text-dark-500 dark:text-dark-400 text-sm hover:text-secondary-600 dark:hover:text-primary-300 transition-colors duration-300"
            >
              Projects
            </Link>
            <Link
              to="/resume"
              className="text-dark-500 dark:text-dark-400 text-sm hover:text-secondary-600 dark:hover:text-primary-300 transition-colors duration-300"
            >
              Resume
            </Link>
            <Link
              to="/contact"
              className="text-dark-500 dark:text-dark-400 text-sm hover:text-secondary-600 dark:hover:text-primary-300 transition-colors duration-300"
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;