import Link from 'next/link';
import { recipes } from '../data/recipes';
import Button from './Button';

export default function RecipesGrid() {
  // Show the first 3 recipes on the homepage grid
  const featuredRecipes = recipes.slice(0, 3);

  return (
    <section id="recipes" className="w-full bg-[#e5e5e5] py-20 border-b-2 border-dark">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <div className="flex flex-col md:flex-row items-end justify-between mb-12 gap-6">
          <div className="relative">
            <div className="absolute -top-6 -left-4 bg-primary text-white px-2 py-1 font-marker -rotate-6">Not just rice!</div>
            <h2 className="text-5xl md:text-7xl font-display uppercase text-dark leading-none">
              Cook <br /><span className="text-accent">Anything</span>
            </h2>
          </div>

          <Link href="/recipes">
            <Button variant="outline">View All Recipes</Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredRecipes.map((recipe) => (
            <Link href={recipe.link} key={recipe.id} className="block group">
              <div
                className="relative bg-white border-2 border-dark p-3 shadow-neo hover:shadow-neo-lg hover:-translate-y-1 transition-all duration-300 h-full"
              >
                <div
                  className="w-full aspect-4/3 bg-cover bg-center border-2 border-dark grayscale group-hover:grayscale-0 transition-all duration-500 mb-4"
                  style={{ backgroundImage: `url("${recipe.image}")` }}
                  aria-label={recipe.title}
                ></div>

                <div className="px-2 pb-2">
                  <h3 className="text-2xl font-black text-dark uppercase group-hover:text-primary transition-colors">
                    {recipe.title}
                  </h3>
                  <p className="text-dark text-lg font-bold opacity-70">
                    {recipe.description}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};