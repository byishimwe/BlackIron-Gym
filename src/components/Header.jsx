import { useState, useEffect, useRef } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import Button from './Button';

const navItems = [
  { label: 'About', path: '/about' },
  { label: 'Classes', path: '/classes' },
  { label: 'Coaches', path: '/trainers' },
  { label: 'Membership', path: '/pricing' },
  { label: 'Visit', path: '/contact' },
];

function Header() {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const toggleButtonRef = useRef(null);
  const wasMobileOpenRef = useRef(false);

  // Restore focus to toggle button when mobile drawer closes
  useEffect(() => {
    if (wasMobileOpenRef.current && !isMobileOpen) {
      toggleButtonRef.current?.focus();
    }
    wasMobileOpenRef.current = isMobileOpen;
  }, [isMobileOpen]);

  // Close mobile drawer upon route change
  useEffect(() => {
    setIsMobileOpen(false);
  }, [location.pathname]);

  // Handle sticky blur effect on scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle escape key to close mobile drawer
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isMobileOpen) {
        setIsMobileOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isMobileOpen]);

  // Prevent body scrolling when mobile drawer is open
  useEffect(() => {
    if (isMobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileOpen]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-brand-black/95 backdrop-blur-md border-b border-brand-border/80 py-3 shadow-lg'
          : 'bg-brand-black/80 backdrop-blur-sm border-b border-white/5 py-4'
      }`}
    >
      <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Lockup */}
          <Link
            to="/"
            className="flex items-center gap-3.5 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-red rounded-sm"
            aria-label="IMIZI Training Club — Return to homepage"
          >
            <div className="relative w-10 h-10 sm:w-11 sm:h-11 rounded bg-brand-dark border border-brand-border flex items-center justify-center overflow-hidden p-1 transition-transform group-hover:scale-105">
              <img
                src="/Logo.png"
                alt=""
                aria-hidden="true"
                className="w-full h-full object-contain filter drop-shadow"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-display uppercase tracking-wider font-bold text-lg sm:text-xl text-brand-bone leading-none">
                IMIZI
              </span>
              <span className="text-[10px] sm:text-[11px] font-sans font-medium tracking-[0.22em] text-brand-muted uppercase leading-tight mt-0.5">
                Training Club
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav
            aria-label="Main Navigation"
            className="hidden md:flex items-center space-x-1 lg:space-x-2"
          >
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  `px-3 py-1.5 text-xs lg:text-sm font-sans uppercase tracking-wider font-semibold transition-colors rounded-sm ${
                    isActive
                      ? 'text-brand-red'
                      : 'text-brand-bone-muted hover:text-white hover:bg-white/5'
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>

          {/* Desktop Primary CTA */}
          <div className="hidden md:flex items-center">
            <Button to="/contact?trial=true" variant="primary" size="sm">
              Start a free trial
            </Button>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex md:hidden items-center">
            <button
              ref={toggleButtonRef}
              type="button"
              onClick={() => setIsMobileOpen(!isMobileOpen)}
              className="p-2 text-brand-bone rounded hover:bg-brand-steel focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-red shrink-0"
              aria-expanded={isMobileOpen}
              aria-controls="mobile-navigation"
              aria-label={isMobileOpen ? 'Close menu' : 'Open menu'}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
                aria-hidden="true"
              >
                {isMobileOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Accessible Mobile Drawer */}
      {isMobileOpen && (
        <div
          id="mobile-navigation"
          className="fixed left-0 right-0 top-[65px] h-[calc(100dvh-65px)] bg-brand-black z-50 md:hidden flex flex-col px-6 py-8 border-t border-brand-border overflow-y-auto"
          role="dialog"
          aria-modal="true"
          aria-label="Mobile Navigation"
        >
          <nav className="flex flex-col space-y-4 mb-8">
            <Link
              to="/"
              onClick={() => setIsMobileOpen(false)}
              className="text-base font-sans uppercase tracking-widest font-semibold text-brand-bone hover:text-brand-red py-2 border-b border-brand-border/40"
            >
              Home
            </Link>
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                onClick={() => setIsMobileOpen(false)}
                className={({ isActive }) =>
                  `text-base font-sans uppercase tracking-widest font-semibold py-2 border-b border-brand-border/40 transition-colors ${
                    isActive
                      ? 'text-brand-red pl-2 border-brand-red'
                      : 'text-brand-bone hover:text-brand-red'
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>

          <div className="mt-auto pt-6 border-t border-brand-border">
            <Button
              to="/contact?trial=true"
              variant="primary"
              size="lg"
              className="w-full justify-center"
              onClick={() => setIsMobileOpen(false)}
            >
              Start a free trial
            </Button>
            <div className="text-center mt-4 text-xs font-sans text-brand-muted">
              Kimihurura · Kigali, Rwanda
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;
