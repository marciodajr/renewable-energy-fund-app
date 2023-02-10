import styled from 'styled-components/native';
import { normalize } from '~/utils/normalize';
import { ICheckBoxBase } from './interfaces';
import { Ionicons } from '@expo/vector-icons';

export const CheckBoxBase = styled.View<ICheckBoxBase>`
  width: ${normalize(20)}px;
  height: ${normalize(20)}px;
  border: ${normalize(2)}px solid ${(props) => (props.checked ? '#770fdf' : '#e6e6e6')};
  border-radius: ${normalize(2)}px;
  background-color: ${(props) => (props.checked ? '#770fdf' : '#ffffff')};
  justify-content: center;
  align-items: center;
`;

export const CheckIconBase = styled(Ionicons).attrs({ name: 'checkmark-sharp' })`
  font-size: ${normalize(15)}px;
  color: #ffffff;
`;
