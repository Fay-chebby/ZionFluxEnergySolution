import { Hero } from "../components/Hero";
import { About } from "../components/About";
import { Values } from "../components/Values";
import { Solutions } from "../components/Solutions";
import { WhyChoose } from "../components/WhyChoose";
import { Contact } from "../components/Contact";
import { Testimonials } from "../components/Testimonials";

export function HomePage() {
  return (
    <>
      <div style={{ padding: 40 }}>
        <h1>✅ ZionFlux is working</h1>
      </div>
      <Hero />
      <About />
      <Values />
      <Solutions />
      <WhyChoose />
      <Testimonials />
      <Contact />
    </>
  );
}
