import React, { useState } from 'react';
import { ArrowUpRight, Clock, MapPin, PoundSterling, Building, ChevronDown, ChevronUp } from 'lucide-react';
import { Reveal } from './Reveal';

const RECRUITMENT_EMAIL = "careers@pentagon-uk.com";

const openings = [
  {
    id: 1,
    role: "Business Support Officer (Property & Facilities Operations)",
    company: "PENTAGON GROUP U.K LTD",
    location: "Suite G, 3rd Floor, The Clock House, East Street, Barking, IG11 8EQ",
    type: "Full-time, Permanent",
    salary: "£41,700 per annum",
    hours: "37.5 hours per week (Monday to Friday, 9:00 AM – 5:30 PM with 1-hour break)",
    description: "We are seeking a dedicated Business Support Officer to assist with Property & Facilities Operations. The ideal candidate will handle administrative tasks, ensure compliance with property regulations, and support the management team in daily operations.",
    department: "Operations"
  }
];

const CurrentOpenings: React.FC = () => {
  const [expandedId, setExpandedId] = useState<number | null>(null);

  const toggleExpand = (id: number) => {
    setExpandedId(expandedId === id ? null : id);
  };

  const handleApply = (e: React.MouseEvent, job: typeof openings[0]) => {
    e.stopPropagation(); // Prevent toggling the accordion when clicking the apply button
    
    const subject = encodeURIComponent(`Application: ${job.role}`);
    const body = encodeURIComponent(
`Dear Hiring Team,

I am writing to apply for the position of ${job.role} at ${job.company}.

Please find my CV attached.

Best regards,
`
    );
    
    window.location.href = `mailto:${RECRUITMENT_EMAIL}?subject=${subject}&body=${body}`;
  };

  return (
    <section id="careers" className="py-24 bg-white border-t border-slate-100">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16">
          <div className="max-w-2xl">
            <Reveal>
              <h2 className="text-sm font-bold text-pentagon-accent uppercase tracking-[0.2em] mb-3">Careers</h2>
            </Reveal>
            <Reveal delay={100}>
              <h3 className="text-3xl md:text-4xl font-bold text-pentagon-navy mb-4">Join the Pentagon Team.</h3>
            </Reveal>
            <Reveal delay={200}>
              <p className="text-xl text-slate-500 font-light">
                We are always looking for exceptional talent to help us redefine property management standards across the UK.
              </p>
            </Reveal>
          </div>
        </div>

        <div className="flex flex-col">
          {openings.map((job, index) => (
            <Reveal key={job.id} delay={index * 100}>
              <div 
                onClick={() => toggleExpand(job.id)}
                className={`group flex flex-col border-b border-slate-100 bg-white hover:bg-slate-50 transition-all duration-300 rounded-xl px-6 py-6 cursor-pointer ${expandedId === job.id ? 'bg-slate-50 shadow-sm' : ''}`}
              >
                {/* Header Row */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div>
                    <h4 className="text-xl font-bold text-pentagon-navy group-hover:text-pentagon-accent transition-colors">
                      {job.role}
                    </h4>
                    <p className="text-slate-400 text-sm mt-1 font-medium tracking-wide uppercase">{job.company}</p>
                  </div>
                  
                  <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-8 text-sm text-slate-500">
                    <div className="hidden md:flex items-center gap-2">
                       <span className="bg-slate-200 text-slate-600 px-3 py-1 rounded-full text-xs font-bold">{job.type}</span>
                    </div>
                    
                    <button 
                      onClick={(e) => handleApply(e, job)}
                      title="Apply via Email"
                      className="w-10 h-10 rounded-full bg-slate-200 flex items-center justify-center text-slate-600 group-hover:bg-pentagon-accent group-hover:text-white transition-all transform hover:scale-110 z-10"
                    >
                      <ArrowUpRight size={20} />
                    </button>
                    
                     <div className="md:hidden text-slate-300">
                        {expandedId === job.id ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                     </div>
                  </div>
                </div>

                {/* Expanded Details */}
                <div 
                  className={`grid transition-all duration-500 ease-in-out overflow-hidden ${
                    expandedId === job.id ? 'grid-rows-[1fr] opacity-100 mt-6 pt-6 border-t border-slate-200' : 'grid-rows-[0fr] opacity-0'
                  }`}
                >
                  <div className="min-h-0 space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                       <div className="flex items-start gap-3">
                          <MapPin className="text-pentagon-accent mt-1 shrink-0" size={18} />
                          <div>
                            <span className="block text-xs font-bold text-slate-400 uppercase">Location</span>
                            <span className="text-slate-700 font-medium">{job.location}</span>
                          </div>
                       </div>
                       <div className="flex items-start gap-3">
                          <Clock className="text-pentagon-accent mt-1 shrink-0" size={18} />
                          <div>
                            <span className="block text-xs font-bold text-slate-400 uppercase">Hours</span>
                            <span className="text-slate-700 font-medium">{job.hours}</span>
                          </div>
                       </div>
                       <div className="flex items-start gap-3">
                          <PoundSterling className="text-pentagon-accent mt-1 shrink-0" size={18} />
                          <div>
                            <span className="block text-xs font-bold text-slate-400 uppercase">Salary</span>
                            <span className="text-slate-700 font-medium">{job.salary}</span>
                          </div>
                       </div>
                        <div className="flex items-start gap-3">
                          <Building className="text-pentagon-accent mt-1 shrink-0" size={18} />
                          <div>
                            <span className="block text-xs font-bold text-slate-400 uppercase">Job Type</span>
                            <span className="text-slate-700 font-medium">{job.type}</span>
                          </div>
                       </div>
                    </div>
                    
                    <div className="bg-white p-6 rounded-lg border border-slate-100 shadow-sm">
                      <h5 className="font-bold text-pentagon-navy mb-2">About the Role</h5>
                      <p className="text-slate-600 leading-relaxed text-sm">{job.description}</p>
                    </div>

                    <div className="flex justify-end">
                       <button 
                         onClick={(e) => handleApply(e, job)}
                         className="px-6 py-3 bg-pentagon-navy text-white rounded-lg font-bold text-sm hover:bg-pentagon-accent transition-colors flex items-center gap-2"
                       >
                         Apply Now <ArrowUpRight size={16} />
                       </button>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CurrentOpenings;