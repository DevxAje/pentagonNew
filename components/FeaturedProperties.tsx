import React from 'react';
import { Lock, ArrowRight } from 'lucide-react';
import { Reveal } from './Reveal';

const FeaturedProperties: React.FC = () => {
  const properties = [
    {
      id: 1,
      title: "Kensington Heights",
      location: "London, UK",
      image: "https://images.unsplash.com/photo-1600596542815-e32c215962bb?q=80&w=1000&auto=format&fit=crop"
    },
    {
      id: 2,
      title: "The Shard Apartments",
      location: "Southwark, UK",
      image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=1000&auto=format&fit=crop"
    },
    {
      id: 3,
      title: "Manchester Towers",
      location: "Manchester, UK",
      image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=1000&auto=format&fit=crop"
    }
  ];

  return (
    <section id="featured" className="py-24 bg-[#f5f5f7]">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <div>
            <Reveal>
              <h2 className="text-4xl md:text-5xl font-bold text-pentagon-navy mb-4">Featured Developments.</h2>
            </Reveal>
            <Reveal delay={200}>
              <p className="text-xl text-slate-500 font-light">Exclusive access to premier upcoming portfolios.</p>
            </Reveal>
          </div>
          <Reveal delay={400}>
            <a href="#contact" className="hidden md:flex items-center gap-2 text-pentagon-accent font-medium hover:underline mt-4 md:mt-0">
              View all properties <ArrowRight size={18} />
            </a>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {properties.map((prop, index) => (
            <Reveal key={prop.id} delay={index * 150}>
              <div 
                className="group relative h-[500px] rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-700 transform hover:-translate-y-2 bg-white"
              >
                {/* Image with Blur Effect - Made smoother with duration-1000 and ease-out */}
                <div className="absolute inset-0 bg-gray-900 overflow-hidden">
                  <img 
                    src={prop.image} 
                    alt={prop.title} 
                    className="w-full h-full object-cover opacity-80 blur-xl scale-110 transition-all duration-[1200ms] ease-out group-hover:scale-100 group-hover:blur-md"
                  />
                </div>

                {/* Locked Overlay */}
                <div className="absolute inset-0 flex flex-col items-center justify-center z-10">
                  <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center mb-4 border border-white/30 text-white shadow-lg animate-pulse-slow">
                     <Lock size={32} />
                  </div>
                  <span className="text-white font-bold tracking-widest uppercase text-sm drop-shadow-md">Upcoming Collection</span>
                </div>

                {/* Content at bottom */}
                <div className="absolute bottom-0 left-0 w-full p-8 z-20 bg-gradient-to-t from-black/80 to-transparent">
                  <h3 className="text-2xl font-bold text-white mb-1">{prop.title}</h3>
                  <p className="text-slate-300">{prop.location}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
        
        <div className="mt-12 text-center md:hidden">
           <a href="#contact" className="inline-flex items-center gap-2 text-pentagon-accent font-medium">
            View all properties <ArrowRight size={18} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProperties;