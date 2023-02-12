import * as React from 'react';
import { Feather } from '@expo/vector-icons';
import {
  EarnRewards,
  Header,
  HeaderLeft,
  HeaderRight,
  MoreContent,
  MoreContentLeft,
  MoreContentRight,
  Tips,
  TipsLeft,
  TipsRight
} from './styles';
import { LineChart } from './components/chart';
import { ScrollView } from 'react-native';
import { Text } from '~/components/Text';
import { Wrapper } from '~/components/Wrapper';
import { naturalData, solarData, windData } from './mocks';
import { normalize } from '~/utils/normalize';
import ImageSvg from './svg/tips.svg';
import { useLinkTo } from '@react-navigation/native';

export const HomeScreen = () => {
  const linkTo = useLinkTo();

  return (
    <Wrapper>
      <Text fontSize={12} color="#000000" marginBottom={5} marginTop={12}>
        Portfolio
      </Text>
      <Header>
        <HeaderLeft>
          <Text color="#000000" fontSize={21} fontWeight={600} marginBottom={-2}>
            $1,245.23
          </Text>
          <Text color="#0FDF8F" fontSize={14}>
            {' '}
            <Feather name="arrow-up-right" size={normalize(16)} color="#0FDF8F" />
            31.82%
          </Text>
        </HeaderLeft>
        <HeaderRight>
          <EarnRewards>
            <Text color="#770FDF" fontSize={11} fontWeight={600}>
              Earn Rewards
            </Text>
          </EarnRewards>
        </HeaderRight>
      </Header>
      <Text fontSize={18} fontWeight={600} color="#000000" marginBottom={20} marginTop={50}>
        Funds
      </Text>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        <LineChart
          onPress={() => linkTo('/trade')}
          chartType="positive"
          data={windData}
          fundType="wind"
          marginRight={15}
          moneyValue={1032.23}
          percentValue={3.51}
        />
        <LineChart
          onPress={() => null}
          chartType="negative"
          data={solarData}
          fundType="solar"
          marginRight={15}
          moneyValue={908.61}
          percentValue={0.13}
        />
        <LineChart
          onPress={() => null}
          chartType="positive"
          data={naturalData}
          fundType="natural"
          moneyValue={1122.05}
          percentValue={4.73}
        />
      </ScrollView>
      <Tips>
        <TipsLeft>
          <Text color="#ffffff" fontWeight={600}>
            Learn more about{'\n'}carbon credits
          </Text>
          <Text color="#ffffff" fontSize={12} marginTop={10}>
            Check out our top tips!
          </Text>
        </TipsLeft>
        <TipsRight>
          <ImageSvg width={94} height={87} />
        </TipsRight>
      </Tips>
      <MoreContent>
        <MoreContentLeft>
          <Text color="#000000" fontWeight={600} fontSize={12}>
            Why should you{'\n'}invest here?
          </Text>
        </MoreContentLeft>
        <MoreContentRight></MoreContentRight>
      </MoreContent>
    </Wrapper>
  );
};
