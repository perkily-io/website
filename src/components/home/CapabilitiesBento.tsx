import {
  BarChart3,
  Calendar,
  CreditCard,
  Package,
  Shield,
  Users,
} from 'lucide-react';
import { motion } from 'framer-motion';
import { RevealOnView } from './RevealOnView';

const capabilities = [
  { icon: Calendar, title: 'Appointments', description: 'Calendar, reminders, no-show reduction', meta: 'Front desk' },
  { icon: Users, title: 'Patient CRM', description: 'Profiles, history, documents', meta: 'Care team' },
  { icon: Package, title: 'Inventory & Sales', description: 'Products, stock, invoicing', meta: 'Operations' },
  { icon: CreditCard, title: 'Billing', description: 'Medical aid + private billing', meta: 'Revenue' },
  { icon: BarChart3, title: 'Analytics', description: 'Revenue, claims, efficiency', meta: 'Visibility' },
  { icon: Shield, title: 'Compliance', description: 'Permissions, audit trail, security', meta: 'Control' },
];

export function CapabilitiesBento() {
  return (
    <section id="capabilities" className="relative overflow-hidden bg-canvas py-32 md:py-44">
      <div className="absolute inset-0 grain-overlay" />
      <div className="relative mx-auto max-w-7xl px-6 lg:px-12">
        <RevealOnView className="mx-auto max-w-2xl text-center">
          <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-white/30">
            Capabilities
          </span>
          <h2 className="mt-4 text-4xl font-light tracking-[-0.02em] text-white sm:text-5xl">
            Everything your practice needs
          </h2>
          <p className="mx-auto mt-5 max-w-lg text-white/45">
            A quiet operating layer for the work that usually falls between the cracks.
          </p>
        </RevealOnView>

        <RevealOnView delay={0.12} className="mx-auto mt-16 max-w-6xl">
          <div className="rounded-[2.5rem] border border-white/10 bg-surface p-4 shadow-2xl shadow-black/20 sm:p-6">
            <div className="grid gap-4 lg:grid-cols-[0.9fr_1.1fr]">
              <div className="flex min-h-[420px] flex-col justify-between rounded-[2rem] border border-white/8 bg-canvas p-8">
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-white/30">
                    ClinicalOS core
                  </p>
                  <h3 className="mt-4 max-w-sm text-4xl font-light tracking-[-0.03em] text-white">
                    One system for the whole practice.
                  </h3>
                </div>

                <div className="relative mt-12 aspect-square max-w-sm self-center rounded-full border border-white/10 bg-white/[0.025]">
                  <div className="absolute inset-8 rounded-full border border-white/10" />
                  <div className="absolute inset-16 rounded-full border border-white/10" />
                  <motion.div
                    initial={{ opacity: 0, scale: 0.92 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, margin: '-80px' }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    className="absolute left-1/2 top-1/2 flex h-28 w-28 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-canvas text-center"
                  >
                    <span className="text-xl font-light text-white">OS</span>
                  </motion.div>
                </div>
              </div>

              <div className="grid gap-px overflow-hidden rounded-[2rem] border border-white/8 bg-white/8 sm:grid-cols-2">
                {capabilities.map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <RevealOnView key={item.title} delay={index * 0.04} y={18}>
                      <div className="group flex min-h-[205px] flex-col justify-between bg-canvas p-7 transition-colors duration-500 hover:bg-white/[0.035]">
                        <div className="flex items-center justify-between">
                          <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.035]">
                            <Icon className="h-5 w-5 text-white/50" />
                          </div>
                          <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-white/25">
                            {item.meta}
                          </span>
                        </div>
                        <div>
                          <h3 className="text-xl font-light tracking-[-0.02em] text-white">{item.title}</h3>
                          <p className="mt-2 text-sm leading-relaxed text-white/42">{item.description}</p>
                        </div>
                      </div>
                    </RevealOnView>
                  );
                })}
              </div>
            </div>
          </div>
        </RevealOnView>
      </div>
    </section>
  );
}
