import styled from 'styled-components/native';
import { normalize } from '~/utils/normalize';
import { ITextBase } from './interfaces';

export const TextBase = styled.Text<ITextBase>`
  font-family: Sora-${(props) => props.fontWeight || 400};
  font-size: ${(props) => normalize(props.fontSize || 16)}px;
  color: ${(props) => props.color || '#A0A0A0'};
  margin-bottom: ${(props) => normalize(props.marginBottom || 0)}px;
  margin-top: ${(props) => normalize(props.marginTop || 0)}px;
  text-align: ${(props) => props.algin || 'left'};
  width: 100%;
`;
