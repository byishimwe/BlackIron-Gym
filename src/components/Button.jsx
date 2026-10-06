import { Link } from 'react-router-dom';

function Button({
  children,
  to,
  href,
  onClick,
  type = 'button',
  variant = 'primary', // 'primary' | 'secondary' | 'ghost' | 'bone'
  size = 'md', // 'sm' | 'md' | 'lg'
  className = '',
  disabled = false,
  ...props
}) {
  const baseStyles =
    'inline-flex items-center justify-center font-display uppercase tracking-wider font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-red focus-visible:ring-offset-2 focus-visible:ring-offset-brand-black disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer select-none';

  const sizeStyles = {
    sm: 'text-xs px-3.5 py-1.5 rounded-sm',
    md: 'text-sm px-5 py-2.5 rounded-sm',
    lg: 'text-base px-7 py-3.5 rounded-sm',
  };

  const variantStyles = {
    primary:
      'bg-brand-red text-white hover:bg-brand-red-hover active:bg-brand-red-hover shadow-sm',
    secondary:
      'bg-transparent border border-brand-bone/30 text-brand-bone hover:border-brand-bone hover:bg-brand-bone/10 active:bg-brand-bone/15',
    bone:
      'bg-brand-bone text-brand-black hover:bg-white active:bg-brand-bone-muted',
    ghost:
      'bg-transparent text-brand-bone-muted hover:text-white hover:bg-white/5 active:bg-white/10',
  };

  const combinedStyles = `${baseStyles} ${sizeStyles[size] || sizeStyles.md} ${variantStyles[variant] || variantStyles.primary} ${className}`;

  if (to) {
    return (
      <Link to={to} className={combinedStyles} {...props}>
        {children}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} className={combinedStyles} {...props}>
        {children}
      </a>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={combinedStyles}
      {...props}
    >
      {children}
    </button>
  );
}

export default Button;
