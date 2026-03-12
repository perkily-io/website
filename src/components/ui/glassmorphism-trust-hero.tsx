import React from "react";
import {
  ArrowRight,
  Play,
  Target,
  Crown,
  Star,
  Hexagon,
  Triangle,
  Command,
  Ghost,
  Gem,
  Cpu,
  BookOpen,
  type LucideIcon,
} from "lucide-react";

const DEFAULT_CLIENTS = [
  { name: "Acme Corp", icon: Hexagon },
  { name: "Quantum", icon: Triangle },
  { name: "Command+Z", icon: Command },
  { name: "Phantom", icon: Ghost },
  { name: "Ruby", icon: Gem },
  { name: "Chipset", icon: Cpu },
];

export interface StatsCardConfig {
  mainValue: string;
  mainLabel: string;
  progressLabel: string;
  progressValue: string;
  progressPercent: number;
  stat1: { value: string; label: string };
  stat2: { value: string; label: string };
  stat3: { value: string; label: string };
  pill1Text?: string;
  pill2Text?: string;
}

export interface MarqueeItem {
  name: string;
  icon?: LucideIcon;
}

const StatItem = ({ value, label }: { value: string; label: string }) => (
  <div className="flex flex-col items-center justify-center transition-transform hover:-translate-y-1 cursor-default">
    <span className="text-xl font-bold text-white sm:text-2xl">{value}</span>
    <span className="text-[10px] uppercase tracking-wider text-zinc-500 font-medium sm:text-xs">
      {label}
    </span>
  </div>
);

const DEFAULT_STATS: StatsCardConfig = {
  mainValue: "150+",
  mainLabel: "Projects Delivered",
  progressLabel: "Client Satisfaction",
  progressValue: "98%",
  progressPercent: 98,
  stat1: { value: "5+", label: "Years" },
  stat2: { value: "24/7", label: "Support" },
  stat3: { value: "100%", label: "Quality" },
  pill1Text: "ACTIVE",
  pill2Text: "PREMIUM",
};

export interface GlassmorphismTrustHeroProps {
  badgeText?: string;
  titleLine1?: string;
  titleLine2?: string;
  titleLine3?: string;
  description?: string;
  primaryCtaText?: string;
  primaryCtaHref?: string;
  secondaryCtaText?: string;
  secondaryCtaHref?: string;
  backgroundImageUrl?: string;
  /** When set, used as hero background instead of backgroundImageUrl (video: autoplay, loop, muted). */
  backgroundVideoSrc?: string;
  showStatsCard?: boolean;
  showMarquee?: boolean;
  statsCard?: Partial<StatsCardConfig>;
  marqueeHeading?: string;
  marqueeItems?: MarqueeItem[] | string[];
}

const DEFAULT_BACKGROUND =
  "https://images.unsplash.com/photo-1557682250-33bd709cbe85?auto=format&fit=crop&w=800&q=80";

export default function GlassmorphismTrustHero({
  badgeText = "Award-Winning Design",
  titleLine1 = "Crafting Digital",
  titleLine2 = "Experiences",
  titleLine3 = "That Matter",
  description = "We design interfaces that combine beauty with functionality, creating seamless experiences that users love and businesses thrive on.",
  primaryCtaText = "View Portfolio",
  primaryCtaHref = "#",
  secondaryCtaText = "Watch Showreel",
  secondaryCtaHref = "#",
  backgroundImageUrl = DEFAULT_BACKGROUND,
  backgroundVideoSrc,
  showStatsCard = true,
  showMarquee = true,
  statsCard,
  marqueeHeading,
  marqueeItems,
}: GlassmorphismTrustHeroProps) {
  const stats = { ...DEFAULT_STATS, ...statsCard };
  const sources = marqueeItems ?? DEFAULT_CLIENTS;
  const normalizedSources: MarqueeItem[] = sources.map((s) =>
    typeof s === "string" ? { name: s, icon: BookOpen } : s
  );
  const marqueeTitle = marqueeHeading ?? "Trusted by Industry Leaders";
  return (
    <div className="relative w-full bg-zinc-950 text-white overflow-hidden font-sans">
      <style>{`
        @keyframes fadeSlideIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        .animate-fade-in {
          animation: fadeSlideIn 0.8s ease-out forwards;
          opacity: 0;
        }
        .animate-marquee {
          animation: marquee 40s linear infinite;
        }
        .delay-100 { animation-delay: 0.1s; }
        .delay-200 { animation-delay: 0.2s; }
        .delay-300 { animation-delay: 0.3s; }
        .delay-400 { animation-delay: 0.4s; }
        .delay-500 { animation-delay: 0.5s; }
      `}</style>

      {backgroundVideoSrc ? (
        <div
          className="absolute inset-0 z-0 opacity-40"
          style={{
            maskImage:
              "linear-gradient(180deg, transparent, black 0%, black 70%, transparent)",
            WebkitMaskImage:
              "linear-gradient(180deg, transparent, black 0%, black 70%, transparent)",
          }}
        >
          <video
            autoPlay
            loop
            muted
            playsInline
            className="h-full w-full object-cover"
          >
            <source src={backgroundVideoSrc} type="video/mp4" />
          </video>
        </div>
      ) : (
        <div
          className="absolute inset-0 z-0 bg-cover bg-center opacity-40"
          style={{
            backgroundImage: `url(${backgroundImageUrl})`,
            maskImage:
              "linear-gradient(180deg, transparent, black 0%, black 70%, transparent)",
            WebkitMaskImage:
              "linear-gradient(180deg, transparent, black 0%, black 70%, transparent)",
          }}
        />
      )}

      <div className="relative z-10 mx-auto max-w-7xl px-4 pt-24 pb-12 sm:px-6 md:pt-32 md:pb-20 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-8 items-start">
          <div className="lg:col-span-7 flex flex-col justify-center space-y-8 pt-8">
            <div className="animate-fade-in delay-100">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 backdrop-blur-md transition-colors hover:bg-white/10">
                <span className="text-[10px] sm:text-xs font-semibold uppercase tracking-wider text-zinc-300 flex items-center gap-2">
                  {badgeText}
                  <Star className="w-3.5 h-3.5 text-yellow-400 fill-yellow-400" />
                </span>
              </div>
            </div>

            <h1
              className="animate-fade-in delay-200 text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-medium tracking-tighter leading-[0.9]"
              style={{
                maskImage:
                  "linear-gradient(180deg, black 0%, black 80%, transparent 100%)",
                WebkitMaskImage:
                  "linear-gradient(180deg, black 0%, black 80%, transparent 100%)",
              }}
            >
              {titleLine1}
              <br />
              <span className="bg-gradient-to-br from-white via-white to-[#ffcd75] bg-clip-text text-transparent">
                {titleLine2}
              </span>
              <br />
              {titleLine3}
            </h1>

            <p className="animate-fade-in delay-300 max-w-xl text-lg text-zinc-400 leading-relaxed">
              {description}
            </p>

            <div className="animate-fade-in delay-400 flex flex-col sm:flex-row gap-4">
              <a
                href={primaryCtaHref}
                target={primaryCtaHref.startsWith("http") ? "_blank" : undefined}
                rel={primaryCtaHref.startsWith("http") ? "noopener noreferrer" : undefined}
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-white px-8 py-4 text-sm font-semibold text-zinc-950 transition-all hover:scale-[1.02] hover:bg-zinc-200 active:scale-[0.98]"
              >
                {primaryCtaText}
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>
              <a
                href={secondaryCtaHref}
                className="group inline-flex items-center justify-center gap-2 rounded-full border border-white/10 bg-white/5 px-8 py-4 text-sm font-semibold text-white backdrop-blur-sm transition-colors hover:bg-white/10 hover:border-white/20"
              >
                <Play className="w-4 h-4 fill-current" />
                {secondaryCtaText}
              </a>
            </div>
          </div>

          <div className="lg:col-span-5 space-y-6 lg:mt-12">
            {showStatsCard && (
              <div className="animate-fade-in delay-500 relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl shadow-2xl">
                <div className="absolute top-0 right-0 -mr-16 -mt-16 h-64 w-64 rounded-full bg-white/5 blur-3xl pointer-events-none" />
                <div className="relative z-10">
                  <div className="flex items-center gap-4 mb-8">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 ring-1 ring-white/20">
                      <Target className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <div className="text-3xl font-bold tracking-tight text-white">
                        {stats.mainValue}
                      </div>
                      <div className="text-sm text-zinc-400">
                        {stats.mainLabel}
                      </div>
                    </div>
                  </div>
                  <div className="space-y-3 mb-8">
                    <div className="flex justify-between text-sm">
                      <span className="text-zinc-400">{stats.progressLabel}</span>
                      <span className="text-white font-medium">{stats.progressValue}</span>
                    </div>
                    <div className="h-2 w-full overflow-hidden rounded-full bg-zinc-800/50">
                      <div
                        className="h-full rounded-full bg-gradient-to-r from-white to-zinc-400"
                        style={{ width: `${stats.progressPercent}%` }}
                      />
                    </div>
                  </div>
                  <div className="h-px w-full bg-white/10 mb-6" />
                  <div className="grid grid-cols-3 gap-4 text-center">
                    <StatItem value={stats.stat1.value} label={stats.stat1.label} />
                    <div className="w-px h-full bg-white/10 mx-auto" />
                    <StatItem value={stats.stat2.value} label={stats.stat2.label} />
                    <div className="w-px h-full bg-white/10 mx-auto" />
                    <StatItem value={stats.stat3.value} label={stats.stat3.label} />
                  </div>
                  {(stats.pill1Text || stats.pill2Text) && (
                    <div className="mt-8 flex flex-wrap gap-2">
                      {stats.pill1Text && (
                        <div className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[10px] font-medium tracking-wide text-zinc-300">
                          <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                          </span>
                          {stats.pill1Text}
                        </div>
                      )}
                      {stats.pill2Text && (
                        <div className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[10px] font-medium tracking-wide text-zinc-300">
                          <Crown className="w-3 h-3 text-yellow-500" />
                          {stats.pill2Text}
                        </div>
                      )}
                    </div>
                  )}
                </div>
              </div>
            )}

            {showMarquee && (
              <div className="animate-fade-in delay-500 relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 py-8 backdrop-blur-xl">
                <h3 className="mb-6 px-8 text-sm font-medium text-zinc-400">
                  {marqueeTitle}
                </h3>
                <div
                  className="relative flex overflow-hidden"
                  style={{
                    maskImage:
                      "linear-gradient(to right, transparent, black 20%, black 80%, transparent)",
                    WebkitMaskImage:
                      "linear-gradient(to right, transparent, black 20%, black 80%, transparent)",
                  }}
                >
                  <div className="animate-marquee flex gap-12 whitespace-nowrap px-4">
                    {[...normalizedSources, ...normalizedSources, ...normalizedSources].map((item, i) => {
                      const Icon = item.icon ?? BookOpen;
                      return (
                        <div
                          key={i}
                          className="flex items-center gap-2 opacity-50 transition-all hover:opacity-100 hover:scale-105 cursor-default grayscale hover:grayscale-0"
                        >
                          <Icon className="h-6 w-6 text-white fill-current" />
                          <span className="text-lg font-bold text-white tracking-tight">
                            {item.name}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
