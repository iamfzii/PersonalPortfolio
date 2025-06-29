import Navigation from "@/components/navigation";
import HeroSection from "@/components/hero-section";
import CareerProfile from "@/components/career-profile";
import SkillsSection from "@/components/skills-section-simple";
import ProjectsSection from "@/components/projects-section";
import DemonstrationsSection from "@/components/demonstrations-section";
import ExperienceSection from "@/components/experience-section";
import EducationSection from "@/components/education-section";
import CertificationsSection from "@/components/certifications-section";
import ContactSection from "@/components/contact-section-enhanced";
import Footer from "@/components/footer";
import InteractiveBackground from "@/components/interactive-background";

export default function Home() {
  return (
    <div className="min-h-screen relative">
      <InteractiveBackground />
      <div className="relative z-10">
        <Navigation />
        <main className="performance-optimized">
          <HeroSection />
          <div className="performance-optimized">
            <CareerProfile />
          </div>
          <div className="performance-optimized">
            <SkillsSection />
          </div>
          <div className="performance-optimized">
            <ProjectsSection />
          </div>
          <div className="performance-optimized">
            <DemonstrationsSection />
          </div>
          <div className="performance-optimized">
            <ExperienceSection />
          </div>
          <div className="performance-optimized">
            <EducationSection />
          </div>
          <div className="performance-optimized">
            <CertificationsSection />
          </div>
          <div className="performance-optimized">
            <ContactSection />
          </div>
        </main>
        <Footer />
      </div>
    </div>
  );
}
