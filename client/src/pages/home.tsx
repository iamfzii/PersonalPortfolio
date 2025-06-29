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
import BackToTop from "@/components/back-to-top";

export default function Home() {
  return (
    <div className="min-h-screen relative">
      <InteractiveBackground />
      <div className="relative z-10">
        <Navigation />
        <main className="performance-optimized">
          <HeroSection />
          <CareerProfile />
          <SkillsSection />
          <ProjectsSection />
          <DemonstrationsSection />
          <ExperienceSection />
          <EducationSection />
          <CertificationsSection />
          <ContactSection />
        </main>
        <Footer />
        <BackToTop />
      </div>
    </div>
  );
}
