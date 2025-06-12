import React from 'react';
import { motion } from 'framer-motion';
import * as LucideIcons from 'lucide-react';
import { Skill } from '../../types'; // Assuming this path is correct

type SkillCategory = 'design' | 'development' | 'other';

interface SkillCardProps {
  skill: Skill;
  index: number;
}

const SkillCard: React.FC<SkillCardProps> = ({ skill, index }) => {
  const LucideIcon =
    (LucideIcons[skill.icon as keyof typeof LucideIcons] as React.ElementType) ||
    (LucideIcons.Code as React.ElementType);

  const categoryStyles: Record<SkillCategory, string> = {
    design: 'group-hover:bg-purple-500/10 dark:group-hover:bg-purple-400/10',
    development: 'group-hover:bg-blue-500/10 dark:group-hover:bg-blue-400/10',
    other: 'group-hover:bg-green-500/10 dark:group-hover:bg-green-400/10',
  };

  const iconColors: Record<SkillCategory, string> = {
    design: 'text-purple-600 dark:text-purple-400',
    development: 'text-blue-600 dark:text-blue-400',
    other: 'text-green-600 dark:text-green-400',
  };

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 50, scale: 0.8 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: -20, scale: 0.9 }}
      transition={{
        opacity: { duration: 0.3, ease: 'easeOut' },
        y: { duration: 0.4, ease: 'easeOut' },
        scale: { duration: 0.4, ease: 'easeOut' },
        delay: index * 0.03,
      }}
      className={`
        relative rounded-2xl p-6 bg-white dark:bg-dark-800 border border-gray-100 dark:border-dark-700
        shadow-md hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 ease-out
        flex flex-col items-center justify-center text-center group cursor-pointer
        ${categoryStyles[skill.category]}
      `}
    >
      <div
        className={`
          mb-4 p-3.5 rounded-full bg-primary-50 dark:bg-dark-700/50 shadow-inner
          transition-colors duration-300 ${iconColors[skill.category]}
        `}
      >
        <LucideIcon className="w-7 h-7" />
      </div>
      <span className="text-base sm:text-lg font-semibold text-dark-800 dark:text-white mt-1">
        {skill.name}
      </span>

      {/* Optional hover glow */}
      <div
        className="absolute inset-0 rounded-2xl pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{
          background:
            'radial-gradient(circle at center, rgba(59,130,246,0.08) 0%, transparent 70%)',
        }}
      />
    </motion.div>
  );
};

export default SkillCard;