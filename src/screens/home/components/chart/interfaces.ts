export interface IContainer {
  marginLeft?: number;
  marginRight?: number;
}

export interface IChart extends IContainer {
  chartType: 'positive' | 'negative';
  data: { x: number; y: number }[];
  fundType: 'solar' | 'wind' | 'natural';
  moneyValue: number;
  onPress: () => void;
  percentValue: number;
}
