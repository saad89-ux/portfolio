import ThemeToggle from "./ThemeToggle";
import  StarBackground  from "./starBackground";
import Navbar from "./Navbar";
import { HeroSection } from "./HerSection";
import { AboutSection } from "./Aboutme";
import { SkillSection } from "./Skillsection";
import {ServicesSection} from "./Services"
import {TestimonialsSection} from "./Testimonials.jsx"
import { ProjectsSection } from "./ProjectSection";
import { ContactMe } from "./ContactSection";
const Home = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden relative">
      <div className="container py-8 relative z-10">
        <h1 className="text-4xl font-bold mb-4"></h1>
        {<ThemeToggle />}
      </div>
     { <StarBackground />}
      <Navbar/>
      <main>
        <HeroSection/>
        <AboutSection/>
        <SkillSection/>
        <ServicesSection/>
        <ProjectsSection/>
        <TestimonialsSection/>
        <ContactMe/>
      </main>
    </div>
  );
};

export default Home;
