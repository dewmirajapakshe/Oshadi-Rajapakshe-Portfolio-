import React from 'react';
import { motion } from 'framer-motion';
import {
  Phone,
  Mail,
  Github,
  Linkedin,
  Instagram,
  Facebook,
} from 'lucide-react';
import PageContainer from '../components/Layout/PageContainer'; // Ensure this path is correct
import ContactForm from '../components/Contact/ContactForm'; // Ensure this path is correct

const ContactPage: React.FC = () => {
  const contactInfo = [
    {
      icon: <Phone className="h-6 w-6" />,
      title: 'Phone',
      content: '+94 774 203 478',
      href: 'tel:+94774203478',
    },
    {
      icon: <Mail className="h-6 w-6" />,
      title: 'Email',
      content: 'dewmiozhadhi@gmail.com',
      href: 'mailto:dewmiozhadhi@gmail.com',
    },
  ];

  const socialLinks = [
    {
      icon: <Github className="h-6 w-6 text-white" />,
      name: 'GitHub',
      href: 'https://github.com/dewmirajapakshe',
      bgColor: 'bg-gray-800 dark:bg-gray-700', // Adjusted for better dark mode consistency
      hoverColor: 'hover:bg-black dark:hover:bg-gray-900', // Consistent hover for dark/light
    },
    {
      icon: <Linkedin className="h-6 w-6 text-white" />,
      name: 'LinkedIn',
      href: 'https://www.linkedin.com/in/dewmi-rajapakshe-914006366',
      bgColor: 'bg-[#0A66C2]',
      hoverColor: 'hover:bg-[#084D92]', // Slightly darker on hover
    },
    {
      icon: <Instagram className="h-6 w-6 text-white" />,
      name: 'Instagram',
      href: 'https://www.instagram.com/dewmi_rajapakshe',
      bgColor: 'bg-gradient-to-br from-purple-500 via-pink-500 to-orange-500', // Instagram gradient
      hoverColor: 'hover:from-purple-600 hover:via-pink-600 hover:to-orange-600',
    },
    {
      icon: <Facebook className="h-6 w-6 text-white" />,
      name: 'Facebook',
      href: 'https://www.facebook.com/share/1AVXkBchyQ/?mibextid=wwXIfr',
      bgColor: 'bg-[#1877F2]',
      hoverColor: 'hover:bg-[#145CBF]', // Slightly darker on hover
    },
  ];

  return (
    <PageContainer
      title="Contact"
      description="Get in touch with me regarding your project or collaboration opportunities"
    >
      <section className="py-16 sm:py-20 bg-white dark:bg-dark-900 relative overflow-hidden">
        {/* Background blobs/shapes for visual interest */}
        <div className="absolute top-0 left-0 w-72 h-72 bg-secondary-200 dark:bg-secondary-800 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
        <div className="absolute bottom-1/4 right-0 w-64 h-64 bg-primary-200 dark:bg-primary-800 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-purple-200 dark:bg-purple-800 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>


        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-3xl mx-auto text-center mb-12 sm:mb-16"
          >
            <h1 className="text-4xl sm:text-5xl font-extrabold text-dark-900 dark:text-white mb-4 leading-tight tracking-tight">
              Get <span className="text-secondary-600 dark:text-primary-300">In Touch</span>
            </h1>
            <motion.div
              className="w-28 h-1.5 bg-secondary-600 dark:bg-primary-300 mx-auto mb-6 rounded-full opacity-90"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              style={{ transformOrigin: 'center' }} // Changed to center for better animation
            />
            <p className="text-base sm:text-xl text-dark-600 dark:text-dark-300 font-light">
              Have a project in mind or want to collaborate? I'd love to hear
              from you. Feel free to reach out using the form below or through
              my social media channels.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-start"> {/* Adjusted gap and added items-start for better alignment */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }} // Trigger earlier
              transition={{ duration: 0.7, ease: 'easeOut' }}
              className="space-y-10 sm:space-y-12 p-6 sm:p-8 bg-gray-50 dark:bg-dark-800 rounded-xl shadow-lg border border-gray-100 dark:border-dark-700"
            >
              <div>
                <h2 className="text-2xl sm:text-3xl font-bold text-dark-900 dark:text-white mb-6">
                  Contact Information
                </h2>

                <div className="space-y-6">
                  {contactInfo.map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, amount: 0.5 }}
                      transition={{
                        duration: 0.5,
                        delay: 0.1 * index, // Staggered animation
                      }}
                      className="flex items-center group transform transition-transform duration-300 hover:scale-[1.02]" // Centered items and added group for hover effect
                    >
                      <div className="mr-4 p-3 bg-secondary-100 dark:bg-secondary-900/30 rounded-full text-secondary-600 dark:text-secondary-400 flex-shrink-0"> {/* Adjusted background and flex-shrink */}
                        {item.icon}
                      </div>
                      <div>
                        <h3 className="text-lg sm:text-xl font-medium text-dark-900 dark:text-white mb-0.5">
                          {item.title}
                        </h3>
                        <a
                          href={item.href}
                          className="text-dark-600 dark:text-dark-300 text-base sm:text-lg hover:text-secondary-600 dark:hover:text-primary-500 transition-colors duration-300"
                        >
                          {item.content}
                        </a>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              <div>
                <h2 className="text-2xl sm:text-3xl font-bold text-dark-900 dark:text-white mb-6">
                  Connect With Me
                </h2>
                <div className="flex flex-wrap gap-4 justify-center sm:justify-start"> {/* Used flex-wrap and justify-center for smaller screens */}
                  {socialLinks.map((item, index) => (
                    <motion.a
                      key={index}
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      whileHover={{ scale: 1.1, rotate: 5 }} // More pronounced hover
                      viewport={{ once: true, amount: 0.5 }}
                      transition={{
                        duration: 0.5,
                        delay: 0.2 + index * 0.1, // Staggered animation
                        type: 'spring',
                        stiffness: 260,
                        damping: 20,
                      }}
                      className={`p-3 rounded-full shadow-lg flex items-center justify-center transition-all duration-300 ${item.bgColor} ${item.hoverColor}`} // Added flex, items-center, justify-center
                      aria-label={item.name}
                    >
                      {item.icon}
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }} // Trigger earlier
              transition={{ duration: 0.7, ease: 'easeOut' }}
            >
              <ContactForm />
            </motion.div>
          </div>
        </div>
      </section>
      {/* Optional: Add a subtle footer or credits here if part of PageContainer */}
    </PageContainer>
  );
};

export default ContactPage;