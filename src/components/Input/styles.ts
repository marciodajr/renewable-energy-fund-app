import styled from 'styled-components/native';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';

export const TextInput = styled.TextInput`
  background-color: #f4f4f4;
  border-radius: 4px;
  font-family: 'Sora-400';
  font-size: 14px;
  height: 48px;
  margin-bottom: 20px;
  min-width: 100%;
  padding: 15px 10px;
`;

export const Label = styled.Text`
  color: #a0a0a0;
  font-family: 'Sora-400';
  font-size: 12px;
  margin-bottom: 5px;
`;

export const EyeIcon = styled(FontAwesome5).attrs({ name: 'eye' })`
  color: #a0a0a0;
  font-size: 18px;
`;

export const EyeSlashIcon = styled(FontAwesome5).attrs({ name: 'eye-slash' })`
  color: #a0a0a0;
  font-size: 18px;
`;

export const Touchable = styled.TouchableOpacity.attrs({ activeOpacity: 1 })`
  background-color: #f4f4f4;
  position: absolute;
  right: 12px;
  top: 34px;
`;
