"use client";

import { useEffect } from 'react';
import { recipes } from '../data/recipes';

export default function RecipesPage() {
    useEffect(() => {
        // Handle scrolling to a specific recipe if a hash is present
        const hash = window.location.hash; // e.g., #/recipes#jollof-honey-chicken
        const parts = hash.split('#');
        if (parts.length === 3 && parts[1] === '/recipes') {
            const id = parts[2];
            const element = document.getElementById(id);
            if (element) {
                setTimeout(() => {
                    element.scrollIntoView({ behavior: 'smooth' });
                }, 100);
            }
        } else {
            window.scrollTo(0, 0);
        }
    }, []);

    return (
        <div className="w-full bg-cream">
            {/* Page Header */}
            <header className="bg-secondary border-b-2 border-dark py-20 text-center">
                <div className="mx-auto max-w-7xl px-4 md:px-8">
                    <h1 className="text-6xl md:text-8xl font-display uppercase text-dark">Our Recipes</h1>
                    <p className="mt-4 text-xl font-bold text-dark/80 max-w-2xl mx-auto">
                        Bold, soulful meals made simple with Jollof Factory as your secret weapon.
                    </p>
                </div>
            </header>

            {/* Recipes List */}
            <main className="py-20">
                <div className="mx-auto max-w-5xl px-4 md:px-8 flex flex-col gap-24">
                    {recipes.map((recipe, index) => (
                        <article key={recipe.id} id={recipe.slug} className="w-full scroll-mt-24">
                            <div className="bg-white border-2 border-dark shadow-neo-xl p-4">
                                {/* Recipe Image */}
                                <div className="relative mb-8">
                                    <img src={recipe.image} alt={recipe.title} className="w-full aspect-video object-cover border-2 border-dark" />
                                    {recipe.cookingTime && (
                                        <div className="absolute bottom-4 -right-4 bg-primary text-white font-display uppercase px-4 py-2 border-2 border-dark shadow-neo">
                                            Time: {recipe.cookingTime}
                                        </div>
                                    )}
                                </div>

                                {/* Recipe Content */}
                                <div className="px-4 pb-4">
                                    <h2 className="text-4xl md:text-5xl font-display uppercase text-primary mb-4">{recipe.title}</h2>
                                    <p className="text-lg font-bold text-dark/70 mb-10">{recipe.description}</p>

                                    <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                                        {/* Ingredients */}
                                        <div className="md:col-span-1">
                                            <h3 className="font-display text-2xl uppercase border-b-2 border-dark pb-2 mb-4">Ingredients</h3>
                                            <ul className="list-disc list-inside flex flex-col gap-2 font-medium text-dark">
                                                {recipe.ingredients.map((ing, i) => (
                                                    <li key={i}>{ing}</li>
                                                ))}
                                            </ul>
                                        </div>

                                        {/* Directions */}
                                        <div className="md:col-span-2">
                                            <h3 className="font-display text-2xl uppercase border-b-2 border-dark pb-2 mb-4">Directions</h3>
                                            <ol className="flex flex-col gap-4">
                                                {recipe.directions.map((dir, i) => (
                                                    <li key={i} className="flex gap-4">
                                                        <span className="shrink-0 bg-secondary text-dark font-display h-8 w-8 flex items-center justify-center border-2 border-dark text-lg">{i + 1}</span>
                                                        <p className="font-medium text-dark self-center">{dir}</p>
                                                    </li>
                                                ))}
                                            </ol>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
            </main>
        </div>
    );
}