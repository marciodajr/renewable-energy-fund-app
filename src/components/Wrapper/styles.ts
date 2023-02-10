import styled from 'styled-components/native';
import { useNormalize } from '~/hooks/normalize';
import { IWrapperBase } from './interfaces';

export const WrapperBase = styled.View<IWrapperBase>`
  align-items: ${(props) => (props.horizontalCentralized ? 'center' : 'flex-start')};
  justify-content: ${(props) => (props.verticalCentralized ? 'center' : 'flex-start')};
  flex: 1;
  padding-top: ${(props) => useNormalize(props.paddingTop || 0)}px;
  padding-left: ${useNormalize(20)}px;
  padding-right: ${useNormalize(20)}px;
  background-color: #ffffff;
`;

export const ScrollViewBase = styled.ScrollView`
  background-color: #ffffff;
`;
