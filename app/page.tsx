"use client";

import { siteConfig } from "@/content/site-config";
import assetManifest from "@/content/asset-manifest.json";
import { resolveImage } from "@/lib/image-fallback";
import {
  FadeUp,
  TextReveal,
  MagneticButton,
  NumberCounter,
  StaggerChildren,
  CardTiltLayer,
  ScrollHint,
  ImageRevealMask,
  Marquee,
} from "@/components/motion";

export default function HomePage() {
  const heroImage = resolveImage({
    src: (assetManifest as any)?.images?.["section-hero"] || "",
    industry: "coffee",
    keyword: "specialty coffee beans roasting",
    brandColor: siteConfig.brand.primary,
  });

  return (
    <main>
      {/* HERO — HO3 bottom-anchored */}
      <section className="relative min-h-screen flex items-end pb-16 md:pb-24 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Specialty coffee roasting"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#2D1810]/80 via-[#2D1810]/30 to-transparent" />
        </div>
        <div className="relative z-10 px-6 md:px-12 lg:px-20 max-w-4xl">
          <p className="font-body text-sm tracking-widest uppercase text-[#C4794A] mb-4">
            {siteConfig.hero.eyebrow}
          </p>
          <TextReveal as="h1" className="font-display text-4xl md:text-6xl lg:text-7xl font-medium text-[#FDF6F0] leading-[1.1] mb-6">
            {siteConfig.hero.h1}
          </TextReveal>
          <FadeUp delay={0.3}>
            <p className="text-lg md:text-xl text-[#FDF6F0]/80 max-w-xl mb-8 leading-relaxed">
              {siteConfig.hero.subtitle}
            </p>
          </FadeUp>
          <FadeUp delay={0.5}>
            <div className="flex flex-wrap gap-4">
              <MagneticButton as="a" href={siteConfig.hero.cta.href} className="inline-block bg-primary text-[#FDF6F0] px-8 py-4 rounded-full font-body font-semibold text-sm tracking-wide hover:bg-primary/90 transition-colors">
                {siteConfig.hero.cta.label}
              </MagneticButton>
              <a href={siteConfig.hero.secondaryCta.href} className="inline-block border border-[#FDF6F0]/30 text-[#FDF6F0] px-8 py-4 rounded-full font-body font-semibold text-sm tracking-wide hover:bg-[#FDF6F0]/10 transition-colors">
                {siteConfig.hero.secondaryCta.label}
              </a>
            </div>
          </FadeUp>
        </div>
        <ScrollHint />
      </section>

      {/* SERVICES — SV3 3-column cards */}
      <section id="services" className="section-pad px-6 md:px-12 lg:px-20 bg-bg">
        <FadeUp>
          <p className="text-sm tracking-widest uppercase text-primary mb-3">What We Offer</p>
          <h2 className="font-display text-3xl md:text-5xl font-medium text-dark mb-12">Our Beans &amp; Services</h2>
        </FadeUp>
        <StaggerChildren staggerDelay={0.08} className="grid md:grid-cols-3 gap-8">
          {siteConfig.services.map((service, i) => (
            <CardTiltLayer key={service.slug}>
              <div className="bg-surface rounded-2xl overflow-hidden border border-dark/5 h-full">
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={resolveImage({
                      src: (assetManifest as any)?.images?.[`service-${service.slug}`] || "",
                      industry: "coffee",
                      keyword: service.name,
                      brandColor: siteConfig.brand.primary,
                    })}
                    alt={service.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-display text-xl font-semibold text-dark mb-2">{service.name}</h3>
                  <p className="text-muted text-sm leading-relaxed">{service.description}</p>
                </div>
              </div>
            </CardTiltLayer>
          ))}
        </StaggerChildren>
      </section>

      {/* ABOUT */}
      <section id="about" className="section-pad px-6 md:px-12 lg:px-20 bg-surface">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <FadeUp>
            <ImageRevealMask
              src={resolveImage({
                src: (assetManifest as any)?.images?.["section-about"] || "",
                industry: "coffee",
                keyword: "coffee roaster at work",
                brandColor: siteConfig.brand.primary,
              })}
              alt="Roasting process"
              aspectClass="aspect-[4/5]"
            />
          </FadeUp>
          <div>
            <FadeUp>
              <p className="text-sm tracking-widest uppercase text-primary mb-3">{siteConfig.about.heading}</p>
              <h2 className="font-display text-3xl md:text-4xl font-medium text-dark mb-6">From farm to cup, with care.</h2>
            </FadeUp>
            <FadeUp delay={0.15}>
              <p className="text-muted leading-relaxed mb-8">{siteConfig.about.body}</p>
            </FadeUp>
            <StaggerChildren staggerDelay={0.1} className="space-y-4">
              {siteConfig.about.values.map((v) => (
                <div key={v.title} className="flex gap-4">
                  <span className="w-2 h-2 mt-2 rounded-full bg-primary shrink-0" />
                  <div>
                    <p className="font-display font-semibold text-dark">{v.title}</p>
                    <p className="text-muted text-sm">{v.description}</p>
                  </div>
                </div>
              ))}
            </StaggerChildren>
          </div>
        </div>
      </section>

      {/* MARQUEE divider */}
      <div className="py-6 bg-[#2D1810]">
        <Marquee speed={40} className="text-[#FDF6F0]/60 font-display text-lg tracking-wider">
          Single-Origin &nbsp;·&nbsp; Small-Batch &nbsp;·&nbsp; Direct Trade &nbsp;·&nbsp; Roasted Fresh &nbsp;·&nbsp; Austin, TX &nbsp;·&nbsp;
        </Marquee>
      </div>

      {/* PROCESS */}
      <section id="process" className="section-pad px-6 md:px-12 lg:px-20 bg-bg">
        <FadeUp>
          <p className="text-sm tracking-widest uppercase text-primary mb-3">How It Works</p>
          <h2 className="font-display text-3xl md:text-5xl font-medium text-dark mb-12">Our Process</h2>
        </FadeUp>
        <StaggerChildren staggerDelay={0.1} className="grid md:grid-cols-4 gap-8">
          {siteConfig.process.map((step) => (
            <div key={step.step} className="text-center md:text-left">
              <span className="inline-block font-display text-5xl font-bold text-primary/20 mb-2">
                0{step.step}
              </span>
              <h3 className="font-display text-xl font-semibold text-dark mb-2">{step.title}</h3>
              <p className="text-muted text-sm leading-relaxed">{step.description}</p>
            </div>
          ))}
        </StaggerChildren>
      </section>

      {/* STATS */}
      <section className="section-pad px-6 md:px-12 lg:px-20 bg-[#2D1810]">
        <div className="max-w-4xl mx-auto grid grid-cols-3 gap-8 text-center">
          {siteConfig.stats.map((stat) => (
            <div key={stat.label}>
              <p className="font-display text-4xl md:text-5xl font-bold text-[#FDF6F0]">
                <NumberCounter to={stat.value} />{stat.suffix}
              </p>
              <p className="text-[#FDF6F0]/60 text-sm mt-2">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="section-pad px-6 md:px-12 lg:px-20 bg-surface relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img
            src={resolveImage({
              src: (assetManifest as any)?.images?.["section-cta"] || "",
              industry: "coffee",
              keyword: "warm coffee shop interior",
              brandColor: siteConfig.brand.primary,
            })}
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative z-10 max-w-2xl mx-auto text-center">
          <FadeUp>
            <h2 className="font-display text-3xl md:text-5xl font-medium text-dark mb-6">{siteConfig.cta.heading}</h2>
          </FadeUp>
          <FadeUp delay={0.15}>
            <p className="text-muted text-lg leading-relaxed mb-8">{siteConfig.cta.body}</p>
          </FadeUp>
          <FadeUp delay={0.3}>
            <MagneticButton as="a" href={siteConfig.cta.href} className="inline-block bg-primary text-[#FDF6F0] px-10 py-4 rounded-full font-body font-semibold tracking-wide hover:bg-primary/90 transition-colors">
              {siteConfig.cta.label}
            </MagneticButton>
          </FadeUp>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="section-pad px-6 md:px-12 lg:px-20 bg-bg">
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12">
          <div>
            <FadeUp>
              <p className="text-sm tracking-widest uppercase text-primary mb-3">Say Hello</p>
              <h2 className="font-display text-3xl md:text-4xl font-medium text-dark mb-6">{siteConfig.contact.heading}</h2>
            </FadeUp>
            <FadeUp delay={0.15}>
              <div className="space-y-4 text-muted">
                <p>{siteConfig.contact.address}</p>
                <p><a href={`mailto:${siteConfig.contact.email}`} className="text-primary hover:underline">{siteConfig.contact.email}</a></p>
                <p><a href={`tel:${siteConfig.contact.phone}`} className="hover:underline">{siteConfig.contact.phone}</a></p>
                <p className="text-sm italic">{siteConfig.contact.hours}</p>
              </div>
            </FadeUp>
          </div>
          <FadeUp delay={0.2}>
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <input type="text" placeholder="Your name" className="w-full px-4 py-3 rounded-lg border border-dark/10 bg-surface text-dark placeholder:text-muted/60 focus:outline-none focus:ring-2 focus:ring-primary/30" />
              <input type="email" placeholder="Email address" className="w-full px-4 py-3 rounded-lg border border-dark/10 bg-surface text-dark placeholder:text-muted/60 focus:outline-none focus:ring-2 focus:ring-primary/30" />
              <textarea rows={4} placeholder="Tell us about your needs..." className="w-full px-4 py-3 rounded-lg border border-dark/10 bg-surface text-dark placeholder:text-muted/60 focus:outline-none focus:ring-2 focus:ring-primary/30 resize-none" />
              <MagneticButton as="button" className="w-full bg-primary text-[#FDF6F0] py-4 rounded-full font-body font-semibold tracking-wide hover:bg-primary/90 transition-colors">
                Send Message
              </MagneticButton>
            </form>
          </FadeUp>
        </div>
      </section>
    </main>
  );
}
