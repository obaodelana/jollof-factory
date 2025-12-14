import { Instagram } from 'lucide-react';
import Button from './Button';

export default function Footer() {
  return (
    <footer className="w-full bg-dark text-cream border-t-2 border-dark">
      <div className="mx-auto max-w-7xl px-6 md:px-12 pt-20 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">

          {/* Brand Column */}
          <div className="col-span-1 flex flex-col items-start">
            <h3 className="font-display text-3xl uppercase text-white mb-6">Jollof<br /><span className="text-primary">Factory</span></h3>
            <p className="text-gray-400 font-bold max-w-xs mb-6">
              Bold African flavor for the modern, busy, hungry kitchen.
            </p>
            <div className="flex gap-4 mb-8">
              <a
                href="https://www.instagram.com/the.jolloffactory"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white p-2 border-2 border-transparent hover:bg-primary transition-colors cursor-pointer group"
              >
                <Instagram size={24} className="text-dark group-hover:text-white" />
              </a>
            </div>
            <Button variant="primary">Buy Now</Button>
          </div>

          {/* Company Column */}
          <div>
            <h4 className="font-display text-secondary text-xl mb-6 uppercase tracking-wider">Company</h4>
            <ul className="flex flex-col gap-3 font-bold text-lg text-gray-300">
              <li><a href="#" className="hover:text-primary hover:translate-x-2 transition-all inline-block">Story</a></li>
              <li><a href="#" className="hover:text-primary hover:translate-x-2 transition-all inline-block">Contact</a></li>
              <li><a href="#" className="hover:text-primary hover:translate-x-2 transition-all inline-block">Founder</a></li>
            </ul>
          </div>

          {/* Newsletter Column */}
          <div>
            <h4 className="font-display text-secondary text-xl mb-6 uppercase tracking-wider">Get Spicy</h4>
            <p className="text-gray-400 mb-4 font-bold">Recipes & drops in your inbox.</p>
            <div className="flex flex-col gap-3">
              <input
                type="email"
                placeholder="YOUR EMAIL"
                className="w-full bg-white/10 border-2 border-gray-700 text-white px-4 py-3 font-bold focus:border-primary focus:outline-none placeholder-gray-500 uppercase"
              />
              <Button variant="primary" fullWidth>Subscribe</Button>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t-2 border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm font-bold text-gray-500 uppercase">© {new Date().getFullYear()} Jollof Factory.</p>
          <div className="flex gap-6 text-sm font-bold text-gray-500 uppercase">
            <a href="#" className="hover:text-white">Privacy</a>
            <a href="#" className="hover:text-white">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
};