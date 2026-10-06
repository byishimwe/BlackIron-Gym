function PageHero({
  eyebrow,
  title,
  description,
  badge,
  compact = false,
}) {
  return (
    <section className="relative bg-brand-dark border-b border-brand-border/60 overflow-hidden pt-28 pb-14 md:pt-36 md:pb-20">
      {/* Subtle structural grid lines */}
      <div className="absolute inset-0 bg-[radial-gradient(#262626_1px,transparent_1px)] [background-size:24px_24px] opacity-40 pointer-events-none" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-brand-red/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-content mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <div className="flex items-center gap-3 mb-3">
            {eyebrow && (
              <span className="text-xs sm:text-sm font-display uppercase tracking-widest text-brand-red font-semibold">
                {eyebrow}
              </span>
            )}
            {badge && (
              <span className="text-[11px] font-mono uppercase px-2 py-0.5 bg-brand-steel text-brand-bone-muted border border-brand-border rounded-sm">
                {badge}
              </span>
            )}
          </div>

          <h1
            className={`font-display uppercase tracking-tight text-brand-bone leading-[0.95] mb-4 text-left break-words ${
              compact ? 'text-3xl sm:text-5xl lg:text-6xl' : 'text-3xl sm:text-5xl lg:text-7xl'
            }`}
          >
            {title}
          </h1>

          {description && (
            <p className="text-base sm:text-xl text-brand-muted leading-relaxed max-w-2xl">
              {description}
            </p>
          )}
        </div>
      </div>
    </section>
  );
}

export default PageHero;
