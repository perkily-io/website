import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const NavLink = ({ to, children }: { to: string; children: React.ReactNode }) => {
  const location = useLocation();
  const isActive = location.pathname === to;
  
  return (
    <Link 
      to={to} 
      className={cn(
        "relative inline-flex items-center px-3 py-1.5 text-sm font-medium transition-colors duration-200 group",
        isActive ? "text-white" : "text-white/70 hover:text-white"
      )}
    >
      <span
        className={cn(
          "absolute inset-0 -z-10 rounded-lg border border-white/10 bg-white/5 opacity-0 scale-95 transition-all duration-300",
          isActive ? "opacity-100 scale-100" : "group-hover:opacity-100 group-hover:scale-100"
        )}
      />
      <span className="relative z-10">{children}</span>
    </Link>
  );
};

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrolled]);

  return (
    <nav 
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-500',
        scrolled 
          ? 'bg-black/80 backdrop-blur-xl border-b border-white/[0.05] py-4' 
          : 'bg-transparent backdrop-blur-none border-b border-transparent py-6'
      )}
    >
      <div className="container max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 flex-shrink-0">
            <img src="/logos/perkily-logo.png" alt="Perkily Logo" className="h-20 w-20" />
            <span className="font-bold text-2xl text-white font-['Montserrat']">
              Perkily
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/perkily-pro">Perkily Pro</NavLink>
            <NavLink to="/help">Help</NavLink>
            <NavLink to="/contact">Contact</NavLink>
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-3">
            <Button 
              variant="outline"
              className="border-white/15 bg-white/5 text-white hover:bg-white/10"
              onClick={() => window.location.href = 'https://pro.perkily.io/login'}
            >
              Log in
            </Button>
            <Button 
              className="h-9 px-4 text-sm border-white/15 bg-white text-black hover:bg-white/90"
              onClick={() => window.location.href = 'https://pro.perkily.io/login'}
            >
              Try Pro
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              className="text-white/70 hover:text-white p-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div 
          className={cn(
            "md:hidden absolute left-0 right-0 top-full px-4 pt-2 pb-4 bg-black/80 backdrop-blur-xl border-b border-white/[0.05] transition-all duration-300 transform",
            mobileMenuOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4 pointer-events-none"
          )}
        >
          <div className="space-y-4 py-4">
            <Link to="/" className="block text-white/70 hover:text-white transition-colors duration-200 py-2">
              Home
            </Link>
            <Link to="/about" className="block text-white/70 hover:text-white transition-colors duration-200 py-2">
              About
            </Link>
            <Link to="/perkily-pro" className="block text-white/70 hover:text-white transition-colors duration-200 py-2">
              Perkily Pro
            </Link>
            <Link to="/contact" className="block text-white/70 hover:text-white transition-colors duration-200 py-2">
              Contact
            </Link>
            <Link to="/help" className="block text-white/70 hover:text-white transition-colors duration-200 py-2">
              Help
            </Link>
            <div className="pt-4 grid grid-cols-2 gap-3">
              <Button 
                variant="outline" 
                className="w-full border-white/15 bg-white/5 text-white hover:bg-white/10"
                onClick={() => window.location.href = 'https://pro.perkily.io/login'}
              >
                Log in
              </Button>
              <Button 
                className="w-full border-white/15 bg-white text-black hover:bg-white/90"
                onClick={() => window.location.href = 'https://pro.perkily.io/login'}
              >
                Try Pro
              </Button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
