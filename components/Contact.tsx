import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import { Reveal } from './Reveal';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 bg-white relative">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16">
          
          <div className="space-y-8">
            <div>
              <Reveal>
                <h2 className="text-sm font-bold text-pentagon-accent uppercase tracking-[0.2em] mb-3">Get in Touch</h2>
              </Reveal>
              <Reveal delay={100}>
                <h3 className="text-3xl md:text-4xl font-serif font-bold text-pentagon-navy">Secure Your Property's Future</h3>
              </Reveal>
              <Reveal delay={200}>
                <p className="mt-4 text-slate-600">
                  Contact our London headquarters for a confidential consultation regarding your residential or commercial portfolio.
                </p>
              </Reveal>
            </div>

            <div className="space-y-6">
              {[
                { icon: MapPin, title: "Headquarters", text: "125 London Wall, Barbican", sub: "London, EC2Y 5AS, UK" },
                { icon: Phone, title: "Phone", text: "+44 (0) 20 7123 4567", sub: "Mon-Fri, 09:00 - 18:00" },
                { icon: Mail, title: "Email", text: "enquiries@pentagon-uk.com", sub: "" }
              ].map((item, idx) => (
                <Reveal key={idx} delay={300 + (idx * 100)}>
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-pentagon-light rounded text-pentagon-navy">
                      <item.icon size={24} />
                    </div>
                    <div>
                      <h4 className="font-bold text-pentagon-navy">{item.title}</h4>
                      <p className="text-slate-600 text-sm mt-1">
                        {item.text}<br />
                        {item.sub && <span className="text-slate-400 text-xs">{item.sub}</span>}
                      </p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          <Reveal delay={500} className="w-full">
            <div className="bg-pentagon-light p-8 md:p-12 rounded-sm border-l-4 border-pentagon-navy">
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-xs font-bold text-slate-500 uppercase mb-2">Full Name</label>
                    <input type="text" id="name" className="w-full bg-white border border-slate-300 p-3 focus:outline-none focus:border-pentagon-navy" placeholder="John Smith" />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-xs font-bold text-slate-500 uppercase mb-2">Email Address</label>
                    <input type="email" id="email" className="w-full bg-white border border-slate-300 p-3 focus:outline-none focus:border-pentagon-navy" placeholder="john@company.com" />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="service" className="block text-xs font-bold text-slate-500 uppercase mb-2">Service Required</label>
                  <select id="service" className="w-full bg-white border border-slate-300 p-3 focus:outline-none focus:border-pentagon-navy">
                    <option>Block Management</option>
                    <option>Commercial Asset Management</option>
                    <option>Right to Manage</option>
                    <option>Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-xs font-bold text-slate-500 uppercase mb-2">Message</label>
                  <textarea id="message" rows={4} className="w-full bg-white border border-slate-300 p-3 focus:outline-none focus:border-pentagon-navy" placeholder="Tell us about your property..."></textarea>
                </div>

                <button type="submit" className="w-full py-4 bg-pentagon-navy text-white font-bold uppercase tracking-widest hover:bg-slate-800 transition-colors">
                  Send Inquiry
                </button>
              </form>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default Contact;