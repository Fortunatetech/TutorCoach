import Link from 'next/link';
import { ReactNode } from 'react';

interface ButtonProps {
  children: ReactNode;
  onClick?: () => void;
  href?: string;
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'small' | 'medium' | 'large';
  type?: 'button' | 'submit';
  disabled?: boolean;
  className?: string;
}

export default function Button({
  children,
  onClick,
  href,
  variant = 'primary',
  size = 'medium',
  type = 'button',
  disabled = false,
  className = '',
}: ButtonProps) {
  const baseStyles = 'font-semibold rounded-lg transition-all duration-200 inline-flex items-center justify-center';
  
  const variantStyles = {
    primary: 'bg-gradient-to-r from-accent-coral-500 to-accent-coral-600 text-white hover:shadow-xl hover:scale-[1.02] active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed transform transition-all duration-200',
    secondary: 'border-2 border-brand-teal-500 text-brand-teal-600 hover:bg-brand-teal-50 hover:border-brand-teal-600 active:scale-[0.98] transition-all duration-200',
    ghost: 'text-neutral-700 hover:bg-neutral-100 active:scale-[0.98] transition-all duration-200',
  };

  const sizeStyles = {
    small: 'px-4 py-2.5 text-sm',
    medium: 'px-8 py-3.5 text-base',
    large: 'px-10 py-4 text-lg',
  };

  const classes = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={classes}
    >
      {children}
    </button>
  );
}