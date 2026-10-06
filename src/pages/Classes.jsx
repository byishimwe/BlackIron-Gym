import { useState } from 'react';
import PageHero from '../components/PageHero';
import SectionHeader from '../components/SectionHeader';
import Button from '../components/Button';
import { classesData, weeklyTimetable } from '../data/gymData';

function Classes() {
  const [selectedDay, setSelectedDay] = useState('Monday');

  const activeDaySchedule = weeklyTimetable.find((d) => d.day === selectedDay);

  return (
    <div className="bg-brand-black text-brand-bone">
      {/* 1. COMPACT PAGE HERO */}
      <PageHero
        eyebrow="Disciplines & Formats"
        title="Train With Intention"
        description="Coach-led sessions designed around strength, metabolic conditioning, movement longevity, and daily consistency."
      />

      {/* 2. CLASS INDEX */}
      <section className="py-20 max-w-content mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Curriculum"
          title="The Five Training Disciplines"
          description="Every session has a dedicated objective. No random routines or guesswork."
        />

        <div className="space-y-8">
          {classesData.map((cls) => (
            <div
              key={cls.id}
              className="bg-brand-card border border-brand-border rounded-sm overflow-hidden grid grid-cols-1 lg:grid-cols-12 hover:border-brand-steel transition-colors"
            >
              {/* Class Image with Constrained 4:3 Aspect Ratio */}
              <div className="lg:col-span-5 relative aspect-[16/10] lg:aspect-[4/3] bg-brand-dark overflow-hidden">
                <img
                  src={cls.image}
                  alt={cls.alt}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute top-4 left-4 bg-brand-black/90 backdrop-blur-sm text-brand-red font-sans text-xs font-semibold px-2.5 py-1 rounded-sm border border-brand-border">
                  {cls.index} · {cls.intensity}
                </div>
              </div>

              {/* Class Content */}
              <div className="lg:col-span-7 p-6 sm:p-8 flex flex-col justify-between">
                <div>
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                    <span className="text-xs font-sans uppercase tracking-wider text-brand-red font-semibold">
                      {cls.category}
                    </span>
                    <span className="text-xs font-sans text-brand-muted">
                      {cls.duration} · {cls.level}
                    </span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-display uppercase tracking-tight text-brand-bone mb-3">
                    {cls.name}
                  </h3>

                  <p className="text-brand-body text-sm sm:text-base leading-relaxed mb-6">
                    {cls.description}
                  </p>

                  <div className="mb-6">
                    <span className="text-xs font-sans uppercase tracking-wider text-brand-bone-muted font-medium block mb-2">
                      Key Focus Points:
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {cls.keyPoints.map((pt) => (
                        <span
                          key={pt}
                          className="text-xs bg-brand-dark border border-brand-border px-2.5 py-1 rounded-sm text-brand-bone-muted font-sans"
                        >
                          {pt}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-brand-border/60 flex flex-wrap items-center justify-between gap-4">
                  <div className="text-xs font-sans text-brand-body">
                    Schedule: <span className="text-brand-bone font-medium">{cls.schedule}</span>
                  </div>
                  <Button
                    to={`/contact?interest=class&class=${cls.id}`}
                    variant="secondary"
                    size="sm"
                  >
                    Reserve class trial &rarr;
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. WEEKLY TIMETABLE OVERVIEW */}
      <section className="bg-brand-dark py-20 border-y border-brand-border">
        <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Weekly Schedule"
            title="Floor & Class Timetable"
            description="Morning, noon, and evening slots designed to fit professional schedules in Kigali."
          />

          {/* Day selection tabs */}
          <div className="flex flex-wrap gap-2 mb-8 border-b border-brand-border pb-4" role="tablist" aria-label="Timetable days">
            {weeklyTimetable.map((dayObj) => (
              <button
                key={dayObj.day}
                type="button"
                role="tab"
                aria-selected={selectedDay === dayObj.day}
                onClick={() => setSelectedDay(dayObj.day)}
                className={`font-sans uppercase tracking-wider text-xs sm:text-sm font-semibold px-4 py-2 rounded-sm transition-all focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-brand-red cursor-pointer ${
                  selectedDay === dayObj.day
                    ? 'bg-brand-red text-white'
                    : 'bg-brand-card text-brand-bone-muted hover:text-white hover:bg-brand-steel border border-brand-border'
                }`}
              >
                {dayObj.day}
              </button>
            ))}
          </div>

          {/* Schedule list for selected day */}
          <div className="bg-brand-card border border-brand-border rounded-sm overflow-hidden">
            <div className="divide-y divide-brand-border/60">
              {activeDaySchedule?.slots.map((slot, i) => (
                <div
                  key={i}
                  className="p-4 sm:p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-3 hover:bg-white/[0.02] transition-colors"
                >
                  <div className="flex items-center gap-4">
                    <span className="font-mono text-sm sm:text-base font-semibold text-brand-red w-32 shrink-0">
                      {slot.time}
                    </span>
                    <div>
                      <h4 className="font-display uppercase tracking-wider text-base sm:text-lg text-brand-bone font-medium">
                        {slot.name}
                      </h4>
                      <span className="text-xs text-brand-muted">
                        Coach: {slot.coach}
                      </span>
                    </div>
                  </div>

                  <div>
                    <Button
                      to="/contact?trial=true"
                      variant="ghost"
                      size="sm"
                      className="text-xs text-brand-bone-muted hover:text-white"
                    >
                      Book this slot &rarr;
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 4. CONCISE ACTION CTA */}
      <section className="py-16 max-w-content mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-xl mx-auto space-y-4">
          <h2 className="text-3xl font-display uppercase tracking-tight text-brand-bone">
            Not Sure Which Class Fits Your Goals?
          </h2>
          <p className="text-sm text-brand-body leading-relaxed">
            Our coaches will assess your background on day one and guide you to the right sessions for your capacity.
          </p>
          <div className="pt-2">
            <Button to="/contact?trial=true" variant="primary" size="lg">
              Start your free trial
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Classes;
