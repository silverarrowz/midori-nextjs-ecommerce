import AboutSection from "@/components/AboutSection";
import FeaturedSection from "@/components/FeaturedSection";
import Header from "@/components/Header";
import IntroSection from "@/components/IntroSection";
import ReviewsSection from "@/components/ReviewsSection";

export default function Home() {
  return (
    <div>
      <Header />
      <IntroSection />
      <FeaturedSection />
      <AboutSection />
    </div>
  );
}
