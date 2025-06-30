import Navigation from "@/components/navigation-clean";
import HeroSection from "@/components/hero-section";
import CareerProfile from "@/components/career-profile";
import BrandManifesto from "@/components/brand-manifesto";
import SkillsSection from "@/components/skills-section-optimized";
import ProjectsSection from "@/components/projects-section";
import DemonstrationsSection from "@/components/demonstrations-section";
import ExperienceSection from "@/components/experience-section";
import EducationSection from "@/components/education-section";
import CertificationsSection from "@/components/certifications-section";
import ContactSection from "@/components/contact-section-mobile-redesigned";
import TwoColumnResumeExport from "@/components/two-column-resume-export";
import Footer from "@/components/footer-redesigned";
import InteractiveBackground from "@/components/interactive-background-ultra-optimized";
import FloatingCTAElements from "@/components/floating-cta-elements";
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
          <BrandManifesto />
          <SkillsSection />
          <ProjectsSection />
          <DemonstrationsSection />
          <ExperienceSection />
          <EducationSection />
          <CertificationsSection />
          <TwoColumnResumeExport />
          <ContactSection />
        </main>
        <Footer />
        <FloatingCTAElements />
        <BackToTop />
      </div>
    </div>
  );
}
