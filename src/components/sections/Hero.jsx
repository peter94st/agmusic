import { Link } from "react-router";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { useTranslation } from "react-i18next";

export default function Hero () {
    const { t } = useTranslation()

    return (
        <section className="
            relative min-h-[calc(100svh-5rem)]
            flex items-center overflow-hidden
            bg-background
        ">
            {/* bg image */}
            <div 
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{
                    backgroundImage: "url('/images/hero/djLive.jpeg')"
                }} 
            />

            {/* dark overlays */}
            <div className="
                absolute inset-0
                bg-gradient-to-r
                from-background via-background/70 to-background/20
            "/>

            <div className="
                absolute inset-0
                bg-linear-to-t
                from-background via-transparent to-background/20
            "/>

            {/* Content */}
            <div className="
                relative z-10
                max-w-7xl w-full mx-auto
                px-6 py-24
            ">
                <div className="max-w-4xk">

                    <p className="
                        font-mono text-primary
                        text-xs md:text-sm
                        tracking-[0.3em] uppercase
                        mb-6
                    ">
                        {t("hero.tagline")}
                    </p>

                    <h1 className="
                        font-display uppercase
                        text-6xl sm:text-7xl md:text-8xl lg:text-9xl
                        leading-[0.9]
                        tracking-tight
                    ">
                        INTO THE
                        <br />
                        <span className="text-primary">
                            DARKNESS
                        </span>
                    </h1>

                    <p className="
                        mt-8 max-w-lg
                        text-muted-foreground
                        text-sm md:text-base
                        leading-relaxed
                    ">
                        {t("hero.description")}
                    </p>

                    <div className="flex flex-wrap gap-4 mt-10">
                        <Link 
                            to='/#music'
                            className="
                                inline-flex items-center gap-3
                                bg-primary text-primary-foreground
                                px-7 py-4
                                text-xs font-bold uppercase tracking-widest
                                hover:bg-white transition-colors
                            "
                        >
                            {t("hero.listen")}
                            <ArrowUpRight size={17} />
                        </Link>

                        <Link 
                            to='/#contact'
                            className="
                                inline-flex items-center gap-3
                                border border-white/30
                                px-7 py-4
                                text-xs font-bold uppercase tracking-widest
                                hover:border-primary hover:text-primary
                                transition-colors
                            "
                        >
                            {t("hero.booking")}
                        </Link>

                    </div>
                </div>
            </div>

            {/* bottom indicator */}
            <div className="
                absolute bottom-8 left-1/2 -translate-x-1/2
                flex flex-col items-center gap-3
                text-muted-foreground
            ">
                <span className="
                    font-mono text-[10px]
                    tracking-[0.25em] uppercase
                ">
                    {t("hero.scroll")}
                </span>
                <ArrowDown size={17} className="text-primary" />
            </div>

        </section>
    )
}