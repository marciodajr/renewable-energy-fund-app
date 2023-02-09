import styled from 'styled-components/native';
import { IButtonBase } from './interfaces';

export const ButtonBase = styled.TouchableOpacity.attrs({ activeOpacity: 1 })<IButtonBase>`
  align-items: center;
  background: #770fdf;
  border-radius: 4px;
  display: flex;
  height: 58px;
  justify-content: center;
  margin-bottom: ${(props) => props.marginBottom || 0}px;
  margin-top: ${(props) => props.marginTop || 0}px;
  width: 100%;
`;

export const ButtonLabel = styled.Text`
  color: #ffffff;
  font-family: 'Sora-400';
`;
