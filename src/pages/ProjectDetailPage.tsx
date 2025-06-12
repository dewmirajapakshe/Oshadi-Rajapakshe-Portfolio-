import React, { useEffect, useState, useMemo } from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, Github, ExternalLink, Tag, PlayCircle } from "lucide-react";
import PageContainer from "../components/Layout/PageContainer";
import Button from "../components/UI/Button";
import { projects } from "../data/projects";
import { Project } from "../types";
import { marked } from "marked";

// Lightbox Imports
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import Video from "yet-another-react-lightbox/plugins/video";

// Define custom Slide type (if not imported from library)
type Slide =
  | {
      type: "video";
      sources: { src: string; type: string }[];
      poster?: string;
    }
  | {
      type: "image";
      src: string;
      alt: string;
    };

const ProjectDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const [project, setProject] = useState<Project | null>(null);
  const [htmlContent, setHtmlContent] = useState("");

  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  useEffect(() => {
    const foundProject = projects.find((p) => p.slug === slug);
    setProject(foundProject || null);

    if (foundProject?.content) {
      const parseMarkdown = async () => {
        const html = await marked(foundProject.content);
        setHtmlContent(html);
      };
      parseMarkdown();
    } else {
      setHtmlContent("");
    }
  }, [slug]);

  const slides: Slide[] = useMemo(() => {
    if (!project) return [];

    const galleryImages: Slide[] = project.images.map((img) => ({
      type: "image",
      src: img,
      alt: project.title,
    }));

    const videoSlide: Slide | null = project.videoThumbnail
      ? {
          type: "video",
          sources: [{ src: project.videoThumbnail, type: "video/mp4" }],
          poster: project.poster || project.images[0],
        }
      : null;

    return videoSlide ? [videoSlide, ...galleryImages] : galleryImages;
  }, [project]);

  if (!project) {
    return (
      <PageContainer title="Project Not Found">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="min-h-[60vh] flex flex-col items-center justify-center text-center px-4 sm:px-6"
        >
          <h1 className="text-3xl sm:text-4xl font-bold text-dark-900 dark:text-white mb-4">Project Not Found</h1>
          <p className="text-base sm:text-lg text-dark-600 dark:text-dark-300 mb-8 max-w-md">
            The project you're looking for doesn't exist or has been removed.
          </p>
          <Button to="/projects" variant="primary">
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Projects
          </Button>
        </motion.div>
      </PageContainer>
    );
  }

  return (
    <PageContainer title={project.title} description={project.description}>
      <article>
        {/* HERO SECTION */}
        <div className="relative h-[300px] sm:h-[400px] md:h-[450px] lg:h-[550px] overflow-hidden bg-gray-900">
          <img
            src={project.images[0]}
            alt={project.title}
            className="w-full h-full object-cover opacity-70"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent flex items-end">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 pb-8 md:pb-12 pt-24 sm:pt-0 max-w-5xl">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <Link
                  to="/projects"
                  className="inline-flex items-center text-white/80 hover:text-white transition-colors mb-3 sm:mb-4 text-sm sm:text-base"
                >
                  <ArrowLeft className="mr-2 h-4 w-4" /> Back to Projects
                </Link>
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-3 sm:mb-4 leading-tight">
                  {project.title}
                </h1>
                <p className="text-base sm:text-lg md:text-xl text-white/90 mb-5 sm:mb-6 font-light leading-relaxed max-w-3xl">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 sm:gap-3">
                  {project.tools.map((tool, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-white/15 text-white rounded-full text-xs sm:text-sm backdrop-blur-sm font-medium"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* MAIN SECTION */}
        <div className="py-16 sm:py-20 bg-white dark:bg-dark-900">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <div className="grid grid-cols-1 gap-10 lg:grid-cols-3 lg:gap-16 items-start">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="lg:col-span-2 order-2 lg:order-1"
              >
                {/* VIDEO */}
                {project.videoThumbnail && (
                  <div className="mb-12 sm:mb-16">
                    <h3 className="text-2xl sm:text-3xl font-bold mb-6 text-dark-900 dark:text-white">
                      Project Video
                    </h3>
                    <div
                      className="relative w-full overflow-hidden rounded-lg shadow-xl aspect-video bg-black cursor-pointer group"
                      onClick={() => {
                        setLightboxIndex(0);
                        setLightboxOpen(true);
                      }}
                    >
                      <video
                        className="w-full h-full object-contain"
                        controls={false}
                        loop
                        playsInline
                        muted
                        poster={project.poster || project.images[0]}
                      >
                        <source src={project.videoThumbnail} type="video/mp4" />
                        Your browser does not support the video tag.
                      </video>
                      <div className="absolute inset-0 flex items-center justify-center bg-black/40 group-hover:bg-black/20 transition-all duration-300">
                        <PlayCircle className="w-16 h-16 text-white/90 group-hover:scale-110 transition-transform duration-300" />
                      </div>
                    </div>
                  </div>
                )}

                {/* MARKDOWN */}
                <div
                  className="prose prose-base sm:prose-lg dark:prose-invert max-w-none prose-h1:text-3xl prose-h2:text-2xl prose-h3:text-xl prose-a:text-secondary-600 dark:prose-a:text-primary-300"
                  dangerouslySetInnerHTML={{ __html: htmlContent }}
                />

                {/* GALLERY */}
                <div className="mt-12 sm:mt-16">
                  <h3 className="text-2xl sm:text-3xl font-bold mb-6 text-dark-900 dark:text-white">
                    Project Gallery
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
                    {project.images.map((image, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true, amount: 0.4 }}
                        transition={{ duration: 0.5, delay: 0.1 * index }}
                        className="rounded-lg overflow-hidden shadow-md group transition duration-300 hover:scale-[1.01] cursor-pointer"
                        onClick={() => {
                          const imageIndex = project.videoThumbnail ? index + 1 : index;
                          setLightboxIndex(imageIndex);
                          setLightboxOpen(true);
                        }}
                      >
                        <img
                          src={image}
                          alt={`${project.title} - ${index + 1}`}
                          className="w-full h-auto object-cover max-h-[400px] rounded-md"
                        />
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* FEATURES */}
                {project.features && (
                  <div className="mt-12 sm:mt-16">
                    <h3 className="text-2xl sm:text-3xl font-bold mb-6 text-dark-900 dark:text-white">
                      Key Features
                    </h3>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 text-base sm:text-lg">
                      {project.features.map((feature, index) => (
                        <li key={index} className="flex items-start">
                          <span className="mr-2 mt-1 text-secondary-600 dark:text-primary-500">
                            <Tag className="h-5 w-5" />
                          </span>
                          <span className="text-dark-700 dark:text-dark-300">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </motion.div>

              {/* SIDEBAR */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="lg:col-span-1 order-1 lg:order-2"
              >
                <div className="bg-gray-50 dark:bg-dark-800 rounded-lg p-6 sm:p-8 sticky top-24 z-20">
                  <SidebarContent project={project} />
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </article>

      {/* LIGHTBOX */}
      {project && (
        <Lightbox
          open={lightboxOpen}
          close={() => setLightboxOpen(false)}
          slides={slides}
          index={lightboxIndex}
          plugins={[Video]}
        />
      )}
    </PageContainer>
  );
};

// SIDEBAR COMPONENT
const SidebarContent: React.FC<{ project: Project }> = ({ project }) => (
  <>
    <h3 className="text-xl sm:text-2xl font-bold mb-6 text-dark-900 dark:text-white">
      Project Details
    </h3>
    <div className="mb-6">
      <h4 className="text-sm sm:text-base uppercase text-dark-500 dark:text-dark-400 mb-2 font-semibold">
        Technologies Used
      </h4>
      <div className="flex flex-wrap gap-2">
        {project.tools.map((tool, index) => (
          <span
            key={index}
            className="px-3 py-1 bg-secondary-100 dark:bg-secondary-900/30 text-secondary-800 dark:text-secondary-300 rounded-full text-sm font-medium"
          >
            {tool}
          </span>
        ))}
      </div>
    </div>
    <div className="border-t border-gray-200 dark:border-dark-700 pt-6 mb-6">
      <h4 className="text-sm sm:text-base uppercase text-dark-500 dark:text-dark-400 mb-4 font-semibold">
        Project Links
      </h4>
      <div className="space-y-3">
        {project.githubLink && (
          <a
            href={project.githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-dark-700 dark:text-dark-300 hover:text-secondary-600 dark:hover:text-primary-500 transition-colors text-base sm:text-lg"
          >
            <Github className="mr-2 h-5 w-5" />
            View Source Code
          </a>
        )}
        {project.link && (
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-dark-700 dark:text-dark-300 hover:text-secondary-600 dark:hover:text-primary-500 transition-colors text-base sm:text-lg"
          >
            <ExternalLink className="mr-2 h-5 w-5" />
            Live Demo
          </a>
        )}
      </div>
    </div>
    <div className="border-t border-gray-200 dark:border-dark-700 pt-6">
      <Button to="/contact" variant="primary" className="w-full justify-center">
        Contact Me
      </Button>
    </div>
  </>
);

export default ProjectDetailPage;
