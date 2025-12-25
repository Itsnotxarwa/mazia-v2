import Footer from "./Footer";
import Header from "./Header";
import BenefitsSection from "./homeComponents/BenefitsSection";
import FeaturesSection from "./homeComponents/FeaturesSection";
import HeroSection from "./homeComponents/heroSection";
import UsageExamples from "./homeComponents/UsageExamples";

export default function Homepage() {
    return(
        <div className="min-h-screen bg-white text-black overflow-hidden">
            <Header />
            <HeroSection />
            <BenefitsSection />
            <FeaturesSection />
            <UsageExamples />
            <Footer />
        </div>
    )
}