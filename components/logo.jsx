"use client"

export default function Logo({ size = "default", className = "" }) {
  const isSmall = size === "small"
  const isLarge = size === "large"

  const iconDim = isSmall ? "w-7 h-7" : isLarge ? "w-10 h-10" : "w-8 h-8"
  const textClass = isSmall ? "text-base" : isLarge ? "text-xl" : "text-lg"

  return (
    <div className={`inline-flex items-center gap-2.5 group ${className}`}>
      {/* Icon Mark */}
      <div className={`relative flex items-center justify-center rounded-xl bg-gradient-to-br from-primary via-blue-600 to-accent p-0.5 shadow-md shadow-primary/20 transition-transform group-hover:scale-105 ${iconDim}`}>
        <div className="flex h-full w-full items-center justify-center rounded-[10px] bg-background/95 backdrop-blur-sm">
          <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-5 w-5">
            <path
              d="M8 10L4 16L8 22"
              stroke="url(#logo_grad_left)"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M24 10L28 16L24 22"
              stroke="url(#logo_grad_right)"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M18 9L14 23"
              stroke="currentColor"
              strokeWidth="2.2"
              strokeLinecap="round"
              className="text-primary"
            />
            <defs>
              <linearGradient id="logo_grad_left" x1="4" y1="10" x2="8" y2="22" gradientUnits="userSpaceOnUse">
                <stop stopColor="hsl(var(--primary))" />
                <stop offset="1" stopColor="hsl(var(--accent))" />
              </linearGradient>
              <linearGradient id="logo_grad_right" x1="24" y1="10" x2="28" y2="22" gradientUnits="userSpaceOnUse">
                <stop stopColor="hsl(var(--accent))" />
                <stop offset="1" stopColor="hsl(var(--primary))" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>

      {/* Brand Text */}
      <div className="flex flex-col leading-none">
        <span className={`font-bold tracking-tight text-foreground ${textClass}`}>
          Md Samim <span className="text-primary">Reza</span>
        </span>
        <span className="mt-1 text-[0.6rem] font-bold uppercase tracking-[0.22em] text-muted-foreground">
          Associate Software Engineer
        </span>
      </div>
    </div>
  )
}
