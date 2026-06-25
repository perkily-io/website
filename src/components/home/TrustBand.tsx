import { FileCheck2, Lock, Shield } from 'lucide-react';
import { RevealOnView } from './RevealOnView';

const trustItems = [
  { icon: Shield, title: 'HIPAA', body: 'Healthcare data handling' },
  { icon: FileCheck2, title: 'SOC 2 Type II', body: 'Operational controls' },
  { icon: Lock, title: 'Private by design', body: 'Your data stays yours' },
];

export function TrustBand() {
  return (
    <section className="relative overflow-hidden bg-surface py-32 md:py-40 border-y border-white/8">
      <div className="absolute inset-0 grain-overlay" />
      <div className="relative mx-auto max-w-7xl px-6 lg:px-12">
        <div className="grid gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:items-center">
          <RevealOnView className="max-w-xl">
            <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-white/30">
              Security
            </span>
            <h2 className="mt-4 text-4xl font-light tracking-[-0.02em] text-white sm:text-5xl">
              Built for healthcare.
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-white/45">
              Protected workflows, role-based access, and auditability from day one.
            </p>
          </RevealOnView>

          <RevealOnView delay={0.1}>
            <div className="rounded-[2.5rem] border border-white/10 bg-canvas p-4 shadow-2xl shadow-black/25 sm:p-6">
              <div className="grid gap-px overflow-hidden rounded-[2rem] border border-white/8 bg-white/8 md:grid-cols-3">
                {trustItems.map((item) => {
                  const Icon = item.icon;
                  return (
                    <div key={item.title} className="flex min-h-[230px] flex-col justify-between bg-canvas p-7">
                      <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.035]">
                        <Icon className="h-5 w-5 text-white/50" />
                      </div>
                      <div>
                        <h3 className="text-xl font-light tracking-[-0.02em] text-white">{item.title}</h3>
                        <p className="mt-2 text-sm leading-relaxed text-white/42">{item.body}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
              <div className="mt-4 rounded-[2rem] border border-white/8 bg-white/[0.025] p-7 text-center">
                <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-white/30">
                  Provider-controlled
                </p>
                <p className="mx-auto mt-3 max-w-xl text-2xl font-light tracking-[-0.02em] text-white">
                  No output is final until your team approves it.
                </p>
              </div>
            </div>
          </RevealOnView>
        </div>
      </div>
    </section>
  );
}
