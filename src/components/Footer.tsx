import React from 'react';
import { Link } from 'react-router-dom';

const FooterLink = ({ to, children }: { to: string; children: React.ReactNode }) => (
  <Link
    to={to}
    className="text-[13px] text-white/50 hover:text-white transition-all duration-300 rounded-lg px-2 py-1 -mx-2 block"
  >
    {children}
  </Link>
);

const FooterSection = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <div className="space-y-4">
    <h5 className="text-xs font-medium text-white/30 uppercase tracking-widest font-mono">{title}</h5>
    <ul className="space-y-3">{children}</ul>
  </div>
);

const Footer = () => {
  return (
    <footer className="relative w-full bg-canvas overflow-hidden border-t border-white/8">
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden">
        <span className="text-[50vw] sm:text-[30vw] font-light text-white/[0.02] tracking-tighter whitespace-nowrap transform -rotate-6 translate-y-1/3">
          CLINICALOS
        </span>
      </div>

      <div className="relative max-w-[1200px] mx-auto px-4 sm:px-6 py-12 sm:py-16">
        <div className="border-b border-white/8 pb-8 sm:pb-12">
          <div className="flex flex-col items-start gap-6">
            <div className="flex items-center gap-3">
              <img src="/favicon-32x32.png" alt="Perkily Health Technologies" className="h-8 w-8" />
              <span className="text-xl font-light tracking-tight text-white">Perkily Health Technologies</span>
            </div>
            <p className="text-[14px] text-white/50 leading-relaxed max-w-[400px]">
              ClinicalOS — AI that runs your medical practice.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-8 sm:gap-12 py-8 sm:py-12">
          <div className="col-span-2 sm:col-span-1">
            <FooterSection title="Company">
              <li><FooterLink to="/about">About</FooterLink></li>
              <li><FooterLink to="/careers">Careers</FooterLink></li>
              <li><FooterLink to="/blog">Blog</FooterLink></li>
              <li><FooterLink to="/press">Press</FooterLink></li>
            </FooterSection>
          </div>

          <div className="col-span-2 sm:col-span-1">
            <FooterSection title="Resources">
              <li><FooterLink to="/docs">Documentation</FooterLink></li>
              <li><FooterLink to="/contact">Contact</FooterLink></li>
              <li><FooterLink to="/privacy-policy">Privacy Policy</FooterLink></li>
              <li><FooterLink to="/terms-of-service">Terms &amp; Conditions</FooterLink></li>
            </FooterSection>
          </div>

          <div className="col-span-2 sm:col-span-1">
            <FooterSection title="Connect">
              <li>
                <a
                  href="https://x.com/HelloPerkily"
                  className="text-[13px] text-white/50 hover:text-white transition-all duration-300 rounded-lg px-2 py-1 -mx-2 flex items-center gap-2 group"
                >
                  X (Twitter)
                  <svg className="w-3 h-3 transform transition-transform group-hover:translate-x-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M7 17L17 7M17 7H7M17 7V17" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/company/perkily-io/"
                  className="text-[13px] text-white/50 hover:text-white transition-all duration-300 rounded-lg px-2 py-1 -mx-2 flex items-center gap-2 group"
                >
                  LinkedIn
                  <svg className="w-3 h-3 transform transition-transform group-hover:translate-x-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M7 17L17 7M17 7H7M17 7V17" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/perkily.io/"
                  className="text-[13px] text-white/50 hover:text-white transition-all duration-300 rounded-lg px-2 py-1 -mx-2 flex items-center gap-2 group"
                >
                  Instagram
                  <svg className="w-3 h-3 transform transition-transform group-hover:translate-x-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M7 17L17 7M17 7H7M17 7V17" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </a>
              </li>
            </FooterSection>
          </div>

          <div className="col-span-2 sm:col-span-1">
            <FooterSection title="Contact">
              <li>
                <a
                  href="mailto:hello@perkily.io"
                  className="text-[13px] text-white/50 hover:text-white transition-all duration-300 rounded-lg px-2 py-1 -mx-2"
                >
                  hello@perkily.io
                </a>
              </li>
              <li className="text-[13px] text-white/50 leading-relaxed pl-2">
                Block A, Willow Wood Office Park<br />
                Cedar Road, 3rd St<br />
                Broadacres Park<br />
                Johannesburg, 2021
              </li>
            </FooterSection>
          </div>
        </div>
      </div>

      <div className="relative border-t border-white/8">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-[12px]">
            <div className="flex flex-wrap justify-center md:justify-start gap-x-4 gap-y-2 text-white/30">
              <span>&copy; {new Date().getFullYear()} Perkily Health Technologies, Inc.</span>
              <span className="hidden md:inline">•</span>
              <span>All rights reserved</span>
              <span className="hidden md:inline">•</span>
              <Link to="/privacy-policy" className="hover:text-white transition-colors duration-200">Privacy</Link>
              <span className="hidden md:inline">•</span>
              <Link to="/terms-of-service" className="hover:text-white transition-colors duration-200">Terms</Link>
            </div>
            <div className="flex items-center gap-2 text-white/30 mt-4 md:mt-0">
              <div className="w-1.5 h-1.5 rounded-full bg-white/40" />
              South Africa
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
