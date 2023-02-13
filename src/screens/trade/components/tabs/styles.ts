import styled from 'styled-components/native';
import { normalize } from '~/utils/normalize';
import { IItem } from './interfaces';

export const Tab = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-top: ${normalize(20)}px;
  width: 100%;
`;

export const Item = styled.Text<IItem>`
  color: ${(props) => (props.active ? '#000000' : '#A0A0A0')};
  font-family: 'Sora-600';
  font-size: ${normalize(14)}px;
`;

export const UnderItem = styled.View<IItem>`
  background-color: #770fdf;
  border-radius: ${normalize(3)}px;
  display: ${(props) => (!props.active ? 'none' : null)};
  height: ${normalize(2.5)}px;
  margin-top: ${normalize(5)}px;
`;
