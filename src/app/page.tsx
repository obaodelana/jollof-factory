import Hero from "./components/Hero";
import ProductHighlight from "./components/ProductHighlight";
import ValueProps from "./components/ValueProps";
import HowItWorks from "./components/HowItWorks";
import RecipesGrid from "./components/RecipesGrid";
import CallToAction from "./components/CallToAction";
import TestimonialsStrip from "./components/TestimonialsStrip";

export default function Home() {
  return (
    <>
      <Hero />
      <TestimonialsStrip />
      <ProductHighlight />
      <ValueProps />
      <HowItWorks />
      <RecipesGrid />
      <CallToAction />
    </>
  );
}
