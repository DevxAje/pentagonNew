import React, { useState, useEffect } from 'react';
import { Star, Quote } from 'lucide-react';
import { Reveal } from './Reveal';

const testimonials = [
  {
    id: 1,
    text: "Pentagon Property Management has transformed how I manage my portfolio. Their professionalism and attention to detail is exceptional. I finally have peace of mind knowing my assets are in capable hands.",
    name: "Sarah Mitchell",
    role: "Property Investor",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop"
  },
  {
    id: 2,
    text: "The team at Pentagon handles everything with military precision. From maintenance requests to financial reporting, the transparency is unmatched in the industry.",
    name: "James Sterling",
    role: "Commercial Landlord",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=200&auto=format&fit=crop"
  },
  {
    id: 3,
    text: "As a tenant in a Pentagon-managed building, I've been incredibly impressed. Responses are quick, the building is immaculate, and the app makes communication effortless.",
    name: "Elena Rodriguez",
    role: "Resident",
    avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=200&auto=format&fit=crop"
  }
];

const Testimonials: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-24 bg-[#f5f5f7] overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <Reveal>
             <h2 className="text-sm font-bold text-pentagon-navy/60 uppercase tracking-[0.2em] mb-3">Testimonials</h2>
             <h3 className="text-3xl md:text-4xl font-bold text-pentagon-navy">What Our Clients Say</h3>
          </Reveal>
        </div>

        <div className="max-w-4xl mx-auto relative h-[400px] md:h-[300px]">
          {testimonials.map((item, index) => (
            <div
              key={item.id}
              className={`absolute inset-0 flex flex-col items-center justify-center transition-all duration-1000 ease-in-out transform ${
                index === activeIndex 
                  ? 'opacity-100 translate-x-0 scale-100' 
                  : index < activeIndex 
                    ? 'opacity-0 -translate-x-full scale-95' 
                    : 'opacity-0 translate-x-full scale-95'
              }`}
            >
              <div className="bg-white p-8 md:p-12 rounded-3xl shadow-xl text-center relative max-w-2xl mx-auto">
                <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-12 bg-pentagon-accent rounded-full flex items-center justify-center text-white shadow-lg">
                  <Quote size={20} fill="currentColor" />
                </div>
                
                <div className="flex gap-1 justify-center mb-6 mt-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} className="text-yellow-400 fill-yellow-400" />
                  ))}
                </div>

                <p className="text-slate-600 text-lg md:text-xl italic mb-8 leading-relaxed">
                  "{item.text}"
                </p>

                <div className="flex items-center justify-center gap-4">
                  <img 
                    src={item.avatar} 
                    alt={item.name} 
                    className="w-12 h-12 rounded-full object-cover border-2 border-pentagon-light"
                  />
                  <div className="text-left">
                    <h4 className="font-bold text-pentagon-navy text-sm">{item.name}</h4>
                    <p className="text-xs text-slate-500 uppercase tracking-wide">{item.role}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Indicators */}
        <div className="flex justify-center gap-2 mt-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === activeIndex ? 'w-8 bg-pentagon-accent' : 'bg-slate-300 hover:bg-slate-400'
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;