import React from 'react';
import PageContainer from '../components/Layout/PageContainer';
import HeroSection from '../components/Home/HeroSection';
import AboutSection from '../components/Home/AboutSection';
import SkillsSection from '../components/Home/SkillsSection';
import FeaturedProjects from '../components/Home/FeaturedProjects';

const HomePage: React.FC = () => {
  return (
    <PageContainer 
      title="Home" 
      description="UI/UX Designer & Full-Stack Developer Portfolio showcasing projects and skills"
    >
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <FeaturedProjects />
    </PageContainer>
  );
};

export default HomePage;