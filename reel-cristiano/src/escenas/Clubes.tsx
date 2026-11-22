import React from 'react';
import {AbsoluteFill, interpolate, spring, useCurrentFrame, useVideoConfig} from 'remotion';
import {C, fuente, fuenteTexto} from '../estilo';

const clubes = [
  {nombre: 'Sporting CP', anios: '2002–2003'},
  {nombre: 'Manchester United', anios: '2003–2009'},
  {nombre: 'Real Madrid', anios: '2009–2018'},
  {nombre: 'Juventus', anios: '2018–2021'},
  {nombre: 'Al Nassr', anios: '2023–hoy'},
];

export const Clubes: React.FC = () => {
  const f = useCurrentFrame();
  const {fps} = useVideoConfig();
  const linea = interpolate(f, [5, 95], [0, 100], {extrapolateRight: 'clamp'});
  return (
    <AbsoluteFill style={{justifyContent: 'center', alignItems: 'center'}}>
      <div style={{fontFamily: fuente, color: C.blanco, fontSize: 90, marginBottom: 70, opacity: spring({frame: f, fps})}}>
        SU <span style={{color: C.oro}}>CAMINO</span>
      </div>
      <div style={{position: 'relative', width: 820}}>
        <div style={{position: 'absolute', left: 28, top: 30, width: 6, height: `calc(${linea}% - 60px)`, background: C.rojo, borderRadius: 3}} />
        {clubes.map((c, i) => {
          const k = spring({frame: f - 8 - i * 16, fps, config: {damping: 14}});
          return (
            <div key={c.nombre} style={{display: 'flex', alignItems: 'center', gap: 50, height: 150, opacity: k, transform: `translateX(${(1 - k) * 120}px)`}}>
              <div style={{width: 62, height: 62, borderRadius: 31, background: i === 2 ? C.oro : C.rojo, border: `8px solid ${C.fondo}`, flexShrink: 0, zIndex: 1}} />
              <div>
                <div style={{fontFamily: fuente, fontSize: 72, color: C.blanco, lineHeight: 1}}>{c.nombre}</div>
                <div style={{fontFamily: fuenteTexto, fontSize: 36, color: C.gris, marginTop: 6}}>{c.anios}</div>
              </div>
            </div>
          );
        })}
      </div>
    </AbsoluteFill>
  );
};
