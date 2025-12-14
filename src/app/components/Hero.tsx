import Button from './Button';

export default function Hero() {
  return (
    <section className="relative w-full overflow-hidden bg-primary">
      {/* Background with overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center grayscale mix-blend-multiply opacity-50"
        style={{
          backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuAApgaOUUd6i47iHW-S8-Bx8rbJ-uZI1FHOk8W-4DRy2FAyGMRpPgrt-yhWVRDFgUCgeXfxniOtYMORomafJ41l7FW5IuuKekK2jzupyu6JbjZMmDoIgu_Ki0-SzpZzGl4R4ieHTQIZs-S6T6X9_tggKov_muwGfi_piWbDurf5E27jTh7D1A6Ct5uSSMoNdOxCuHRceJEDQuQfh5HoAoWvDHksLMaKkx-5EK83D6Agg_eRs7haHn0S4jSI30cM4A7Q3-5NSDmh0TPw")`
        }}
      ></div>

      {/* Decorative Grid */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>

      <div className="relative z-10 w-full pt-16 pb-24 md:pt-24 md:pb-32 px-4 flex flex-col items-center justify-center text-center">

        {/* Floating Sticker Effect */}
        <div className="mb-6 transform -rotate-3 hover:rotate-2 transition-transform duration-300">
          <span className="bg-secondary text-dark px-4 py-2 font-marker text-xl md:text-2xl border-2 border-dark shadow-neo">
            🍅 No Tomato. All Flavor.
          </span>
        </div>

        <h1 className="text-white text-6xl md:text-8xl lg:text-9xl font-display uppercase leading-[0.9] tracking-tight drop-shadow-[4px_4px_0_rgba(0,0,0,1)] mb-8">
          Flavor So Loud<br />
          <span className="text-secondary">It Screams.</span>
        </h1>

        <p className="text-white font-bold text-lg md:text-2xl max-w-2xl leading-relaxed mb-10 bg-dark/20 backdrop-blur-sm p-4 border-2 border-transparent">
          Meet Jollof Factory. The pepper-forward, slow-cooked sauce that turns &quot;meh&quot; meals into West African magic in 10 minutes.
        </p>

        <div className="flex flex-col sm:flex-row gap-6">
          <Button size="lg" variant="secondary" className="text-xl">Shop The Base</Button>
          <Button size="lg" variant="outline" className="bg-white text-dark hover:bg-gray-100 border-white hover:border-white">View Recipes</Button>
        </div>
      </div>

      {/* Marquee Banner */}
      <div className="absolute bottom-0 w-full bg-secondary border-y-2 border-dark py-3 overflow-hidden">
        <div className="animate-marquee whitespace-nowrap flex gap-8 items-center">
          {[...Array(10)].map((_, i) => (
            <span key={i} className="text-xl md:text-2xl font-black uppercase tracking-widest text-dark flex items-center gap-8">
              Cook Bold <span className="text-primary text-3xl">★</span>
              Weeknight Magic <span className="text-primary text-3xl">★</span>
              West African Soul <span className="text-primary text-3xl">★</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};