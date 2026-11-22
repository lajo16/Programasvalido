import React from 'react';
import {AbsoluteFill, interpolate, spring, useCurrentFrame, useVideoConfig, Easing} from 'remotion';
import {C, fuente, fuenteTexto} from '../estilo';

const datos = [
  {n: 900, mas: true, txt: 'goles oficiales', color: C.oro},
  {n: 5, mas: false, txt: 'Balones de Oro', color: C.blanco},
  {n: 5, mas: false, txt: 'Champions League', color: C.rojo},
];

export const Numeros: React.FC = () => {
  const f = useCurrentFrame();
  const {fps} = useVideoConfig();
  return (
    <AbsoluteFill style={{justifyContent: 'center', alignItems: 'center', gap: 70}}>
      <div style={{fontFamily: fuente, color: C.blanco, fontSize: 90, opacity: spring({frame: f, fps})}}>
        EN <span style={{color: C.rojo}}>NÚMEROS</span>
      </div>
      {datos.map((d, i) => {
        const ini = 10 + i * 22;
        const k = spring({frame: f - ini, fps, config: {damping: 13}});
        const valor = Math.round(
          interpolate(f, [ini, ini + 40], [0, d.n], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp', easing: Easing.out(Easing.cubic)})
        );
        return (
          <div
            key={d.txt}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 40,
              width: 860,
              padding: '30px 50px',
              borderRadius: 36,
              background: 'rgba(255,255,255,0.05)',
              border: '2px solid rgba(255,255,255,0.1)',
              transform: `translateX(${(1 - k) * (i % 2 ? 900 : -900)}px)`,
            }}
          >
            <div style={{fontFamily: fuente, fontSize: 150, color: d.color, minWidth: 270, lineHeight: 1}}>
              {valor}
              {d.mas ? '+' : ''}
            </div>
            <div style={{fontFamily: fuenteTexto, fontWeight: 700, fontSize: 52, color: C.blanco, lineHeight: 1.1}}>{d.txt}</div>
          </div>
        );
      })}
    </AbsoluteFill>
  );
};
