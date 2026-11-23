
import { useTranslation } from "react-i18next";

import image1 from "@/assets/gallery/party.jpeg";
import image2 from "@/assets/gallery/fest.jpeg";
import image3 from "@/assets/gallery/coco.jpeg";
import image4 from "@/assets/gallery/rat.jpeg";
import image5 from "@/assets/gallery/bendisiones.jpeg";
import image6 from "@/assets/gallery/drink.jpeg";
import image7 from "@/assets/gallery/gta.jpeg";


const images = [
  { id: 1, src: image1, alt: "DJ performing live", className: "md:col-span-2 md:row-span-2" },
  { id: 2, src: image2, alt: "Festival crowd", className: "" },
  { id: 3, src: image3, alt: "DJ equipment", className: "" },
  { id: 4, src: image4, alt: "Electronic music event", className: "" },
  { id: 5, src: image5, alt: "Live performance", className: "md:col-span-2" },
  { id: 4, src: image6, alt: "Electronic music event", className: "" },
  { id: 4, src: image7, alt: "Electronic music event", className: "" },
];

export default function Gallery() {
  const { t } = useTranslation();

  return (
    <section
      id="gallery"
      className="bg-background py-24 md:py-32 scroll-mt-20"
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="mb-14">
          <div className="flex items-center gap-4 mb-6">
            <span className="w-8 h-[2px] bg-primary" />

            <p className="font-mono text-xs text-primary uppercase tracking-[0.25em]">
              {t("gallery.label")}
            </p>
          </div>

          <h2 className="
            font-display uppercase
            text-5xl md:text-7xl
            leading-[0.95]
          ">
            {t("gallery.title")}
          </h2>
        </div>

        {/* Image grid */}
        <div className="
          grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4
          auto-rows-[220px] md:auto-rows-[240px]
          gap-4
        ">
          {images.map((image) => (
            <div
              key={image.id}
              className={`
                relative overflow-hidden
                bg-secondary group
                ${image.className}
              `}
            >
              <img
                src={image.src}
                alt={image.alt}
                loading="lazy"
                className="
                  w-full h-full object-cover
                  opacity-80
                  group-hover:opacity-100
                  group-hover:scale-105
                  transition-all duration-700
                "
              />

              <div className="
                absolute inset-0
                bg-gradient-to-t
                from-background/40 to-transparent
                pointer-events-none
              " />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
