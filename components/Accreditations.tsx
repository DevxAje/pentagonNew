import React from 'react';
import { Award, Shield, CheckSquare, FileLock, Scale, Briefcase } from 'lucide-react';
import { AccreditationItem } from '../types';
import { Reveal } from './Reveal';

const accreditations: AccreditationItem[] = [
  { id: '1', name: 'RICS', logoText: 'RICS Regulated', href: '#' },
  { id: '2', name: 'ARMA', logoText: 'ARMA Member', href: '#' },
  { id: '3', name: 'IRPM', logoText: 'IRPM Certified', href: '#' },
  { id: '4', name: 'SafeContractor', logoText: 'SafeContractor', href: '#' },
  { id: '5', name: 'PRS', logoText: 'Property Redress', href: '#' }, // Property Redress Scheme
  { id: '6', name: 'ICO', logoText: 'ICO Registered', href: '#' },   // Information Commissioner's Office
  { id: '7', name: 'Admiral', logoText: 'Admiral Business', href: '#' },
];

const Accreditations: React.FC = () => {
  return (
    <section id="accreditations" className="py-20 bg-slate-50 border-y border-slate-200">
      <div className="container mx-auto px-6 text-center">
        <Reveal>
          <p className="text-sm text-slate-500 font-semibold uppercase tracking-widest mb-12">
            Accredited by Industry Leaders
          </p>
        </Reveal>
        
        <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-12 max-w-5xl mx-auto">
          {accreditations.map((item, index) => (
            <Reveal key={item.id} delay={index * 50}>
              <a 
                href={item.href} 
                className="flex flex-col items-center gap-3 group cursor-pointer"
                title={`Click to view ${item.logoText} details`}
              >
                <div className="w-20 h-20 bg-white border border-slate-200 rounded-2xl shadow-sm flex items-center justify-center group-hover:border-pentagon-accent group-hover:shadow-lg group-hover:-translate-y-1 transition-all duration-300 text-slate-400 group-hover:text-pentagon-navy">
                   {getIconForAccreditation(item.name)}
                </div>
                <span className="text-xs font-bold text-slate-500 group-hover:text-pentagon-navy transition-colors">{item.logoText}</span>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

const getIconForAccreditation = (name: string) => {
  switch (name) {
    case 'RICS': return <Shield size={36} strokeWidth={1.5} />;
    case 'ARMA': return <Award size={36} strokeWidth={1.5} />;
    case 'IRPM': return <CheckSquare size={36} strokeWidth={1.5} />;
    case 'SafeContractor': return <CheckSquare size={36} strokeWidth={1.5} />;
    case 'PRS': return <Scale size={36} strokeWidth={1.5} />;
    case 'ICO': return <FileLock size={36} strokeWidth={1.5} />;
    case 'Admiral': return <Briefcase size={36} strokeWidth={1.5} />;
    default: return <Award size={36} strokeWidth={1.5} />;
  }
};

export default Accreditations;