import { useState } from 'react';
import PageHero from '../components/PageHero';
import SectionHeader from '../components/SectionHeader';
import Button from '../components/Button';
import { pricingPlans, pricingFaqs } from '../data/gymData';

function Pricing() {
  const [openFaq, setOpenFaq] = useState(0);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="bg-brand-black text-brand-bone">
      {/* 1. MEMBERSHIP INTRO */}
      <PageHero
        eyebrow="Straightforward Rates"
        title="Transparent Memberships"
        description="No hidden cancellation penalties, no initiation gimmicks. Direct access to our Kimihurura strength training floor and coach-led classes."
      />

      {/* 2. MEMBERSHIP PLANS (IN RWF) */}
      <section className="py-20 max-w-content mx-auto px-4 sm:px-6 lg:px-8">
        {/* Free Trial Banner */}
        <div className="mb-12 p-6 bg-brand-dark border border-brand-border rounded-sm flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-1">
            <span className="text-xs font-sans uppercase tracking-wider text-brand-red font-semibold block">
              Introductory Access
            </span>
            <h3 className="text-xl sm:text-2xl font-display uppercase tracking-tight text-brand-bone">
              New To IMIZI? Your First Coach-Led Session Is On Us.
            </h3>
            <p className="text-sm text-brand-body max-w-2xl">
              Meet our coaching staff, tour the Kimihurura facility, and experience our standard with zero commitment.
            </p>
          </div>
          <div className="shrink-0">
            <Button to="/contact?trial=true" variant="primary" size="md">
              Book free trial &rarr;
            </Button>
          </div>
        </div>

        <SectionHeader
          eyebrow="Tiers & Passes"
          title="Choose Your Commitment"
          description="All rates are in Rwandan Francs (RWF) with open floor access and full locker amenities."
        />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch pt-2">
          {pricingPlans.map((plan) => {
            const isFeatured = plan.featured;
            return (
              <div
                key={plan.id}
                className={`relative rounded-sm p-8 flex flex-col justify-between transition-all duration-300 ${
                  isFeatured
                    ? 'bg-brand-card border-2 border-brand-red shadow-xl shadow-brand-red/10 lg:-translate-y-2'
                    : 'bg-brand-card border border-brand-border hover:border-brand-steel'
                }`}
              >
                {isFeatured && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-brand-red text-white text-[11px] font-sans uppercase tracking-wider font-semibold px-3 py-0.5 rounded-sm">
                    {plan.badge || 'Recommended'}
                  </div>
                )}

                <div>
                  <div className="mb-4">
                    <h3 className="text-2xl font-display uppercase tracking-tight text-brand-bone mb-1">
                      {plan.name}
                    </h3>
                    <p className="text-xs text-brand-body leading-relaxed min-h-[32px]">
                      {plan.tagline}
                    </p>
                  </div>

                  {/* Price Block */}
                  <div className="py-6 border-y border-brand-border/60 mb-6">
                    <div className="flex items-baseline gap-1.5">
                      <span className="text-4xl sm:text-5xl font-display font-semibold text-brand-bone leading-none">
                        {plan.price}
                      </span>
                      <span className="text-sm font-sans uppercase text-brand-red font-semibold">
                        {plan.currency}
                      </span>
                    </div>
                    <span className="text-xs font-sans text-brand-body block mt-1">
                      {plan.period}
                    </span>
                  </div>

                  {/* Inclusions */}
                  <div className="space-y-3 mb-8">
                    <span className="text-xs font-sans uppercase tracking-wider text-brand-bone-muted font-medium block">
                      Plan Inclusions:
                    </span>
                    <ul className="space-y-2.5">
                      {plan.inclusions.map((inc) => (
                        <li key={inc} className="flex items-start gap-3 text-xs sm:text-sm text-brand-body">
                          <svg
                            className={`w-4 h-4 shrink-0 mt-0.5 ${
                              isFeatured ? 'text-brand-red' : 'text-brand-muted'
                            }`}
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2.5}
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                          </svg>
                          <span>{inc}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div>
                  <Button
                    to={plan.href}
                    variant={isFeatured ? 'primary' : 'secondary'}
                    size="md"
                    className="w-full justify-center"
                  >
                    {plan.ctaText}
                  </Button>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 3. CONCISE ACCESSIBLE MEMBERSHIP FAQ (DIVIDER-BASED ACCORDION) */}
      <section className="bg-brand-dark py-20 border-t border-brand-border">
        <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Answers"
            title="Common Questions"
            description="Everything you need to know about getting started at IMIZI."
          />

          <div className="max-w-3xl divide-y divide-brand-border/60 border-y border-brand-border/60">
            {pricingFaqs.map((faq, index) => {
              const isOpen = openFaq === index;
              return (
                <div key={faq.question} className="py-2">
                  <button
                    type="button"
                    id={`faq-btn-${index}`}
                    aria-controls={`faq-panel-${index}`}
                    onClick={() => toggleFaq(index)}
                    className="w-full py-4 text-left flex justify-between items-center gap-4 hover:text-brand-red focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-brand-red transition-colors cursor-pointer"
                    aria-expanded={isOpen}
                  >
                    <span className="font-display uppercase tracking-wide text-base sm:text-lg text-brand-bone font-medium">
                      {faq.question}
                    </span>
                    <span
                      className={`text-xl text-brand-red transition-transform duration-200 shrink-0 ${
                        isOpen ? 'rotate-45' : ''
                      }`}
                      aria-hidden="true"
                    >
                      +
                    </span>
                  </button>

                  {isOpen && (
                    <div
                      id={`faq-panel-${index}`}
                      role="region"
                      aria-labelledby={`faq-btn-${index}`}
                      className="pb-5 pt-1 text-sm sm:text-base text-brand-body leading-relaxed"
                    >
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          <div className="mt-12 text-center">
            <p className="text-sm text-brand-body mb-4">
              Still have questions before making a decision?
            </p>
            <Button to="/contact" variant="secondary" size="md">
              Talk with a coach &rarr;
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Pricing;
