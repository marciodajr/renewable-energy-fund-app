import * as React from 'react';
import { Text } from '~/components/Text';
import { Wrapper } from '~/components/Wrapper';
import {
  ButtonLeft,
  ButtonRight,
  Buttons,
  Disclaimer,
  Header,
  HeaderLeft,
  HeaderRight,
  Portfolio,
  PortfolioLeft,
  PortfolioRight,
  Stats,
  StatsLeft,
  StatsRight
} from './style';
import { Feather } from '@expo/vector-icons';
import { normalize } from '~/utils/normalize';
import { LineChartTrade } from './components/chart';
import { windData } from './mocks';
import { Tabs } from './components/tabs';
import { Carousel } from './components/carousel';
import { Button } from '~/components/Button';
import { ButtonTrade } from './components/button';

export const TradeScreen = () => {
  return (
    <Wrapper paddingBottom={12}>
      <Header>
        <HeaderLeft>
          <Text color="#000000" fontSize={24} fontWeight={600}>
            $18.23
          </Text>
          <Text color="#0FDF8F" fontSize={14}>
            <Feather name="arrow-up-right" size={normalize(16)} color="#0FDF8F" /> 31.5% ($1.21)
          </Text>
        </HeaderLeft>
        <HeaderRight>
          <Text color="#000000" fontSize={24} fontWeight={600}>
            2023
          </Text>
        </HeaderRight>
      </Header>
      <LineChartTrade data={windData} />
      <Text color="#000000" fontSize={17} fontWeight={600}>
        Info & Stats
      </Text>
      <Stats>
        <StatsLeft>
          <Text fontSize={14}>
            AUM <Feather name="info" size={normalize(14)} color="#A0A0A0" />
          </Text>
          <Text color="#000000" fontSize={14} marginTop={10}>
            $430.88m
          </Text>
        </StatsLeft>
        <StatsRight>
          <Text fontSize={14}>
            Issue Date <Feather name="info" size={normalize(14)} color="#A0A0A0" />
          </Text>
          <Text color="#000000" fontSize={14} marginTop={10}>
            18/04/2022
          </Text>
        </StatsRight>
      </Stats>
      <Stats>
        <StatsLeft>
          <Text fontSize={14}>
            Vintage Range <Feather name="info" size={normalize(14)} color="#A0A0A0" />
          </Text>
          <Text color="#000000" fontSize={14} marginTop={10}>
            2019 – 2022
          </Text>
        </StatsLeft>
        <StatsRight>
          <Text fontSize={14}>
            TER <Feather name="info" size={normalize(14)} color="#A0A0A0" />
          </Text>
          <Text color="#000000" fontSize={14} marginTop={10}>
            0.15%
          </Text>
        </StatsRight>
      </Stats>
      <Stats>
        <StatsLeft>
          <Text fontSize={14}>
            Price at Close <Feather name="info" size={normalize(14)} color="#A0A0A0" />
          </Text>
          <Text color="#000000" fontSize={14} marginTop={10}>
            $17.68
          </Text>
        </StatsLeft>
        <StatsRight>
          <Text fontSize={14}>
            Price at Open <Feather name="info" size={normalize(14)} color="#A0A0A0" />
          </Text>
          <Text color="#000000" fontSize={14} marginTop={10}>
            $17.74
          </Text>
        </StatsRight>
      </Stats>
      <Text color="#000000" fontSize={17} fontWeight={600} marginTop={40}>
        Fund Breakdown
      </Text>
      <Tabs />
      <Carousel />
      <Text color="#000000" fontSize={17} fontWeight={600} marginTop={64}>
        <Feather name="pie-chart" size={normalize(20)} /> Your Portfolio
      </Text>
      <Portfolio>
        <PortfolioLeft>
          <Text color="#000000" fontSize={24} fontWeight={600}>
            18 credits
          </Text>
          <Text color="#0FDF8F" fontSize={14}>
            <Feather name="arrow-up-right" size={normalize(16)} color="#0FDF8F" /> 8.41%
          </Text>
        </PortfolioLeft>
        <PortfolioRight>
          <Text algin="right" color="#000000" fontSize={24} fontWeight={600}>
            $328.14
          </Text>
          <Text algin="right" color="#0FDF8F" fontSize={14}>
            Last purchase 28d ago
          </Text>
        </PortfolioRight>
      </Portfolio>
      <Buttons>
        <ButtonLeft>
          <ButtonTrade label="Sell" onPress={() => null} color="white" />
        </ButtonLeft>
        <ButtonRight>
          <ButtonTrade label="Retire credits" onPress={() => null} color="green" />
        </ButtonRight>
      </Buttons>
      <Text fontSize={11} marginTop={12}>
        You’ve previously retired 28 credits of this asset
      </Text>
      <Disclaimer>
        <Text fontSize={12}>
          Please note that prices are for reference only and may vary at the time of excecuting a buy or sell order.
          {'\n\n'}
          The information provided is not investment advice, and should not be used as a recommendation to buy or sell
          assets.
        </Text>
      </Disclaimer>
      <Button label="Buy" marginTop={25} onPress={() => null} />
    </Wrapper>
  );
};
