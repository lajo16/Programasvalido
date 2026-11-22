import React from 'react';
import {AbsoluteFill, Sequence, interpolate, useCurrentFrame} from 'remotion';
import {Fondo} from './Fondo';
import {cssFuentes} from './estilo';
import {Gancho} from './escenas/Gancho';
import {Numeros} from './escenas/Numeros';
import {Clubes} from './escenas/Clubes';
import {Cierre} from './escenas/Cierre';

// Fundido de entrada/salida para cada escena
const Escena: React.FC<{dur: number; children: React.ReactNode}> = ({dur, children}) => {
  const f = useCurrentFrame();
  const o = interpolate(f, [0, 8, dur - 8, dur], [0, 1, 1, 0], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp'});
  return <AbsoluteFill style={{opacity: o}}>{children}</AbsoluteFill>;
};

const escenas = [
  {C: Gancho, dur: 100},
  {C: Numeros, dur: 130},
  {C: Clubes, dur: 150},
  {C: Cierre, dur: 130},
];

export const Reel: React.FC = () => {
  let desde = 0;
  return (
    <AbsoluteFill>
      <style>{cssFuentes}</style>
      <Fondo />
      {escenas.map(({C, dur}, i) => {
        const s = (
          <Sequence key={i} from={desde} durationInFrames={dur}>
            {i === escenas.length - 1 ? <C /> : <Escena dur={dur}><C /></Escena>}
          </Sequence>
        );
        desde += dur;
        return s;
      })}
    </AbsoluteFill>
  );
};
