interface BrandMarkProps {
  className?: string;
}

export function BrandMark({ className = "" }: BrandMarkProps) {
  return (
    <div className={`inline-flex h-6 w-6 ${className}`}>
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="h-full w-full"
      >
        {/* Orange dot - top left */}
        <circle cx="6" cy="6" r="4" fill="#ea580c" />
        
        {/* Green dot - top right */}
        <circle cx="18" cy="6" r="4" fill="#22c55e" />
        
        {/* Blue dot - bottom left */}
        <circle cx="6" cy="18" r="4" fill="#3b82f6" />
        
        {/* Yellow dot - bottom right */}
        <circle cx="18" cy="18" r="4" fill="#eab308" />
      </svg>
    </div>
  );
}