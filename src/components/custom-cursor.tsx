
"use client";

import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { useIsMobile } from '@/hooks/use-mobile';

export function CustomCursor() {
  const isMobile = useIsMobile();
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [isHovering, setIsHovering] = useState(false);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (isMobile || !isClient) return;

    const onMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const onMouseEnter = () => setIsHovering(true);
    const onMouseLeave = () => setIsHovering(false);

    document.addEventListener('mousemove', onMouseMove);

    const interactiveElements = document.querySelectorAll('a, button, input, textarea, [role="button"]');
    interactiveElements.forEach(el => {
      el.addEventListener('mouseenter', onMouseEnter);
      el.addEventListener('mouseleave', onMouseLeave);
    });

    return () => {
      document.removeEventListener('mousemove', onMouseMove);
      interactiveElements.forEach(el => {
        el.removeEventListener('mouseenter', onMouseEnter);
        el.removeEventListener('mouseleave', onMouseLeave);
      });
    };
  }, [isMobile, isClient]);

  if (!isClient || isMobile) {
    return null;
  }

  return (
    <>
      <div
        className={cn(
          'pointer-events-none fixed -translate-x-1/2 -translate-y-1/2 z-[9999] rounded-full transition-transform duration-200',
          isHovering ? 'scale-150 bg-primary/50' : 'bg-primary'
        )}
        style={{ left: `${position.x}px`, top: `${position.y}px`, width: '8px', height: '8px' }}
      />
      <div
        className="pointer-events-none fixed -translate-x-1/2 -translate-y-1/2 z-[9999] rounded-full border-2 border-primary transition-all duration-300"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          width: isHovering ? '48px' : '32px',
          height: isHovering ? '48px' : '32px',
        }}
      />
    </>
  );
}
