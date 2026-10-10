import React, { useEffect, useState, useRef } from 'react';

interface StatsCounterProps {
  value: number;
  suffix?: string;
  prefix?: string;
  textValue?: string;
  label: string;
  sublabel?: string;
}

export const StatsCounter: React.FC<StatsCounterProps> = ({
  value,
  suffix = '',
  prefix = '',
  textValue,
  label,
  sublabel,
}) => {
  const [displayValue, setDisplayValue] = useState(textValue ? 0 : 0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (textValue) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);

          const duration = 1200;
          const frameRate = 1000 / 60;
          const totalFrames = Math.round(duration / frameRate);
          let frame = 0;

          const timer = setInterval(() => {
            frame++;
            const progress = frame / totalFrames;
            const easeOutProgress = 1 - Math.pow(1 - progress, 3);
            const current = Math.round(easeOutProgress * value);

            setDisplayValue(current);

            if (frame >= totalFrames) {
              clearInterval(timer);
              setDisplayValue(value);
            }
          }, frameRate);
        }
      },
      { threshold: 0.2 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, [value, textValue, hasAnimated]);

  return (
    <div
      ref={containerRef}
      className="p-6 sm:p-7 rounded-[2.5rem] bg-[#fefae0] border border-[#01472e]/15 shadow-forest-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-forest relative group"
    >
      <div className="font-display text-4xl sm:text-5xl lg:text-6xl text-[#01472e] tracking-tight uppercase flex items-baseline">
        {textValue ? (
          <span>{textValue}</span>
        ) : (
          <span>
            {prefix}
            {displayValue.toLocaleString()}
            {suffix}
          </span>
        )}
      </div>

      <div className="mt-3 text-xs font-bold uppercase tracking-wide-label text-[#01472e]">
        {label}
      </div>

      {sublabel && (
        <div className="mt-1 text-[11px] text-[#01472e]/70 font-medium">
          {sublabel}
        </div>
      )}
    </div>
  );
};
