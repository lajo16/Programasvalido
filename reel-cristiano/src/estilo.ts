import {anton, inter400, inter700} from './fuentes-data';

// Fuentes embebidas (data URL) para que el render no dependa de internet
export const cssFuentes = `
@font-face { font-family: 'Anton'; src: url(${anton}) format('woff2'); font-weight: 400; font-display: block; }
@font-face { font-family: 'Inter'; src: url(${inter400}) format('woff2'); font-weight: 400; font-display: block; }
@font-face { font-family: 'Inter'; src: url(${inter700}) format('woff2'); font-weight: 700; font-display: block; }
`;

export const fuente = 'Anton, sans-serif';
export const fuenteTexto = 'Inter, sans-serif';

export const C = {
  fondo: '#0b0b0f',
  rojo: '#D97757',
  oro: '#F2C14E',
  blanco: '#F5F3EE',
  gris: '#8a8a95',
};
