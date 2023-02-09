export interface IButton {
  label: string;
  marginBottom?: number;
  marginTop?: number;
  onPress: () => void;
}

export interface IButtonBase {
  marginBottom: number;
  marginTop: number;
}
