import React from 'react';
import { Flame, Utensils, Timer, CheckCircle2 } from 'lucide-react';
import { ValueProp } from '../types';

const features: ValueProp[] = [
  {
    id: 1,
    icon: <Flame size={40} strokeWidth={2.5} />,
    title: "Tomato-Free",
    description: "A pepper-based powerhouse without the acidity. Pure flavor."
  },
  {
    id: 2,
    icon: <Utensils size={40} strokeWidth={2.5} />,
    title: "Versatile",
    description: "Rice, pasta, pizza, stews. If you can cook it, you can Jollof it."
  },
  {
    id: 3,
    icon: <Timer size={40} strokeWidth={2.5} />,
    title: "10-Min Magic",
    description: "Deep simmered taste in minutes. Cheating? Maybe. Delicious? Yes."
  },
  {
    id: 4,
    icon: <CheckCircle2 size={40} strokeWidth={2.5} />,
    title: "Consistent",
    description: "Chef-quality flavor profiles every single time. No guesswork."
  }
];

export default function ValueProps() {
  return (
    <section className="w-full py-24 bg-dark text-cream border-t-2 border-white">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <div className="mb-16 flex flex-col items-center text-center">
          <h2 className="text-5xl md:text-7xl font-display uppercase text-secondary mb-6">
            Why It Slaps
          </h2>
          <p className="text-xl md:text-2xl text-white font-bold max-w-2xl font-marker text-primary -rotate-1">
            (And why you need it in your pantry right now)
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, idx) => (
            <div
              key={feature.id}
              className={`group flex flex-col gap-4 p-8 border-2 border-white hover:bg-white hover:text-dark transition-colors duration-300 ${idx % 2 === 0 ? 'bg-transparent' : 'bg-white/5'}`}
            >
              <div className="flex h-20 w-20 items-center justify-center bg-primary text-dark border-2 border-white shadow-[4px_4px_0px_0px_#fff] mb-4 group-hover:rotate-12 transition-transform">
                {feature.icon}
              </div>
              <div>
                <h3 className="font-display text-2xl mb-3 uppercase tracking-wide">
                  {feature.title}
                </h3>
                <p className="text-lg leading-relaxed font-medium opacity-90">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};