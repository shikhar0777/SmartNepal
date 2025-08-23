"use client"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { FocusAreasSection } from "@/components/focus-areas-section"
import { ProjectsSection } from "@/components/projects-section"
import { MentorsSection } from "@/components/mentors-section"
import { JoinSection } from "@/components/join-section"
import { PublicationsSection } from "@/components/publications-section"
import { ContactSection } from "@/components/contact-section"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <FocusAreasSection />
        <ProjectsSection />
        <MentorsSection />
        <JoinSection />
        <PublicationsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  )
}
