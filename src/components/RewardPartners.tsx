import React from 'react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface PartnerCardProps {
  name: string;
  status?: 'current' | 'coming';
  logo?: string;
}

const PartnerCard = ({ name, status = 'current', logo }: PartnerCardProps) => (
  <div className="group relative">
    <div className="absolute inset-0 bg-gradient-to-r from-[#00A3FF]/10 to-[#8B5CF6]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl" />
    <div className="glass-card relative overflow-hidden p-6 sm:p-8 backdrop-blur-xl border border-white/[0.05] rounded-3xl group-hover:border-white/[0.1] transition-all duration-500">
      <div className="flex flex-row items-center gap-4 h-full">
        {logo ? (
          <div className="relative flex-shrink-0">
            <img 
              src={logo} 
              alt={`${name} logo`} 
              className="h-12 sm:h-16 w-auto object-contain"
            />
          </div>
        ) : null}
        <div className="flex flex-col">
          <h3 className="text-xl sm:text-2xl font-medium text-white tracking-tight">
            {name}
          </h3>
            {status === 'coming' && (
            <span className="text-xs font-medium bg-[#8B5CF6]/10 text-[#8B5CF6] px-3 py-1 rounded-full self-start mt-2">
              Coming soon
            </span>
          )}
        </div>
      </div>
      <div className="absolute bottom-0 right-0 w-24 h-24 bg-gradient-to-r from-[#00A3FF]/5 to-[#8B5CF6]/5 blur-2xl rounded-full transform translate-x-8 translate-y-8 group-hover:translate-x-4 group-hover:translate-y-4 transition-transform duration-500" />
    </div>
  </div>
);

const RewardPartners = () => {
  const currentPartners = [
    {
      name: 'Uber',
      logo: '/logos/uber-icon.svg'
    },
    {
      name: 'Uber Eats',
      logo: '/logos/uber-eats-seeklogo.png'
    },
    {
      name: 'Woolworths',
      logo: '/logos/woolworths%20logo.svg'
    },
    {
      name: 'EPF Tech Fund'
    },
  ];

  return (
    <section className="relative py-16 sm:py-24 px-4 sm:px-6">
      <div className="container max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16 space-y-3 sm:space-y-4">
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-semibold tracking-tight">
            Reward <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#00A3FF] to-[#8B5CF6]">Partners</span>
          </h2>
          <p className="text-sm sm:text-lg text-white/60 max-w-2xl mx-auto">
            Earn points and unlock exclusive rewards from world-class brands
          </p>
        </div>

        {/* Partners Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-6 mb-8 sm:mb-12">
          {currentPartners.map((partner) => (
            <PartnerCard 
              key={partner.name} 
              name={partner.name}
              logo={partner.logo} 
            />
          ))}
        </div>

        {/* Coming Soon Section */}
        <div className="mt-12 sm:mt-20 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-[#00A3FF]/5 to-[#8B5CF6]/5 blur-3xl" />
          <div className="relative glass-card p-6 sm:p-12 rounded-3xl border border-white/[0.05] overflow-hidden">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 sm:gap-8">
              <div>
                <h3 className="text-lg sm:text-2xl font-medium text-white mb-3 sm:mb-4">More Partners Coming Soon</h3>
                <p className="text-sm sm:text-base text-white/60 max-w-2xl">
                  We're partnering with leading brands across retail, wellness, entertainment, and more. 
                  Be the first to know when new rewards become available.
                </p>
              </div>
              <Button 
                asChild
                className="group bg-white/[0.05] hover:bg-white/[0.1] text-white border border-white/[0.1] hover:border-white/[0.2] transition-all duration-200 whitespace-nowrap w-full sm:w-auto"
              >
                <Link to="/partners">
                  Become a partner
                  <ArrowRight className="ml-2 w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-200" />
                </Link>
              </Button>
            </div>

            <div className="mt-6 sm:mt-8 pt-6 sm:pt-8 border-t border-white/[0.05]">
              <p className="text-xs sm:text-sm text-white/40">
                Want to become a reward partner? 
                <Link 
                  to="/partners" 
                  className="ml-2 text-[#8B5CF6] hover:text-[#8B5CF6]/80 transition-colors duration-200"
                >
                  Contact our partnerships team →
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RewardPartners; 