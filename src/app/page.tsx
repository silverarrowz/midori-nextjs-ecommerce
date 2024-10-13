import AboutSection from "@/components/AboutSection";
import FeaturedSection from "@/components/FeaturedSection";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import IntroSection from "@/components/IntroSection";
import MatchaSection from "@/components/MatchaSection";
import ReviewsSection from "@/components/ReviewsSection";
// import ScrollButton from "@/components/ScrollButton";

export default function Home() {
  return (
    <div>
      <Header />
      <IntroSection />
      <FeaturedSection />
      <AboutSection />
      <ReviewsSection />
      <MatchaSection />
      <Footer />
      {/* <ScrollButton /> */}
    </div>
  );
}
