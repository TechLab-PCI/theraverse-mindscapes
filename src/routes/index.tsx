import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import {
  Brain, Sparkles, Activity, ShieldCheck, ArrowDown,
  HeartPulse, GraduationCap, Cpu, Scale, Building2, Leaf, Handshake,
} from "lucide-react";
import heroImg from "@/assets/hero-vr-student.jpg";
import { LanguageProvider, useLang } from "@/lib/language-context";
import { translations as T, t, type Lang } from "@/lib/i18n";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Theraverse — Mundos Imersivos na Saúde" },
      { name: "description", content: "Clínica imersiva de saúde mental para jovens nativos digitais, com Realidade Virtual, IA generativa e wearables." },
      { property: "og:title", content: "Theraverse — Mundos Imersivos na Saúde" },
      { property: "og:description", content: "Uma nova geração de cuidados de saúde mental, imersivos, personalizados e seguros." },
    ],
  }),
  component: () => (
    <LanguageProvider>
      <Page />
    </LanguageProvider>
  ),
});

function Page() {
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <Nav />
      <main>
        <Hero />
        <Context />
        <Features />
        <Impact />
        <News />
      </main>
      <PartnersFooter />
    </div>
  );
}

/* ---------------- Nav ---------------- */

function Nav() {
  const { lang } = useLang();
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { href: "#about", label: t(T.nav.about, lang) },
    { href: "#features", label: t(T.nav.features, lang) },
    { href: "#impact", label: t(T.nav.impact, lang) },
    { href: "#news", label: t(T.nav.news, lang) },
    { href: "#partners", label: t(T.nav.partners, lang) },
  ];

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "py-2" : "py-4"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div
          className={`glass flex items-center justify-between gap-4 rounded-2xl px-3 py-2 sm:px-5 sm:py-3 transition-all ${
            scrolled ? "shadow-[0_10px_40px_-10px_rgba(0,0,0,0.5)]" : ""
          }`}
        >
          <a href="#top" className="flex items-center gap-2 shrink-0">
            <Logo />
            <span className="font-display text-base font-semibold tracking-tight sm:text-lg">
              Theraverse
            </span>
          </a>

          <nav className="hidden items-center gap-7 md:flex">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-sm text-foreground/75 transition-colors hover:text-foreground"
              >
                {l.label}
              </a>
            ))}
          </nav>

          <LanguageToggle />
        </div>
      </div>
    </header>
  );
}

function Logo() {
  return (
    <div className="relative grid h-9 w-9 place-items-center rounded-xl"
      style={{ background: "var(--gradient-brand)" }}>
      <Brain className="h-5 w-5 text-[oklch(0.18_0.04_260)]" strokeWidth={2.4} />
    </div>
  );
}

function LanguageToggle() {
  const { lang, setLang } = useLang();
  return (
    <div
      role="group"
      aria-label="Language"
      className="relative flex shrink-0 items-center rounded-full border border-white/10 bg-white/5 p-0.5 text-xs font-medium"
    >
      <span
        aria-hidden
        className="absolute top-0.5 bottom-0.5 w-[calc(50%-2px)] rounded-full transition-transform duration-300"
        style={{
          background: "var(--gradient-brand)",
          transform: lang === "pt" ? "translateX(0)" : "translateX(100%)",
        }}
      />
      {(["pt", "en"] as Lang[]).map((l) => (
        <button
          key={l}
          onClick={() => setLang(l)}
          className={`relative z-10 px-3 py-1.5 uppercase tracking-wider transition-colors ${
            lang === l ? "text-[oklch(0.18_0.04_260)]" : "text-foreground/70"
          }`}
        >
          {l}
        </button>
      ))}
    </div>
  );
}

/* ---------------- Hero ---------------- */

function Hero() {
  const { lang } = useLang();
  return (
    <section id="top" className="relative flex min-h-[100svh] items-center overflow-hidden pt-28 pb-16">
      <div className="absolute inset-0 -z-10">
        <img
          src={heroImg}
          alt=""
          width={1600}
          height={1280}
          className="h-full w-full object-cover opacity-55"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, oklch(0.18 0.04 260 / 0.5) 0%, oklch(0.18 0.04 260 / 0.85) 70%, oklch(0.18 0.04 260) 100%), radial-gradient(ellipse at 70% 30%, oklch(0.65 0.24 295 / 0.25), transparent 60%)",
          }}
        />
      </div>

      <div className="mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-12 px-6 lg:grid-cols-12">
        <div className="lg:col-span-7">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs uppercase tracking-[0.18em] text-foreground/70 backdrop-blur">
            <span className="h-1.5 w-1.5 rounded-full animate-pulse-glow" style={{ background: "var(--teal)" }} />
            {t(T.hero.eyebrow, lang)}
          </div>
          <h1 className="font-display text-4xl font-semibold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
            {lang === "pt" ? (
              <>
                THERAVERSE: <span className="text-gradient">O Futuro</span><br />
                da Saúde Mental Digital
              </>
            ) : (
              <>
                THERAVERSE: <span className="text-gradient">The Future</span><br />
                of Digital Mental Health
              </>
            )}
          </h1>
          <p className="mt-6 max-w-xl text-base text-foreground/75 sm:text-lg">
            {t(T.hero.subtitle, lang)}
          </p>
        </div>
      </div>

      <a
        href="#about"
        aria-label={t(T.hero.scroll, lang)}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-foreground/60 hover:text-foreground transition-colors"
      >
        <span className="text-[11px] uppercase tracking-[0.3em]">{t(T.hero.scroll, lang)}</span>
        <div className="relative h-9 w-5 rounded-full border border-foreground/30">
          <span className="absolute left-1/2 top-1.5 h-1.5 w-0.5 -translate-x-1/2 rounded-full bg-foreground/70 animate-scroll-hint" />
        </div>
        <ArrowDown className="h-3 w-3 animate-scroll-hint" />
      </a>
    </section>
  );
}

/* ---------------- Context / Why ---------------- */

function Context() {
  const { lang } = useLang();
  return (
    <section id="about" className="relative scroll-mt-24 py-24 sm:py-32">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-6">
          <SectionTag>{t(T.context.tag, lang)}</SectionTag>
          <h2 className="mt-4 font-display text-3xl font-semibold leading-tight sm:text-5xl">
            {t(T.context.title, lang)}
          </h2>
          <p className="mt-6 max-w-lg text-foreground/70">
            {t(T.context.body, lang)}
          </p>
          <p className="mt-8 text-xs uppercase tracking-wider text-foreground/45">
            {t(T.context.sources, lang)}
          </p>
        </div>
        <div className="lg:col-span-6">
          <div className="card-gradient relative overflow-hidden rounded-3xl p-8 sm:p-12"
            style={{ boxShadow: "var(--shadow-card)" }}>
            <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full opacity-30 blur-3xl"
              style={{ background: "var(--gradient-brand)" }} />
            <div className="relative">
              <div className="text-xs uppercase tracking-[0.25em] text-foreground/50">
                {lang === "pt" ? "Indicador" : "Indicator"}
              </div>
              <div className="mt-4 font-display text-[8rem] font-semibold leading-none tracking-tighter sm:text-[11rem]">
                <span className="text-gradient">{t(T.context.metric, lang)}</span>
              </div>
              <p className="mt-6 max-w-sm text-base text-foreground/80">
                {t(T.context.metricLabel, lang)}
              </p>
              <div className="mt-8 h-px w-full bg-gradient-to-r from-transparent via-foreground/20 to-transparent" />
              <div className="mt-6 flex items-center justify-between text-xs text-foreground/50">
                <span>18–34</span>
                <span>PT · 2024</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function SectionTag({ children }: { children: React.ReactNode }) {
  return (
    <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-foreground/55">
      <span className="h-px w-8" style={{ background: "var(--gradient-brand)" }} />
      {children}
    </div>
  );
}

/* ---------------- Features ---------------- */

function Features() {
  const { lang } = useLang();
  const icons = [Sparkles, Brain, Activity, ShieldCheck];
  return (
    <section id="features" className="relative scroll-mt-24 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-2xl">
          <SectionTag>{t(T.features.tag, lang)}</SectionTag>
          <h2 className="mt-4 font-display text-3xl font-semibold leading-tight sm:text-5xl">
            {t(T.features.title, lang)}
          </h2>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {T.features.items.map((item, i) => {
            const Icon = icons[i];
            return (
              <article
                key={i}
                className="group card-gradient relative overflow-hidden rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1"
                style={{ boxShadow: "var(--shadow-card)" }}
              >
                <div className="absolute inset-x-0 top-0 h-px opacity-60"
                  style={{ background: "var(--gradient-brand)" }} />
                <div
                  className="grid h-11 w-11 place-items-center rounded-xl border border-white/10"
                  style={{ background: "color-mix(in oklab, var(--teal) 12%, transparent)" }}
                >
                  <Icon className="h-5 w-5" style={{ color: "var(--teal)" }} strokeWidth={1.8} />
                </div>
                <h3 className="mt-5 font-display text-lg font-semibold">
                  {t(item.title, lang)}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-foreground/65">
                  {t(item.desc, lang)}
                </p>
                <div className="pointer-events-none absolute -bottom-16 -right-16 h-40 w-40 rounded-full opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-30"
                  style={{ background: "var(--gradient-brand)" }} />
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Impact / SDG ---------------- */

function Impact() {
  const { lang } = useLang();
  const sdgIcons: Record<number, typeof HeartPulse> = {
    3: HeartPulse, 4: GraduationCap, 9: Cpu, 10: Scale,
    11: Building2, 13: Leaf, 17: Handshake,
  };

  return (
    <section id="impact" className="relative scroll-mt-24 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <SectionTag>{t(T.impact.tag, lang)}</SectionTag>
            <h2 className="mt-4 font-display text-3xl font-semibold leading-tight sm:text-5xl">
              {t(T.impact.title, lang)}
            </h2>
            <p className="mt-6 text-foreground/70">
              {t(T.impact.eu, lang)}
            </p>
            <a
              href="https://digital-strategy.ec.europa.eu/en/policies/virtual-worlds"
              target="_blank" rel="noreferrer"
              className="mt-6 inline-flex items-center gap-2 text-sm font-medium"
              style={{ color: "var(--teal)" }}
            >
              EU Web 4.0 Strategy →
            </a>
          </div>

          <div className="lg:col-span-7">
            <h3 className="text-xs uppercase tracking-[0.25em] text-foreground/55">
              {t(T.impact.sdgTitle, lang)}
            </h3>
            <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3">
              {T.impact.sdgs.map((sdg) => {
                const Icon = sdgIcons[sdg.n];
                return (
                  <div
                    key={sdg.n}
                    className="card-gradient rounded-xl p-4 transition-colors hover:border-white/20"
                  >
                    <div className="flex items-center gap-3">
                      <div
                        className="grid h-9 w-9 shrink-0 place-items-center rounded-lg font-display text-sm font-semibold"
                        style={{ background: "var(--gradient-brand)", color: "oklch(0.18 0.04 260)" }}
                      >
                        {sdg.n}
                      </div>
                      <Icon className="h-4 w-4 shrink-0 text-foreground/50" strokeWidth={1.8} />
                    </div>
                    <p className="mt-3 text-sm font-medium leading-snug">
                      {t(sdg, lang)}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- News ---------------- */

function News() {
  const { lang } = useLang();
  return (
    <section id="news" className="relative scroll-mt-24 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <div className="max-w-2xl">
            <SectionTag>{t(T.news.tag, lang)}</SectionTag>
            <h2 className="mt-4 font-display text-3xl font-semibold leading-tight sm:text-5xl">
              {t(T.news.title, lang)}
            </h2>
            <p className="mt-4 text-foreground/70">{t(T.news.body, lang)}</p>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-xs uppercase tracking-[0.2em] text-foreground/55">
              {t(T.news.follow, lang)}
            </span>
            <SocialPill label="LinkedIn" href="#" />
            <SocialPill label="X" href="#" />
          </div>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              className="card-gradient relative overflow-hidden rounded-2xl p-6"
              style={{ boxShadow: "var(--shadow-card)" }}
            >
              <div className="aspect-[16/10] w-full rounded-xl"
                style={{
                  background:
                    "linear-gradient(135deg, oklch(0.28 0.05 262), oklch(0.22 0.04 260)), radial-gradient(circle at 30% 30%, oklch(0.65 0.24 295 / 0.4), transparent 60%)",
                }}
              />
              <div className="mt-5 text-xs uppercase tracking-wider text-foreground/45">
                {lang === "pt" ? "Em breve" : "Coming soon"}
              </div>
              <p className="mt-2 font-display text-lg font-medium text-foreground/85">
                {t(T.news.placeholder, lang)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function SocialPill({ label, href }: { label: string; href: string }) {
  return (
    <a
      href={href}
      className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-foreground/80 transition-colors hover:border-white/25 hover:text-foreground"
    >
      {label}
    </a>
  );
}

/* ---------------- Partners Footer ---------------- */

const partners = [
  { name: "Eupasoft", url: "https://www.eupasoft.com" },
  { name: "PCI — Creative Science Park", url: "http://www.pci.pt" },
  { name: "Universidade de Aveiro", url: "https://www.ua.pt" },
  { name: "ULS Coimbra", url: "https://www.ulscoimbra.min-saude.pt" },
];

function PartnersFooter() {
  const { lang } = useLang();
  return (
    <footer id="partners" className="relative scroll-mt-24 border-t border-white/5 pt-24 pb-10"
      style={{ background: "linear-gradient(180deg, transparent, oklch(0.15 0.04 262))" }}>
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center">
          <SectionTag>{t(T.partners.tag, lang)}</SectionTag>
          <h2 className="mx-auto mt-4 max-w-2xl font-display text-2xl font-semibold sm:text-4xl">
            {t(T.partners.title, lang)}
          </h2>
        </div>

        <div className="mt-14 grid grid-cols-2 gap-3 sm:grid-cols-4">
          {partners.map((p) => (
            <a
              key={p.name}
              href={p.url}
              target="_blank"
              rel="noreferrer"
              className="group card-gradient flex h-28 items-center justify-center rounded-2xl px-4 text-center transition-all hover:-translate-y-1 hover:border-white/25"
            >
              <span className="font-display text-sm font-medium text-foreground/75 transition-colors group-hover:text-foreground">
                {p.name}
              </span>
            </a>
          ))}
        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-white/5 pt-8 text-xs text-foreground/45 sm:flex-row">
          <div className="flex items-center gap-2">
            <Logo />
            <span className="font-display text-sm font-semibold text-foreground/70">Theraverse</span>
          </div>
          <p>© {new Date().getFullYear()} Theraverse. {t(T.footer.rights, lang)}</p>
        </div>
      </div>
    </footer>
  );
}
