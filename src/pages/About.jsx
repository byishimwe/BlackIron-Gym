import PageHero from '../components/PageHero';
import SectionHeader from '../components/SectionHeader';
import Button from '../components/Button';

const floorSpecs = [
  {
    title: 'Free Weight Zone',
    description: 'Eight squat racks with integrated pull-up stations, calibrated plates, and dumbbells ranging from 2.5kg to 50kg.',
    spec: 'Olympic Barbells & Racks',
  },
  {
    title: 'Conditioning Turf',
    description: 'A 25-meter sprint turf lane equipped with custom steel drag sleds, high-handle prowlers, and heavy farmer-carry handles.',
    spec: '25m Sled & Sprint Turf',
  },
  {
    title: 'Specialty Conditioning',
    description: 'Concept2 RowErgs, SkiErgs, and heavy Rogue Echo bikes for repeatable aerobic and glycolytic interval blocks.',
    spec: 'Ergometers & Prowlers',
  },
  {
    title: 'Recovery & Mobility Bay',
    description: 'Dedicated soft-floor area with resistance bands, foam rollers, and mobility dowels for structured movement prep.',
    spec: 'Mobility & Recovery Bay',
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
    detail: 'When training gets hard, this community shows up. We celebrate personal milestones, support each other through tough sets, and hold standards.',
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
            <span className="text-xs font-sans uppercase tracking-widest text-brand-red font-semibold">
              The Philosophy
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display uppercase tracking-tight text-brand-bone leading-tight">
              Built On Foundations.
              <br />
              Sustained By Routine.
            </h2>
            <div className="space-y-4 text-brand-body text-base sm:text-lg leading-relaxed">
              <p>
                In Kinyarwanda, <em>imizi</em> means roots. We believe physical resilience cannot be hurried with gimmicks or noisy workouts. True athletic capacity is grounded in the deliberate execution of fundamental movements practiced week after week.
              </p>
              <p>
                IMIZI provides the environment and coaching required for that development: competition-grade equipment, experienced floor guidance, and an ego-free room where members focus on honest physical output.
              </p>
              <p>
                Whether you are stepping into a weight room for the first time or fine-tuning your strength after years of lifting, you will find structure, attention, and a standard that holds you accountable.
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
                <span className="text-xs font-sans uppercase tracking-wider text-brand-red font-semibold block">Kimihurura · Kigali</span>
                <p className="font-display uppercase text-lg text-brand-bone">Foundations & athletic longevity</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. THE FLOOR / TRAINING ENVIRONMENT (STRUCTURAL 2x2 GRID) */}
      <section className="bg-brand-dark py-20 border-y border-brand-border">
        <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="The Facility"
            title="Every Square Meter Has A Purpose"
            description="Our 850m² training floor is engineered for fluid transitions between heavy barbell work, turf intervals, and active recovery."
          />

          {/* De-boxed Structural Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 py-8 mb-12 border-y border-brand-border/60">
            {floorSpecs.map((item, i) => (
              <div
                key={item.title}
                className={`space-y-2 ${i >= 2 ? 'md:pt-4' : ''}`}
              >
                <span className="text-xs font-sans uppercase tracking-wider text-brand-red font-semibold block">
                  {item.spec}
                </span>
                <h3 className="text-2xl font-display uppercase tracking-tight text-brand-bone">
                  {item.title}
                </h3>
                <p className="text-brand-body text-sm sm:text-base leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

          {/* Photo Strip (Pruned to 2 Strong Images) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="aspect-[16/10] sm:aspect-[4/3] rounded-sm overflow-hidden border border-brand-border">
              <img
                src="/wcu2.jpg"
                alt="IMIZI gym equipment detail"
                className="w-full h-full object-cover hover:scale-103 transition-transform duration-500"
                loading="lazy"
              />
            </div>
            <div className="aspect-[16/10] sm:aspect-[4/3] rounded-sm overflow-hidden border border-brand-border">
              <img
                src="/Intro1.webp"
                alt="Barbell training setup on floor"
                className="w-full h-full object-cover hover:scale-103 transition-transform duration-500"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 3. CULTURE & STANDARDS (EDITORIAL RULE-SEPARATED ROWS) */}
      <section className="py-20 max-w-content mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Our Standards"
          title="How We Carry Ourselves"
          description="Culture is what happens on the floor when nobody is watching. These four rules guide every session."
        />

        <div className="divide-y divide-brand-border/60 border-y border-brand-border/60">
          {standards.map((std) => (
            <div
              key={std.number}
              className="py-6 sm:py-8 grid grid-cols-1 md:grid-cols-12 gap-4 items-baseline"
            >
              <div className="md:col-span-2">
                <span className="font-display text-2xl sm:text-3xl font-semibold text-brand-red">
                  {std.number}
                </span>
              </div>
              <div className="md:col-span-4">
                <h3 className="text-xl sm:text-2xl font-display uppercase tracking-tight text-brand-bone">
                  {std.title}
                </h3>
              </div>
              <div className="md:col-span-6">
                <p className="text-brand-body text-sm sm:text-base leading-relaxed">
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
            <p className="text-brand-body text-base leading-relaxed">
              Step onto the training floor and experience our standard firsthand. Your introductory session is coach-led.
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
