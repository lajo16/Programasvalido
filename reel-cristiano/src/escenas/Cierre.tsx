import React from 'react';
import {AbsoluteFill, interpolate, spring, useCurrentFrame, useVideoConfig} from 'remotion';
import {C, fuente, fuenteTexto} from '../estilo';

export const Cierre: React.FC = () => {
  const f = useCurrentFrame();
  const {fps} = useVideoConfig();
  const k = spring({frame: f, fps, config: {damping: 8, mass: 0.8}});
  const k2 = spring({frame: f - 30, fps});
  const temblor = f < 40 ? Math.sin(f * 2.2) * (40 - f) * 0.4 : 0;
  const pulso = 1 + Math.sin(f / 6) * 0.02;
  const fin = interpolate(f, [100, 120], [1, 0], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp'});
  return (
    <AbsoluteFill style={{justifyContent: 'center', alignItems: 'center', opacity: fin}}>
      <div style={{fontFamily: fuenteTexto, color: C.blanco, fontSize: 54, fontWeight: 700, opacity: k2, marginBottom: 30, textAlign: 'center'}}>
        Euro 2016 · 2 Nations League
        <br />
        Máximo goleador de selecciones
      </div>
      <div
        style={{
          fontFamily: fuente,
          fontSize: 250,
          color: C.oro,
          transform: `scale(${k * pulso}) translateX(${temblor}px)`,
          textShadow: `0 0 80px rgba(242,193,78,0.5)`,
        }}
      >
        SIUUU!
      </div>
      <div
        style={{
          marginTop: 120,
          fontFamily: fuenteTexto,
          fontSize: 34,
          color: C.gris,
          opacity: k2,
          display: 'flex',
          alignItems: 'center',
          gap: 14,
        }}
      >
        Hecho con <span style={{background: C.rojo, color: C.blanco, padding: '4px 16px', borderRadius: 10, fontWeight: 700}}>Claude</span> + Remotion
      </div>
    </AbsoluteFill>
  );
};
