function SectionHeader({
  eyebrow,
  title,
  description,
  align = 'left', // 'left' | 'center'
  theme = 'dark', // 'dark' | 'light'
  className = '',
}) {
  const isCenter = align === 'center';
  const isLight = theme === 'light';

  return (
    <div
      className={`mb-10 md:mb-14 ${
        isCenter ? 'text-center mx-auto max-w-3xl' : 'max-w-2xl'
      } ${className}`}
    >
      {eyebrow && (
        <span
          className={`inline-block text-xs md:text-sm font-sans uppercase tracking-widest font-semibold mb-2.5 ${
            isLight ? 'text-brand-red' : 'text-brand-red'
          }`}
        >
          {eyebrow}
        </span>
      )}
      {title && (
        <h2
          className={`text-2xl sm:text-3xl lg:text-5xl font-display uppercase tracking-tight leading-tight mb-4 break-words ${
            isLight ? 'text-brand-black' : 'text-brand-bone'
          }`}
        >
          {title}
        </h2>
      )}
      {description && (
        <p
          className={`text-base sm:text-lg leading-relaxed ${
            isLight ? 'text-gray-700' : 'text-brand-body'
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
}

export default SectionHeader;
