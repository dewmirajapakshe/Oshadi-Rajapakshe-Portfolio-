// Define Skill type here if './types' does not exist
export type SkillCategory = 'development' | 'design' | 'other';
export interface Skill {
  name: string;
  icon: string;
  category: SkillCategory;
}

export const skills: Skill[] = [
  // Programming Languages
  { name: 'JavaScript', category: 'development', icon: 'FileJs' }, // Often more specific icon
  { name: 'TypeScript', category: 'development', icon: 'FileTs' },
  { name: 'Python', category: 'development', icon: 'Python' }, // Lucide has Python icon
  { name: 'Java', category: 'development', icon: 'Java' }, // Lucide has Java icon
  { name: 'C++', category: 'development', icon: 'CPlusPlus' }, // Lucide has CPlusPlus icon
  { name: 'C#', category: 'development', icon: 'CSharp' }, // Lucide has CSharp icon
  { name: 'HTML5', category: 'development', icon: 'Html5' },
  { name: 'CSS3', category: 'development', icon: 'Css3' },
  { name: 'SQL', category: 'development', icon: 'Database' },
  { name: 'Kotlin', category: 'development', icon: 'Code' }, // If no specific icon, Code is fine
  { name: 'R', category: 'development', icon: 'BarChart' }, // Good general icon
  { name: 'PHP', category: 'development', icon: 'Php' }, // Lucide has PHP icon
  { name: 'XML', category: 'development', icon: 'Code' }, // Code is a good fallback for XML

  // Frontend Frameworks & Libraries
  { name: 'React', category: 'development', icon: 'React' },
  { name: 'Next.js', category: 'development', icon: 'Nextjs' }, // Check if Lucide has Nextjs, otherwise 'Code'
  { name: 'Tailwind CSS', category: 'development', icon: 'Tailwind' }, // Check if Lucide has Tailwind
  { name: 'Vue.js', category: 'development', icon: 'Vue' }, // Check if Lucide has Vue

  // Backend Technologies
  { name: 'Node.js', category: 'development', icon: 'Nodejs' },
  { name: 'Express.js', category: 'development', icon: 'Server' }, // Good generic icon
  { name: 'Spring Boot', category: 'development', icon: 'Leaf' }, // Common icon for Spring
  { name: 'Django', category: 'development', icon: 'Python' }, // Use Python icon or generic
  { name: 'REST APIs', category: 'development', icon: 'Globe' }, // Represents web services

  // Databases
  { name: 'PostgreSQL', category: 'development', icon: 'Database' },
  { name: 'MySQL', category: 'development', icon: 'Database' },
  { name: 'MongoDB', category: 'development', icon: 'Database' },
  { name: 'SQLite', category: 'development', icon: 'Database' },

  // Cloud Platforms
  { name: 'AWS', category: 'development', icon: 'Cloud' }, // Generic cloud icon
  { name: 'Firebase', category: 'development', icon: 'Fire' },

  // Version Control & CI/CD
  { name: 'Git', category: 'other', icon: 'GitCommit' },
  { name: 'GitHub', category: 'other', icon: 'Github' }, // Lucide has Github icon
  { name: 'GitLab', category: 'other', icon: 'Gitlab' }, // Lucide has Gitlab icon
  { name: 'CI/CD', category: 'other', icon: 'Workflow' }, // Represents pipelines

  // Development Tools & IDEs
  { name: 'VS Code', category: 'other', icon: 'Vscode' }, // Lucide has Vscode icon
  { name: 'IntelliJ IDEA', category: 'other', icon: 'Laptop' }, // Generic laptop if no specific icon
  { name: 'Eclipse', category: 'other', icon: 'Monitor' }, // Generic monitor
  { name: 'Android Studio', category: 'other', icon: 'Android' },
  { name: 'Docker', category: 'other', icon: 'Docker' }, // Lucide has Docker icon
  { name: 'Postman', category: 'other', icon: 'Network' }, // Represents API testing
  { name: 'Jira', category: 'other', icon: 'Kanban' }, // Kanban board represents project management

  // Design & UI/UX Tools
  { name: 'Figma', category: 'design', icon: 'Figma' },
  { name: 'Adobe XD', category: 'design', icon: 'PenTool' }, // PenTool or other generic
  { name: 'Canva', category: 'design', icon: 'Brush' }, // Brush might be better than PenTool
  { name: 'Miro', category: 'design', icon: 'Palette' }, // Represents whiteboarding/collaboration

  // Methodologies & Concepts
  { name: 'Agile/Scrum', category: 'other', icon: 'IterationCcw' },
  { name: 'MVC', category: 'development', icon: 'Layout' }, // MVC is often more dev-specific
  { name: 'MVVM', category: 'development', icon: 'Layout' },


];