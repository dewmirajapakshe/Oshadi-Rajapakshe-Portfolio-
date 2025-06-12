import React from 'react';
import { motion } from 'framer-motion';
import { Award, Briefcase, GraduationCap } from 'lucide-react';

const AboutSection: React.FC = () => {
  const achievements = [
    {
      icon: <Briefcase className="h-6 w-6" />,
      title: 'Passionate Learner',
      description: 'Actively seeking real-world experience in UI/UX and web development.',
    },
    {
      icon: <Award className="h-6 w-6" />,
      title: 'Academic Projects',
      description: 'Completed as part of university coursework and team initiatives.',
    },
    {
      icon: <GraduationCap className="h-6 w-6" />,
      title: 'BSc (Hons) in Information Technology – SLIIT',
      description: 'Currently an undergraduate specializing in Information Technology.',
    },
  ];

  return (
    <section id="about" className="py-16 sm:py-20 bg-gray-50 dark:bg-dark-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl mx-auto text-center mb-12 sm:mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-extrabold text-dark-900 dark:text-white mb-4 leading-tight tracking-tight">
            About <span className="text-secondary-600 dark:text-primary-300">Me</span>
          </h2>
          <div className="w-28 h-1.5 bg-secondary-600 dark:bg-primary-300 mx-auto mb-6 rounded-full opacity-90"></div>
          <p className="text-base sm:text-xl text-dark-600 dark:text-dark-300 font-light leading-relaxed">
            I am an enthusiastic and dedicated undergraduate currently pursuing a BSc (Hons) in Information Technology at SLIIT. 
            I am actively seeking an internship opportunity in the IT field, with a strong interest in UI/UX design, UI/UX engineering, 
            and web development. My goal is to gain practical experience, contribute meaningfully to projects, and grow into a skilled 
            and respected IT professional. I am particularly passionate about creating user-friendly digital experiences and developing 
            modern, responsive web applications.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="space-y-6 sm:space-y-8"
          >
            <h3 className="text-2xl sm:text-3xl font-bold text-dark-900 dark:text-white mb-4">My Journey</h3>
            <p className="text-dark-700 dark:text-dark-300 text-base sm:text-lg leading-relaxed">
              My academic journey at SLIIT has fueled my passion for UI/UX and full-stack development. 
              I enjoy designing interfaces that are both functional and visually appealing, and I’m eager to apply my creativity 
              and skills to real-world problems.
            </p>
            <p className="text-dark-700 dark:text-dark-300 text-base sm:text-lg leading-relaxed">
              I have hands-on experience in tools like Figma and Adobe XD, and I bring designs to life using React.js, Tailwind CSS, 
              and modern JavaScript frameworks. I also explore backend development using Node.js and MongoDB.
            </p>
            <p className="text-dark-700 dark:text-dark-300 text-base sm:text-lg leading-relaxed">
              Outside of tech, I enjoy exploring design trends, contributing to student communities, and continuously expanding my knowledge 
              to become a well-rounded IT professional.
            </p>
          </motion.div>

          <div className="space-y-6 sm:space-y-8">
            {achievements.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.6 }}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.15 }}
                className="flex items-start bg-white dark:bg-dark-700 p-5 sm:p-6 rounded-lg shadow-lg border border-gray-100 dark:border-dark-700 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="w-12 h-12 sm:w-14 sm:h-14 bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 rounded-full flex items-center justify-center flex-shrink-0 mr-4">
                  {item.icon}
                </div>
                <div>
                  <h4 className="text-lg sm:text-xl font-semibold text-dark-900 dark:text-white mb-1">
                    {item.title}
                  </h4>
                  <p className="text-dark-600 dark:text-dark-400 text-sm sm:text-base leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;