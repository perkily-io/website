import { motion, useReducedMotion } from 'framer-motion';
import { Calendar, FileText, CreditCard } from 'lucide-react';
import { cn } from '@/lib/utils';

const activities = [
  { icon: Calendar, label: 'Booked 12 appointments', delay: 1.0 },
  { icon: FileText, label: 'Drafted 8 clinical notes', delay: 1.2 },
  { icon: CreditCard, label: 'Submitted 5 claims', delay: 1.4 },
];

interface ActivityCardsProps {
  className?: string;
}

export function ActivityCards({ className }: ActivityCardsProps) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <div className={cn('flex flex-wrap items-center justify-center gap-2.5', className)}>
      {activities.map((activity, index) => {
        const Icon = activity.icon;

        return (
          <motion.div
            key={activity.label}
            initial={prefersReducedMotion ? { opacity: 0 } : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.7,
              delay: activity.delay,
              ease: [0.16, 1, 0.3, 1],
            }}
            className={cn(
              'flex items-center gap-2.5 rounded-full border border-white/10 bg-white/[0.06] px-4 py-2 backdrop-blur-md',
              !prefersReducedMotion && 'animate-float-gentle'
            )}
            style={!prefersReducedMotion ? { animationDelay: `${index * 0.8}s` } : undefined}
          >
            <Icon className="h-3.5 w-3.5 text-white/60" />
            <span className="text-xs font-medium text-white/80 whitespace-nowrap">{activity.label}</span>
          </motion.div>
        );
      })}
    </div>
  );
}
