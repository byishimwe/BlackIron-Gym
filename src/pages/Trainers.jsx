import PageHero from '../components/PageHero';
import SectionHeader from '../components/SectionHeader';
import Button from '../components/Button';
import { trainersData } from '../data/gymData';

function Trainers() {
  return (
    <div className="bg-brand-black text-brand-bone">
      {/* 1. PAGE HERO */}
      <PageHero
        eyebrow="The Coaching Standard"
        title="Coaching That Meets You Where You Are"
        description="Our coaching staff is committed to movement mechanics, progressive load management, and athlete longevity. No ego, no shouting, just honest attention."
      />

      {/* 2. COACH PROFILES */}
      <section className="py-20 max-w-content mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="The Floor Staff"
          title="Meet The BlackIron Coaches"
          description="Every coach at BlackIron holds active movement credentials and leads daily floor sessions."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {trainersData.map((trainer) => (
            <div
              key={trainer.id}
              className="bg-brand-card border border-brand-border rounded-sm overflow-hidden flex flex-col group hover:border-brand-steel transition-all duration-300"
            >
              {/* Coach Portrait */}
              <div className="relative aspect-[4/3] bg-brand-dark overflow-hidden">
                <img
                  src={trainer.image}
                  alt={`Portrait of ${trainer.name}, ${trainer.role}`}
                  className="w-full h-full object-cover filter contrast-105 transition-transform duration-500 group-hover:scale-103"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-card via-transparent to-transparent pointer-events-none" />
                <div className="absolute top-4 left-4 bg-brand-black/90 backdrop-blur-sm text-brand-bone text-[11px] font-mono px-2.5 py-1 rounded-sm border border-brand-border">
                  {trainer.credentials}
                </div>
              </div>

              {/* Coach Details */}
              <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
                <div>
                  <div className="mb-4">
                    <span className="text-xs font-mono uppercase tracking-widest text-brand-red font-semibold block mb-1">
                      {trainer.role}
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-display uppercase tracking-tight text-brand-bone">
                      {trainer.name}
                    </h3>
                  </div>

                  <p className="text-brand-muted text-sm sm:text-base leading-relaxed mb-6">
                    {trainer.bio}
                  </p>

                  {/* Philosophy Quote */}
                  <div className="border-l-2 border-brand-red pl-4 py-1 mb-6 bg-brand-dark/50 p-3 rounded-r-sm">
                    <span className="text-[11px] font-mono uppercase tracking-wider text-brand-muted block mb-1">
                      Coaching Philosophy:
                    </span>
                    <p className="text-xs sm:text-sm text-brand-bone-muted italic">
                      &ldquo;{trainer.philosophy}&rdquo;
                    </p>
                  </div>

                  {/* Specialties */}
                  <div className="mb-6">
                    <span className="text-[11px] font-mono uppercase tracking-wider text-brand-muted block mb-2">
                      Core Specialties:
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {trainer.specialties.map((spec) => (
                        <span
                          key={spec}
                          className="text-xs bg-brand-dark border border-brand-border px-2.5 py-1 rounded-sm text-brand-bone-muted"
                        >
                          {spec}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-brand-border/60 flex items-center justify-between">
                  <span className="text-xs font-mono text-brand-muted">
                    Floor Availability: Daily
                  </span>
                  <Button
                    to={`/contact?coach=${trainer.id}&interest=pt`}
                    variant="ghost"
                    size="sm"
                    className="text-xs text-brand-red hover:text-white"
                  >
                    Inquire about 1-on-1 &rarr;
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. PERSONAL TRAINING CALLOUT */}
      <section className="bg-brand-dark py-20 border-t border-brand-border">
        <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-brand-card border border-brand-border p-8 sm:p-12 rounded-sm grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-3">
              <span className="text-xs font-display uppercase tracking-widest text-brand-red font-semibold">
                1-on-1 Development
              </span>
              <h2 className="text-3xl sm:text-4xl font-display uppercase tracking-tight text-brand-bone">
                Want Help Choosing The Right Coach?
              </h2>
              <p className="text-brand-muted text-base leading-relaxed max-w-2xl">
                Tell us about your current training routine, injury history, and schedule. We will match you with the coach whose technical background fits your exact goals.
              </p>
            </div>

            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3">
              <Button
                to="/contact?interest=pt"
                variant="primary"
                size="lg"
                className="w-full justify-center"
              >
                Book a consultation
              </Button>
              <Button
                to="/pricing"
                variant="secondary"
                size="md"
                className="w-full justify-center"
              >
                View membership rates
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Trainers;
