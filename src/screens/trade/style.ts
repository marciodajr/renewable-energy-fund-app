import styled from 'styled-components/native';
import { normalize } from '~/utils/normalize';

export const Header = styled.View`
  flex: 1;
  flex-direction: row;
  margin-top: ${normalize(26)}px;
`;

export const HeaderLeft = styled.View`
  flex-grow: 1;
`;
export const HeaderRight = styled.View`
  flex-grow: 0;
`;

export const Stats = styled.View`
  flex: 1;
  flex-direction: row;
  margin-top: ${normalize(26)}px;
`;

export const StatsLeft = styled.View`
  width: 50%;
`;
export const StatsRight = styled.View`
  width: 50%;
`;

export const Portfolio = styled.View`
  flex: 1;
  flex-direction: row;
  margin-top: ${normalize(26)}px;
`;

export const PortfolioLeft = styled.View`
  flex-grow: 1;
`;
export const PortfolioRight = styled.View`
  flex-grow: 0;
`;

export const Disclaimer = styled.View`
  background: #f4f4f4;
  border-radius: ${normalize(4)}px;
  margin: ${normalize(30)}px 0px ${normalize(12)}px;
  padding: ${normalize(10)}px;
`;

export const Buttons = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-top: ${normalize(26)}px;
  width: 100%;
`;

export const ButtonLeft = styled.View`
  margin-right: 6px;
  width: ${normalize(136)}px;
`;
export const ButtonRight = styled.View`
  margin-left: 6px;
  width: ${normalize(136)}px;
`;
