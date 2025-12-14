import { Step } from '../types';

const steps: Step[] = [
  {
    id: 1,
    number: 1,
    title: "Heat It",
    description: "Warm up oil in your pan. Get it sizzling."
  },
  {
    id: 2,
    number: 2,
    title: "Mix It",
    description: "Toss in protein/veggies & a big scoop of Base."
  },
  {
    id: 3,
    number: 3,
    title: "Eat It",
    description: "Simmer 10 mins. Serve. Take all the credit."
  }
];

export default function HowItWorks() {
  return (
    <section className="w-full py-24 bg-secondary border-b-2 border-dark">
      <div className="mx-auto max-w-6xl px-4 md:px-8">
        <div className="flex flex-col items-center text-center mb-16">
          <span className="bg-dark text-white px-3 py-1 font-mono text-sm mb-4">THE PROCESS</span>
          <h2 className="text-5xl md:text-7xl font-display uppercase text-dark">
            3 Steps to Glory
          </h2>
        </div>

        <div className="grid gap-8 md:grid-cols-3 relative">

          {steps.map((step, index) => (
            <div key={step.id} className="relative flex flex-col items-center text-center">
              {/* Giant Number */}
              <div className="absolute -top-10 left-1/2 -translate-x-1/2 text-[10rem] font-display text-white/40 leading-none select-none -z-10">
                {step.number}
              </div>

              <div className="bg-white border-2 border-dark p-8 w-full shadow-neo hover:-translate-y-2 transition-transform duration-300">
                <h3 className="text-3xl font-black text-primary mb-3 uppercase">
                  {step.title}
                </h3>
                <p className="text-dark font-bold text-lg leading-tight">
                  {step.description}
                </p>
              </div>

              {/* Arrow for desktop */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-6 w-12 h-2 bg-dark z-20"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};