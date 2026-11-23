
import { ArrowUpRight, MapPin } from "lucide-react";
import { useTranslation } from "react-i18next";

import events from "@/data/events";

export default function UpcomingEvents() {
  const { t } = useTranslation();

  return (
    <section
      id="events"
      className="bg-background py-24 md:py-32 scroll-mt-20"
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">

          <div>
            <div className="flex items-center gap-4 mb-6">
              <span className="w-8 h-[2px] bg-primary" />

              <p className="font-mono text-xs text-primary uppercase tracking-[0.25em]">
                {t("events.label")}
              </p>
            </div>

            <h2 className="
              font-display uppercase
              text-5xl md:text-7xl
              leading-[0.95]
            ">
              {t("events.title")}
            </h2>
          </div>

          <p className="
            max-w-sm text-sm
            text-muted-foreground leading-relaxed
          ">
            {t("events.description")}
          </p>

        </div>

        
        {/* Events list */}
        <div className="border-t border-border">

        {events.length > 0 ? (
            events.map((event) => (
            <article
                key={event.id}
                className="
                grid grid-cols-1 md:grid-cols-[100px_1fr_auto]
                gap-5 md:gap-10
                items-center
                py-8
                border-b border-border
                group
                "
            >
                {/* Date */}
                <div className="flex md:flex-col items-baseline md:items-start gap-2">
                <span className="
                    font-display text-4xl
                    text-primary leading-none
                ">
                    {event.day}
                </span>

                <span className="
                    font-mono text-xs
                    text-muted-foreground tracking-widest
                ">
                    {event.month} {event.year}
                </span>
                </div>

                {/* Event information */}
                <div>
                <h3 className="
                    font-display text-2xl md:text-3xl
                    uppercase tracking-wide
                    group-hover:text-primary transition-colors
                ">
                    {event.name}
                </h3>

                <div className="
                    flex flex-wrap items-center gap-x-4 gap-y-2
                    mt-3 text-xs text-muted-foreground
                ">
                    <span>{event.venue}</span>

                    <span className="hidden sm:block w-1 h-1 rounded-full bg-primary" />

                    <span className="flex items-center gap-1">
                    <MapPin size={13} />
                    {event.city}, {event.country}
                    </span>
                </div>
                </div>

                {/* Tickets */}
                <a
                href={event.ticketUrl}
                target="_blank"
                rel="noreferrer"
                className="
                    inline-flex items-center gap-3
                    text-xs font-bold uppercase tracking-widest
                    text-muted-foreground
                    group-hover:text-primary transition-colors
                "
                >
                {t("events.tickets")}
                <ArrowUpRight size={17} />
                </a>
            </article>
            ))
        ) : (
            <div className="
            py-20
            flex flex-col items-center text-center
            border-b border-border
            ">
            <span className="
                font-mono text-primary
                text-xs tracking-[0.25em] uppercase
            ">
                {t("events.noEventsLabel")}
            </span>

            <h3 className="
                font-display text-3xl md:text-4xl
                uppercase mt-5
            ">
                {t("events.noEventsTitle")}
            </h3>

            <p className="
                max-w-md mt-4
                text-sm text-muted-foreground
                leading-relaxed
            ">
                {t("events.noEventsDescription")}
            </p>
            </div>
        )}

        </div>


      </div>
    </section>
  );
}
