import { Cpu, Lock, Sparkles, Zap } from 'lucide-react'

export function Features() {
    return (
        <section className="py-16 md:py-32">
            <div className="mx-auto max-w-5xl space-y-12 px-6">
                <div className="relative z-10 grid items-center gap-4 md:grid-cols-2 md:gap-12">
                    <h2 className="text-4xl font-semibold">Meet Fleming.<br />Your Clinical Co-Pilot.</h2>
                    <p className="max-w-sm sm:ml-auto text-white/60">ChatGPT was built for the internet. Fleming was built for the clinic. Trained on the world's most rigorous medical data, Fleming provides real-time decision support for doctors and 24/7 empathetic guidance for patients.</p>
                </div>
                <div className="relative rounded-3xl p-3 md:-mx-8 lg:col-span-3 overflow-hidden">
                    <div className="aspect-[88/36] relative overflow-hidden rounded-2xl">
                        <img src="/img/flemingscreenshot.png" className="absolute inset-0 z-10 object-cover" alt="Fleming interface screenshot" width={2797} height={1137} />
                        <div className="bg-gradient-to-t from-background absolute inset-0 z-20 to-transparent pointer-events-none"></div>
                    </div>
                </div>
                <div className="relative mx-auto grid grid-cols-2 gap-x-3 gap-y-6 sm:gap-8 lg:grid-cols-4">
                    <div className="space-y-2">
                        <div className="flex items-center gap-2">
                            <Zap className="size-4 text-white" />
                            <h3 className="text-sm font-medium text-white">Instant Answers</h3>
                        </div>
                        <p className="text-muted-foreground text-sm">Get accurate responses to your health questions in seconds.</p>
                    </div>
                    <div className="space-y-2">
                        <div className="flex items-center gap-2">
                            <Cpu className="size-4 text-white" />
                            <h3 className="text-sm font-medium text-white">Medical-Grade Accuracy</h3>
                        </div>
                        <p className="text-muted-foreground text-sm">Trained on medical literature with clinical validation.</p>
                    </div>
                    <div className="space-y-2">
                        <div className="flex items-center gap-2">
                            <Lock className="size-4 text-white" />
                            <h3 className="text-sm font-medium text-white">Privacy First</h3>
                        </div>
                        <p className="text-muted-foreground text-sm">Your conversations are private and secure by design.</p>
                    </div>
                    <div className="space-y-2">
                        <div className="flex items-center gap-2">
                            <Sparkles className="size-4 text-white" />
                            <h3 className="text-sm font-medium text-white">Safe Guidance</h3>
                        </div>
                        <p className="text-muted-foreground text-sm">Evidence-based health guidance with built-in safety guardrails.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

