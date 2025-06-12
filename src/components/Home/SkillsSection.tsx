import React, {
  useState,
  useMemo,
  useRef,
  useEffect,
  useCallback,
} from "react"; // Added useCallback
import { motion, AnimatePresence } from "framer-motion";
import SkillCard from "../UI/SkillCard";
import { skills } from "../../data/skills";
import * as LucideIcons from "lucide-react";

type SkillCategory = "development" | "design" | "other";

const SkillsSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<SkillCategory | "all">(
    "all"
  );
  const [currentPage, setCurrentPage] = useState(0);
  const [cardsPerPage, setCardsPerPage] = useState(12);
  const [isMobile, setIsMobile] = useState(false);

  const carouselRef = useRef<HTMLDivElement>(null);
  const touchStartX = useRef(0); // Ref to store the starting X position of a touch
  const touchEndX = useRef(0); // Ref to store the ending X position of a touch

  const categories = [
    { value: "all", label: "All Skills" },
    { value: "development", label: "Development" },
    { value: "design", label: "Design Tools" },
    { value: "other", label: "Other Tools" },
  ];

  const filteredSkills = useMemo(() => {
    return activeCategory === "all"
      ? skills
      : skills.filter((skill) => skill.category === activeCategory);
  }, [activeCategory]);

  useEffect(() => {
    const handleResize = () => {
      // isMobile check to hide arrows on smaller screens where swipe is expected
      setIsMobile(window.innerWidth < 768); // Consider md breakpoint (768px) for mobile/tablet swiping
      if (window.innerWidth >= 1280) setCardsPerPage(12);
      else if (window.innerWidth >= 1024) setCardsPerPage(10);
      else if (window.innerWidth >= 768) setCardsPerPage(8);
      else if (window.innerWidth >= 640) setCardsPerPage(6);
      else setCardsPerPage(4);
    };

    handleResize(); // Initial
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    setCurrentPage(0);
  }, [activeCategory]);

  const totalPages = Math.ceil(filteredSkills.length / cardsPerPage);

  const handleNextPage = useCallback(() => {
    setCurrentPage((prev) => Math.min(prev + 1, totalPages - 1));
  }, [totalPages]);

  const handlePrevPage = useCallback(() => {
    setCurrentPage((prev) => Math.max(prev - 1, 0));
  }, []);

  const skillsOnCurrentPage = useMemo(() => {
    const start = currentPage * cardsPerPage;
    return filteredSkills.slice(start, start + cardsPerPage);
  }, [filteredSkills, currentPage, cardsPerPage]);

  // --- Touch Event Handlers ---
  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    const minSwipeDistance = 50; // Minimum distance in pixels for a swipe to be recognized
    const distance = touchStartX.current - touchEndX.current;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) {
      handleNextPage();
    } else if (isRightSwipe) {
      handlePrevPage();
    }
  };

  return (
    <section className="relative py-24 bg-gradient-to-br from-primary-50 to-white dark:from-dark-900 dark:to-dark-800 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-extrabold text-dark-900 dark:text-white mb-4">
            My{" "}
            <span className="text-secondary-600 dark:text-primary-300">
              Technical
            </span>{" "}
            Toolkit
          </h2>
          <div className="w-28 h-1.5 bg-secondary-600 dark:bg-primary-300 mx-auto mb-6 rounded-full" />
          <p className="text-base sm:text-xl text-dark-600 dark:text-dark-300 font-light">
            A comprehensive set of proficiencies, from core programming
            languages and robust frameworks to essential development tools and
            creative design platforms.
          </p>
        </motion.div>

        {/* Category Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="flex justify-center mb-16"
        >
          <div
            role="tablist"
            className="grid grid-cols-2 gap-3 sm:flex sm:flex-nowrap sm:overflow-x-auto scrollbar-hide
               bg-white dark:bg-dark-700 p-2.5 rounded-3xl shadow-lg border border-gray-200 dark:border-dark-600"
          >
            {categories.map((cat) => (
              <button
                key={cat.value}
                onClick={() =>
                  setActiveCategory(cat.value as SkillCategory | "all")
                }
                className={`relative px-4 py-2.5 rounded-3xl text-sm sm:text-base font-semibold text-center transition-colors duration-300 whitespace-nowrap ${
                  activeCategory === cat.value
                    ? "text-white"
                    : "text-dark-600 dark:text-gray-200 hover:text-secondary-600 dark:hover:text-primary-300"
                }`}
              >
                {activeCategory === cat.value && (
                  <motion.span
                    layoutId="activeCategoryPill"
                    className="absolute inset-0 bg-secondary-600 dark:bg-primary-300 rounded-3xl -z-1"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{cat.label}</span>
              </button>
            ))}
          </div>
        </motion.div>

        {/* Skills Carousel */}
        <div className="relative">
          {/* Arrows only shown on non-mobile */}
          {!isMobile &&
            totalPages > 1 && ( // Only show arrows if not mobile AND there's more than one page
              <>
                <button
                  onClick={handlePrevPage}
                  disabled={currentPage === 0}
                  className={`absolute -left-2 sm:left-0 top-1/2 -translate-y-1/2 z-20 rounded-full bg-white/80 dark:bg-dark-700/80 shadow-lg border border-gray-200 dark:border-dark-600
                  transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-secondary-600 dark:focus:ring-primary-300
                  ${
                    currentPage === 0
                      ? "opacity-50 cursor-not-allowed"
                      : "opacity-100"
                  }`}
                  aria-label="Previous skills"
                >
                  <LucideIcons.ChevronLeft className="w-6 h-6 text-dark-600 dark:text-gray-200" />
                </button>

                <button
                  onClick={handleNextPage}
                  disabled={currentPage >= totalPages - 1}
                  className={`absolute -right-2 sm:right-0 top-1/2 -translate-y-1/2 z-20 rounded-full bg-white/80 dark:bg-dark-700/80 shadow-lg border border-gray-200 dark:border-dark-600
                  transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-secondary-600 dark:focus:ring-primary-300
                  ${
                    currentPage >= totalPages - 1
                      ? "opacity-50 cursor-not-allowed"
                      : "opacity-100"
                  }`}
                  aria-label="Next skills"
                >
                  <LucideIcons.ChevronRight className="w-6 h-6 text-dark-600 dark:text-gray-200" />
                </button>
              </>
            )}

          <AnimatePresence mode="wait">
            {skillsOnCurrentPage.length > 0 ? (
              <motion.div
                key={activeCategory + currentPage}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5 }}
                ref={carouselRef}
                className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 sm:gap-6 xl:gap-8 px-4 sm:px-6 lg:px-8"
                onTouchStart={isMobile ? handleTouchStart : undefined} // Only enable touch events if on mobile
                onTouchMove={isMobile ? handleTouchMove : undefined}
                onTouchEnd={isMobile ? handleTouchEnd : undefined}
              >
                {skillsOnCurrentPage.map((skill, index) => (
                  <SkillCard key={skill.name} skill={skill} index={index} />
                ))}
              </motion.div>
            ) : (
              <motion.div
                key="no-skills"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="col-span-full text-center py-12 text-dark-600 dark:text-dark-300 text-lg"
              >
                No skills found for this category.
              </motion.div>
            )}
          </AnimatePresence>

          {/* Page Indicators */}
          {totalPages > 1 && (
            <div className="flex justify-center mt-8 space-x-2">
              {[...Array(totalPages)].map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentPage(index)}
                  className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                    currentPage === index
                      ? "bg-secondary-600 dark:bg-primary-300"
                      : "bg-gray-300 dark:bg-dark-600 hover:bg-secondary-300 dark:hover:bg-primary-900/20"
                  }`}
                  aria-label={`Go to skill page ${index + 1}`}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
