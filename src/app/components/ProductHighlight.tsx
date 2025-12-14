import React from 'react';
import { ArrowRight, Star } from 'lucide-react';

export default function ProductHighlight() {
  return (
    <section className="w-full py-20 bg-cream relative overflow-hidden">
      {/* Background abstract shape */}
      <div className="absolute top-20 right-0 w-1/2 h-full bg-secondary/20 -skew-x-12 border-l-2 border-dark hidden lg:block"></div>

      <div className="mx-auto max-w-7xl px-6 md:px-12 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">

          {/* Image Side - Card Look */}
          <div className="w-full lg:w-1/2 relative group">
            {/* "Sticker" */}
            <div className="absolute -top-6 -right-6 z-20 bg-primary text-white p-4 rounded-full h-24 w-24 flex items-center justify-center font-black text-center text-sm border-2 border-dark shadow-neo animate-bounce">
              NEW<br />STAPLE
            </div>

            <div
              className="relative aspect-square w-full bg-white border-2 border-dark shadow-neo-xl transform -rotate-2 group-hover:rotate-0 transition-transform duration-500 overflow-hidden"
            >
              <img
                src="/images/Product.png"
                alt="Jollof Factory Jar"
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
              />
            </div>
          </div>

          {/* Text Side */}
          <div className="w-full lg:w-1/2 flex flex-col gap-6">
            <div className="inline-block">
              <span className="bg-accent text-secondary font-display uppercase px-4 py-2 text-lg border-2 border-dark shadow-neo">
                The Secret Sauce
              </span>
            </div>

            <h2 className="text-5xl md:text-7xl font-display uppercase text-dark leading-[0.9]">
              What Is <br /><span className="text-primary text-stroke-sm">Jollof Factory?</span>
            </h2>

            <p className="text-dark text-xl leading-relaxed font-bold border-l-4 border-secondary pl-6">
              It&apos;s not just sauce. It&apos;s a versatile, tomato-free, pepper-based powerhouse. Slow-cooked aromatics, ginger, garlic, and proprietary spices in a jar.
            </p>

            <ul className="flex flex-col gap-3 font-bold text-lg">
              <li className="flex items-center gap-3">
                <Star className="fill-secondary text-dark" /> Smoky & Savory
              </li>
              <li className="flex items-center gap-3">
                <Star className="fill-secondary text-dark" /> Gentle on digestion (No Tomato!)
              </li>
              <li className="flex items-center gap-3">
                <Star className="fill-secondary text-dark" /> Fridge & Freezer Friendly
              </li>
            </ul>

            <button className="group mt-6 w-fit flex items-center gap-2 bg-dark text-white px-6 py-3 font-display uppercase tracking-widest hover:bg-primary transition-colors border-2 border-transparent">
              See Ingredients
              <ArrowRight className="transition-transform group-hover:translate-x-2" size={24} />
            </button>
          </div>

        </div>
      </div>
    </section>
  );
};