import styled from 'styled-components/native';
import { ITextBase } from './interfaces';

export const TextBase = styled.Text<ITextBase>`
  font-family: Sora-${(props) => props.fontWeight || 400};
  font-size: ${(props) => props.fontSize || 16}px;
  color: ${(props) => props.color || '#000000'};
`;
