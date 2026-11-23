import { Headphones } from "lucide-react";
import { useTranslation } from "react-i18next";

import latestSetCover from "@/assets/music/wyldHearts.jpeg"

export default function LatestSet() {
    const { t } = useTranslation()

    //Sustituir por la URL real 
    const soundcloudTrackUrl = "https://soundcloud.com/wyldhearts/bababass3000-chop-chop-original-mix"
    const soundcloudPlayerUrl =
        `https://w.soundcloud.com/player/?url=${encodeURIComponent(soundcloudTrackUrl)}&color=%23C7FF00&auto_play=false&hide_related=true&show_comments=false&show_user=true&show_reposts=false&show_teaser=false`

    return (
        <section
            id="music"
            className="bg-card py-24 md:py-32 scroll-mt-20"
        >
            <div className="max-w-7xl mx-auto px-6">

                {/* section heading */}
                <div className="flex items-center gap-4 mb-14">
                    <span className="w-8 h-0.5 bg-primary" />

                    <p className="font-mono text-xs text-primary uppercase tracking-[0.25em]">
                        {t("latestSet.label")}
                    </p>
                </div>

                <div className="
                    grid grid-cols-1 md:grid-cols-2
                    gap-12 lg:gap-20 items-center
                ">
                    {/* cover */}
                    <div className="relative max-w-xl w-full mx-auto">
                        <div className="
                            aspect-square overflow-hidden
                            bg-secondary border border-border
                        ">
                            <img 
                                src={latestSetCover} 
                                alt={t("latestSet.coverAlt")}
                                className="w-full h-full object-cover" 
                            />
                        </div>

                        <div className="
                            absolute -bottom-5 -right-5
                            bg-primary text-primary-foreground
                            w-20 h-20
                            flex items-center justify-center
                        ">
                            <Headphones size={30} />
                        </div>
                    </div>

                    {/* information and player */}
                    <div className="flex flex-col items-start">

                        <p className="
                            font-mono text-xs text-muted-foreground
                            uppercase tracking-widest mb-5
                        ">
                            {t("latestSet.subtitle")}
                        </p>

                        <h2 className="
                            font-display uppercase
                            text-5xl md:text-6xl lg:text-7xl
                            leading-[0.95]
                        ">
                            {t("latestSet.playerTitle")}
                        </h2>

                        <p className="
                            mt-7 max-w-lg
                            text-muted-foreground
                            text-sm md:text-base
                            leading-relaxed
                        ">
                            {t("latestSet.description")}
                        </p>

                        <div className="w-full mt-9">
                            <iframe 
                                title={t("latestSet.playerTitle")}
                                width="100%"
                                height="100%"
                                scrolling="no"
                                allow="autoplay"
                                src={soundcloudPlayerUrl} 
                                frameborder="0"
                                className="w-full" 
                            />
                        </div>

                    </div>

                </div>
            </div>
            
        </section>
    )


}
