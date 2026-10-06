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
        description="No hidden cancellation penalties, no initiation gimmicks. Simple access to Kigali's premier strength training floor and coach-led classes."
      />

      {/* 2. MEMBERSHIP PLANS (IN RWF) */}
      <section className="py-20 max-w-content mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <SectionHeader
            eyebrow="Tiers & Passes"
            title="Choose Your Commitment"
            description="All rates are in Rwandan Francs (RWF) with open floor access and full locker amenities."
            className="mb-0"
          />

          <div className="self-start sm:self-auto bg-brand-dark border border-brand-border px-3 py-1.5 rounded-sm">
            <span className="text-[11px] font-mono text-brand-muted uppercase">
              Illustrative Demo Pricing · Kigali, Rwanda
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch pt-4">
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
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-brand-red text-white text-[11px] font-display uppercase tracking-widest font-bold px-3 py-0.5 rounded-sm">
                    {plan.badge || 'Recommended'}
                  </div>
                )}

                <div>
                  <div className="mb-4">
                    <h3 className="text-2xl font-display uppercase tracking-tight text-brand-bone mb-1">
                      {plan.name}
                    </h3>
                    <p className="text-xs text-brand-muted leading-relaxed min-h-[32px]">
                      {plan.tagline}
                    </p>
                  </div>

                  {/* Price Block */}
                  <div className="py-6 border-y border-brand-border/60 mb-6">
                    <div className="flex items-baseline gap-1.5">
                      <span className="text-4xl sm:text-5xl font-display font-bold text-brand-bone leading-none">
                        {plan.price}
                      </span>
                      <span className="text-sm font-mono text-brand-red font-semibold">
                        {plan.currency}
                      </span>
                    </div>
                    <span className="text-xs font-mono text-brand-muted block mt-1">
                      {plan.period}
                    </span>
                  </div>

                  {/* Inclusions */}
                  <div className="space-y-3 mb-8">
                    <span className="text-xs font-mono uppercase tracking-wider text-brand-bone-muted block">
                      Plan Inclusions:
                    </span>
                    <ul className="space-y-2.5">
                      {plan.inclusions.map((inc) => (
                        <li key={inc} className="flex items-start gap-3 text-xs sm:text-sm text-brand-bone-muted">
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

        {/* Portfolio demo notice */}
        <div className="mt-8 text-center">
          <p className="text-xs text-brand-muted/80 font-mono">
            * Illustrative membership pricing for this portfolio concept. No actual payment processing is required or executed.
          </p>
        </div>
      </section>

      {/* 3. COMPARISON OVERVIEW */}
      <section className="bg-brand-dark py-16 border-y border-brand-border">
        <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Quick Comparison"
            title="Membership Feature Matrix"
            description="Compare access levels and coaching provisions across each plan."
          />

          <div className="overflow-x-auto min-w-0 max-w-full -mx-4 px-4 sm:mx-0 sm:px-0">
            <table className="w-full min-w-[520px] text-left border-collapse text-sm">
              <thead>
                <tr className="border-b border-brand-border text-xs font-display uppercase tracking-wider text-brand-muted">
                  <th className="py-4 px-4">Feature</th>
                  <th className="py-4 px-4 text-center">Day Pass</th>
                  <th className="py-4 px-4 text-center">Standard</th>
                  <th className="py-4 px-4 text-center text-brand-red">Performance</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-brand-border/40 text-brand-bone-muted">
                <tr>
                  <td className="py-3 px-4 font-medium text-brand-bone">Open Floor & Turf Access</td>
                  <td className="py-3 px-4 text-center">Single Day</td>
                  <td className="py-3 px-4 text-center">Unlimited</td>
                  <td className="py-3 px-4 text-center font-semibold text-brand-bone">Unlimited</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-medium text-brand-bone">Coach-Led Group Classes</td>
                  <td className="py-3 px-4 text-center">1 Class</td>
                  <td className="py-3 px-4 text-center">4 / month</td>
                  <td className="py-3 px-4 text-center font-semibold text-brand-red">Unlimited</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-medium text-brand-bone">Movement Screening & Assessment</td>
                  <td className="py-3 px-4 text-center text-brand-muted">—</td>
                  <td className="py-3 px-4 text-center">Day 1</td>
                  <td className="py-3 px-4 text-center font-semibold text-brand-bone">Monthly Check-in</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-medium text-brand-bone">Guest Day Passes</td>
                  <td className="py-3 px-4 text-center text-brand-muted">—</td>
                  <td className="py-3 px-4 text-center text-brand-muted">—</td>
                  <td className="py-3 px-4 text-center font-semibold text-brand-bone">2 / month</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-medium text-brand-bone">Locker & Shower Access</td>
                  <td className="py-3 px-4 text-center">Included</td>
                  <td className="py-3 px-4 text-center">Included</td>
                  <td className="py-3 px-4 text-center font-semibold text-brand-bone">Included</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 4. CONCISE MEMBERSHIP FAQ */}
      <section className="py-20 max-w-content mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Answers"
          title="Common Questions"
          description="Everything you need to know about getting started at BlackIron."
        />

        <div className="max-w-3xl space-y-4">
          {pricingFaqs.map((faq, index) => {
            const isOpen = openFaq === index;
            return (
              <div
                key={faq.question}
                className="bg-brand-card border border-brand-border rounded-sm overflow-hidden"
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(index)}
                  className="w-full p-5 text-left flex justify-between items-center gap-4 hover:bg-white/[0.02] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-brand-red transition-colors"
                  aria-expanded={isOpen}
                >
                  <span className="font-display uppercase tracking-wide text-base sm:text-lg text-brand-bone font-medium">
                    {faq.question}
                  </span>
                  <span
                    className={`font-mono text-lg text-brand-red transition-transform duration-200 ${
                      isOpen ? 'rotate-45' : ''
                    }`}
                  >
                    +
                  </span>
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-sm text-brand-muted leading-relaxed border-t border-brand-border/40">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div className="mt-12 text-center">
          <p className="text-sm text-brand-muted mb-4">
            Still have questions before making a decision?
          </p>
          <Button to="/contact" variant="secondary" size="md">
            Talk with a coach &rarr;
          </Button>
        </div>
      </section>
    </div>
  );
}

export default Pricing;
