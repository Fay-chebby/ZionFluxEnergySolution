import { About } from "../components/About";
import { Values } from "../components/Values";
import { Testimonials } from "../components/Testimonials";

export function AboutPage() {
  return (
    <div className="min-h-screen bg-white pt-20">
      <About />
      <Values />
      <Testimonials />
    </div>
  );
}
