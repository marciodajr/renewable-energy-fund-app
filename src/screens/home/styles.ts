import styled from 'styled-components/native';
import { normalize } from '~/utils/normalize';

export const Header = styled.View`
  flex: 1;
  border: 0px solid black;
  flex-direction: row;
`;

export const HeaderLeft = styled.View`
  flex-grow: 1;
  flex-direction: row;
  align-items: flex-end;
`;

export const HeaderRight = styled.View`
  flex-grow: 0;
`;

export const EarnRewards = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: ${normalize(8)}px ${normalize(9)}px;
  background: #f7efff;
  border-radius: ${normalize(4)}px;
`;

export const Tips = styled.View`
  flex: 1;
  flex-direction: row;
  background: #770fdf;
  border-radius: ${normalize(10)}px;
  width: 100%;
  padding: ${normalize(20)}px;
  margin-top: ${normalize(20)}px;
`;

export const TipsLeft = styled.View`
  flex-grow: 1;
`;

export const TipsRight = styled.View`
  flex-grow: 0;
  justify-items: flex-end;
`;

export const MoreContent = styled.View`
  flex: 1;
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  margin: ${normalize(20)}px 0;
`;

export const MoreContentLeft = styled.View`
  border-radius: 10px;
  width: ${normalize(135)}px;
  min-height: ${normalize(215)}px;
  background: #f4f4f4;
  padding: ${normalize(20)}px ${normalize(12)}px;
`;

export const MoreContentRight = styled.View`
  border-radius: 10px;
  width: ${normalize(135)}px;
  min-height: ${normalize(215)}px;
  background: #f4f4f4;
`;
