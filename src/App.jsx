import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ImageSection from "./components/ImageSection";
import HowItWorks from "./components/Works";
import WhyChooseAcme from "./components/WhyChoose";
import HousingPartner from "./components/Community";
import Footer from "./components/Footer";
function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <ImageSection />
      <HowItWorks />
      <WhyChooseAcme />
      <HousingPartner />
      <Footer />
    </>
  );
}

export default App;
