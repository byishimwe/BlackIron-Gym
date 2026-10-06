import { Link } from 'react-router-dom';
import Button from '../components/Button';
import SectionHeader from '../components/SectionHeader';
import { gymProofStats, corePillars, classesData, featuredTestimonial } from '../data/gymData';

function Home() {
  const featuredClasses = classesData.slice(0, 3);

  return (
    <div className="bg-brand-black text-brand-bone">
      {/* 1. EDITORIAL HERO */}
      <section className="relative min-h-[92vh] flex items-center pt-28 pb-16 overflow-hidden">
        {/* Background photo with high-contrast cinematic overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src="/Hero.jpg"
            alt="Athlete preparing barbell for heavy lift at IMIZI Training Club"
            className="w-full h-full object-cover object-center filter brightness-65 contrast-110"
            fetchPriority="high"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-brand-black/75 to-brand-black/40" />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-black via-brand-black/80 to-transparent" />
        </div>

        <div className="relative z-10 max-w-content mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-3xl">
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2.5 px-3 py-1 bg-brand-black/90 backdrop-blur-md border border-brand-red/50 rounded-sm mb-6">
              <span className="w-2 h-2 rounded-full bg-brand-red animate-pulse" />
              <span className="text-xs sm:text-sm font-display uppercase tracking-widest text-brand-bone font-semibold">
                IMIZI Training Club · Kigali
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-display uppercase tracking-tight leading-[0.92] mb-6 text-left break-words">
              <span className="text-brand-bone block">Strength starts</span>
              <span className="text-brand-red block">at the roots.</span>
            </h1>

            {/* Supporting Copy */}
            <p className="text-base sm:text-lg lg:text-xl text-brand-bone-muted/90 max-w-xl leading-relaxed mb-8">
              Foundations, stability, consistency, and growth. We build resilient strength from the ground up with structured coaching and a room of people who show up every day.
            </p>

            {/* Twin Strategic CTAs */}
            <div className="flex flex-wrap items-center gap-4">
              <Button to="/contact?trial=true" variant="primary" size="lg">
                Start your trial
              </Button>
              <Button to="/classes" variant="secondary" size="lg">
                Explore classes
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* 2. GYM PROOF / KEY FACTS STRIP */}
      <section className="bg-brand-dark border-y border-brand-border py-8">
        <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {gymProofStats.map((stat) => (
              <div
                key={stat.label}
                className="bg-brand-card/40 border border-brand-border/60 p-4 sm:p-5 rounded-sm"
              >
                <div className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-brand-bone leading-none mb-1">
                  {stat.value}
                </div>
                <div className="text-xs font-display uppercase tracking-wider text-brand-red font-semibold mb-0.5">
                  {stat.label}
                </div>
                <div className="text-xs text-brand-muted">
                  {stat.detail}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. CORE EXPERIENCE / WHAT MAKES IMIZI DIFFERENT */}
      <section className="py-20 lg:py-28 max-w-content mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="The Foundation"
          title="Strength Built From The Ground Up"
          description="Beyond the hard gym aesthetic: we focus on foundations, stability, consistency, and genuine physical growth with serious equipment and uncompromising coaching."
        />

        <div className="space-y-16 lg:space-y-24">
          {corePillars.map((pillar, index) => {
            const isReversed = index % 2 !== 0;
            return (
              <div
                key={pillar.id}
                className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center ${
                  isReversed ? 'lg:flex-row-reverse' : ''
                }`}
              >
                {/* Image Module */}
                <div
                  className={`lg:col-span-7 relative ${
                    isReversed ? 'lg:order-2' : 'lg:order-1'
                  }`}
                >
                  <div className="relative aspect-[16/10] overflow-hidden rounded-sm bg-brand-card border border-brand-border group">
                    <img
                      src={pillar.image}
                      alt={pillar.alt}
                      className="w-full h-full object-cover filter contrast-105 transition-transform duration-500 group-hover:scale-102"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-brand-black/60 via-transparent to-transparent pointer-events-none" />
                  </div>
                </div>

                {/* Content Module */}
                <div
                  className={`lg:col-span-5 ${
                    isReversed ? 'lg:order-1' : 'lg:order-2'
                  }`}
                >
                  <span className="text-xs font-mono uppercase tracking-widest text-brand-red font-semibold block mb-2">
                    {pillar.tag}
                  </span>
                  <h3 className="text-3xl sm:text-4xl font-display uppercase tracking-tight text-brand-bone mb-4 leading-tight">
                    {pillar.title}
                  </h3>
                  <p className="text-brand-muted leading-relaxed mb-6">
                    {pillar.description}
                  </p>

                  <ul className="space-y-2.5 mb-8">
                    {pillar.highlights.map((item) => (
                      <li key={item} className="flex items-center gap-3 text-sm text-brand-bone-muted">
                        <span className="w-1.5 h-1.5 rounded-full bg-brand-red shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>

                  <Button to="/about" variant="secondary" size="sm">
                    Read our philosophy &rarr;
                  </Button>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 4. FEATURED CLASSES / COACHING PREVIEW */}
      <section className="bg-brand-dark py-20 lg:py-28 border-y border-brand-border">
        <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <SectionHeader
              eyebrow="Training Programs"
              title="Daily Coach-Led Sessions"
              description="Structured progressions for raw strength, metabolic capacity, and joint longevity."
              className="mb-0 max-w-xl"
            />
            <div className="mt-4 md:mt-0">
              <Button to="/classes" variant="secondary" size="md">
                Full class timetable &rarr;
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featuredClasses.map((item) => (
              <div
                key={item.id}
                className="bg-brand-card border border-brand-border rounded-sm overflow-hidden flex flex-col group hover:border-brand-steel transition-all duration-300"
              >
                <div className="relative aspect-[16/10] overflow-hidden bg-brand-black">
                  <img
                    src={item.image}
                    alt={item.alt}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute top-3 left-3 bg-brand-black/85 backdrop-blur-sm text-brand-bone text-[11px] font-mono px-2 py-0.5 rounded-sm border border-brand-border">
                    {item.duration} · {item.category}
                  </div>
                </div>

                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <span className="text-xs font-mono text-brand-red font-semibold block mb-1">
                      {item.index}
                    </span>
                    <h3 className="text-2xl font-display uppercase tracking-tight text-brand-bone mb-2">
                      {item.name}
                    </h3>
                    <p className="text-sm text-brand-muted leading-relaxed mb-4">
                      {item.description}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-brand-border/60 flex items-center justify-between text-xs text-brand-muted">
                    <span className="font-mono">{item.schedule.split('·')[0]}</span>
                    <Link
                      to="/classes"
                      className="text-brand-red font-display uppercase tracking-wider font-semibold hover:underline"
                    >
                      Details &rarr;
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. EDITORIAL SOCIAL PROOF & CONVERSION CTA */}
      <section className="py-20 lg:py-28 max-w-content mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center bg-brand-card border border-brand-border p-8 sm:p-12 lg:p-16 rounded-sm relative overflow-hidden">
          <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-brand-red/10 rounded-full blur-3xl pointer-events-none" />

          <div className="lg:col-span-7">
            <span className="text-xs font-display uppercase tracking-widest text-brand-red font-semibold block mb-4">
              Member Perspective
            </span>
            <blockquote className="text-xl sm:text-2xl lg:text-3xl font-display uppercase tracking-tight text-brand-bone leading-snug mb-6">
              &ldquo;{featuredTestimonial.quote}&rdquo;
            </blockquote>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-brand-steel border border-brand-border flex items-center justify-center font-display font-bold text-brand-bone text-sm">
                CN
              </div>
              <div>
                <div className="font-semibold text-brand-bone text-sm">
                  {featuredTestimonial.author}
                </div>
                <div className="text-xs text-brand-muted">
                  {featuredTestimonial.role} · {featuredTestimonial.city}
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 bg-brand-dark p-6 sm:p-8 rounded-sm border border-brand-border">
            <h3 className="text-2xl font-display uppercase tracking-tight text-brand-bone mb-2">
              Ready To Put In The Work?
            </h3>
            <p className="text-sm text-brand-muted mb-6 leading-relaxed">
              Book a complimentary first session. Meet our coaches, test the floor, and see if our training standard matches yours.
            </p>
            <div className="space-y-3">
              <Button to="/contact?trial=true" variant="primary" size="lg" className="w-full justify-center">
                Claim your free trial
              </Button>
              <div className="text-center text-[11px] font-mono text-brand-muted">
                No credit card required · Instant confirmation
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
