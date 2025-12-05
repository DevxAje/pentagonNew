import React from 'react';
import { CheckCircle2 } from 'lucide-react';
import { Reveal } from './Reveal';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      {/* Muted Blue Gradient Background - From Right (Text) to Left (Image) */}
      <div className="absolute inset-0 bg-gradient-to-l from-slate-800 via-slate-900 to-[#0f172a] z-0"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          <div className="lg:w-1/2 relative">
            <Reveal>
              <div className="relative">
                {/* Image */}
                <div className="relative z-20 rounded-lg overflow-hidden shadow-2xl">
                   <img 
                    src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=1600&auto=format&fit=crop" 
                    alt="Pentagon UK Business Meeting" 
                    className="w-full h-auto object-cover"
                  />
                </div>
                
                {/* Overlapping Border Element - Adjusted Z-Index and Position */}
                <div className="absolute -bottom-6 -right-6 w-full h-full border-2 border-pentagon-accent/40 rounded-lg z-10"></div>
                <div className="absolute -top-6 -left-6 w-32 h-32 bg-pentagon-accent/10 rounded-full blur-2xl z-0"></div>
              </div>
            </Reveal>
          </div>

          <div className="lg:w-1/2 space-y-8 text-white">
            <div>
              <Reveal>
                <h2 className="text-sm font-bold text-pentagon-accent uppercase tracking-[0.2em] mb-3">Our Ethos</h2>
              </Reveal>
              <Reveal delay={200}>
                <h3 className="text-3xl md:text-4xl font-serif font-bold text-white mb-6">Built on Geometric Precision & Trust</h3>
              </Reveal>
              <Reveal delay={300}>
                <p className="text-slate-300 leading-relaxed text-lg font-light">
                  Pentagon UK brings a new level of rigor to property management. 
                  We believe that managing assets requires the same precision as constructing them. 
                  Our approach combines corporate efficiency with transparent reporting, ensuring every 
                  stakeholder has complete clarity.
                </p>
              </Reveal>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                "Nationwide Coverage",
                "RICS Regulated",
                "24/7 Emergency Support",
                "Transparent Accounting"
              ].map((item, index) => (
                <Reveal key={index} delay={400 + (index * 50)}>
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="text-pentagon-accent w-5 h-5 flex-shrink-0" />
                    <span className="text-sm font-medium text-slate-200">{item}</span>
                  </div>
                </Reveal>
              ))}
            </div>

            <div className="pt-8 border-t border-white/10">
              <Reveal delay={600}>
                <div className="grid grid-cols-3 gap-4">
                  <div>
                     <div className="text-3xl md:text-4xl font-bold text-white">5+</div>
                     <div className="text-xs text-slate-400 uppercase tracking-wider mt-2">Years Exp</div>
                  </div>
                  <div>
                     <div className="text-3xl md:text-4xl font-bold text-white">98%</div>
                     <div className="text-xs text-slate-400 uppercase tracking-wider mt-2">Client Satisfaction</div>
                  </div>
                  <div>
                     <div className="text-3xl md:text-4xl font-bold text-white">50+</div>
                     <div className="text-xs text-slate-400 uppercase tracking-wider mt-2">Properties Managed</div>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;