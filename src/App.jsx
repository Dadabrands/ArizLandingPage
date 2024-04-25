import Navbar from "./components/Navbar";
// import HeroSection from "./components/HeroSection";
import Hero from "./components/Hero";
// import FeatureSection from "./components/FeatureSection";
import Workflow from "./components/Workflow";
import Footer from "./components/Footer";
// import Pricing from "./components/Pricing";
import Testimonials from "./components/Testimonials";
import Streamline from "./components/Streamline";
import Email from "./components/Email";
import News from "./components/News";

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <div className="max-w-7xl mx-auto pt-20 px-6">
        {/* <HeroSection /> */}
        {/* <FeatureSection /> */}
        <Workflow />
        <Streamline />
        {/* <Pricing /> */}
      </div>
      <Testimonials />\
      <Email />
      <News />
      <Footer />
    </>
  );
};

export default App;
