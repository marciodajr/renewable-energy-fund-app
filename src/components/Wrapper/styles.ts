import styled from 'styled-components/native';
import { normalize } from '~/utils/normalize';
import { IWrapperBase } from './interfaces';

export const WrapperBase = styled.View<IWrapperBase>`
  align-items: ${(props) => (props.horizontalCentralized ? 'center' : 'flex-start')};
  justify-content: ${(props) => (props.verticalCentralized ? 'center' : 'flex-start')};
  flex: 1;
  padding-top: ${(props) => normalize(props.paddingTop || 0)}px;
  padding-bottom: ${(props) => normalize(props.paddingBottom || 0)}px;
  padding-left: ${normalize(20)}px;
  padding-right: ${normalize(20)}px;
  background-color: #ffffff;
`;

export const ScrollViewBase = styled.ScrollView`
  background-color: #ffffff;
`;
