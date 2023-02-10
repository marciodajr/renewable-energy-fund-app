import styled from 'styled-components/native';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import { useNormalize } from '~/hooks/normalize';

export const TextInput = styled.TextInput`
  background-color: #f4f4f4;
  border-radius: ${useNormalize(4)}px;
  font-family: 'Sora-400';
  font-size: ${useNormalize(14)}px;
  height: ${useNormalize(48)}px;
  margin-bottom: ${useNormalize(20)}px;
  min-width: 100%;
  padding: 0px ${useNormalize(10)}px;
`;

export const Label = styled.Text`
  color: #a0a0a0;
  font-family: 'Sora-400';
  font-size: ${useNormalize(11)}px;
  margin-bottom: ${useNormalize(5)}px;
`;

export const EyeIcon = styled(FontAwesome5).attrs({ name: 'eye' })`
  color: #a0a0a0;
  font-size: ${useNormalize(18)}px;
`;

export const EyeSlashIcon = styled(FontAwesome5).attrs({ name: 'eye-slash' })`
  color: #a0a0a0;
  font-size: ${useNormalize(18)}px;
`;

export const Touchable = styled.TouchableOpacity.attrs({ activeOpacity: 1 })`
  align-items: center;
  background-color: #f4f4f4;
  display: flex;
  height: ${useNormalize(48)}px;
  justify-content: center;
  position: absolute;
  right: ${useNormalize(0)}px;
  top: ${useNormalize(20)}px;
  width: ${useNormalize(48)}px;
`;
