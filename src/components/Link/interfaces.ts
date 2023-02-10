export interface ILinkBase {
  children: string;
  color?: `#${string}`;
  fontSize?: number;
  fontWeight?: 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800;
  marginBottom?: number;
  marginTop?: number;
  algin?: 'left' | 'center' | 'right';
}

export interface ILink extends ILinkBase {
  onPress: () => void;
}
