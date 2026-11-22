import React from 'react';
import {AbsoluteFill, interpolate, spring, useCurrentFrame, useVideoConfig} from 'remotion';
import {C, fuente, fuenteTexto} from '../estilo';

export const Gancho: React.FC = () => {
  const f = useCurrentFrame();
  const {fps} = useVideoConfig();
  const k = spring({frame: f, fps, config: {damping: 12}});
  const k2 = spring({frame: f - 18, fps, config: {damping: 14}});
  const k3 = spring({frame: f - 34, fps});
  const brillo = interpolate(f, [0, 90], [-120, 220]);
  return (
    <AbsoluteFill style={{justifyContent: 'center', alignItems: 'center'}}>
      <div style={{fontFamily: fuenteTexto, color: C.gris, fontSize: 40, letterSpacing: 12, opacity: k2, marginBottom: 20}}>
        EL BICHO
      </div>
      <div
        style={{
          fontFamily: fuente,
          fontSize: 460,
          lineHeight: 1,
          color: 'transparent',
          backgroundImage: `linear-gradient(110deg, ${C.oro} ${brillo - 60}%, #fff8dc ${brillo}%, ${C.oro} ${brillo + 60}%)`,
          WebkitBackgroundClip: 'text',
          backgroundClip: 'text',
          transform: `scale(${0.4 + k * 0.6}) rotate(${(1 - k) * -12}deg)`,
          opacity: k,
          filter: 'drop-shadow(0 20px 60px rgba(242,193,78,0.35))',
        }}
      >
        CR7
      </div>
      <div
        style={{
          fontFamily: fuente,
          fontSize: 110,
          color: C.blanco,
          transform: `translateY(${(1 - k2) * 80}px)`,
          opacity: k2,
          textAlign: 'center',
          lineHeight: 1,
        }}
      >
        CRISTIANO
        <br />
        <span style={{display: 'inline-block', marginTop: 18, background: C.rojo, padding: '6px 28px', borderRadius: 16}}>RONALDO</span>
      </div>
      <div style={{fontFamily: fuenteTexto, color: C.blanco, fontSize: 38, marginTop: 50, opacity: k3}}>
        Madeira, Portugal · 1985
      </div>
    </AbsoluteFill>
  );
};
