import styled from 'styled-components/native';
import { useNormalize } from '~/hooks/normalize';
import { ILinkBase } from './interfaces';

export const LinkBase = styled.Text<ILinkBase>`
  font-family: Sora-${(props) => props.fontWeight || 400};
  font-size: ${(props) => useNormalize(props.fontSize || 16)}px;
  color: ${(props) => props.color || '#A0A0A0'};
  margin-bottom: ${(props) => useNormalize(props.marginBottom || 0)}px;
  margin-top: ${(props) => useNormalize(props.marginTop || 0)}px;
  text-decoration: underline;
  text-align: ${(props) => props.algin || 'left'};
  width: 100%;
`;
