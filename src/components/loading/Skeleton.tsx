import type { HTMLAttributes } from 'react';

// Base Skeleton Primitive
export interface SkeletonProps extends HTMLAttributes<HTMLDivElement> {
  className?: string;
  animate?: boolean;
}

export function Skeleton({ className = '', animate = true, ...props }: SkeletonProps) {
  return (
    <div
      aria-hidden="true"
      className={`rounded-xl bg-[#EBDDB6]/60 border border-[#4D694E]/10 ${
        animate ? 'skeleton-shimmer-effect' : ''
      } ${className}`}
      {...props}
    />
  );
}

// 1. Text Line Skeleton
export function SkeletonText({
  lines = 3,
  className = '',
}: {
  lines?: number;
  className?: string;
}) {
  const widths = ['w-full', 'w-11/12', 'w-4/5', 'w-3/4', 'w-2/3'];

  return (
    <div className={`space-y-2.5 ${className}`} aria-hidden="true">
      {Array.from({ length: lines }).map((_, i) => (
        <Skeleton
          key={i}
          className={`h-3.5 ${widths[i % widths.length]} rounded-md`}
        />
      ))}
    </div>
  );
}

// 2. Title Skeleton
export function SkeletonTitle({
  className = '',
  size = 'md',
}: {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}) {
  const heightClass =
    size === 'lg'
      ? 'h-10 sm:h-12 w-3/4'
      : size === 'sm'
      ? 'h-6 sm:h-7 w-1/2'
      : 'h-8 sm:h-9 w-2/3';

  return (
    <div className={`space-y-2 mb-4 ${className}`} aria-hidden="true">
      <Skeleton className={`${heightClass} rounded-xl`} />
    </div>
  );
}

// 3. Image / Visual Frame Skeleton
export function SkeletonImage({
  className = '',
  aspectRatio = 'video',
}: {
  className?: string;
  aspectRatio?: 'video' | 'square' | 'wide' | 'tall';
}) {
  const aspectClass =
    aspectRatio === 'square'
      ? 'aspect-square'
      : aspectRatio === 'wide'
      ? 'aspect-[21/9]'
      : aspectRatio === 'tall'
      ? 'aspect-[3/4]'
      : 'aspect-video';

  return (
    <div
      className={`w-full rounded-3xl bg-[#F4E7C5] border border-[#4D694E]/20 flex items-center justify-center p-6 ${aspectClass} ${className}`}
      aria-hidden="true"
    >
      <div className="w-16 h-16 rounded-2xl bg-[#EBDDB6]/70 border border-[#4D694E]/15 flex items-center justify-center text-[#4D694E]/40">
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
          />
        </svg>
      </div>
    </div>
  );
}

// 4. Card Skeleton
export function SkeletonCard({
  className = '',
  hasHeader = true,
}: {
  className?: string;
  hasHeader?: boolean;
}) {
  return (
    <div
      className={`p-6 sm:p-8 rounded-3xl bg-[#F4E7C5] border border-[#4D694E]/25 shadow-sm space-y-4 ${className}`}
      aria-hidden="true"
    >
      {hasHeader && (
        <div className="flex items-center justify-between gap-4 mb-2">
          <Skeleton className="h-6 w-1/3 rounded-lg" />
          <Skeleton className="h-4 w-16 rounded-full" />
        </div>
      )}
      <Skeleton className="h-4 w-full rounded-md" />
      <Skeleton className="h-4 w-5/6 rounded-md" />
      <Skeleton className="h-4 w-2/3 rounded-md" />
      <div className="pt-4 flex items-center justify-between">
        <Skeleton className="h-8 w-24 rounded-full" />
        <Skeleton className="h-4 w-12 rounded-md" />
      </div>
    </div>
  );
}

// 5. Button Skeleton
export function SkeletonButton({
  className = '',
  width = 'w-36',
}: {
  className?: string;
  width?: string;
}) {
  return (
    <Skeleton className={`h-11 ${width} rounded-full ${className}`} aria-hidden="true" />
  );
}

// 6. Avatar Skeleton
export function SkeletonAvatar({
  size = 'md',
  className = '',
}: {
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}) {
  const sizeClass =
    size === 'sm' ? 'w-8 h-8' : size === 'lg' ? 'w-16 h-16' : 'w-10 h-10';

  return (
    <Skeleton className={`${sizeClass} rounded-full shrink-0 ${className}`} aria-hidden="true" />
  );
}

// 7. Chart Skeleton
export function SkeletonChart({ className = '' }: { className?: string }) {
  return (
    <div
      className={`p-6 rounded-3xl bg-[#F4E7C5] border border-[#4D694E]/25 shadow-sm space-y-6 ${className}`}
      aria-hidden="true"
    >
      <div className="flex items-center justify-between">
        <div>
          <Skeleton className="h-4 w-32 rounded mb-1.5" />
          <Skeleton className="h-7 w-20 rounded-lg" />
        </div>
        <div className="flex gap-2">
          <Skeleton className="h-6 w-14 rounded-full" />
          <Skeleton className="h-6 w-14 rounded-full" />
        </div>
      </div>

      {/* Waveform / Bar Grid Visual */}
      <div className="h-40 flex items-end gap-3 pt-6 border-b border-[#4D694E]/15 px-2">
        <Skeleton className="h-16 w-full rounded-t-lg" />
        <Skeleton className="h-28 w-full rounded-t-lg" />
        <Skeleton className="h-20 w-full rounded-t-lg" />
        <Skeleton className="h-36 w-full rounded-t-lg" />
        <Skeleton className="h-24 w-full rounded-t-lg" />
        <Skeleton className="h-32 w-full rounded-t-lg" />
        <Skeleton className="h-40 w-full rounded-t-lg" />
        <Skeleton className="h-28 w-full rounded-t-lg" />
      </div>

      <div className="flex justify-between text-[10px] font-mono text-[#2B3E2C]/40">
        <Skeleton className="h-3 w-8" />
        <Skeleton className="h-3 w-8" />
        <Skeleton className="h-3 w-8" />
        <Skeleton className="h-3 w-8" />
      </div>
    </div>
  );
}

// 8. Full Dashboard Skeleton
export function SkeletonDashboard({ className = '' }: { className?: string }) {
  return (
    <div
      className={`max-w-7xl mx-auto p-4 sm:p-6 lg:p-8 space-y-8 ${className}`}
      aria-hidden="true"
    >
      {/* Top Metric Cards Row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {Array.from({ length: 4 }).map((_, i) => (
          <div
            key={i}
            className="p-6 rounded-3xl bg-[#F4E7C5] border border-[#4D694E]/20 space-y-3"
          >
            <div className="flex justify-between items-center">
              <Skeleton className="h-3.5 w-24" />
              <Skeleton className="w-6 h-6 rounded-full" />
            </div>
            <Skeleton className="h-8 w-16" />
            <Skeleton className="h-3 w-32" />
          </div>
        ))}
      </div>

      {/* Main Content Split: Chart + Activity */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        <div className="lg:col-span-8">
          <SkeletonChart />
        </div>
        <div className="lg:col-span-4 p-6 rounded-3xl bg-[#F4E7C5] border border-[#4D694E]/20 space-y-4">
          <Skeleton className="h-5 w-32 mb-4" />
          {Array.from({ length: 4 }).map((_, i) => (
            <div key={i} className="flex items-center gap-3 pb-3 border-b border-[#4D694E]/10">
              <SkeletonAvatar size="sm" />
              <div className="flex-1 space-y-1.5">
                <Skeleton className="h-3.5 w-full" />
                <Skeleton className="h-3 w-2/3" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
