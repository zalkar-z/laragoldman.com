import AnnouncementBar from "@/components/AnnouncementBar";
import HeroSection from "@/components/HeroSection";
import ReviewsSection from "@/components/ReviewsSection";
import AuthorityBar from "@/components/AuthorityBar";
import SalesProgress from "@/components/SalesProgress";
import PainPoints from "@/components/PainPoints";
import ProductReveal from "@/components/ProductReveal";
import ChapterList from "@/components/ChapterList";
import PricingCTA from "@/components/PricingCTA";
import ReviewsSection2 from "@/components/ReviewsSection2";
import FAQ from "@/components/FAQ";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import StickyCTA from "@/components/StickyCTA";

export default function Home() {
  return (
    <>
      <AnnouncementBar />
      <HeroSection />
      <ReviewsSection />
      <ProductReveal />
      <ChapterList />
      <ReviewsSection2 />
      <FAQ />
      <Footer />
      <StickyCTA />
    </>
  );
}
