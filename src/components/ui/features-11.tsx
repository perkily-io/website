import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { Eye, Gift, Bot, Package, TrendingUp, Phone, MessageSquare, Sparkles } from 'lucide-react'

export function AppreciationEngine() {
    return (
        <section className="bg-black py-16 md:py-32">
            <div className="mx-auto max-w-7xl px-6">
                {/* Header */}
                <div className="mb-20 text-center">
                    <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-light tracking-[-0.02em] text-white mb-8 leading-[1.1]" style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", "Helvetica Neue", Arial, sans-serif', fontWeight: 300 }}>
                        A practice that grows itself.
                    </h2>
                    <p className="text-xl sm:text-2xl md:text-3xl text-white/70 max-w-4xl mx-auto leading-relaxed font-light tracking-[-0.01em]" style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", "Helvetica Neue", Arial, sans-serif', fontWeight: 300 }}>
                        ClinicalOS doesn't just manage patients; it nurtures them. Through our proprietary Appreciation Engine, we've turned patient retention into a passive science. By automating the touchpoints that build loyalty, we ensure your practice thrives while you stay focused on care.
                    </p>
                </div>

                {/* Bento Grid Layout */}
                <div className="mx-auto grid gap-3 sm:grid-cols-5">
                    {/* Proactive Insights - Large Card */}
                    <Card className="group overflow-hidden border-white/10 bg-white/[0.02] shadow-black/5 sm:col-span-3 sm:rounded-none sm:rounded-tl-xl hover:border-white/20 hover:bg-white/[0.04] transition-all duration-500">
                        <CardHeader>
                            <div className="md:p-6">
                                <div className="flex items-center gap-3 mb-4">
                                    <Eye className="w-6 h-6 text-white/90" strokeWidth={0.75} />
                                    <p className="text-lg font-light text-white/90" style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", "Helvetica Neue", Arial, sans-serif' }}>Proactive Insights</p>
                                </div>
                                <p className="text-white/50 text-sm leading-relaxed max-w-sm font-light" style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", "Helvetica Neue", Arial, sans-serif' }}>
                                    Identify at-risk patients and clinical trends before they impact your practice.
                                </p>
                            </div>
                        </CardHeader>

                        <div className="relative h-fit pl-6 md:pl-12">
                            <div className="absolute -inset-6 [background:radial-gradient(75%_95%_at_50%_0%,transparent,rgba(255,255,255,0.02)_100%)]"></div>
                            <div className="bg-black/60 overflow-hidden rounded-tl-lg border-l border-t border-white/10 pl-2 pt-2">
                                <img
                                    src="/img/insights.png"
                                    className="w-full h-auto opacity-90"
                                    alt="Patient insights dashboard"
                                    width={1207}
                                    height={929}
                                />
                            </div>
                        </div>
                    </Card>

                    {/* Automated Loyalty - Medium Card */}
                    <Card className="group overflow-hidden border-white/10 bg-white/[0.02] shadow-black/5 sm:col-span-2 sm:rounded-xl hover:border-white/20 hover:bg-white/[0.04] transition-all duration-500">
                        <p className="mx-auto my-6 max-w-md text-balance px-6 text-center text-lg font-light text-white/90 sm:text-2xl md:p-6" style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", "Helvetica Neue", Arial, sans-serif' }}>
                            Personalized rewards that build lasting loyalty.
                        </p>

                        <CardContent className="mt-auto h-fit">
                            <div className="relative mb-6 sm:mb-0">
                                <div className="absolute -inset-6 [background:radial-gradient(50%_75%_at_75%_50%,transparent,rgba(255,255,255,0.02)_100%)]"></div>
                                <div className="aspect-76/59 overflow-hidden rounded-lg border border-white/10">
                                    <img
                                        src="/img/appengine.png"
                                        className="w-full h-auto opacity-90"
                                        alt="Loyalty rewards system"
                                        width={1207}
                                        height={929}
                                    />
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    {/* Autonomous Automations - Small Card */}
                    <Card className="group p-6 border-white/10 bg-white/[0.02] shadow-black/5 sm:col-span-2 sm:rounded-none sm:rounded-bl-xl md:p-12 hover:border-white/20 hover:bg-white/[0.04] transition-all duration-500">
                        <p className="mx-auto mb-12 max-w-md text-balance text-center text-lg font-light text-white/90 sm:text-2xl" style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", "Helvetica Neue", Arial, sans-serif' }}>
                            Autonomous Automations that feel human.
                        </p>

                        <div className="flex justify-center gap-6">
                            <div className="inset-shadow-sm bg-white/[0.02] relative flex aspect-square size-16 items-center justify-center rounded-lg border border-white/10 p-3 shadow-lg ring-1 ring-white/5 hover:border-white/20 transition-all">
                                <Phone className="size-5 text-white/70" strokeWidth={1.5} />
                            </div>
                            <div className="inset-shadow-sm bg-white/[0.02] flex aspect-square size-16 items-center justify-center rounded-lg border border-white/10 p-3 shadow-lg ring-1 ring-white/5 hover:border-white/20 transition-all">
                                <MessageSquare className="size-5 text-white/70" strokeWidth={1.5} />
                            </div>
                        </div>
                        <p className="text-center text-xs text-white/40 mt-6 font-light" style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", "Helvetica Neue", Arial, sans-serif' }}>
                            AI-voice confirmations and WhatsApp reminders
                        </p>
                    </Card>

                    {/* Inventory Intelligence - Large Card */}
                    <Card className="group relative border-white/10 bg-white/[0.02] shadow-black/5 sm:col-span-3 sm:rounded-none sm:rounded-br-xl hover:border-white/20 hover:bg-white/[0.04] transition-all duration-500">
                        <CardHeader className="p-6 md:p-12">
                            <div className="flex items-center gap-3 mb-2">
                                <Package className="w-6 h-6 text-white/90" strokeWidth={0.75} />
                                <p className="text-lg font-light text-white/90" style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", "Helvetica Neue", Arial, sans-serif' }}>Inventory Intelligence</p>
                            </div>
                            <p className="text-white/50 text-sm leading-relaxed max-w-sm font-light" style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", "Helvetica Neue", Arial, sans-serif' }}>
                                Real-time stock tracking with automated purchase orders. You'll never run out of what matters.
                            </p>
                        </CardHeader>
                        <CardContent className="relative h-fit px-6 pb-6 md:px-12 md:pb-12">
                            <div className="grid grid-cols-4 gap-2 md:grid-cols-6">
                                {[
                                    { icon: TrendingUp, label: "Stock Levels" },
                                    { icon: Package, label: "Auto Reorder" },
                                    { icon: Sparkles, label: "Smart Alerts" },
                                    { icon: Bot, label: "AI Predictions" },
                                    { icon: Gift, label: "Bundle Tracking" },
                                    { icon: Eye, label: "Insights" }
                                ].map((item, index) => (
                                    <div key={index} className="rounded-lg bg-white/[0.02] flex aspect-square items-center justify-center border border-white/10 p-4 hover:border-white/20 hover:bg-white/[0.04] transition-all">
                                        <item.icon className="size-6 text-white/60" strokeWidth={1} />
                                    </div>
                                ))}
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </section>
    )
}

