import React from 'react';
import {Composition} from 'remotion';
import {Reel} from './Reel';

export const Root: React.FC = () => (
  <Composition id="Cristiano" component={Reel} durationInFrames={510} fps={30} width={1080} height={1920} />
);
