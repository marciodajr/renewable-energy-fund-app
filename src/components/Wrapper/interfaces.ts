import { ReactNode } from 'react';

export interface IWrapperBase {
  horizontalCentralized?: boolean;
  verticalCentralized?: boolean;
  paddingTop?: number;
}

export interface IWrapper extends IWrapperBase {
  children: ReactNode;
}
