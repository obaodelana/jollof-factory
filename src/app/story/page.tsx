import React from "react";
import { Heart, Clock, Globe, ShieldCheck } from "lucide-react";

const Story: React.FC = () => {
  return (
    <section
      id="story"
      className="w-full py-24 bg-cream border-b-2 border-dark relative overflow-hidden"
    >
      {/* Background elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-secondary rounded-full blur-3xl opacity-50"></div>
      <div className="absolute bottom-20 right-10 w-64 h-64 bg-primary rounded-full blur-3xl opacity-20"></div>

      <div className="mx-auto max-w-5xl px-6 md:px-12 relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <span className="bg-dark text-white px-4 py-1 font-mono text-sm mb-4 inline-block -rotate-2">
            THE ORIGIN
          </span>
          <h2 className="text-5xl md:text-7xl font-display uppercase text-dark mt-4">
            A Favor.
            <br />A Batch.
            <br />
            <span className="text-primary">A Beginning.</span>
          </h2>
        </div>

        {/* Main Narrative - Layout with image */}
        <div className="flex flex-col md:flex-row gap-12 items-center mb-24">
          <div className="w-full md:w-1/2">
            <div className="bg-white p-3 border-2 border-dark shadow-neo rotate-2 hover:rotate-0 transition-all duration-500">
              <img
                src="/ife-loop.gif"
                alt="Cooking in kitchen"
                className="w-full aspect-4/5 object-cover bg-top border-2 border-dark grayscale hover:grayscale-0 transition-all"
              />
              <div className="pt-4 pb-2 text-center font-marker text-xl text-dark">
                Where it all started
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2 flex flex-col gap-6">
            <p className="text-xl font-bold leading-relaxed text-dark">
              Jollof Factory started in a friend's kitchen. I made one sauce—one
              base that could stretch into many dinners. Before I left, she
              asked for a big batch. After I left, she texted:{" "}
              <span className="bg-secondary px-1">“You should sell this.”</span>
            </p>
            <p className="text-lg leading-relaxed text-gray-800">
              It wasn't the first time I'd heard it. In 2020, life was loud,
              plans paused, and the idea sat on the shelf. This time, I picked
              it up.
            </p>
          </div>
        </div>

        {/* "Why A Base" & "What's Inside" Cards */}
        <div className="grid md:grid-cols-2 gap-8 mb-24">
          <div className="bg-secondary p-8 border-2 border-dark shadow-neo flex flex-col gap-4">
            <h3 className="font-display text-3xl uppercase">Why A Base?</h3>
            <p className="font-bold text-lg">
              Because life is full. I'm a mom with a very active toddler and a
              9-to-5.
            </p>
            <p className="text-dark">
              I love big, soulful flavors, but I don't love hours of chopping
              and stirring on weeknights. A pepper-led, slow-cooked base lets me
              start strong in minutes. One spoonful, and dinner moves from “What
              now?” to “We're good.”
            </p>
          </div>
          <div className="bg-dark p-8 border-2 border-dark shadow-neo flex flex-col gap-4 text-cream">
            <h3 className="font-display text-3xl uppercase text-primary">
              What's Inside
            </h3>
            <p className="font-bold text-lg">
              Sweet peppers. Ginger. A hint of garlic. Herbs. And a few secrets.
            </p>
            <p className="text-gray-400">
              It's tomato-free—gentler for many bellies—without losing the depth
              we love in Jollof. We slow-cook for layers, so you don't have to.
            </p>
          </div>
        </div>

        {/* Cultural Bridge Section */}
        <div className="mb-24 relative">
          <div className="absolute -left-4 top-0 bottom-0 w-2 bg-primary"></div>
          <div className="pl-8">
            <h3 className="font-display text-4xl uppercase mb-6">
              A Bridge, Not A Gate
            </h3>
            <p className="text-xl font-medium leading-relaxed max-w-3xl">
              I cooked for a corporate client in Canada, and watched people
              light up at the flavor—pepper, aromatics, gentle heat. It became
              an invitation to taste West Africa at their own table. Your
              regular meals, just more interesting.
            </p>
          </div>
        </div>

        {/* Promise Grid */}
        <div className="bg-white border-2 border-dark p-8 md:p-12">
          <h3 className="text-center font-display text-4xl uppercase mb-12">
            Our Promise
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Heart size={32} className="text-primary" />,
                title: "Flavor First",
                text: "No tomatoes, big soul.",
              },
              {
                icon: <Clock size={32} className="text-primary" />,
                title: "Time Saver",
                text: "Seconds, not hours.",
              },
              {
                icon: <Globe size={32} className="text-primary" />,
                title: "Versatile",
                text: "Rice, Pizza, anything.",
              },
              {
                icon: <ShieldCheck size={32} className="text-primary" />,
                title: "No Fuss",
                text: "Performance-free cooking.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="flex flex-col items-center text-center gap-3"
              >
                <div className="bg-cream p-4 rounded-full border-2 border-dark mb-2 shadow-neo">
                  {item.icon}
                </div>
                <h4 className="font-black uppercase text-xl">{item.title}</h4>
                <p className="text-sm font-bold text-gray-600">{item.text}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 pt-8 border-t-2 border-dashed border-gray-300 text-center">
            <p className="font-marker text-2xl rotate-1">
              "From my kitchen to yours—here's to bold, unfussy meals."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Story;
