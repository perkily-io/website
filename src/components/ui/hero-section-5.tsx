'use client'
import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { InfiniteSlider } from '@/components/ui/infinite-slider'
import { ProgressiveBlur } from '@/components/ui/progressive-blur'
import { cn } from '@/lib/utils'
import { ChevronRight, Stethoscope, Bot, Activity } from 'lucide-react'

export function HeroSection() {
    return (
        <>
            <main className="overflow-x-hidden">
                <section>
                    <div className="py-24 md:pb-32 lg:pb-36 lg:pt-48">
                        <div className="relative z-10 mx-auto flex max-w-7xl flex-col px-6 lg:block lg:px-12">
                            <div className="mx-auto max-w-lg text-center lg:ml-0 lg:max-w-full lg:text-left">
                                <h1 className="mt-8 max-w-2xl text-balance text-5xl font-bold md:text-6xl lg:mt-16 xl:text-7xl">The Clinical Operating System of the Future.</h1>
                                <p className="mt-8 max-w-2xl text-balance text-lg text-muted-foreground">Built for the era of ambient intelligence. Perkily unifies the clinic, the clinician, and the patient into a single, seamless ecosystem.</p>

                                <div className="mt-12 flex flex-col items-center justify-center gap-2 sm:flex-row lg:justify-start">
                                    <Button
                                        asChild
                                        size="lg"
                                        className="h-12 rounded-full pl-5 pr-3 text-base bg-white text-black hover:bg-gray-100 transition-colors">
                                        <a href="https://calendly.com/hello-perkily" target="_blank" rel="noopener noreferrer">
                                            <span className="text-nowrap">Request Early Access</span>
                                            <ChevronRight className="ml-1" />
                                        </a>
                                    </Button>
                                    <Button
                                        key={2}
                                        asChild
                                        size="lg"
                                        variant="ghost"
                                        className="h-12 rounded-full px-5 text-base hover:bg-zinc-950/5 dark:hover:bg-white/5">
                                        <a href="https://askfleming.perkily.io" target="_blank" rel="noopener noreferrer">
                                            <span className="text-nowrap">Try Fleming</span>
                                        </a>
                                    </Button>
                                </div>
                            </div>
                        </div>
                        <div className="aspect-[2/3] absolute inset-1 overflow-hidden rounded-3xl border border-black/10 sm:aspect-video lg:rounded-[3rem] dark:border-white/5">
                            <video
                                className="size-full object-cover opacity-50 dark:opacity-35 dark:lg:opacity-50"
                                autoPlay
                                loop
                                muted
                                playsInline
                            >
                                <source src="/img/hero.mp4" type="video/mp4" />
                            </video>
                             <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />
                        </div>
                    </div>
                </section>
                <section className="bg-background pb-2">
                    <div className="group relative m-auto max-w-7xl px-6">
                        <div className="flex flex-col items-center md:flex-row">
                            <div className="md:max-w-44 md:border-r md:pr-6">
                                <p className="text-end text-sm text-muted-foreground">Our partners</p>
                            </div>
                            <div className="relative py-6 md:w-[calc(100%-11rem)]">
                                <InfiniteSlider
                                    speedOnHover={20}
                                    speed={40}
                                    gap={112}>
                                    <div className="flex items-center gap-2 text-muted-foreground">
                                        <Stethoscope className="h-6 w-6" />
                                        <span className="font-semibold">ONT Health</span>
                                    </div>
                                    <div className="flex items-center gap-2 text-muted-foreground">
                                        <Activity className="h-6 w-6" />
                                        <span className="font-semibold">Medikredit</span>
                                    </div>
                                    <div className="flex items-center gap-2 text-muted-foreground">
                                        <Bot className="h-6 w-6" />
                                        <span className="font-semibold">AskFleming</span>
                                    </div>
                                </InfiniteSlider>

                                <div className="bg-gradient-to-r from-background absolute inset-y-0 left-0 w-20"></div>
                                <div className="bg-gradient-to-l from-background absolute inset-y-0 right-0 w-20"></div>
                                <ProgressiveBlur
                                    className="pointer-events-none absolute left-0 top-0 h-full w-20"
                                    direction="left"
                                    blurIntensity={1}
                                />
                                <ProgressiveBlur
                                    className="pointer-events-none absolute right-0 top-0 h-full w-20"
                                    direction="right"
                                    blurIntensity={1}
                                />
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}

