import styled from "styled-components/native";
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';

export const TextInput = styled.TextInput`
  background-color: #F4F4F4;
  border-radius: 4px;
  font-family: 'Sora-400';
  font-size: 14px;
  height: 48px;
  margin-bottom: 20px;
  min-width: 100%;
  padding: 15px 10px;
`

export const Label = styled.Text`
  color:#A0A0A0;
  font-family: 'Sora-400';
  font-size: 12px;
  margin-bottom: 5px;
`

export const EyeIcon = styled(FontAwesome5).attrs({ name: 'eye' })`
  color: #A0A0A0;
  font-size: 18px;
`

export const EyeSlashIcon = styled(FontAwesome5).attrs({ name: 'eye-slash' })`
  color: #A0A0A0;
  font-size: 18px;
`

export const Touchable = styled.TouchableOpacity.attrs({ activeOpacity: 1 })`
  background-color: #F4F4F4;
  position: absolute;
  right: 12px;
  top: 34px;
`