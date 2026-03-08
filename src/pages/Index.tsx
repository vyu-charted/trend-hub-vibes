import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import FeedSection from "@/components/FeedSection";
import DiscussionsSection from "@/components/DiscussionsSection";
import MembersSection from "@/components/MembersSection";
import EventsSection from "@/components/EventsSection";
import FooterSection from "@/components/FooterSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <FeedSection />
      <DiscussionsSection />
      <MembersSection />
      <EventsSection />
      <FooterSection />
    </div>
  );
};

export default Index;
