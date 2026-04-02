import { cn } from '@/lib/utils'

interface GlassCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
}

export function GlassCard({ children, className, ...props }: GlassCardProps) {
  return (
    <div
      className={cn(
        'rounded-2xl border border-white/75 bg-white/60 shadow-[0_4px_24px_oklch(0.65_0.04_220/0.1)] backdrop-blur-2xl',
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
}
