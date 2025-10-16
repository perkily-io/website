import React from 'react';
import Layout from '@/components/Layout';
import { Button } from '@/components/ui/button';
import {
  ArrowRight,
  Brain,
  Workflow,
  Network,
  Sparkles,
  Users,
  Shield,
  ClipboardCheck,
  Activity,
  FileText,
  Bell,
  Lock,
  ShieldCheck,
  Server,
  Database,
} from 'lucide-react';

const ValueCard = ({ 
  icon: Icon, 
  title, 
  description 
}: { 
  icon: React.ElementType;
  title: string;
  description: string;
}) => (
  <div className="relative group">
    <div className="absolute inset-0 bg-gradient-to-br from-white/[0.05] to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    <div className="glass-card relative p-6 sm:p-8 rounded-3xl border border-white/[0.05] h-full">
      <div className="mb-6">
        <div className="w-12 h-12 rounded-2xl bg-white/[0.03] flex items-center justify-center">
          <Icon className="w-6 h-6 text-[#8B5CF6]" />
        </div>
      </div>
      <h3 className="text-lg sm:text-xl font-semibold text-white mb-3">{title}</h3>
      <p className="text-sm sm:text-base text-white/60 leading-relaxed">{description}</p>
    </div>
  </div>
);

const About = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="pt-24 sm:pt-32 pb-10 sm:pb-12 px-4 sm:px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-[0.02] mix-blend-lighten" />
        <div className="container max-w-7xl mx-auto relative">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <div>
              <div className="inline-flex items-center justify-center px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-white/[0.03] border border-white/[0.05] mb-5">
                <span className="text-xs sm:text-sm text-white/70">About Perkily</span>
              </div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight leading-[1.1] mb-5">
                Bringing AI into healthcare—safer decisions, lighter workloads, engaged patients
              </h1>
              <p className="text-white/70 text-lg md:text-xl max-w-2xl">
                We augment clinical judgment with assistive AI that reduces errors, streamlines workflows, and keeps patients moving forward.
              </p>
            </div>
            <div className="relative h-[240px] sm:h-[300px] md:h-[360px] lg:h-[420px]">
              <div className="absolute inset-0 rounded-3xl bg-white/[0.03] border border-white/[0.05] overflow-hidden">
                <div className="absolute -top-24 -left-24 w-[380px] h-[380px] bg-gradient-to-br from-[#00A3FF]/20 to-transparent rounded-full blur-3xl" />
                <div className="absolute -bottom-24 -right-24 w-[380px] h-[380px] bg-gradient-to-br from-[#8B5CF6]/20 to-transparent rounded-full blur-3xl" />
                <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-[0.04]" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Impact bar */}
      <section className="px-4 sm:px-6 pb-8 sm:pb-12">
        <div className="container max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="glass-card p-5 rounded-2xl">
              <div className="flex items-center gap-3">
                <ClipboardCheck className="w-5 h-5 text-[#8B5CF6]" />
                <div className="text-sm text-white/70">Goal</div>
              </div>
              <div className="mt-2 text-2xl font-semibold">Reduce preventable errors</div>
            </div>
            <div className="glass-card p-5 rounded-2xl">
              <div className="flex items-center gap-3">
                <Activity className="w-5 h-5 text-[#00A3FF]" />
                <div className="text-sm text-white/70">Focus</div>
              </div>
              <div className="mt-2 text-2xl font-semibold">Streamline clinical workflows</div>
            </div>
            <div className="glass-card p-5 rounded-2xl">
              <div className="flex items-center gap-3">
                <Users className="w-5 h-5 text-[#8B5CF6]" />
                <div className="text-sm text-white/70">Outcome</div>
              </div>
              <div className="mt-2 text-2xl font-semibold">Stronger patient engagement</div>
            </div>
          </div>
        </div>
      </section>

      {/* Approach */}
      <section className="py-10 sm:py-16 px-4 sm:px-6">
        <div className="container max-w-7xl mx-auto">
          <div className="text-center mb-10 sm:mb-14">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">Our approach</h2>
            <p className="text-white/70 max-w-2xl mx-auto mt-3">
              Human‑centered, clinician‑guided, safety‑first. AI that assists in the flow of care—not on the sidelines.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <ValueCard
              icon={Shield}
              title="Safety by design"
              description="Guardrails, explainability, and checks that surface risk and contraindications at the point of decision."
            />
            <ValueCard
              icon={Brain}
              title="Human in control"
              description="Assistive AI that augments clinical judgment with context, summaries, and clear options."
            />
            <ValueCard
              icon={Network}
              title="Works with your stack"
              description="Interoperable, configurable, and built to fit existing workflows without heavy change management."
            />
          </div>
        </div>
      </section>

      {/* Platform */}
      <section className="py-10 sm:py-16 px-4 sm:px-6">
        <div className="container max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-10 items-start">
            <div>
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4">The Perkily platform</h3>
              <p className="text-white/70 mb-6">
                A cohesive set of assistive capabilities that reduce cognitive load and make the next step obvious—for clinicians and patients alike.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-md bg-white/10 flex items-center justify-center"><FileText className="w-4 h-4 text-[#00A3FF]" /></div>
                  <div>
                    <div className="text-white font-medium">Clinical copilot</div>
                    <div className="text-white/70 text-sm">Summaries, structured notes, and reasoned suggestions with citations.</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-md bg-white/10 flex items-center justify-center"><ClipboardCheck className="w-4 h-4 text-[#8B5CF6]" /></div>
                  <div>
                    <div className="text-white font-medium">Error reduction</div>
                    <div className="text-white/70 text-sm">Real‑time checks for gaps, interactions, and contraindications.</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-md bg-white/10 flex items-center justify-center"><Workflow className="w-4 h-4 text-[#00A3FF]" /></div>
                  <div>
                    <div className="text-white font-medium">Workflow automation</div>
                    <div className="text-white/70 text-sm">Task routing, coding hints, and follow‑ups—handled in the background.</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-md bg-white/10 flex items-center justify-center"><Bell className="w-4 h-4 text-[#8B5CF6]" /></div>
                  <div>
                    <div className="text-white font-medium">Patient engagement</div>
                    <div className="text-white/70 text-sm">Personalized nudges, education, and rewards that drive adherence.</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative h-[280px] sm:h-[340px] md:h-[420px]">
              <div className="absolute inset-0 rounded-2xl bg-white/[0.03] border border-white/[0.05] overflow-hidden">
                <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-[0.04]" />
                <div className="absolute -top-24 right-6 w-56 h-56 rounded-2xl bg-white/5 border border-white/10" />
                <div className="absolute bottom-8 -left-6 w-40 h-40 rounded-2xl bg-white/5 border border-white/10" />
                <div className="absolute top-16 left-1/2 -translate-x-1/2 w-24 h-24 rounded-xl bg-white/5 border border-white/10" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-10 sm:py-16 px-4 sm:px-6">
        <div className="container max-w-7xl mx-auto">
          <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-center mb-10">How Perkily helps in the flow of care</h3>
          <div className="relative">
            <div className="grid md:grid-cols-4 gap-6">
              {[
                { icon: FileText, title: 'Intake', desc: 'Collect context and surface known risks early.' },
                { icon: Brain, title: 'Encounter', desc: 'Assist with summarization and safe decision support.' },
                { icon: Workflow, title: 'After‑visit', desc: 'Automate documentation, coding, and tasks.' },
                { icon: Users, title: 'Follow‑up', desc: 'Nudges, education, and rewards to keep patients on track.' },
              ].map((step, idx) => {
                const Icon = step.icon as React.ElementType;
                return (
                  <div key={idx} className="glass-card rounded-2xl p-6 border border-white/[0.05]">
                    <div className="flex items-center justify-between mb-3">
                      <div className="inline-flex h-9 w-9 items-center justify-center rounded-md bg-white/10">
                        <Icon className="w-4 h-4" />
                      </div>
                      <div className="text-white/50 text-sm">{String(idx + 1).padStart(2, '0')}</div>
                    </div>
                    <div className="text-white font-medium mb-1">{step.title}</div>
                    <div className="text-white/70 text-sm">{step.desc}</div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Security & governance */}
      <section className="py-10 sm:py-16 px-4 sm:px-6">
        <div className="container max-w-7xl mx-auto">
          <div className="glass-card rounded-2xl p-6 sm:p-8 border border-white/[0.05]">
            <div className="grid md:grid-cols-2 gap-8 items-start">
              <div>
                <h3 className="text-xl sm:text-2xl font-bold mb-3">Security and governance</h3>
                <p className="text-white/70">Privacy and safety are built into every workflow and decision pathway.</p>
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-md bg-white/10 flex items-center justify-center"><Lock className="w-4 h-4 text-[#00A3FF]" /></div>
                  <div>
                    <div className="text-white font-medium">Data protection</div>
                    <div className="text-white/70 text-sm">Encryption in transit and at rest, scoped access, and audit trails.</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-md bg-white/10 flex items-center justify-center"><ShieldCheck className="w-4 h-4 text-[#8B5CF6]" /></div>
                  <div>
                    <div className="text-white font-medium">Safety guardrails</div>
                    <div className="text-white/70 text-sm">Human‑in‑the‑loop, explainability, and conservative defaults.</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-md bg-white/10 flex items-center justify-center"><Server className="w-4 h-4 text-[#00A3FF]" /></div>
                  <div>
                    <div className="text-white font-medium">Deployment options</div>
                    <div className="text-white/70 text-sm">Cloud or hybrid, with regional data residency support.</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-md bg-white/10 flex items-center justify-center"><Database className="w-4 h-4 text-[#8B5CF6]" /></div>
                  <div>
                    <div className="text-white font-medium">Interoperability</div>
                    <div className="text-white/70 text-sm">Connectors and APIs to integrate with your existing systems.</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Audiences */}
      <section className="py-10 sm:py-16 px-4 sm:px-6">
        <div className="container max-w-7xl mx-auto">
          <div className="text-center mb-10">
            <h3 className="text-2xl md:text-3xl font-bold">Who we serve</h3>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <ValueCard
              icon={Users}
              title="Patients"
              description="Clarity, motivation, and rewards that make it easier to stay on plan."
            />
            <ValueCard
              icon={Workflow}
              title="Clinicians"
              description="Less busywork, more context, and assistive checks right when needed."
            />
            <ValueCard
              icon={Network}
              title="Health organizations"
              description="Safer, more efficient operations without ripping and replacing your stack."
            />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 sm:py-20 px-4 sm:px-6">
        <div className="container max-w-7xl mx-auto">
          <div className="glass-card rounded-[1.5rem] border border-white/[0.05] p-8 sm:p-12 text-center">
            <h3 className="text-2xl sm:text-3xl font-bold mb-3">See Perkily in action</h3>
            <p className="text-white/70 max-w-2xl mx-auto mb-6">
              Explore how our platform supports safer decisions, lighter workloads, and better patient experiences.
            </p>
            <Button
              variant="default"
              className="w-full sm:w-auto text-white px-6 sm:px-8 py-4 sm:py-5 rounded-full text-base sm:text-lg group"
              onClick={() => (window.location.href = 'https://pro.perkily.io/login')}
            >
              Get started
              <ArrowRight className="ml-2 w-4 sm:w-5 h-4 sm:h-5 transition-transform duration-300 group-hover:translate-x-1" />
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About; 