import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import {
  content,
  contactDetails,
  sources,
  type Lang,
} from "@/content/site";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "D&P Automations — AI that works for your business" },
      {
        name: "description",
        content:
          "D&P Automations helps businesses in Estonia, the EU and the US use AI for calls, SMS, email and custom software.",
      },
      {
        property: "og:title",
        content: "D&P Automations — AI that works for your business",
      },
      {
        property: "og:description",
        content:
          "Practical solutions backed by human expertise, driven by innovative software.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function PhoneIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.25" className="h-24 w-24 md:h-28 md:w-28" strokeLinecap="round" strokeLinejoin="round">
      <path d="M6.5 3h3l1.5 4-2 1.5a12 12 0 0 0 6.5 6.5L17 13l4 1.5v3a2 2 0 0 1-2.2 2A16.5 16.5 0 0 1 4 5.2 2 2 0 0 1 6 3Z" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.25" className="h-24 w-24 md:h-28 md:w-28" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2.5" y="5" width="19" height="14" rx="2" />
      <path d="m3 7 9 6 9-6" />
    </svg>
  );
}

function GlobeIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.25" className="h-24 w-24 md:h-28 md:w-28" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18M12 3c2.5 2.6 3.8 5.7 3.8 9S14.5 18.4 12 21c-2.5-2.6-3.8-5.7-3.8-9S9.5 5.6 12 3Z" />
    </svg>
  );
}

function GearIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.25" className="h-24 w-24 md:h-28 md:w-28" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="3.2" />
      <path d="M12 2.8v2.6M12 18.6v2.6M21.2 12h-2.6M5.4 12H2.8M18.5 5.5l-1.8 1.8M7.3 16.7l-1.8 1.8M18.5 18.5l-1.8-1.8M7.3 7.3 5.5 5.5" />
    </svg>
  );
}

const certificationLogos = [
  { name: "Copenhagen Business School", image: "/cbs.PNG" },
  { name: "Tartu Ülikool", image: "/tu.PNG" },
  { name: "Harvard University", image: "/harvard.jpg" },
  { name: "Google", image: "/google.WEBP" },
  { name: "Anthropic", image: "/anthropic.PNG" },
  { name: "IBM", image: "/ibm.png" },
  { name: "GitHub", image: "/github.PNG" },
];
function Circle({ children, label, details }: { children: React.ReactNode; label: string; details: React.ReactNode }) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="ghost" className="group mx-auto h-auto w-full flex-col gap-5 rounded-none bg-transparent px-2 py-0 text-foreground shadow-none hover:bg-transparent hover:text-foreground">
          <span className="flex h-32 w-32 items-center justify-center rounded-full border border-border text-navy transition-colors group-hover:border-primary group-hover:bg-secondary group-focus-visible:border-primary md:h-40 md:w-40">
            {children}
          </span>
          <span className="whitespace-normal text-center text-base font-medium md:text-lg">{label}</span>
        </Button>
      </DialogTrigger>
      <DialogContent className="max-h-[85vh] overflow-y-auto rounded-sm sm:rounded-sm">
        <DialogHeader><DialogTitle className="pr-8 text-left text-2xl leading-tight">{label}</DialogTitle></DialogHeader>
        <div className="space-y-6 leading-relaxed text-muted-foreground">{details}</div>
      </DialogContent>
    </Dialog>
  );
}

function Index() {
  const [lang, setLang] = useState<Lang>("en");
  const t = content[lang];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="sticky top-0 z-50 border-b border-border bg-background/90 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
          <a href="#top" className="flex items-center gap-3 text-sm font-semibold tracking-[0.18em] uppercase">
            <img src="/logo.png" alt="D&P Automations" className="h-10 w-10 rounded-sm object-cover" />
            <span>D&amp;P Automations</span>
          </a>
          <nav className="hidden items-center gap-10 text-sm text-muted-foreground md:flex">
            <a href="#services" className="transition-colors hover:text-foreground">{t.nav.services}</a>
            <a href="#about" className="transition-colors hover:text-foreground">{t.nav.about}</a>
            <a href="#contact" className="transition-colors hover:text-foreground">{t.nav.contact}</a>
          </nav>
          <div className="flex items-center gap-1 text-sm">
            <Button
              variant="ghost"
              type="button"
              onClick={() => setLang("et")}
              className={`h-auto px-2 py-1 transition-colors ${lang === "et" ? "font-semibold text-foreground" : "text-muted-foreground hover:text-foreground"}`}
            >
              EST
            </Button>
            <span className="text-border">/</span>
            <Button
              variant="ghost"
              type="button"
              onClick={() => setLang("en")}
              className={`h-auto px-2 py-1 transition-colors ${lang === "en" ? "font-semibold text-foreground" : "text-muted-foreground hover:text-foreground"}`}
            >
              ENG
            </Button>
          </div>
        </div>
      </header>

      <main id="top">
        {/* Hero */}
        <section className="mx-auto max-w-4xl px-6 pt-24 pb-24 text-center md:pt-36 md:pb-32">
          <p className="fade-up text-sm leading-relaxed text-muted-foreground md:text-base">
            {t.hero.tagline}
          </p>
          <h1 className="fade-up mt-8 text-4xl leading-[1.08] font-semibold tracking-tight text-balance md:text-6xl">
            {t.hero.title}
          </h1>
          <p className="fade-up mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-muted-foreground md:text-xl">
            {t.hero.subtitle}
          </p>
          <div className="fade-up mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="#services"
              className="w-full rounded-sm bg-primary px-10 py-4 text-base font-medium text-primary-foreground transition-opacity hover:opacity-90 sm:w-auto"
            >
              {t.hero.primary}
            </a>
            <a
              href="#contact"
              className="w-full rounded-sm border border-border px-7 py-3 text-sm font-medium transition-colors hover:bg-secondary sm:w-auto"
            >
              {t.hero.secondary}
            </a>
          </div>
          <p className="mt-20 text-xs tracking-[0.3em] text-muted-foreground">{t.hero.est}</p>
          <p className="mt-4 text-sm text-muted-foreground">{t.hero.scroll}</p>
        </section>

        {/* Services */}
        <section id="services" className="border-t border-border">
          <div className="mx-auto max-w-6xl px-6 py-24 md:py-32">
            <h2 className="text-3xl font-semibold tracking-tight md:text-5xl">
              {t.services.heading}
            </h2>

            <div className="mt-16 grid grid-cols-1 gap-14 sm:grid-cols-2 lg:grid-cols-4">
              <Circle label={t.services.phone.title} details={
                <>
                  {[t.services.phone.caller, t.services.phone.sms].map((item) => (
                    <div key={item.title}>
                      <h4 className="font-semibold text-foreground">{item.title}</h4>
                      <p className="mt-2">{item.body}</p>
                      <ul className="mt-3 space-y-1 text-sm">{item.points.map((point) => <li key={point}>— {point}</li>)}</ul>
                    </div>
                  ))}
                </>
              }><PhoneIcon /></Circle>
              <Circle label={t.services.email.title} details={<p>{t.services.email.body}</p>}><MailIcon /></Circle>
              <Circle label={t.services.website.title} details={<p>{t.services.website.body}</p>}><GlobeIcon /></Circle>
              <Circle label={t.services.custom.title} details={<p>{t.services.custom.body}</p>}><GearIcon /></Circle>
            </div>

            <div className="mt-24 space-y-20">
              <div>
                <h3 className="text-2xl font-semibold tracking-tight md:text-3xl">
                  {t.services.phone.title}
                </h3>
                <div className="mt-10 grid gap-12 md:grid-cols-2">
                  {[t.services.phone.caller, t.services.phone.sms].map((item) => (
                    <div key={item.title}>
                      <h4 className="text-lg font-medium">{item.title}</h4>
                      <p className="mt-3 max-w-md leading-relaxed text-muted-foreground">
                        {item.body}
                      </p>
                      <ul className="mt-6 space-y-2 text-sm text-muted-foreground">
                        {item.points.map((p) => (
                          <li key={p} className="flex items-start gap-3">
                            <span className="mt-2.5 h-px w-4 shrink-0 bg-border" />
                            {p}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>

              {[t.services.email, t.services.website, t.services.custom].map((s) => (
                <div key={s.title} className="border-t border-border pt-12">
                  <h3 className="text-2xl font-semibold tracking-tight md:text-3xl">{s.title}</h3>
                  <p className="mt-4 max-w-2xl leading-relaxed text-muted-foreground">{s.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Certifications */}
        <section className="border-t border-border">
          <div className="mx-auto max-w-6xl px-6 py-20 md:py-24">
            <h2 className="text-center text-sm tracking-[0.22em] text-muted-foreground uppercase">
              {t.certs.heading}
            </h2>
            <div className="mt-12 flex flex-wrap items-center justify-center gap-x-12 gap-y-6">
              {certificationLogos.map((c) => (
                <div key={c.name} className="flex h-16 w-28 items-center justify-center md:w-32">
                  {c.image ? <img src={c.image} alt={c.name} className="max-h-14 max-w-full object-contain" /> : <span className="text-base font-medium">{c.name}</span>}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* About */}
        <section id="about" className="border-t border-border">
          <div className="mx-auto max-w-3xl px-6 py-24 md:py-32">
            <h2 className="text-3xl font-semibold tracking-tight md:text-5xl">{t.about.heading}</h2>
            <div className="mt-10 space-y-6 text-lg leading-relaxed text-muted-foreground">
              {t.about.paragraphs.map((p) => (
                <p key={p.slice(0, 24)}>{p}</p>
              ))}
            </div>
            <div className="mt-16 border-t border-border pt-8">
              <p className="text-xs tracking-[0.2em] text-muted-foreground uppercase">
                {t.about.sourcesLabel}
              </p>
              <ul className="mt-4 space-y-3 text-xs leading-relaxed text-muted-foreground">
                {sources.map((s) => (
                  <li key={s.text}>
                    {s.text}
                    {s.url ? (
                      <>
                        {" "}
                        <a href={s.url} target="_blank" rel="noopener noreferrer" className="underline underline-offset-2">
                          {s.url}
                        </a>
                      </>
                    ) : null}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="border-t border-border">
          <div className="mx-auto max-w-3xl px-6 py-24 md:py-32">
            <h2 className="text-3xl font-semibold tracking-tight md:text-5xl">{t.contact.heading}</h2>
            <div className="mt-10 space-y-8">
              <div>
                <p className="text-lg font-medium">{contactDetails.name}</p>
                <a href={contactDetails.phoneHref} className="text-lg text-muted-foreground underline-offset-4 hover:underline">
                  {contactDetails.phone}
                </a>
              </div>
              <div>
                <p className="text-xs tracking-[0.2em] text-muted-foreground uppercase">
                  {t.contact.personal}
                </p>
                <a href={`mailto:${contactDetails.personalEmail}`} className="text-lg underline-offset-4 hover:underline">
                  {contactDetails.personalEmail}
                </a>
              </div>
              <div>
                <p className="text-xs tracking-[0.2em] text-muted-foreground uppercase">
                  {t.contact.general}
                </p>
                <a href={`mailto:${contactDetails.generalEmail}`} className="text-lg underline-offset-4 hover:underline">
                  {contactDetails.generalEmail}
                </a>
              </div>
            </div>
            <a
              href={contactDetails.booking}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-12 inline-block rounded-sm bg-primary px-10 py-4 text-base font-medium text-primary-foreground transition-opacity hover:opacity-90"
            >
              {t.contact.book}
            </a>
          </div>
        </section>
      </main>

      <footer className="bg-navy text-primary-foreground">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <div className="flex flex-col justify-between gap-10 md:flex-row">
            <p className="text-sm font-semibold tracking-[0.18em] uppercase">D&amp;P Automations</p>
            <nav className="flex flex-col gap-3 text-sm opacity-80">
              <a href="#services" className="hover:opacity-100">{t.nav.services}</a>
              <a href="#about" className="hover:opacity-100">{t.nav.about}</a>
              <a href="#contact" className="hover:opacity-100">{t.nav.contact}</a>
            </nav>
            <div className="flex flex-col gap-3 text-sm opacity-80">
              <a href={`mailto:${contactDetails.generalEmail}`}>{contactDetails.generalEmail}</a>
              <a href={contactDetails.phoneHref}>{contactDetails.phone}</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
