import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { BookOpen, ShieldPlus, FlaskConical, Scale, type LucideIcon } from "lucide-react";

import { cn } from "@/lib/utils";
import { CardContent } from "@/components/ui/card";

export const Highlight = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <span
      className={cn(
        "font-semibold bg-amber-400/10 text-amber-200 px-1 py-0.5 rounded-sm",
        className
      )}
    >
      {children}
    </span>
  );
};

const CARDS = [
  {
    id: 0,
    name: "Dr. Priya Nair",
    designation: "Internal Medicine",
    content: (
      <p>
        <Highlight>AskFleming</Highlight> helps me move from scattered notes to
        structured plans quickly. The <Highlight>evidence-linked output</Highlight>{" "}
        saves time without sacrificing clinical confidence.
      </p>
    ),
  },
  {
    id: 1,
    name: "Dr. James Carter",
    designation: "Hospitalist",
    content: (
      <p>
        Clinical Summary and Drug Interactions are now part of my daily flow.
        The mode-based setup feels <Highlight>practical at the bedside</Highlight>{" "}
        and easy to review with the team.
      </p>
    ),
  },
  {
    id: 2,
    name: "Dr. Leila Haddad",
    designation: "Family Medicine",
    content: (
      <p>
        I can quickly sanity-check treatment options and coding candidates in
        one place. AskFleming keeps decisions transparent with{" "}
        <Highlight>citations and escalation cues</Highlight>.
      </p>
    ),
  },
];

const integrations: { name: string; desc: string; icon: LucideIcon }[] = [
  {
    name: "PubMed",
    desc: "Primary literature retrieval with citation-ready links",
    icon: BookOpen,
  },
  {
    name: "OpenFDA",
    desc: "Drug safety signals, contraindications, and labeling context",
    icon: ShieldPlus,
  },
  {
    name: "ClinicalTrials.gov",
    desc: "Trial evidence for ongoing and completed studies",
    icon: FlaskConical,
  },
  {
    name: "Guidelines (NICE)",
    desc: "Regional guidance mapping to practical recommendations",
    icon: Scale,
  },
];

const evidenceSources = [
  "PubMed",
  "Guidelines (NICE, Europe PMC)",
  "ClinicalTrials.gov",
  "OpenFDA",
  "Conflict detection",
  "Scholar Gateway",
  "bioRxiv",
  "NPI Registry",
  "CMS Coverage",
  "ChEMBL",
  "and more",
];

type Card = {
  id: number;
  name: string;
  designation: string;
  content: React.ReactNode;
};

export default function RuixenFeatureSection() {
  return (
    <section className="max-w-7xl mx-auto px-0 py-10 sm:py-12">
      <style>{`
        @keyframes connectorsMarquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        .animate-connectors-marquee {
          animation: connectorsMarquee 28s linear infinite;
        }
      `}</style>
      <div className="grid grid-cols-1 lg:grid-cols-2 relative rounded-2xl overflow-hidden border border-white/10 bg-black">
        <div className="flex flex-col items-start justify-center border-b lg:border-b-0 lg:border-r border-white/10 p-4 sm:p-6 lg:p-8">
          <div className="relative w-full mb-4 sm:mb-6">
            <div className="absolute inset-x-0 -bottom-2 h-16 sm:h-20 bg-gradient-to-t from-black to-transparent z-10" />
            <CardStack items={CARDS} />
          </div>
          <h3 className="text-lg sm:text-xl lg:text-2xl font-normal text-white leading-relaxed">
            Point-of-care workflow support with{" "}
            <span className="text-amber-200">AskFleming</span>{" "}
            <span className="text-white/60 text-sm sm:text-base lg:text-lg">
              from rapid synthesis to chart-ready summaries, medication safety
              checks, and coding support.
            </span>
          </h3>
        </div>

        <div className="flex flex-col items-center justify-start p-4 sm:p-6 lg:p-8">
          <h3 className="text-lg sm:text-xl lg:text-2xl font-normal text-white mb-4 sm:mb-6 leading-relaxed">
            Evidence-integrated clinical tooling{" "}
            <span className="text-amber-200">for everyday care</span>{" "}
            <span className="text-white/60 text-sm sm:text-base lg:text-lg">
              connect trusted sources and keep every recommendation reviewable.
            </span>
          </h3>
          <div className="relative mt-auto w-full inline-flex items-center justify-center rounded-xl bg-black p-0.5">
            <div className="pointer-events-none absolute -top-12 right-2 h-24 w-24 rounded-full bg-amber-300/10 blur-2xl" />
            <CardContent className="p-3 sm:p-4 lg:p-5 space-y-3 bg-black border border-white/10 rounded-2xl z-10 w-full">
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.28 }}
                viewport={{ once: true }}
                className="rounded-xl border border-white/10 bg-gradient-to-r from-amber-300/[0.08] to-transparent p-3"
              >
                <p className="text-[11px] uppercase tracking-[0.18em] text-white/45">Evidence sources</p>
                <p className="mt-1 text-xs text-white/65 leading-relaxed">
                  PubMed · Guidelines (NICE, Europe PMC) · ClinicalTrials.gov · OpenFDA · Conflict detection · Scholar Gateway · bioRxiv · NPI Registry · CMS Coverage · ChEMBL · and more.
                </p>
              </motion.div>

              <div
                className="relative overflow-hidden rounded-xl border border-white/10 bg-white/[0.02] py-2"
                style={{
                  maskImage:
                    "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
                  WebkitMaskImage:
                    "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
                }}
              >
                <div className="animate-connectors-marquee motion-reduce:animate-none flex w-max gap-2 px-2">
                  {[...evidenceSources, ...evidenceSources].map((name, idx) => {
                    const iconDef = integrations.find((item) => item.name === name);
                    const Icon = iconDef?.icon;
                    return (
                      <div
                        key={`${name}-${idx}`}
                        className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-black/60 px-3 py-1.5 text-[11px] text-white/80 whitespace-nowrap"
                      >
                        {Icon ? <Icon className="h-3 w-3 text-amber-200" /> : null}
                        <span>{name}</span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </CardContent>
          </div>
        </div>
      </div>

      <div className="mt-12 sm:mt-14 rounded-2xl border border-white/10 bg-black/40 p-4 sm:p-6">
        <div className="mb-4 flex items-center justify-between">
          <h4 className="text-lg font-medium text-white">Core clinician features</h4>
          <span className="text-xs uppercase tracking-wider text-white/45">Workflow modes</span>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {[
            ["Open Search", "Synthesize context, differentials, and next steps."],
            ["Clinical Summary", "One-liner, active problems, key data, and plan."],
            ["Drug Interactions", "Mechanism, severity, monitoring, and alternatives."],
            ["Stewardship", "Empiric and targeted options with de-escalation cues."],
            ["ICD10 Codes", "Coding candidates with rationale and documentation tips."],
            ["Med Review", "Duplications, contraindications, and deprescribing opportunities."],
          ].map(([title, desc]) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.25 }}
              className="rounded-xl border border-white/10 bg-white/[0.02] px-4 py-3 hover:border-amber-200/30 hover:bg-amber-100/[0.03] transition-colors"
            >
              <p className="text-sm font-medium text-white">{title}</p>
              <p className="mt-1 text-xs leading-relaxed text-white/55">{desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export const CardStack = ({
  items,
  offset,
  scaleFactor,
}: {
  items: Card[];
  offset?: number;
  scaleFactor?: number;
}) => {
  const CARD_OFFSET = offset || 10;
  const SCALE_FACTOR = scaleFactor || 0.06;
  const [cards, setCards] = useState<Card[]>(items);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setCards((prevCards) => {
        const newArray = [...prevCards];
        const last = newArray.pop();
        if (last) newArray.unshift(last);
        return newArray;
      });
    }, 5000);

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  return (
    <div className="relative mx-auto h-48 w-full md:w-96 my-4">
      {cards.map((card, index) => (
        <motion.div
          key={card.id}
          className="absolute bg-black h-48 w-full md:w-96 rounded-3xl p-4 shadow-xl border border-white/10 flex flex-col justify-between"
          style={{ transformOrigin: "top center" }}
          animate={{
            top: index * -CARD_OFFSET,
            scale: 1 - index * SCALE_FACTOR,
            zIndex: cards.length - index,
          }}
        >
          <div className="font-normal text-white/80 text-sm leading-relaxed">
            {card.content}
          </div>
          <div>
            <p className="text-white font-medium">{card.name}</p>
            <p className="text-white/60 text-sm">{card.designation}</p>
          </div>
        </motion.div>
      ))}
    </div>
  );
};
