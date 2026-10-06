import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import PageHero from '../components/PageHero';
import SectionHeader from '../components/SectionHeader';
import Button from '../components/Button';

function Contact() {
  const [searchParams] = useSearchParams();

  // Form states
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    interest: 'trial',
    message: '',
  });

  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submittedData, setSubmittedData] = useState(null);

  // Pre-fill interest or plan from query parameters
  useEffect(() => {
    const interestParam = searchParams.get('interest');
    const trialParam = searchParams.get('trial');
    const planParam = searchParams.get('plan');

    if (trialParam === 'true') {
      setFormData((prev) => ({ ...prev, interest: 'trial' }));
    } else if (interestParam === 'pt') {
      setFormData((prev) => ({ ...prev, interest: 'pt' }));
    } else if (interestParam === 'class') {
      setFormData((prev) => ({ ...prev, interest: 'classes' }));
    } else if (planParam) {
      setFormData((prev) => ({ ...prev, interest: 'membership' }));
    }
  }, [searchParams]);

  const validate = () => {
    const errs = {};
    if (!formData.name.trim()) {
      errs.name = 'Please provide your full name.';
    }
    if (!formData.email.trim()) {
      errs.email = 'Please provide your email address.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      errs.email = 'Please provide a valid email format.';
    }
    if (!formData.interest) {
      errs.interest = 'Please select an area of interest.';
    }
    return errs;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    // Save submitted data for honest demonstration
    setSubmittedData({ ...formData });
    setIsSubmitted(true);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setSubmittedData(null);
    setFormData({
      name: '',
      email: '',
      phone: '',
      interest: 'trial',
      message: '',
    });
  };

  return (
    <div className="bg-brand-black text-brand-bone">
      {/* 1. PAGE HERO */}
      <PageHero
        eyebrow="Location & Inquiries"
        title="Come See What The Work Feels Like"
        description="Whether you want to try a single coach-led session, join a membership tier, or ask about training facilities in Kigali, get in touch below."
      />

      <section className="py-20 max-w-content mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Contact Details & Floor Hours */}
          <div className="lg:col-span-5 space-y-8">
            <SectionHeader
              eyebrow="The Facility"
              title="Kigali Flagship"
              description="Conveniently situated in Kimihurura with secure on-site parking and clean athlete locker amenities."
              className="mb-8"
            />

            <div className="space-y-6">
              {/* Location Card */}
              <div className="bg-brand-card p-6 rounded-sm border border-brand-border">
                <span className="text-xs font-mono uppercase tracking-widest text-brand-red font-semibold block mb-2">
                  Training Ground Location
                </span>
                <h3 className="text-xl font-display uppercase tracking-tight text-brand-bone mb-1">
                  IMIZI Training Club Kigali
                </h3>
                <p className="text-sm text-brand-muted leading-relaxed">
                  KG 563 St, Kimihurura Sector, Gasabo District
                  <br />
                  Kigali, Rwanda
                </p>
                <div className="mt-3 text-xs font-mono text-brand-bone-muted bg-brand-dark p-2 rounded-sm border border-brand-border">
                  📍 Demo Location: Kimihurura, Kigali
                </div>
              </div>

              {/* Floor Hours */}
              <div className="bg-brand-card p-6 rounded-sm border border-brand-border">
                <span className="text-xs font-mono uppercase tracking-widest text-brand-red font-semibold block mb-2">
                  Floor Operational Hours
                </span>
                <div className="space-y-2 text-sm text-brand-muted">
                  <div className="flex justify-between py-1 border-b border-brand-border/40">
                    <span className="text-brand-bone-muted">Monday – Friday</span>
                    <span className="font-mono text-brand-bone">05:30 – 22:00</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-brand-border/40">
                    <span className="text-brand-bone-muted">Saturday</span>
                    <span className="font-mono text-brand-bone">07:00 – 20:00</span>
                  </div>
                  <div className="flex justify-between py-1">
                    <span className="text-brand-bone-muted">Sunday</span>
                    <span className="font-mono text-brand-bone">08:00 – 18:00</span>
                  </div>
                </div>
              </div>

              {/* Direct Reach */}
              <div className="bg-brand-card p-6 rounded-sm border border-brand-border">
                <span className="text-xs font-mono uppercase tracking-widest text-brand-red font-semibold block mb-2">
                  Direct Inquiries
                </span>
                <div className="space-y-1.5 text-sm text-brand-muted">
                  <p>
                    <strong className="text-brand-bone-muted">Email:</strong> floor@imizi.demo
                  </p>
                  <p>
                    <strong className="text-brand-bone-muted">Reception:</strong> +250 788 000 000
                  </p>
                  <p className="text-xs text-brand-muted pt-1">
                    * Demo contact details for portfolio presentation.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Inquiry / Free Trial Form */}
          <div className="lg:col-span-7">
            <div className="bg-brand-card p-5 sm:p-8 lg:p-10 rounded-sm border border-brand-border shadow-xl">
              <h2 className="text-2xl sm:text-3xl font-display uppercase tracking-tight text-brand-bone mb-2">
                {isSubmitted ? 'Enquiry Captured' : 'Request A Trial Or Membership'}
              </h2>
              <p className="text-sm text-brand-muted mb-8 leading-relaxed">
                {isSubmitted
                  ? 'Review the captured details below.'
                  : 'Fill in your details to arrange your first session or ask our coaching team a specific question.'}
              </p>

              {isSubmitted ? (
                /* Honest Success State */
                <div className="space-y-6 animate-fadeIn">
                  <div className="p-5 bg-brand-dark border-l-4 border-brand-red rounded-r-sm">
                    <h3 className="font-display uppercase tracking-wide text-lg text-brand-bone mb-1">
                      Thanks — your enquiry has been captured in this portfolio demo.
                    </h3>
                    <p className="text-xs sm:text-sm text-brand-muted leading-relaxed">
                      No data has been sent to an external server or stored in a persistent database. In a production deployment, this form would integrate with your gym&apos;s CRM or reservation API.
                    </p>
                  </div>

                  {submittedData && (
                    <div className="bg-brand-dark/60 p-5 rounded-sm border border-brand-border text-xs sm:text-sm space-y-2">
                      <div className="font-mono text-brand-red uppercase text-xs">Captured Submission Summary:</div>
                      <div><strong className="text-brand-bone-muted">Name:</strong> {submittedData.name}</div>
                      <div><strong className="text-brand-bone-muted">Email:</strong> {submittedData.email}</div>
                      {submittedData.phone && <div><strong className="text-brand-bone-muted">Phone:</strong> {submittedData.phone}</div>}
                      <div><strong className="text-brand-bone-muted">Interest:</strong> {submittedData.interest}</div>
                      {submittedData.message && <div><strong className="text-brand-bone-muted">Notes:</strong> {submittedData.message}</div>}
                    </div>
                  )}

                  <div className="pt-2">
                    <Button onClick={handleReset} variant="secondary" size="md">
                      Submit another test inquiry
                    </Button>
                  </div>
                </div>
              ) : (
                /* Accessible Form */
                <form onSubmit={handleSubmit} noValidate className="space-y-6">
                  {/* Name field */}
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-xs font-display uppercase tracking-wider text-brand-bone mb-2"
                    >
                      Full Name <span className="text-brand-red">*</span>
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. Marc Rutayisire"
                      className={`w-full bg-brand-dark border rounded-sm px-4 py-3 text-sm text-brand-bone placeholder-brand-muted/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-red ${
                        errors.name ? 'border-brand-red' : 'border-brand-border'
                      }`}
                    />
                    {errors.name && (
                      <p className="mt-1.5 text-xs text-brand-red font-mono">{errors.name}</p>
                    )}
                  </div>

                  {/* Email & Phone grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-xs font-display uppercase tracking-wider text-brand-bone mb-2"
                      >
                        Email Address <span className="text-brand-red">*</span>
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="you@domain.com"
                        className={`w-full bg-brand-dark border rounded-sm px-4 py-3 text-sm text-brand-bone placeholder-brand-muted/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-red ${
                          errors.email ? 'border-brand-red' : 'border-brand-border'
                        }`}
                      />
                      {errors.email && (
                        <p className="mt-1.5 text-xs text-brand-red font-mono">{errors.email}</p>
                      )}
                    </div>

                    <div>
                      <label
                        htmlFor="phone"
                        className="block text-xs font-display uppercase tracking-wider text-brand-bone mb-2"
                      >
                        Phone Number <span className="text-brand-muted text-[10px]">(Optional)</span>
                      </label>
                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+250 780 000 000"
                        className="w-full bg-brand-dark border border-brand-border rounded-sm px-4 py-3 text-sm text-brand-bone placeholder-brand-muted/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-red"
                      />
                    </div>
                  </div>

                  {/* Primary Interest */}
                  <div>
                    <label
                      htmlFor="interest"
                      className="block text-xs font-display uppercase tracking-wider text-brand-bone mb-2"
                    >
                      Area of Interest <span className="text-brand-red">*</span>
                    </label>
                    <select
                      id="interest"
                      name="interest"
                      value={formData.interest}
                      onChange={handleChange}
                      className="w-full bg-brand-dark border border-brand-border rounded-sm px-4 py-3 text-sm text-brand-bone focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-red"
                    >
                      <option value="trial">Free Trial Session</option>
                      <option value="membership">Standard / Unlimited Membership</option>
                      <option value="pt">1-on-1 Personal Training Coaching</option>
                      <option value="classes">Group Training & Disciplines</option>
                      <option value="general">General Question</option>
                    </select>
                  </div>

                  {/* Message / Background notes */}
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-xs font-display uppercase tracking-wider text-brand-bone mb-2"
                    >
                      Training Goals or Questions <span className="text-brand-muted text-[10px]">(Optional)</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us about your background, injury history, or desired session times..."
                      className="w-full bg-brand-dark border border-brand-border rounded-sm px-4 py-3 text-sm text-brand-bone placeholder-brand-muted/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-red resize-y"
                    />
                  </div>

                  {/* Submission button */}
                  <div>
                    <Button
                      type="submit"
                      variant="primary"
                      size="lg"
                      className="w-full justify-center"
                    >
                      Send Trial / Membership Request
                    </Button>
                    <p className="mt-3 text-center text-[11px] font-mono text-brand-muted">
                      Portfolio demo form · Validated locally in-browser
                    </p>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Practical First Visit Tips */}
      <section className="bg-brand-dark py-16 border-t border-brand-border">
        <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="First Session Preparation"
            title="What To Expect On Day One"
            description="We want your first visit to run smoothly from the moment you step through reception."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-brand-card p-6 rounded-sm border border-brand-border">
              <span className="font-mono text-xl font-bold text-brand-red block mb-2">01</span>
              <h3 className="font-display uppercase text-lg text-brand-bone mb-2">Arrive 10 Mins Early</h3>
              <p className="text-xs sm:text-sm text-brand-muted leading-relaxed">
                Check in at the desk, meet your assigned coach, and stow your gear in the locker rooms before the session starts.
              </p>
            </div>
            <div className="bg-brand-card p-6 rounded-sm border border-brand-border">
              <span className="font-mono text-xl font-bold text-brand-red block mb-2">02</span>
              <h3 className="font-display uppercase text-lg text-brand-bone mb-2">Appropriate Footwear</h3>
              <p className="text-xs sm:text-sm text-brand-muted leading-relaxed">
                Bring flat, clean training shoes or lifting shoes. Clean shoes protect the lifting platforms and maintain floor hygiene.
              </p>
            </div>
            <div className="bg-brand-card p-6 rounded-sm border border-brand-border">
              <span className="font-mono text-xl font-bold text-brand-red block mb-2">03</span>
              <h3 className="font-display uppercase text-lg text-brand-bone mb-2">Movement Check</h3>
              <p className="text-xs sm:text-sm text-brand-muted leading-relaxed">
                Your coach will review your movement patterns and scale barbell or conditioning loads to your comfort level.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;
