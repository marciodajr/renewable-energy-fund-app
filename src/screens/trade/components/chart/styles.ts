import styled from 'styled-components/native';
import { normalize } from '~/utils/normalize';

export const Container = styled.View`
  left: -${normalize(20)}px;
  margin-bottom: ${normalize(40)}px;
`;

export const GroupButton = styled.View`
  flex-direction: row;
  justify-content: space-around;
  margin-top: ${normalize(20)}px;
`;

export const Button = styled.View`
  align-items: center;
  height: ${normalize(35)}px;
  justify-content: center;
  padding: 8px 9px;
  width: ${normalize(35)}px;
`;

export const ButtonActive = styled.View`
  align-items: center;
  background: #f7efff;
  border-radius: ${normalize(4)}px;
  height: ${normalize(35)}px;
  justify-content: center;
  padding: ${normalize(8)}px ${normalize(9)}px;
  width: ${normalize(35)}px;
`;
