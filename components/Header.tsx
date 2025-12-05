import React, { useState, useEffect } from 'react';
import { Menu, X, Hexagon } from 'lucide-react';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Services', href: '#services' },
    { name: 'Featured', href: '#featured' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-500 ${
        isScrolled || mobileMenuOpen
          ? 'glass-nav py-3' 
          : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center gap-2 group cursor-pointer" onClick={() => window.scrollTo(0,0)}>
          <div className="relative">
            <Hexagon className={`w-8 h-8 transition-colors duration-300 ${isScrolled || mobileMenuOpen ? 'text-pentagon-navy' : 'text-white'} fill-current`} />
            <div className={`absolute inset-0 flex items-center justify-center font-bold text-[10px] ${isScrolled || mobileMenuOpen ? 'text-white' : 'text-pentagon-navy'}`}>UK</div>
          </div>
          <div className="flex flex-col leading-none">
            <span className={`font-sans text-lg tracking-wide font-semibold ${isScrolled || mobileMenuOpen ? 'text-pentagon-navy' : 'text-white'}`}>PENTAGON</span>
          </div>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className={`text-xs font-medium tracking-wide transition-colors ${isScrolled ? 'text-slate-600 hover:text-pentagon-accent' : 'text-slate-300 hover:text-white'}`}
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Mobile Toggle */}
        <button 
          className={`md:hidden ${isScrolled || mobileMenuOpen ? 'text-pentagon-navy' : 'text-white'}`}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full glass-nav border-b border-slate-200 py-8 px-6 shadow-xl animate-fade-in-up">
          <nav className="flex flex-col gap-6">
             {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-pentagon-navy text-lg font-medium"
              >
                {link.name}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;