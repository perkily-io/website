"use client";

import React from "react";
import { CalendarDays, Bot, Gift, Shield, Zap } from "lucide-react";
import { GlowingEffect } from "@/components/ui/glowing-effect";
import { cn } from "@/lib/utils";

export function GlowingEffectDemo() {
  return (
    <ul className="grid grid-cols-1 grid-rows-none gap-4 md:grid-cols-12 md:grid-rows-3 lg:gap-4 xl:max-h-[34rem] xl:grid-rows-2">
      <GridItem
        area="md:[grid-area:1/1/2/7] xl:[grid-area:1/1/2/5]"
        icon={<CalendarDays className="h-4 w-4" />}
        title="Smart booking"
        description="Real-time availability, reminders, and easy rescheduling."
      />
      <GridItem
        area="md:[grid-area:1/7/2/13] xl:[grid-area:2/1/3/5]"
        icon={<Bot className="h-4 w-4" />}
        title="Fleming built in"
        description="Ask better questions and get safe, useful next steps."
      />
      <GridItem
        area="md:[grid-area:2/1/3/7] xl:[grid-area:1/5/3/8]"
        icon={<Gift className="h-4 w-4" />}
        title="Rewards that matter"
        description="Earn perks for healthy actions and visits."
      />
      <GridItem
        area="md:[grid-area:2/7/3/13] xl:[grid-area:1/8/2/13]"
        icon={<Shield className="h-4 w-4" />}
        title="Privacy & security"
        description="We design for safety and trust at every layer."
      />
      <GridItem
        area="md:[grid-area:3/1/4/13] xl:[grid-area:2/8/3/13]"
        icon={<Zap className="h-4 w-4" />}
        title="Fast everywhere"
        description="Optimised for mobile and desktop — nothing to install."
      />
    </ul>
  );
}

interface GridItemProps {
  area: string;
  icon: React.ReactNode;
  title: string;
  description: React.ReactNode;
}

const GridItem = ({ area, icon, title, description }: GridItemProps) => {
  return (
    <li className={cn("min-h-[14rem] list-none", area)}>
      <div className="relative h-full rounded-[1.25rem] border-[0.75px] border-border p-2 md:rounded-[1.5rem] md:p-3">
        <GlowingEffect
          spread={40}
          glow={true}
          disabled={false}
          proximity={64}
          inactiveZone={0.01}
          borderWidth={3}
        />
        <div className="relative flex h-full flex-col justify-between gap-6 overflow-hidden rounded-xl border-[0.75px] bg-background p-6 shadow-sm dark:shadow-[0px_0px_27px_0px_rgba(45,45,45,0.3)] md:p-6">
          <div className="relative flex flex-1 flex-col justify-between gap-3">
            <div className="w-fit rounded-lg border-[0.75px] border-border bg-muted p-2">{icon}</div>
            <div className="space-y-3">
              <h3 className="pt-0.5 text-xl font-sans font-semibold leading-[1.375rem] tracking-[-0.04em] text-foreground md:text-2xl md:leading-[1.875rem] text-balance">
                {title}
              </h3>
              <h2 className="font-sans text-sm leading-[1.125rem] text-muted-foreground md:text-base md:leading-[1.375rem] [&_b]:md:font-semibold [&_strong]:md:font-semibold">
                {description}
              </h2>
            </div>
          </div>
        </div>
      </div>
    </li>
  );
};

