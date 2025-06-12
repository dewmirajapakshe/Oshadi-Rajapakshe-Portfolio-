import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Project } from '../../types/project';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="bg-white dark:bg-dark-800 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 group"
    >
      <div className="relative aspect-video overflow-hidden">
        {/* Changed from <video> to <img> */}
        <img
          src={project.poster} // Use the poster image for the card
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <Link
            to={`/projects/${project.slug}`}
            className="text-white font-medium flex items-center text-sm sm:text-base hover:underline transition-colors"
            aria-label={`View details for ${project.title}`}
          >
            View Details <ArrowRight className="ml-1 h-4 w-4" />
          </Link>
        </div>
      </div>

      <div className="p-4 sm:p-5">
        <h3 className="text-lg sm:text-xl font-semibold text-dark-900 dark:text-white mb-2 leading-tight">
          {project.title}
        </h3>
        <p className="text-dark-600 dark:text-dark-300 text-sm sm:text-base mb-3 leading-relaxed line-clamp-2">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-4">
          {project.tools.map((tool, index) => (
            <span
              key={index}
              className="px-2.5 py-0.5 text-xs font-medium bg-secondary-100 dark:bg-secondary-900/30 text-secondary-800 dark:text-secondary-300 rounded-full transition-colors"
            >
              {tool}
            </span>
          ))}
        </div>

        <Link
          to={`/projects/${project.slug}`}
          className="inline-flex items-center text-secondary-600 dark:text-primary-400 hover:text-secondary-800 dark:hover:text-primary-300 font-medium text-sm sm:text-base group-hover:translate-x-1 transition-transform duration-300"
          aria-label={`View project ${project.title}`}
        >
          View Project <ArrowRight className="ml-1 h-4 w-4" />
        </Link>
      </div>
    </motion.div>
  );
};

export default ProjectCard;