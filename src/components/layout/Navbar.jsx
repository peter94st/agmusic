
import { useState } from "react";
import { Link } from "react-router";
import { useTranslation } from "react-i18next";
import {
  Languages,
  ChevronDown,
  Menu,
  X
} from "lucide-react";
import logo from "@/assets/icon/logo-AG-white.svg"
import CustomIcon from "./CustomIcon";

const navLinks = [
  { label: "music", id: "music" },
  { label: "events", id: "events" },
  { label: "about", id: "about" },
  { label: "gallery", id: "gallery" },
  { label: "contact", id: "contact" }
];

export default function Navbar() {
  const { t, i18n } = useTranslation();

  const [languageOpen, setLanguageOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const currentLanguage = i18n.resolvedLanguage || "es";

  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
    setLanguageOpen(false);
    setMobileOpen(false);
  };

  const closeMenus = () => {
    setMobileOpen(false);
    setLanguageOpen(false);
  };

  return (
    <header className="
      sticky top-0 z-50
      bg-background/95 backdrop-blur-md
      border-b border-border
    ">
      <nav className="
        max-w-7xl mx-auto
        h-20 px-6
        flex items-center justify-between
      ">

        {/* LOGO */}
        <Link
          to="/"
          onClick={closeMenus}
          className="flex items-center gap-2 font-display text-3xl tracking-wide"
        >
            <CustomIcon source={logo} alt="Logo" size={20}/>
            <span>
                A.GUILLEN-MUSIC<span className="text-primary">.</span>
            </span>
        </Link>

        {/* DESKTOP NAVIGATION */}
        <div className="hidden lg:flex items-center gap-7">

          <div className="flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.id}
                to={`/#${link.id}`}
                className="
                  text-xs font-semibold uppercase
                  tracking-wider text-muted-foreground
                  hover:text-primary transition-colors
                "
              >
                {t(`navbar.${link.label}`)}
              </Link>
            ))}
          </div>

          {/* LANGUAGE SELECTOR */}
          <div className="relative">
            <button
              onClick={() => setLanguageOpen(!languageOpen)}
              aria-expanded={languageOpen}
              aria-label={t("navbar.selectLanguage", {
                defaultValue: "Select language"
              })}
              className="
                flex items-center gap-2
                text-sm font-mono
                hover:text-primary transition-colors
              "
            >
              <Languages size={17} />
              {currentLanguage.toUpperCase()}
              <ChevronDown size={14} />
            </button>

            {languageOpen && (
              <div className="
                absolute right-0 top-full mt-3
                w-36 p-1
                bg-card border border-border
                rounded-md shadow-xl
              ">
                {["es", "en"].map((lang) => (
                  <button
                    key={lang}
                    onClick={() => changeLanguage(lang)}
                    className={`
                      w-full text-left px-3 py-2
                      text-xs font-mono uppercase
                      rounded-sm transition-colors
                      ${
                        currentLanguage === lang
                          ? "text-primary bg-secondary"
                          : "text-muted-foreground hover:text-foreground hover:bg-secondary"
                      }
                    `}
                  >
                    {lang === "es" ? "Español" : "English"}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* BOOKING */}
          <Link
            to="/#contact"
            className="
              px-5 py-3
              border border-primary
              text-primary text-xs font-bold
              tracking-wider uppercase
              hover:bg-primary hover:text-primary-foreground
              transition-colors
            "
          >
            {t("navbar.booking")} ↗
          </Link>
        </div>

        {/* MOBILE BUTTON */}
        <button
          className="lg:hidden text-foreground"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <X size={25} /> : <Menu size={25} />}
        </button>

      </nav>

      {/* MOBILE MENU */}
      {mobileOpen && (
        <div className="
          lg:hidden
          border-t border-border
          bg-background
          px-6 py-6
          flex flex-col gap-6
        ">

          {navLinks.map((link) => (
            <Link
              key={link.id}
              to={`/#${link.id}`}
              onClick={closeMenus}
              className="
                text-sm uppercase tracking-widest
                text-muted-foreground
                hover:text-primary transition-colors
              "
            >
              {t(`navbar.${link.label}`)}
            </Link>
          ))}

          <div className="border-t border-border pt-5">
            <p className="text-muted-foreground font-mono text-xs mb-3">
              LANGUAGE
            </p>

            <div className="flex gap-5">
              {["es", "en"].map((lang) => (
                <button
                  key={lang}
                  onClick={() => changeLanguage(lang)}
                  className={`
                    text-sm font-mono
                    ${currentLanguage === lang
                      ? "text-primary"
                      : "text-muted-foreground"
                    }
                  `}
                >
                  {lang.toUpperCase()}
                </button>
              ))}
            </div>
          </div>

          <Link
            to="/#contact"
            onClick={closeMenus}
            className="
              bg-primary text-primary-foreground
              text-center py-4
              text-xs font-bold uppercase tracking-widest
            "
          >
            {t("navbar.booking")} ↗
          </Link>

        </div>
      )}
    </header>
  );
}
