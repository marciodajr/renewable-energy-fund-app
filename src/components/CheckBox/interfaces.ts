export interface ICheckBoxBase {
  checked: boolean;
}

export interface ICheckBox {
  onCheck: (checked: boolean) => void;
}
