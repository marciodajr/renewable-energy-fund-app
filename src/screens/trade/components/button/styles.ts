import styled from 'styled-components/native';
import { normalize } from '~/utils/normalize';
import { IButtonBase } from './interfaces';

export const ButtonBase = styled.TouchableOpacity<IButtonBase>`
  align-items: center;
  background: ${(props) => (props.color === 'white' ? '#ffffff' : '#0FDF8F')};
  border: ${(props) => (props.color === 'white' ? '#CFCFCF' : '#0FDF8F')} solid 1px;
  border-radius: ${normalize(4)}px;
  display: flex;
  height: ${normalize(58)}px;
  justify-content: center;
  margin-bottom: ${(props) => normalize(props.marginBottom || 0)}px;
  margin-top: ${(props) => normalize(props.marginTop || 0)}px;
  width: 100%;
`;

export const ButtonLabel = styled.Text<IButtonBase>`
  color: ${(props) => (props.color === 'white' ? '#770FDF' : '#ffffff')};
  font-family: 'Sora-500';
  font-size: ${normalize(16)}px;
`;
