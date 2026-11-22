import React from 'react';
import {AbsoluteFill, useCurrentFrame} from 'remotion';
import {C} from './estilo';

export const Fondo: React.FC = () => {
  const f = useCurrentFrame();
  const x = 50 + Math.sin(f / 40) * 20;
  const y = 40 + Math.cos(f / 55) * 15;
  return (
    <AbsoluteFill
      style={{
        background: `radial-gradient(circle at ${x}% ${y}%, #3a1a12 0%, ${C.fondo} 55%)`,
      }}
    >
      <AbsoluteFill
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.035) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
          transform: `translateY(${(f * 0.6) % 60}px)`,
        }}
      />
    </AbsoluteFill>
  );
};
