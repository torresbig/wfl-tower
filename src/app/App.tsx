import { Hero } from "./components/Hero";
import { ImageSlideshow } from "./components/ImageSlideshow";
import { FactsSection } from "./components/FactsSection";
import { CTASection } from "./components/CTASection";
import { VideoSection } from "./components/VideoSection";
import { StorySection } from "./components/StorySection";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section mit Logo und Team Name */}
      <Hero />

      {/* Slideshow */}
      <ImageSlideshow />

      {/* Thomas' Geschichte direkt unter der Slideshow */}
      <StorySection />

      {/* CTA - Erste Einladung */}
      <CTASection variant="secondary" />

      {/* Fakten zu Wings for Life */}
      <FactsSection />

      {/* Video Section */}
      <VideoSection />

      {/* CTA - Zweite Einladung */}
      <CTASection variant="secondary" />

      {/* Haupt-CTA - Finale Einladung */}
      <CTASection variant="primary" />

      {/* Footer */}
      <Footer />
    </div>
  );
}
