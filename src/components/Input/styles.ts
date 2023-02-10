import styled from 'styled-components/native';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import { normalize } from '~/utils/normalize';

export const TextInput = styled.TextInput`
  background-color: #f4f4f4;
  border-radius: ${normalize(4)}px;
  font-family: 'Sora-400';
  font-size: ${normalize(14)}px;
  height: ${normalize(48)}px;
  margin-bottom: ${normalize(20)}px;
  min-width: 100%;
  padding: 0px ${normalize(10)}px;
`;

export const Label = styled.Text`
  color: #a0a0a0;
  font-family: 'Sora-400';
  font-size: ${normalize(11)}px;
  margin-bottom: ${normalize(5)}px;
`;

export const EyeIcon = styled(FontAwesome5).attrs({ name: 'eye' })`
  color: #a0a0a0;
  font-size: ${normalize(18)}px;
`;

export const EyeSlashIcon = styled(FontAwesome5).attrs({ name: 'eye-slash' })`
  color: #a0a0a0;
  font-size: ${normalize(18)}px;
`;

export const Touchable = styled.TouchableOpacity.attrs({ activeOpacity: 1 })`
  align-items: center;
  background-color: #f4f4f4;
  display: flex;
  height: ${normalize(48)}px;
  justify-content: center;
  position: absolute;
  right: ${normalize(0)}px;
  top: ${normalize(20)}px;
  width: ${normalize(48)}px;
`;
