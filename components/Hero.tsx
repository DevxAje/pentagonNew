import React, { useState, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';

const heroImages = [
  "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2670&auto=format&fit=crop", // London
  "https://images.unsplash.com/photo-1460317442991-0ec209860340?q=80&w=2670&auto=format&fit=crop", // Modern Office
  "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2670&auto=format&fit=crop", // Luxury Interior
  "https://images.unsplash.com/photo-1577412647305-991150c7d163?q=80&w=2670&auto=format&fit=crop"  // Detail
];

const Hero: React.FC = () => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative h-screen w-full flex flex-col items-center justify-center overflow-hidden bg-black text-white">
      {/* Background Slideshow */}
      <div className="absolute inset-0 z-0">
        {heroImages.map((img, index) => (
          <div
            key={img}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentImage ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img 
              src={img} 
              alt="Pentagon Property Background" 
              className="w-full h-full object-cover opacity-60 scale-105 animate-pulse-slow"
            />
          </div>
        ))}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/80"></div>
      </div>

      <div className="relative z-10 container mx-auto px-6 text-center max-w-4xl pt-20">
        <h2 className="text-xl md:text-2xl font-medium text-pentagon-accent mb-6 animate-fade-in-up">
          Pentagon UK
        </h2>
        
        <h1 className="text-6xl md:text-8xl font-bold tracking-tight mb-6 animate-fade-in-up [animation-delay:200ms] leading-tight drop-shadow-2xl">
          Property. <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-400">
            Perfected.
          </span>
        </h1>
        
        <p className="text-xl md:text-2xl text-slate-200 max-w-2xl mx-auto mb-10 leading-relaxed font-light animate-fade-in-up [animation-delay:400ms] drop-shadow-md">
          Residential & Commercial management. Redefined for the modern era.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-6 justify-center animate-fade-in-up [animation-delay:600ms]">
          <a 
            href="#contact" 
            className="px-8 py-4 bg-pentagon-accent text-white rounded-full font-medium text-lg hover:bg-blue-400 transition-all transform hover:scale-105 shadow-lg shadow-blue-500/30"
          >
            Request Proposal
          </a>
          <a 
            href="#services" 
            className="px-8 py-4 bg-white/10 backdrop-blur-md border border-white/20 text-white rounded-full font-medium text-lg hover:bg-white hover:text-black transition-all transform hover:scale-105"
          >
            Learn more
          </a>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-slate-500">
        <ChevronDown size={32} />
      </div>
    </section>
  );
};

export default Hero;