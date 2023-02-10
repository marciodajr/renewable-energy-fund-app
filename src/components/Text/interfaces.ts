import { ReactNode } from 'react';

export interface ITextBase {
  children: string | ReactNode;
  color?: `#${string}`;
  fontSize?: number;
  fontWeight?: 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800;
  marginBottom?: number;
  marginTop?: number;
  algin?: 'left' | 'center' | 'right';
}
