import { Cpu, Lock, Sparkles, Zap } from 'lucide-react'

export function Features() {
    return (
        <section className="py-16 md:py-32">
            <div className="mx-auto max-w-5xl space-y-12 px-6">
                <div className="relative z-10 grid items-center gap-4 md:grid-cols-2 md:gap-12">
                    <h2 className="text-4xl font-semibold">Meet Fleming.<br />Your Clinical Co-Pilot.</h2>
                    <p className="max-w-sm sm:ml-auto text-white/60">Built for workflow completion, not just evidence lookup. Fleming delivers evidence-visible answers, real-time decision support, and safer handoffs while clinical review remains in provider control.</p>
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
                            <h3 className="text-sm font-medium text-white">Workflow-Ready Answers</h3>
                        </div>
                        <p className="text-muted-foreground text-sm">Get structured outputs you can use immediately in real clinical workflows.</p>
                    </div>
                    <div className="space-y-2">
                        <div className="flex items-center gap-2">
                            <Cpu className="size-4 text-white" />
                            <h3 className="text-sm font-medium text-white">Benchmark-Backed Quality</h3>
                        </div>
                        <p className="text-muted-foreground text-sm">Release-gated quality checks before new capability reaches care teams.</p>
                    </div>
                    <div className="space-y-2">
                        <div className="flex items-center gap-2">
                            <Lock className="size-4 text-white" />
                            <h3 className="text-sm font-medium text-white">Privacy First</h3>
                        </div>
                        <p className="text-muted-foreground text-sm">Privacy and security controls are designed into every workflow from day one.</p>
                    </div>
                    <div className="space-y-2">
                        <div className="flex items-center gap-2">
                            <Sparkles className="size-4 text-white" />
                            <h3 className="text-sm font-medium text-white">Evidence-Visible Guidance</h3>
                        </div>
                        <p className="text-muted-foreground text-sm">See what answers are built on, with citations and built-in safety guardrails.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

