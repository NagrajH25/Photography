type SkeletonLoaderProps = {
  className?: string;
};

export function SkeletonLoader({ className = "" }: SkeletonLoaderProps) {
  return <div className={`animate-pulse rounded-3xl bg-[#eee3d6] ${className}`} />;
}
