import { Link } from 'react-router-dom';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-brand-black border-t border-brand-border text-brand-bone-muted pt-16 pb-12">
      <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-brand-border/60">
          {/* Column 1: Brand & Positioning */}
          <div className="lg:col-span-5 space-y-4">
            <Link
              to="/"
              className="inline-flex items-center gap-3 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-red rounded-sm"
              aria-label="IMIZI Training Club homepage"
            >
              <div className="w-10 h-10 rounded bg-brand-dark border border-brand-border flex items-center justify-center p-1">
                <img
                  src="/Logo.png"
                  alt="IMIZI Logo"
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-display uppercase tracking-wider font-bold text-xl text-brand-bone leading-none">
                  IMIZI
                </span>
                <span className="text-[10px] font-sans font-medium tracking-[0.22em] text-brand-muted uppercase leading-tight mt-0.5">
                  Training Club
                </span>
              </div>
            </Link>

            <p className="text-sm text-brand-body max-w-sm leading-relaxed">
              <strong className="text-brand-bone block mb-1">Strength starts at the roots.</strong>
              A focused training club in Kigali dedicated to foundations, stability, consistency, and strength built from the ground up.
            </p>

            <div className="pt-2">
              <span className="inline-block text-[11px] font-sans uppercase tracking-wider text-brand-red font-semibold bg-brand-red-subtle border border-brand-red/30 px-2.5 py-1 rounded-sm">
                Kimihurura · Kigali, Rwanda
              </span>
            </div>
          </div>

          {/* Column 2: Navigation Links */}
          <div className="lg:col-span-3 space-y-3">
            <h3 className="text-xs font-sans uppercase tracking-widest text-brand-bone font-semibold">
              Explore
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  to="/about"
                  className="hover:text-brand-red transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-brand-red"
                >
                  About the Facility
                </Link>
              </li>
              <li>
                <Link
                  to="/classes"
                  className="hover:text-brand-red transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-brand-red"
                >
                  Classes & Schedule
                </Link>
              </li>
              <li>
                <Link
                  to="/trainers"
                  className="hover:text-brand-red transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-brand-red"
                >
                  Coaching Team
                </Link>
              </li>
              <li>
                <Link
                  to="/pricing"
                  className="hover:text-brand-red transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-brand-red"
                >
                  Memberships
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="hover:text-brand-red transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-brand-red"
                >
                  Visit & Trial
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Training Hours & Location */}
          <div className="lg:col-span-4 space-y-3">
            <h3 className="text-xs font-sans uppercase tracking-widest text-brand-bone font-semibold">
              Floor Hours
            </h3>
            <div className="space-y-1.5 text-sm text-brand-body font-sans">
              <div className="flex justify-between py-1 border-b border-brand-border/30">
                <span className="text-brand-bone-muted">Monday – Friday</span>
                <span className="text-brand-bone-muted">05:30 – 22:00</span>
              </div>
              <div className="flex justify-between py-1 border-b border-brand-border/30">
                <span className="text-brand-bone-muted">Saturday</span>
                <span className="text-brand-bone-muted">07:00 – 20:00</span>
              </div>
              <div className="flex justify-between py-1 border-b border-brand-border/30">
                <span className="text-brand-bone-muted">Sunday</span>
                <span className="text-brand-bone-muted">08:00 – 18:00</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar with honest portfolio note */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-brand-muted font-sans">
          <div>
            &copy; {currentYear} IMIZI Training Club. All rights reserved.
          </div>
          <div className="text-center sm:text-right text-[11px] text-brand-muted/80">
            Kigali, Rwanda
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
