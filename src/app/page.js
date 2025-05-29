import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import HeroSection from './home/HeroSection';
import ProblemSolutionSection from './home/ProblemSolutionSection';
import FeaturesSection from './home/FeaturesSection';
import PricingSection from './home/PricingSection';
import TestimonialsSection from './home/TestimonialsSection';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
      <Header />
      <main>
        <HeroSection />
        <ProblemSolutionSection />
        <FeaturesSection />
        <PricingSection />
        <TestimonialsSection />
      </main>
      <Footer />
    </div>
  );
}
