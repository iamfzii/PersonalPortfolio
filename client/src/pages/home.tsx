import Navigation from "@/components/navigation-clean";
import HeroSection from "@/components/hero-section";
import CareerProfile from "@/components/career-profile";

import SkillsSection from "@/components/skills-section-optimized";
import ProjectsSection from "@/components/projects-section";
import DemonstrationsSection from "@/components/demonstrations-section";
import ExperienceSection from "@/components/experience-section";
import EducationSection from "@/components/education-section";
import CertificationsSection from "@/components/certifications-section";
import ContactSection from "@/components/contact-section-mobile-redesigned";
import ProfessionalResume from "@/components/professional-resume";
import Footer from "@/components/footer-redesigned";
import InteractiveBackground from "@/components/ultra-fast-interactive-background";
import FloatingCTAElements from "@/components/floating-cta-elements";
import BackToTop from "@/components/back-to-top";

export default function Home() {
  return (
    <div className="min-h-screen relative">
      <InteractiveBackground />
      <div className="relative z-10">
        <Navigation />
        <main className="performance-optimized gpu-accelerated" role="main">
          {/* Above-the-fold critical content for instant loading */}
          <section className="above-fold" id="hero" aria-label="Hero Section">
            <HeroSection />
          </section>
          
          {/* Below-the-fold optimized sections */}
          <section className="content-optimized" id="career" aria-label="Career Profile">
            <CareerProfile />
          </section>
          

          
          <section className="content-optimized" id="skills" aria-label="Technical Skills">
            <SkillsSection />
          </section>
          
          <section className="content-optimized" id="projects" aria-label="Featured Projects">
            <ProjectsSection />
          </section>
          
          <section className="content-optimized" id="demos" aria-label="Live Demonstrations">
            <DemonstrationsSection />
          </section>
          
          <section className="content-optimized" id="experience" aria-label="Work Experience">
            <ExperienceSection />
          </section>
          
          <section className="content-optimized" id="education" aria-label="Education Background">
            <EducationSection />
          </section>
          
          <section className="content-optimized" id="certifications" aria-label="Professional Certifications">
            <CertificationsSection />
          </section>
          
          <section className="content-optimized" id="resume-download" aria-label="Resume Download">
            <ProfessionalResume />
          </section>
          
          <section className="content-optimized" id="contact" aria-label="Contact Information">
            <ContactSection />
          </section>
        </main>
        <Footer />
        <FloatingCTAElements />
        <BackToTop />
      </div>
    </div>
  );
}
