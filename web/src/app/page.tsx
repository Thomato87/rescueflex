import { Navigation } from "@/components/sections/Navigation";
import { Hero } from "@/components/sections/Hero";
import { TrustBar } from "@/components/sections/TrustBar";
import { Services } from "@/components/sections/Services";
import { Process } from "@/components/sections/Process";
import { Differentiators } from "@/components/sections/Differentiators";
import { FAQ } from "@/components/sections/FAQ";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
  return (
    <>
      <Navigation />
      <main>
        <Hero />
        <TrustBar />
        <Services />
        <Process />
        <Differentiators />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
