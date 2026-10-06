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
              aria-label="BlackIron Gym homepage"
            >
              <div className="w-10 h-10 rounded bg-brand-dark border border-brand-border flex items-center justify-center p-1">
                <img
                  src="/Logo.png"
                  alt="BlackIron Crest"
                  className="w-full h-full object-contain"
                />
              </div>
              <span className="font-display uppercase tracking-wider font-bold text-2xl text-brand-bone">
                BlackIron Gym
              </span>
            </Link>

            <p className="text-sm text-brand-muted max-w-sm leading-relaxed">
              Built for the work. A focused training facility in Kigali dedicated to disciplined strength, conditioning, and structured athletic coaching.
            </p>

            <div className="pt-2">
              <span className="inline-block text-[11px] font-mono uppercase tracking-widest text-brand-red font-semibold bg-brand-red-subtle border border-brand-red/30 px-2.5 py-1 rounded-sm">
                Kigali, Rwanda
              </span>
            </div>
          </div>

          {/* Column 2: Navigation Links */}
          <div className="lg:col-span-3 space-y-3">
            <h3 className="text-xs font-display uppercase tracking-widest text-brand-bone font-semibold">
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
                  Memberships (RWF)
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
            <h3 className="text-xs font-display uppercase tracking-widest text-brand-bone font-semibold">
              Floor Hours
            </h3>
            <div className="space-y-1.5 text-sm text-brand-muted font-sans">
              <div className="flex justify-between py-1 border-b border-brand-border/30">
                <span className="text-brand-bone-muted">Monday – Friday</span>
                <span className="font-mono text-brand-bone">05:30 – 22:00</span>
              </div>
              <div className="flex justify-between py-1 border-b border-brand-border/30">
                <span className="text-brand-bone-muted">Saturday</span>
                <span className="font-mono text-brand-bone">07:00 – 20:00</span>
              </div>
              <div className="flex justify-between py-1 border-b border-brand-border/30">
                <span className="text-brand-bone-muted">Sunday</span>
                <span className="font-mono text-brand-bone">08:00 – 18:00</span>
              </div>
            </div>
            <p className="text-xs text-brand-muted pt-2">
              KG 563 St, Kimihurura Sector, Kigali
            </p>
          </div>
        </div>

        {/* Bottom bar with honest portfolio note */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-brand-muted">
          <div>
            &copy; {currentYear} BlackIron Gym. All rights reserved.
          </div>
          <div className="text-center sm:text-right font-mono text-[11px] text-brand-muted/80">
            Portfolio concept project · Built with React & Tailwind
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
