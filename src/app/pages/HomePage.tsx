import { Hero } from "../components/Hero";
import { About } from "../components/About";
import { Values } from "../components/Values";
import { Solutions } from "../components/Solutions";
import { IndustriesServed } from "../components/IndustriesServed";
import { WhyChoose } from "../components/WhyChoose";
import { Contact } from "../components/Contact";
import { Testimonials } from "../components/Testimonials";

export function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <Values />
      <Solutions />
      <IndustriesServed />
      <WhyChoose />
      <Testimonials />
      <Contact />
    </>
  );
}
