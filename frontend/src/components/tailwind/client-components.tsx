import type { ElementType, HTMLAttributes, JSX, ReactElement, ReactNode } from 'react';
import { useState } from 'react';

type TypographyVariant = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'lead' | 'paragraph' | 'small';
type TypographyColor = 'inherit' | 'current' | 'gray' | 'white';

const variantTag: Record<TypographyVariant, keyof JSX.IntrinsicElements> = {
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  h4: 'h4',
  h5: 'h5',
  h6: 'h6',
  lead: 'p',
  paragraph: 'p',
  small: 'small',
};

const variantClass: Record<TypographyVariant, string> = {
  h1: 'text-4xl font-bold leading-tight',
  h2: 'text-3xl font-bold leading-tight',
  h3: 'text-2xl font-semibold',
  h4: 'text-xl font-semibold',
  h5: 'text-lg font-medium',
  h6: 'text-base font-medium',
  lead: 'text-xl font-normal leading-relaxed',
  paragraph: 'text-base font-normal leading-relaxed',
  small: 'text-sm font-normal',
};

const colorClass: Record<TypographyColor, string> = {
  inherit: 'text-inherit',
  current: 'text-current',
  gray: 'text-surface-500',
  white: 'text-white',
};

interface TypographyProps extends HTMLAttributes<HTMLElement> {
  variant?: TypographyVariant;
  color?: TypographyColor;
  as?: keyof JSX.IntrinsicElements;
}

export function Typography({
  variant = 'paragraph',
  color = 'inherit',
  as,
  className = '',
  children,
  ...props
}: TypographyProps) {
  const Tag = (as ?? variantTag[variant]) as ElementType;
  return (
    <Tag className={`${variantClass[variant]} ${colorClass[color]} ${className}`} {...props}>
      {children}
    </Tag>
  );
}

interface ChipProps extends HTMLAttributes<HTMLSpanElement> {
  value?: string;
  variant?: 'filled' | 'outlined';
  size?: 'sm' | 'md';
}

export function Chip({
  value,
  variant = 'filled',
  size = 'md',
  className = '',
  children,
  ...props
}: ChipProps) {
  const sizeClass = { sm: 'px-2 py-0.5 text-xs', md: 'px-3 py-1 text-sm' }[size];
  const variantClass =
    variant === 'outlined'
      ? 'border border-primary-200 text-primary-600 bg-transparent'
      : 'bg-primary-50 text-primary-600';

  return (
    <span
      className={`inline-flex items-center rounded-full font-medium ${sizeClass} ${variantClass} ${className}`}
      {...props}
    >
      {value ?? children}
    </span>
  );
}

interface TooltipProps {
  children: ReactElement;
  content?: ReactNode;
}

export function Tooltip({ children, content }: TooltipProps) {
  const [show, setShow] = useState(false);

  return (
    <div
      className="relative inline-block"
      onMouseEnter={() => setShow(true)}
      onMouseLeave={() => setShow(false)}
    >
      {children}
      {show && content ? (
        <div className="absolute bottom-full left-1/2 z-50 -translate-x-1/2 -translate-y-1 rounded bg-slate-800 px-2 py-1 text-xs text-white whitespace-nowrap">
          {content}
        </div>
      ) : null}
    </div>
  );
}
