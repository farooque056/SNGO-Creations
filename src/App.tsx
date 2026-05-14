import { useState } from "react";
import { SmoothScroll } from "./components/SmoothScroll";
import { CustomCursor } from "./components/CustomCursor";
import { LoadingScreen } from "./components/LoadingScreen";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Services } from "./components/Services";
import { Portfolio } from "./components/Portfolio";
import { WhyChooseUs } from "./components/WhyChooseUs";
import { Testimonials } from "./components/Testimonials";
import { Studio } from "./components/Studio";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { Background3D } from "./components/Background3D";
import { AIChatbot } from "./components/AIChatbot";
import { GrainOverlay } from "./components/GrainOverlay";

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <main className="bg-black text-white min-h-screen">
      <GrainOverlay />
      <LoadingScreen onComplete={() => setIsLoading(false)} />
      
      {!isLoading && (
        <SmoothScroll>
          <CustomCursor />
          <Background3D />
          <Navbar />
          
          <Hero />
          <Services />
          <Portfolio />
          <WhyChooseUs />
          <Testimonials />
          <Studio />
          <Contact />
          <Footer />
          
          <AIChatbot />
        </SmoothScroll>
      )}
    </main>
  );
}
