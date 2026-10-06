import PageHero from '../components/PageHero';
import SectionHeader from '../components/SectionHeader';
import Button from '../components/Button';

const floorSpecs = [
  {
    title: 'Free Weight Zone',
    description: 'Eight heavy-duty squat racks with integrated pull-up bars, competition barbells, and dumbbell pairs ranging from 2.5kg to 50kg.',
    spec: 'Olympic Barbells & Bumper Plates',
  },
  {
    title: 'Conditioning Turf',
    description: 'A 25-meter sprint turf lane equipped with custom steel drag sleds, high-handle prowlers, and farmer-carry implements.',
    spec: '25m Sprint & Sled Turf',
  },
  {
    title: 'Specialty Conditioning',
    description: 'Concept2 RowErgs, SkiErgs, and heavy Rogue Echo bikes for high-intensity aerobic and glycolytic interval blocks.',
    spec: 'Cardio Ergs & Sleds',
  },
  {
    title: 'Recovery & Mobility Bay',
    description: 'Dedicated soft-floor area with resistance bands, foam rollers, massage guns, and mobility dowels for warm-ups and cool-downs.',
    spec: 'Dedicated Recovery Zone',
  },
];

const standards = [
  {
    number: '01',
    title: 'Mechanics Precede Intensity',
    detail: 'We do not add weight to faulty movement patterns. Our coaches ensure clean mechanics before loading any barbell or movement.',
  },
  {
    number: '02',
    title: 'Respect The Room',
    detail: 'Every member strips their bar, wipes their bench, and returns dumbbells to their proper rack. Care for the space reflects care for your training.',
  },
  {
    number: '03',
    title: 'Leave Ego Outside',
    detail: 'There are no spectators here. Whether you are deadlifting 50kg or 220kg, honest effort and disciplined consistency command equal respect.',
  },
  {
    number: '04',
    title: 'Shared Accountability',
    detail: 'When training gets hard, this community shows up. We celebrate personal milestones, support each other through tough sets, and keep each other accountable.',
  },
];

function About() {
  return (
    <div className="bg-brand-black text-brand-bone">
      {/* Editorial Page Hero */}
      <PageHero
        eyebrow="Who We Are"
        title="Strength Starts At The Roots"
        description="IMIZI was founded in Kigali on an honest principle: lasting physical development requires foundations, stability, consistency, and strength built from the ground up."
      />

      {/* 1. EDITORIAL STORY / PHILOSOPHY */}
      <section className="py-20 max-w-content mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <span className="text-xs font-display uppercase tracking-widest text-brand-red font-semibold">
              The Philosophy
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display uppercase tracking-tight text-brand-bone leading-tight">
              Beyond Hard Aesthetics.
              <br />
              Built From The Roots Up.
            </h2>
            <div className="space-y-4 text-brand-muted text-base sm:text-lg leading-relaxed">
              <p>
                Too many fitness spaces trade on pure hype or aggressive aesthetics without substance. The equipment is picked for show, and coaching is reduced to motivational noise.
              </p>
              <p>
                IMIZI was created to give physical training an enduring foundation. In Kinyarwanda, <em>imizi</em> means roots—and strength starts at the roots. We believe that long-term strength, joint durability, and cardiovascular capacity come from disciplined execution of fundamental movements over months and years.
              </p>
              <p>
                Whether you have never touched a barbell or you have been training for over a decade, you will receive real coaching, clear progressions, and an atmosphere that nurtures genuine growth.
              </p>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="relative aspect-[4/3] rounded-sm overflow-hidden bg-brand-card border border-brand-border">
              <img
                src="/wcu1.jpg"
                alt="IMIZI training floor with barbells and racks"
                className="w-full h-full object-cover filter contrast-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-black/80 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-6 left-6 right-6">
                <span className="text-xs font-mono uppercase text-brand-red font-semibold block">Kigali, Rwanda</span>
                <p className="font-display uppercase text-lg text-brand-bone">Foundations & athletic longevity</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. THE FLOOR / TRAINING ENVIRONMENT */}
      <section className="bg-brand-dark py-20 border-y border-brand-border">
        <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="The Facility"
            title="Every Square Meter Has A Purpose"
            description="Our 850m² floor is organized to allow smooth transitions between heavy barbell work, functional capacity, and active recovery."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {floorSpecs.map((item) => (
              <div
                key={item.title}
                className="bg-brand-card p-6 sm:p-8 rounded-sm border border-brand-border flex flex-col justify-between"
              >
                <div>
                  <span className="text-xs font-mono uppercase tracking-wider text-brand-red font-semibold block mb-2">
                    {item.spec}
                  </span>
                  <h3 className="text-2xl font-display uppercase tracking-tight text-brand-bone mb-3">
                    {item.title}
                  </h3>
                  <p className="text-brand-muted text-sm sm:text-base leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Photo Strip */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="aspect-[4/3] rounded-sm overflow-hidden border border-brand-border">
              <img
                src="/wcu2.jpg"
                alt="Gym equipment detail"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
            </div>
            <div className="aspect-[4/3] rounded-sm overflow-hidden border border-brand-border">
              <img
                src="/Intro1.webp"
                alt="Barbell training setup"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
            </div>
            <div className="aspect-[4/3] rounded-sm overflow-hidden border border-brand-border">
              <img
                src="/YO2.jpg"
                alt="Functional training floor"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 3. CULTURE & STANDARDS */}
      <section className="py-20 max-w-content mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Our Standards"
          title="How We Carry Ourselves"
          description="Culture isn't what is printed on the wall; it is what happens on the floor when nobody is watching."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {standards.map((std) => (
            <div
              key={std.number}
              className="bg-brand-card p-6 rounded-sm border border-brand-border flex flex-col justify-between"
            >
              <div>
                <span className="font-mono text-2xl font-bold text-brand-red block mb-4">
                  {std.number}
                </span>
                <h3 className="text-xl font-display uppercase tracking-tight text-brand-bone mb-3">
                  {std.title}
                </h3>
                <p className="text-sm text-brand-muted leading-relaxed">
                  {std.detail}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. CONCISE CTA */}
      <section className="bg-brand-dark py-16 border-t border-brand-border">
        <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-2xl mx-auto space-y-6">
            <h2 className="text-3xl sm:text-4xl font-display uppercase tracking-tight text-brand-bone">
              Come Train With Us
            </h2>
            <p className="text-brand-muted text-base leading-relaxed">
              Step onto the training floor and see the standard for yourself. Your first session is guided by a coach.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button to="/contact?trial=true" variant="primary" size="lg">
                Book a free trial
              </Button>
              <Button to="/classes" variant="secondary" size="lg">
                View class options
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
