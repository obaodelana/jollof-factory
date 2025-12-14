import React from 'react';
import { Recipe } from '../types';
import Button from './Button';

const recipes: Recipe[] = [
  {
    id: 1,
    title: "Classic Jollof",
    description: "The OG. Non-negotiable.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuC8o1kB8z5nU20BIiILniio_8mOEDOfK2zZpJi_zQZujkCwMzE9y5Nw-Mi8bfXKVJkGaeUDHm6efoLplCyKfR93qD8U7dYanAGqjoi-Q9g7EJnYzxO3yRaBUMx2WV03auVtUffdbHvt80ZnhBjmdro2gD15U03Zjw9GLseGAGM7cwO4Ljb4n0VAMTwbi3nymfgoWIr_FhXWeASiNeddL6yvYts5KxGJ2y3huwLixZKTNG4hrsQ_-o6aROCzgR1hc4LBrXzzCyQW9Ea5",
    link: "#"
  },
  {
    id: 2,
    title: "Pepper Pasta",
    description: "Italy meets West Africa.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCPD9x2lBncN_eXwvqI9lRpsI95NtJGmkU_rgzpRrpnOzabZ4y5M-iDWbHANaJvi9D1hRyArXh8AzGOlPW_CT0yIZlo9gGHZEWJCSCBJfIy8MzAB17LefLI_YU2ssO80KrWXnT4O7PiGg-_U0sMa-_T6brcSa5jSxbMYD4q6Ef9mmQV951bydB17IgLlCVDRw7U-ak4bOd78txiEz3OfKloZ3FL5ab1yIxiTfgRhWHHZJqem00L0ZNqKEY-j8a4vU3fksjynbagB9nS",
    link: "#"
  },
  {
    id: 3,
    title: "Marinated Chicken",
    description: "Juicy, smoky, addictive.",
    image: "/images/recipes/Chicken.jpeg",
    link: "#"
  },
  {
    id: 4,
    title: "Meatballs",
    description: "Saucy, spicy perfection.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBsefB7KZ80Xsjye7f0A80RXI4zozb0_gBrsylC5WSuoxFTWljgEhRPYJtZ-Fhy6Ddbc7IH8PORkXbGizEm67RKfw-yLb0xvEUrtMUJbyrQaC-J_RykxxTGY1DHGzdASukhNuycragEDg7LUGzcHJbOQgARaOWKQD9vnEfdX17Xj4cJDtWBBPsC5zxdGljHcgNBwAS_PD3GO_ay6j1895WEaek7cQZzLvot9YUfk-Pt2xSqmjukOhWekybo9LEdqY9gCt4p-CleGSdu",
    link: "#"
  },
  // {
  //   id: 5,
  //   title: "Zesty Pizza",
  //   description: "Bolder than marinara.",
  //   image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCp4FsqFvR3tSS0c9gSlFXEAv4NBI9RkWq7JdpRuTjYA4fcEN-FpUskcFaHYZnA2Hxbkix3voOrPoiO9uj7FR1huOQysMKRLo1VC9zzBpdSy5cB-V-JrLT37uWGxwHa7_hSo-kjyrVURAehASkf3o7sJr3EiGTSyv_m3tLf1vcZkPVE9zzAQK99flfO1YskY_Qx880J5gxokEl8qTR7W1nA2HSk1IOnrmJNJlx3r__piVqFNy8bMwTZdM_jERcNuagMRzO5nTryejW_",
  //   link: "#"
  // },
  // {
  //   id: 6,
  //   title: "Spicy Eggs",
  //   description: "Breakfast with a serious kick.",
  //   image: "https://images.unsplash.com/photo-1525351440155-ad29fd1e4e27?auto=format&fit=crop&w=800",
  //   link: "#"
  // }
];

export default function RecipesGrid() {
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

          <Button variant="outline">View All Recipes</Button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {recipes.map((recipe) => (
            <div
              key={recipe.id}
              className="group relative bg-white border-2 border-dark p-3 shadow-neo hover:shadow-neo-lg hover:-translate-y-1 transition-all duration-300"
            >
              <div
                className="w-full aspect-4/3 bg-cover bg-center border-2 border-dark grayscale group-hover:grayscale-0 transition-all duration-500 mb-4"
                style={{ backgroundImage: `url("${recipe.image}")` }}
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
          ))}
        </div>
      </div>
    </section>
  );
};