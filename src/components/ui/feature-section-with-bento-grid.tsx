import React, { useEffect, useRef } from "react";
import createGlobe from "cobe";
import { motion } from "framer-motion";
import { IconBrandYoutubeFilled } from "@tabler/icons-react";
import { Activity, AlertTriangle, BarChart3, Search } from "lucide-react";

import { cn } from "@/lib/utils";

export function FeaturesSectionWithBentoGrid() {
  const features = [
    {
      title: "Ask smarter, study faster",
      description:
        "Get mentor-style explanations for concepts, pathophysiology, and exam prep in clear, structured steps.",
      skeleton: <SkeletonOne />,
      className:
        "col-span-1 md:col-span-4 lg:col-span-4 border-b md:border-r border-white/10",
    },
    {
      title: "Learn from real case patterns",
      description:
        "Work through realistic case signals, identify red flags early, and strengthen differential diagnosis with source-linked evidence.",
      skeleton: <SkeletonTwo />,
      className: "col-span-1 md:col-span-2 lg:col-span-2 border-b border-white/10",
    },
    {
      title: "Watch curated clinical videos",
      description:
        "We connect to YouTube so you can quickly find explainers, walkthroughs, and high-yield review content.",
      skeleton: <SkeletonThree />,
      className:
        "col-span-1 md:col-span-3 lg:col-span-3 border-b md:border-r border-white/10",
    },
    {
      title: "Learn with global evidence",
      description:
        "Cross-check recommendations against global sources and guidelines while you study clinical decisions.",
      skeleton: <SkeletonFour />,
      className: "col-span-1 md:col-span-3 lg:col-span-3 border-b md:border-none",
    },
  ];

  return (
    <div className="relative z-20 py-10 lg:py-16 max-w-7xl mx-auto">
      <div className="px-2 sm:px-4">
        <h4 className="text-3xl lg:text-5xl lg:leading-tight max-w-5xl mx-auto text-center tracking-tight font-medium text-white">
          Built for modern medical learning
        </h4>
        <p className="text-sm lg:text-base max-w-2xl my-4 mx-auto text-white/65 text-center font-normal">
          From concept learning to case simulation and guideline application,
          AskFleming gives students one workflow for understanding and recall.
        </p>
      </div>

      <div className="relative mt-8">
        <div className="grid grid-cols-1 md:grid-cols-6 lg:grid-cols-6 xl:border border-white/10 rounded-xl bg-white/[0.02] overflow-hidden">
          {features.map((feature) => (
            <FeatureCard key={feature.title} className={feature.className}>
              <FeatureTitle>{feature.title}</FeatureTitle>
              <FeatureDescription>{feature.description}</FeatureDescription>
              <div className="h-full w-full">{feature.skeleton}</div>
            </FeatureCard>
          ))}
        </div>
      </div>
    </div>
  );
}

const FeatureCard = ({
  children,
  className,
}: {
  children?: React.ReactNode;
  className?: string;
}) => {
  return <div className={cn("p-4 sm:p-8 relative overflow-hidden", className)}>{children}</div>;
};

const FeatureTitle = ({ children }: { children?: React.ReactNode }) => {
  return (
    <p className="max-w-5xl mx-auto text-left tracking-tight text-white text-xl md:text-2xl md:leading-snug">
      {children}
    </p>
  );
};

const FeatureDescription = ({ children }: { children?: React.ReactNode }) => {
  return (
    <p
      className={cn(
        "text-sm md:text-base max-w-4xl text-left mx-auto",
        "text-white/65 font-normal",
        "text-left max-w-sm mx-0 md:text-sm my-2"
      )}
    >
      {children}
    </p>
  );
};

export const SkeletonOne = () => {
  return (
    <div className="relative mt-4 h-44 sm:h-52 md:h-60">
      <div className="w-full p-2 mx-auto bg-black/40 shadow-2xl group h-full border border-white/10 rounded-xl">
        <div className="flex w-full h-full flex-col">
          <img
            src="/img/askfleming.png"
            alt="AskFleming app screenshot"
            className="h-full w-full object-cover object-top rounded-md"
            loading="lazy"
          />
        </div>
      </div>
      <div className="absolute bottom-0 z-40 inset-x-0 h-16 bg-gradient-to-t from-black via-black/70 to-transparent w-full pointer-events-none rounded-b-xl" />
    </div>
  );
};

export const SkeletonThree = () => {
  return (
    <div className="relative flex gap-10 h-full group/image">
      <div className="w-full mx-auto bg-transparent group h-full">
        <div className="flex flex-1 w-full h-full flex-col space-y-2 relative">
          <IconBrandYoutubeFilled className="h-20 w-20 absolute z-10 inset-0 text-red-500 m-auto" />
          <img
            src="https://images.unsplash.com/photo-1584982751601-97dcc096659c?auto=format&fit=crop&w=1200&q=80"
            alt="youtube learning"
            className="h-full w-full aspect-square object-cover object-center rounded-sm blur-none group-hover/image:blur-[2px] transition-all duration-200"
            loading="lazy"
          />
        </div>
      </div>
    </div>
  );
};

export const SkeletonTwo = () => {
  const cases = [
    { name: "Chest pain + dyspnea", signal: "High risk", icon: AlertTriangle },
    { name: "Fever + productive cough", signal: "Likely CAP", icon: Search },
    { name: "AKI trend + hypotension", signal: "Escalate now", icon: Activity },
    { name: "Polypharmacy + dizziness", signal: "Review meds", icon: BarChart3 },
  ];

  return (
    <div className="relative h-full overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.04] to-white/[0.01] p-4">
      <div className="pointer-events-none absolute -top-20 right-0 h-44 w-44 rounded-full bg-amber-300/10 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-20 left-0 h-40 w-40 rounded-full bg-orange-300/10 blur-3xl" />

      <div className="relative mb-3 flex items-center justify-between">
        <span className="text-[10px] uppercase tracking-[0.2em] text-white/45">Case pattern board</span>
        <span className="rounded-full border border-amber-300/25 bg-amber-400/10 px-2 py-0.5 text-[10px] text-amber-200/90">
          Simulate
        </span>
      </div>

      <div className="relative space-y-2.5">
        {cases.map((item, idx) => {
          const Icon = item.icon;
          return (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 6 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.25, delay: idx * 0.03 }}
              viewport={{ once: true }}
              whileHover={{ y: -1 }}
              className="rounded-xl border border-white/12 bg-black/40 px-3 py-2 flex items-center justify-between gap-2 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]"
            >
              <div className="flex items-center gap-2">
                <div className="rounded-md border border-white/10 bg-white/[0.03] p-1">
                  <Icon className="h-3.5 w-3.5 text-amber-200/90" />
                </div>
                <span className="text-[11px] md:text-xs text-white/85 font-medium leading-none">{item.name}</span>
              </div>
              <span className="rounded-full border border-white/10 bg-white/[0.03] px-2 py-0.5 text-[10px] text-white/60">
                {item.signal}
              </span>
            </motion.div>
          );
        })}
      </div>
      <div className="relative mt-3 text-[10px] text-white/40">Pattern-first reasoning to strengthen differential diagnosis.</div>
    </div>
  );
};

export const SkeletonFour = () => {
  return (
    <div className="h-60 md:h-60 flex flex-col items-center relative bg-transparent mt-10">
      <Globe className="absolute -right-10 md:-right-10 -bottom-80 md:-bottom-72" />
    </div>
  );
};

export const Globe = ({ className }: { className?: string }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    let phi = 0;
    if (!canvasRef.current) return;

    const globe = createGlobe(canvasRef.current, {
      devicePixelRatio: 2,
      width: 600 * 2,
      height: 600 * 2,
      phi: 0,
      theta: 0.25,
      dark: 1,
      diffuse: 1.2,
      mapSamples: 16000,
      mapBrightness: 6,
      baseColor: [0.2, 0.2, 0.2],
      markerColor: [0.1, 0.8, 1],
      glowColor: [1, 1, 1],
      markers: [
        { location: [37.7595, -122.4367], size: 0.03 },
        { location: [51.5072, -0.1276], size: 0.06 },
        { location: [28.6139, 77.209], size: 0.05 },
      ],
      onRender: (state) => {
        state.phi = phi;
        phi += 0.01;
      },
    });

    return () => globe.destroy();
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{ width: 600, height: 600, maxWidth: "100%", aspectRatio: 1 }}
      className={className}
    />
  );
};
