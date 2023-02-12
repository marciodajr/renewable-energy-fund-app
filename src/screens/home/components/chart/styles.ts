import styled from 'styled-components/native';
import { normalize } from '~/utils/normalize';
import { IContainer } from './interfaces';

export const Container = styled.View<IContainer>`
  background: #ffffff;
  border-radius: ${normalize(4)}px;
  border: ${normalize(1)}px solid #e6e6e6;
  height: ${normalize(145)}px;
  width: ${normalize(140)}px;
  padding: ${normalize(12)}px;
  margin-right: ${(props) => normalize(props.marginRight || 0)}px;
  margin-left: ${(props) => normalize(props.marginLeft || 0)}px;
`;
