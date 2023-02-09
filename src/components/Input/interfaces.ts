export interface IInput {
  defaultValue?: string;
  label?: string;
  onChange: (value: string) => void;
  placeholder?: string;
  type: "text" | "password";
}