export interface IButtonBase {
  marginBottom?: number;
  marginTop?: number;
  color?: 'white' | 'green';
}

export interface IButton extends IButtonBase {
  label: string;
  onPress: () => void;
}
