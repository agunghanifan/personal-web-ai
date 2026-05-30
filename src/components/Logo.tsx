type LogoProps = {
  className?: string
}

export default function Logo({ className = 'text-lg' }: LogoProps) {
  return (
    <span className={`font-bold tracking-tight ${className}`}>
      AHL<span className="text-coral">.</span>
    </span>
  )
}
