export interface IInput {
  onChange: (value: string) => void;
  type: "text" | "password";
  defaultValue?: string;
  placeholder?: string;
  label?: string;
}