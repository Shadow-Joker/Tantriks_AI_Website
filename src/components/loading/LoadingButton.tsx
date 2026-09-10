import type { ButtonHTMLAttributes, ReactNode } from 'react';
import { Loader2 } from 'lucide-react';

export interface LoadingButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  isLoading?: boolean;
  loadingText?: string;
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
}

export function LoadingButton({
  isLoading = false,
  loadingText,
  children,
  variant = 'primary',
  disabled,
  className = '',
  ...props
}: LoadingButtonProps) {
  const baseStyles =
    'relative inline-flex items-center justify-center font-semibold text-xs rounded-full transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#4D694E] select-none';

  const variantStyles =
    variant === 'primary'
      ? 'text-[#FFF3D5] bg-[#4D694E] hover:bg-[#364C37] shadow-[0_0_20px_rgba(77,105,78,0.3)] disabled:bg-[#4D694E]/60'
      : variant === 'secondary'
      ? 'text-[#2B3E2C] bg-[#F4E7C5] hover:bg-[#EBDDB6] border border-[#4D694E]/30 disabled:opacity-60'
      : 'text-[#2B3E2C] bg-transparent hover:bg-[#4D694E]/10 border border-[#4D694E]/25 disabled:opacity-60';

  const isDisabled = disabled || isLoading;

  return (
    <button
      disabled={isDisabled}
      aria-busy={isLoading}
      className={`${baseStyles} ${variantStyles} ${
        isDisabled ? 'cursor-not-allowed' : ''
      } ${className}`}
      {...props}
    >
      {/* Visual content container */}
      <span
        className={`inline-flex items-center justify-center gap-2 transition-opacity duration-200 ${
          isLoading ? 'opacity-0' : 'opacity-100'
        }`}
      >
        {children}
      </span>

      {/* Loading state absolute overlay to maintain strict button dimensions without jumping */}
      {isLoading && (
        <span className="absolute inset-0 flex items-center justify-center gap-2 text-current animate-fadeIn">
          <Loader2 className="w-3.5 h-3.5 animate-spin" />
          <span>{loadingText || children}</span>
        </span>
      )}
    </button>
  );
}
