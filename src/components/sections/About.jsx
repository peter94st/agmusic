
import { useTranslation } from "react-i18next";
import djPortrait from "@/assets/about/guillenPortrait.jpeg";

export default function About() {
  const { t } = useTranslation();

  const characteristics = [
    "about.characteristic1",
    "about.characteristic2",
    "about.characteristic3",
  ];

  return (
    <section
      id="about"
      className="bg-card py-24 md:py-32 scroll-mt-20"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-center">

          {/* Portrait */}
          <div className="relative max-w-xl mx-auto w-full">
            <div className="aspect-[4/5] overflow-hidden bg-secondary">
              <img
                src={djPortrait}
                alt={t("about.imageAlt")}
                className="
                  w-full h-full object-cover
                  grayscale hover:grayscale-0
                  transition-all duration-700
                "
              />
            </div>

            <span className="
              absolute -bottom-5 -left-5
              font-display text-7xl
              text-primary opacity-80
            ">
              NO.
            </span>
          </div>

          {/* Biography */}
          <div>
            <div className="flex items-center gap-4 mb-7">
              <span className="w-8 h-[2px] bg-primary" />

              <p className="
                font-mono text-xs text-primary
                uppercase tracking-[0.25em]
              ">
                {t("about.label")}
              </p>
            </div>

            <h2 className="
              font-display uppercase
              text-5xl md:text-6xl lg:text-7xl
              leading-[0.95]
            ">
              {t("about.title")}
            </h2>

            <p className="
              mt-8 text-sm md:text-base
              leading-relaxed text-muted-foreground
            ">
              {t("about.paragraph1")}
            </p>

            <p className="
              mt-5 text-sm md:text-base
              leading-relaxed text-muted-foreground
            ">
              {t("about.paragraph2")}
            </p>

            {/* Musical identity */}
            <div className="
              mt-10 pt-7
              border-t border-border
              grid grid-cols-1 sm:grid-cols-3
              gap-5
            ">
              {characteristics.map((item) => (
                <div key={item}>
                  <span className="
                    block w-5 h-[2px]
                    bg-primary mb-4
                  " />

                  <p className="
                    font-mono text-xs
                    uppercase tracking-wider
                    text-foreground
                  ">
                    {t(item)}
                  </p>
                </div>
              ))}
            </div>

          </div>
          {/* End Biography */}

        </div>
      </div>
    </section>
  );
}
