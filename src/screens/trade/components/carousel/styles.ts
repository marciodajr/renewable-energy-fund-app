import styled from 'styled-components/native';
import { normalize } from '~/utils/normalize';

export const Scroll = styled.ScrollView`
  width: 100%;
  //border: 2px solid black;
  margin-top: ${normalize(20)}px;
  //min-height: auto;
`;

export const Container = styled.View`
  flex-direction: row;
  flex: 1;
  justify-content: space-between;
  min-width: ${normalize(450)}px;
`;

export const Item = styled.View`
  background: #ffffff;
  border: 1px solid #e6e6e6;
  border-radius: 4px;
  width: ${normalize(220)}px;
`;

export const ItemContent = styled.View`
  padding: ${normalize(12)}px;
`;
