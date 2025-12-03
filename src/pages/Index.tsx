import Layout from "@/components/layout/Layout";
import HeroSection from "@/components/home/HeroSection";
import MissionSection from "@/components/home/MissionSection";
import CoursesSection from "@/components/home/CoursesSection";
import CommitmentSection from "@/components/home/CommitmentSection";

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <MissionSection />
      <CoursesSection />
      <CommitmentSection />
    </Layout>
  );
};

export default Index;
