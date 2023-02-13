import styled from 'styled-components/native';
import { normalize } from '~/utils/normalize';
import { IButtonBase } from './interfaces';

export const ButtonBase = styled.TouchableOpacity<IButtonBase>`
  align-items: center;
  background: ${(props) => (!props.disabled ? '#770fdf' : '#A0A0A0')};
  border-radius: ${normalize(4)}px;
  display: flex;
  height: ${normalize(58)}px;
  justify-content: center;
  margin-bottom: ${(props) => normalize(props.marginBottom || 0)}px;
  margin-top: ${(props) => normalize(props.marginTop || 0)}px;
  width: 100%;
`;

export const ButtonLabel = styled.Text`
  color: #ffffff;
  font-family: 'Sora-500';
  font-size: ${normalize(16)}px;
`;
