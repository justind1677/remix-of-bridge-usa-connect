import Layout from '@/components/layout/Layout';
import HeroSection from '@/components/home/HeroSection';
import ServicesOverview from '@/components/home/ServicesOverview';
import PricingSection from '@/components/home/PricingSection';
import CTASection from '@/components/home/CTASection';

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <ServicesOverview />
      <PricingSection />
      <CTASection />
    </Layout>
  );
};

export default Index;
