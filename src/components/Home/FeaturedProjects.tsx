import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Github } from 'lucide-react';
import ProjectCard from '../UI/ProjectCard';
import { projects } from '../../data/projects';

const FeaturedProjects: React.FC = () => {
  const featuredProjects = projects.slice(0, 3);

  return (
    <section className="py-16 sm:py-20 bg-gray-50 dark:bg-dark-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between md:items-center gap-y-6 mb-12 sm:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.7 }}
            className="max-w-2xl"
          >
            <h2 className="text-3xl sm:text-4xl font-extrabold text-dark-900 dark:text-white mb-3">
              Featured <span className="text-secondary-600 dark:text-primary-300">Projects</span>
            </h2>
            <div className="w-28 h-1.5 bg-secondary-600 dark:bg-primary-300 mb-5 rounded-full"></div>
            <p className="text-base sm:text-lg text-dark-700 dark:text-dark-300 font-light leading-relaxed">
              A selection of my recent work in UI/UX design and full-stack development.
              Each project represents unique challenges and solutions.
            </p>
          </motion.div>

          <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center md:justify-end">
            <Link
              to="/projects"
              className="inline-flex items-center justify-center px-6 py-3 text-base font-medium rounded-full
                         bg-secondary-600 text-white hover:bg-secondary-700
                         shadow-md hover:shadow-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-secondary-500 focus:ring-offset-2 dark:focus:ring-offset-dark-800"
            >
              View All Projects <ArrowRight className="ml-2 h-5 w-5" />
            </Link>

            <a
              href="https://github.com/dewmirajapakshe?tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 py-3 text-base font-medium rounded-full
                         border border-gray-300 dark:border-600 text-dark-700 dark:text-dark-300
                         hover:bg-gray-100 dark:hover:bg-dark-700 shadow-md hover:shadow-lg
                         transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-secondary-500 dark:focus:ring-primary-300 focus:ring-offset-2 dark:focus:ring-offset-dark-800"
              aria-label="See my projects on GitHub"
            >
              <Github className="w-5 h-5 mr-2" />
              Projects on GitHub
            </a>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 xl:gap-10"
        >
          {featuredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedProjects;