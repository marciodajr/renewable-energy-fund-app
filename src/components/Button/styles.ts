import styled from 'styled-components/native';
import { useNormalize } from '~/hooks/normalize';
import { IButtonBase } from './interfaces';

export const ButtonBase = styled.TouchableOpacity<IButtonBase>`
  align-items: center;
  background: #770fdf;
  border-radius: ${useNormalize(4)}px;
  display: flex;
  height: ${useNormalize(58)}px;
  justify-content: center;
  margin-bottom: ${(props) => useNormalize(props.marginBottom || 0)}px;
  margin-top: ${(props) => useNormalize(props.marginTop || 0)}px;
  width: 100%;
`;

export const ButtonLabel = styled.Text`
  color: #ffffff;
  font-family: 'Sora-400';
  font-size: ${useNormalize(16)}px;
`;
