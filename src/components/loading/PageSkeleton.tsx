import { useRouter } from '../../router/Router';
import {
  Skeleton,
  SkeletonTitle,
  SkeletonText,
  SkeletonCard,
  SkeletonButton,
} from './Skeleton';

export function PageSkeleton() {
  const { pathname } = useRouter();

  // 1. Legal Pages Structure Skeleton
  if (
    pathname === '/privacy-policy' ||
    pathname === '/terms-and-conditions' ||
    pathname === '/refund-cancellation'
  ) {
    return (
      <div
        className="pt-32 pb-24 md:pt-40 md:pb-36 bg-[#FFF3D5] text-[#2B3E2C] min-h-screen animate-fadeIn"
        aria-busy="true"
        role="status"
      >
        <span className="sr-only">Loading legal document...</span>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Skeleton className="h-4 w-28 rounded mb-6" />
          <div className="max-w-3xl mb-12 space-y-4">
            <Skeleton className="h-5 w-36 rounded-full" />
            <SkeletonTitle size="lg" className="mb-2" />
            <Skeleton className="h-4 w-44 rounded" />
            <Skeleton className="h-20 w-full rounded-2xl" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left TOC Skeleton */}
            <div className="hidden lg:block lg:col-span-4 p-6 rounded-3xl bg-[#F4E7C5] border border-[#4D694E]/20 space-y-3">
              <Skeleton className="h-4 w-32 rounded mb-4" />
              {Array.from({ length: 8 }).map((_, i) => (
                <Skeleton key={i} className="h-8 w-full rounded-xl" />
              ))}
            </div>

            {/* Right Document Sections Skeleton */}
            <div className="lg:col-span-8 space-y-8">
              {Array.from({ length: 3 }).map((_, i) => (
                <SkeletonCard key={i} />
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  // 2. Support Center Structure Skeleton
  if (pathname === '/support') {
    return (
      <div
        className="pt-32 pb-24 md:pt-40 md:pb-36 bg-[#FFF3D5] text-[#2B3E2C] min-h-screen animate-fadeIn"
        aria-busy="true"
        role="status"
      >
        <span className="sr-only">Loading support portal...</span>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <Skeleton className="h-4 w-28 rounded mb-8" />
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-4">
            <Skeleton className="h-5 w-32 rounded-full mx-auto" />
            <Skeleton className="h-12 w-3/4 rounded-2xl mx-auto" />
            <Skeleton className="h-5 w-1/2 rounded mx-auto" />
            <Skeleton className="h-14 w-full rounded-full mx-auto mt-6" />
          </div>

          <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
            {Array.from({ length: 6 }).map((_, i) => (
              <Skeleton key={i} className="h-9 w-28 rounded-full" />
            ))}
          </div>

          <div className="space-y-4 max-w-4xl mx-auto">
            {Array.from({ length: 4 }).map((_, i) => (
              <div
                key={i}
                className="p-6 rounded-3xl bg-[#F4E7C5] border border-[#4D694E]/20 flex justify-between items-center"
              >
                <div className="space-y-2 flex-1">
                  <Skeleton className="h-3 w-20" />
                  <Skeleton className="h-5 w-3/5" />
                </div>
                <Skeleton className="w-8 h-8 rounded-full shrink-0 ml-4" />
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  // 3. Auth & Error Centered Pages Skeleton (/verify-email, /reset-password, /access-denied, /404, /maintenance, /payment-failed)
  return (
    <div
      className="pt-32 pb-24 md:pt-40 md:pb-36 bg-[#FFF3D5] text-[#2B3E2C] min-h-screen flex flex-col justify-center animate-fadeIn"
      aria-busy="true"
      role="status"
    >
      <span className="sr-only">Loading page...</span>
      <div className="max-w-md mx-auto px-4 sm:px-6 w-full">
        <Skeleton className="h-4 w-24 rounded mb-6" />
        <div className="p-8 sm:p-10 rounded-3xl bg-[#F4E7C5] border border-[#4D694E]/25 shadow-sm text-center space-y-6">
          <Skeleton className="w-16 h-16 rounded-2xl mx-auto" />
          <div className="space-y-2">
            <Skeleton className="h-7 w-3/4 rounded-xl mx-auto" />
            <SkeletonText lines={2} className="max-w-xs mx-auto" />
          </div>
          <Skeleton className="h-12 w-full rounded-xl" />
          <SkeletonButton width="w-full" />
        </div>
      </div>
    </div>
  );
}
