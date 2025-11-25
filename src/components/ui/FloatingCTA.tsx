'use client';

import Button from './Button';

interface FloatingCTAProps {
  onClick: () => void;
}

export default function FloatingCTA({ onClick }: FloatingCTAProps) {
  return (
    <div className="fixed bottom-6 right-6 z-40 hidden lg:block">
      <Button onClick={onClick} size="large" className="shadow-2xl animate-pulse">
        📅 Book Now
      </Button>
    </div>
  );
}