import React from 'react';
import { Building, Building2, Key, Wrench, Briefcase, FileCheck } from 'lucide-react';
import { ServiceItem } from '../types';
import { Reveal } from './Reveal';

const services: ServiceItem[] = [
  {
    id: '1',
    title: 'Block Management',
    description: 'Comprehensive administration of residential blocks, ensuring compliance.',
    icon: Building,
  },
  {
    id: '2',
    title: 'Commercial Assets',
    description: 'Strategic management of office, retail, and industrial portfolios.',
    icon: Briefcase,
  },
  {
    id: '3',
    title: 'Facility Management',
    description: 'Hard and soft facility services delivered with precision.',
    icon: Wrench,
  },
  {
    id: '4',
    title: 'RTM & Enfranchisement',
    description: 'Expert guidance for leaseholders exercising their Right to Manage.',
    icon: Key,
  },
  {
    id: '5',
    title: 'Compliance & Safety',
    description: 'Rigorous health & safety audits and regulatory adherence.',
    icon: FileCheck,
  },
  {
    id: '6',
    title: 'Build-to-Rent',
    description: 'End-to-end management solutions for institutional investors.',
    icon: Building2,
  },
];

const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <Reveal>
            <h2 className="text-4xl md:text-5xl font-bold text-pentagon-navy mb-6">Expertise.</h2>
          </Reveal>
          <Reveal delay={200}>
            <p className="text-xl text-slate-500 font-light max-w-2xl mx-auto">
              Comprehensive property management solutions tailored to your needs, delivered with corporate efficiency.
            </p>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Reveal key={service.id} delay={index * 100}>
              <div 
                className="group p-10 rounded-[2.5rem] bg-[#f5f5f7] hover:bg-white border border-transparent hover:border-slate-100 hover:shadow-2xl transition-all duration-500 relative overflow-hidden"
              >
                <div className="w-14 h-14 rounded-2xl bg-white shadow-sm flex items-center justify-center text-pentagon-navy mb-8 group-hover:scale-110 group-hover:bg-pentagon-accent group-hover:text-white transition-all duration-500">
                  <service.icon size={28} />
                </div>
                
                <h4 className="text-2xl font-bold text-pentagon-navy mb-4">{service.title}</h4>
                <p className="text-slate-500 font-medium leading-relaxed">{service.description}</p>
                
                <div className="absolute bottom-10 right-10 opacity-0 group-hover:opacity-100 transform translate-x-4 group-hover:translate-x-0 transition-all duration-500 text-pentagon-accent font-bold text-2xl">
                  →
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;