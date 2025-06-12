import React from 'react';
import { motion } from 'framer-motion';
import {
  Calendar,
  GraduationCap,
  Briefcase,
  Download,
} from 'lucide-react';
import PageContainer from '../components/Layout/PageContainer'; // Ensure this path is correct
import Button from '../components/UI/Button'; // Ensure this path is correct

const ResumePage: React.FC = () => {
  const experiences = [
    {
      title: 'Boat Safari Trip Management System (User Management)',
      company: 'Academic Project',
      period: '1st year, 2nd semester coursework',
      description:
        'Responsible for User Management functionality. Developed frontend with HTML5/CSS, backend with PHP for CRUD operations, secure session handling, and input validation. MySQL via phpMyAdmin for database management. Strengthened practical skills in connecting UI with server-side logic. Technologies Used: HTML5, CSS, PHP, phpMyAdmin.',
    },
    {
      title: 'Online e-Channeling System (Doctor Management Module)',
      company: 'Academic Team Project',
      period: '2nd year, 1st semester',
      description:
        'Responsible for Doctor Management module (adding, updating, removing profiles, managing appointment slots). Developed responsive frontend with HTML5/CSS, backend logic with JavaScript. Integrated MySQL database. Project followed MVC architecture. Technologies Used: Java, HTML5, CSS, JavaScript, MVC Architecture.',
    },
    {
      title: 'CEY COIR – Enterprise Management System (Product & Machinery Management)',
      company: 'Academic Project',
      period: 'Details not specified for period but comprehensive enterprise system',
      description:
        'Main responsibility was Product and Machinery Management module. Developed frontend with React.js and Tailwind CSS. Backend built using Express.js and Node.js with RESTful API. MongoDB for secure data storage. Technologies Used: MongoDB, Express.js, React.js, Node.js, MVC Architecture.',
    },
    {
      title: 'Financial Tracker Mobile App (Shared Preference Version)',
      company: 'Personal Project',
      period: 'First Kotlin-based mobile application',
      description:
        'Helped users manage personal finances, add income/expense, view summaries, monitor savings. Utilized Android’s Shared Preferences for lightweight data storage. Implemented minimalistic UI with real-time updates. Technologies Used: Kotlin, Android Studio, MVVM Architecture, Shared Preferences.',
    },
    {
      title: 'Financial Tracker Mobile App (Room Database Version)',
      company: 'Personal Project',
      period: 'Enhanced version of financial tracker',
      description:
        'Uses Room (SQLite abstraction) for persistent transaction history, filtering, data analysis. Kotlin Coroutines for asynchronous database operations. Implemented user onboarding and navigation improvements. Technologies Used: Kotlin, MVVM Architecture, Room Database, SQLite, Kotlin Coroutines.',
    },
    {
      title: 'Nutrient-Market (Ongoing E-commerce Web Platform)',
      company: 'Personal Project',
      period: 'In Progress',
      description:
        'Ongoing e-commerce platform for food and nutritional products. Supports product listing, search, dynamic shopping cart, user authentication. Contributing to frontend design and backend API development. Leveraging Vite for fast development. Emphasizes responsiveness, accessibility, secure user interactions. Technologies Used: MongoDB, Express.js, React with Vite, Node.js, MVC Architecture.',
    },
  ];

  const education = [
    {
      degree: 'BSc (Hons) in Information Technology (Specializing in IT)',
      institution: 'Sri Lanka Institute of Information Technology (SLIIT)',
      period: '2023 – Present (Undergraduate)',
      description:
        'Actively pursuing a specialization in IT. Strong interest in UI/UX design, UI/UX Engineering, and web development. Seeking practical experience and professional growth.',
    },
    {
      degree: 'G.C.E. A/L- 2022(23) & G.C.E. O/L- 2019',
      institution: 'Rajapakshe Central College, Weeraketiya (Physical Science stream)',
      period: '2019 - 2023',
      description:
        'Completed Advanced Level and Ordinary Level examinations in the Physical Science stream.',
    },
    {
      degree: 'Diploma in English',
      institution: 'ICBT, Matara',
      period: 'Details not specified for period',
      description: 'Completed a Diploma in English.',
    },
  ];

  const designSkills = ['UI/UX Design', 'Figma', 'Canva'];

  const developmentSkills = [
    'HTML5', 'CSS', 'JavaScript', 'React.js', 'Node.js',
    'Express.js', 'PHP', 'Java', 'Kotlin', 'Python',
    'C', 'C++', 'SQL', 'MySQL', 'MongoDB',
    'SQLite', 'Tailwind CSS', 'Vite', 'RESTful API'
  ];

  const toolsSkills = [
    'Git', 'GitHub', 'VS Code', 'Eclipse', 'IntelliJ', 'XAMPP',
    'Android Studio', 'R Studio', 'Excel'
  ];

  const architectureSkills = ['MVVM', 'MVC', 'OOP', 'Kotlin Coroutines'];

  const languages = [
    { name: 'English', proficiency: 'Good' },
    { name: 'Sinhala', proficiency: 'Native' },
  ];

  // Helper for skill proficiency width
  const getProficiencyWidth = (proficiency: string) => {
    switch (proficiency) {
      case 'Native': return 'w-full'; // 100%
      case 'Good': return 'w-4/5'; // 80%
      default: return 'w-1/2'; // 50% for 'Basic' or unspecified
    }
  };

  return (
    <PageContainer
      title="Resume"
      description="Professional experience, education, and skills of Dewmi Rajapakshe, an IT undergraduate specializing in UI/UX and web development."
    >
      <section className="py-16 sm:py-20 bg-white dark:bg-dark-900"> 
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl"> 
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 sm:mb-12"> 
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-dark-900 dark:text-white mb-3 sm:mb-4 leading-tight">My Resume</h1> 
              <div className="w-16 h-1.5 bg-secondary-600 dark:bg-primary-300 mb-5 sm:mb-6 rounded-full"></div>
              <p className="text-base sm:text-lg text-dark-700 dark:text-dark-300 max-w-3xl"> 
                A summary of Dewmi Rajapakshe's academic projects, education, and technical skills in UI/UX design, UI/UX Engineering, and web development.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-8 md:mt-0" 
            >
              <a href="/Dewmi_resume.pdf" download>
                <Button variant="primary" size="lg">
                  <Download className="mr-2 h-5 w-5" />
                  Download Resume
                </Button>
              </a>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-12"> 
            <div className="lg:col-span-2">
              {/* Project Experience (adapted from Work Experience) */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="mb-12 sm:mb-16"
              >
                <h2 className="text-2xl sm:text-3xl font-bold text-dark-900 dark:text-white mb-6 flex items-center">
                  <Briefcase className="mr-3 h-6 w-6 text-secondary-600 dark:text-primary-500" />
                  Projects & Experience
                </h2>

                <div className="space-y-8 relative before:absolute before:left-6 md:before:left-1/2 before:-translate-x-1/2 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-dark-300 dark:before:via-dark-700 before:to-transparent">
                  {experiences.map((experience, index) => (
                    <div key={index} className="relative flex items-start group">
                      {/* Circle indicator */}
                      <div className="absolute left-0 top-0 mt-2 z-10 p-2 bg-white dark:bg-dark-800 border border-dark-200 dark:border-dark-700 rounded-full shadow-md flex items-center justify-center">
                        <Calendar className="h-5 w-5 text-secondary-600 dark:text-primary-500" />
                      </div>
                      {/* Content */}
                      <div className="flex-1 ml-14 md:ml-0 md:w-1/2 md:odd:pr-8 md:odd:text-right md:even:pl-8 md:even:text-left">
                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.5, delay: 0.1 * index }}
                          className="bg-gray-50 dark:bg-dark-800 p-5 rounded-lg shadow-sm border border-gray-100 dark:border-dark-700"
                        >
                          <h3 className="text-lg sm:text-xl font-bold text-dark-800 dark:text-white mb-1">
                            {experience.title}
                          </h3>
                          <p className="text-dark-600 dark:text-dark-400 text-sm sm:text-base mb-1">{experience.company}</p>
                          <p className="text-xs sm:text-sm font-medium text-secondary-600 dark:text-primary-500 mb-3">{experience.period}</p>
                          <p className="text-sm text-dark-700 dark:text-dark-300">{experience.description}</p>
                        </motion.div>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Education */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <h2 className="text-2xl sm:text-3xl font-bold text-dark-900 dark:text-white mb-6 flex items-center">
                  <GraduationCap className="mr-3 h-6 w-6 text-secondary-600 dark:text-primary-500" />
                  Education
                </h2>

                <div className="space-y-8 relative before:absolute before:left-6 md:before:left-1/2 before:-translate-x-1/2 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-dark-300 dark:before:via-dark-700 before:to-transparent">
                  {education.map((edu, index) => (
                    <div key={index} className="relative flex items-start group">
                       {/* Circle indicator */}
                       <div className="absolute left-0 top-0 mt-2 z-10 p-2 bg-white dark:bg-dark-800 border border-dark-200 dark:border-dark-700 rounded-full shadow-md flex items-center justify-center">
                        <GraduationCap className="h-5 w-5 text-secondary-600 dark:text-primary-500" />
                      </div>
                      {/* Content */}
                      <div className="flex-1 ml-14 md:ml-0 md:w-1/2 md:odd:pr-8 md:odd:text-right md:even:pl-8 md:even:text-left">
                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.5, delay: 0.1 * index }}
                          className="bg-gray-50 dark:bg-dark-800 p-5 rounded-lg shadow-sm border border-gray-100 dark:border-dark-700"
                        >
                          <h3 className="text-lg sm:text-xl font-bold text-dark-800 dark:text-white mb-1">{edu.degree}</h3>
                          <p className="text-dark-600 dark:text-dark-400 text-sm sm:text-base mb-1">{edu.institution}</p>
                          <p className="text-xs sm:text-sm font-medium text-secondary-600 dark:text-primary-500 mb-3">{edu.period}</p>
                          <p className="text-sm text-dark-700 dark:text-dark-300">{edu.description}</p>
                        </motion.div>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>

            <div>
              {/* Skills */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="mb-10 sm:mb-12"
              >
                <h2 className="text-2xl sm:text-3xl font-bold text-dark-900 dark:text-white mb-6">Skills</h2>

                <div className="space-y-6"> 
                  <div>
                    <h3 className="text-lg font-semibold text-dark-800 dark:text-white mb-3">Design</h3> 
                    <div className="flex flex-wrap gap-2 sm:gap-3"> 
                      {designSkills.map((skill, index) => (
                        <span
                          key={index}
                          className="px-3 py-1.5 bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-300 rounded-full text-sm font-medium" 
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-dark-800 dark:text-white mb-3">Development</h3>
                    <div className="flex flex-wrap gap-2 sm:gap-3">
                      {developmentSkills.map((skill, index) => (
                        <span
                          key={index}
                          className="px-3 py-1.5 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 rounded-full text-sm font-medium"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-dark-800 dark:text-white mb-3">Tools & Platforms</h3>
                    <div className="flex flex-wrap gap-2 sm:gap-3">
                      {toolsSkills.map((skill, index) => (
                        <span
                          key={index}
                          className="px-3 py-1.5 bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 rounded-full text-sm font-medium"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-dark-800 dark:text-white mb-3">Architecture</h3>
                    <div className="flex flex-wrap gap-2 sm:gap-3">
                      {architectureSkills.map((skill, index) => (
                        <span
                          key={index}
                          className="px-3 py-1.5 bg-orange-100 dark:bg-orange-900/30 text-orange-800 dark:text-orange-300 rounded-full text-sm font-medium"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Languages */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.7 }}
              >
                <h2 className="text-2xl sm:text-3xl font-bold text-dark-900 dark:text-white mb-6">Languages</h2>

                <div className="space-y-5"> 
                  {languages.map((lang, index) => (
                    <div key={index}>
                      <div className="flex justify-between items-end mb-1"> 
                        <span className="text-dark-700 dark:text-dark-300 text-base sm:text-lg font-medium">{lang.name}</span> 
                        <span className="text-dark-600 dark:text-dark-400 text-sm sm:text-base">{lang.proficiency}</span> 
                      </div>
                      <div className="w-full bg-gray-200 dark:bg-dark-700 rounded-full h-2">
                        <div
                          className={`bg-secondary-600 dark:bg-primary-300 h-full rounded-full transition-all duration-500 ease-out ${getProficiencyWidth(lang.proficiency)}`} 
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </PageContainer>
  );
};

export default ResumePage;