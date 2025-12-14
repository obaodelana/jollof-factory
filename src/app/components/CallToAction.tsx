import Button from './Button';

export default function CallToAction() {
  return (
    <section className="w-full relative py-32 bg-primary overflow-hidden border-t-2 border-dark">
      {/* Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(#000_2px,transparent_2px)] [bg-size:16px_16px] opacity-10"></div>

      <div className="mx-auto max-w-5xl px-4 text-center relative z-10 flex flex-col items-center">
        <div className="bg-secondary px-6 py-2 rotate-2 border-2 border-dark shadow-neo mb-6">
          <span className="font-bold text-dark uppercase tracking-widest">Join the flavor revolution</span>
        </div>

        <h2 className="text-5xl md:text-8xl font-display uppercase tracking-tight mb-8 text-white drop-shadow-[4px_4px_0_#121212]">
          Ready to<br />Cook Loud?
        </h2>

        <p className="text-xl md:text-3xl text-dark font-bold mb-12 max-w-2xl mx-auto bg-white/30 backdrop-blur-sm p-4 border-2 border-transparent rounded-xl">
          Don't settle for boring. Add soul to your bowl in minutes.
        </p>

        <div className="flex flex-col sm:flex-row gap-6 w-full justify-center">
          <Button size="lg" variant="dark" className="text-xl px-12">Buy Now</Button>
        </div>
      </div>
    </section>
  );
}