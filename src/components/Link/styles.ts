import styled from 'styled-components/native';
import { ILinkBase } from './interfaces';

export const LinkBase = styled.Text<ILinkBase>`
  font-family: Sora-${(props) => props.fontWeight || 400};
  font-size: ${(props) => props.fontSize || 16}px;
  color: ${(props) => props.color || '#A0A0A0'};
  margin-bottom: ${(props) => props.marginBottom || 0}px;
  margin-top: ${(props) => props.marginTop || 0}px;
  text-decoration: underline;
`;
