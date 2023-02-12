import { VictoryAxis, VictoryChart, VictoryLine } from 'victory-native';
import { Container } from './styles';
import { Feather } from '@expo/vector-icons';
import { Text } from '~/components/Text';
import { normalize } from '~/utils/normalize';
import { IChart } from './interfaces';
import { TouchableOpacity } from 'react-native';
import { Svg } from 'react-native-svg';

export const LineChart = (props: IChart) => {
  const { chartType, data, fundType, onPress, moneyValue, percentValue, marginLeft, marginRight } = props;

  let fundTitle = null;
  let fundIcon = null;
  let percentIcon = null;
  let chartTypeColor = '#0FDF8F';

  if (chartType === 'positive') {
    percentIcon = <Feather name="arrow-up-right" size={normalize(15)} color="#0FDF8F" />;
  }

  if (chartType === 'negative') {
    chartTypeColor = '#EE8688';
    percentIcon = <Feather name="arrow-down-right" size={normalize(16)} color="#EE8688" />;
  }

  switch (fundType) {
    case 'natural':
      fundTitle = 'Natural Fund';
      fundIcon = <Feather name="feather" size={24} color="#0FDF8F" />;
      break;
    case 'solar':
      fundTitle = 'Solar Fund';
      fundIcon = <Feather name="sun" size={24} color="#F0A719" />;
      break;
    case 'wind':
      fundTitle = 'Wind Fund';
      fundIcon = <Feather name="wind" size={24} color="#4A88D0" />;
      break;
  }

  return (
    <TouchableOpacity activeOpacity={1} onPress={() => onPress()}>
      <Container marginLeft={marginLeft} marginRight={marginRight}>
        {fundIcon}
        <Text fontWeight={600} fontSize={12} color="#000000" marginTop={7} marginBottom={14}>
          {fundTitle}
        </Text>
        <Svg height={normalize(40)} width={normalize(80)}>
          <VictoryChart
            padding={0}
            height={normalize(40)}
            width={normalize(80)}
            minDomain={{ y: -0.2 }}
            maxDomain={{ y: 1.6 }}
          >
            <VictoryLine
              interpolation="natural"
              style={{
                data: {
                  stroke: chartTypeColor,
                  strokeWidth: 2
                }
              }}
              data={data}
            />
            <VictoryAxis
              style={{
                grid: { display: 'none' },
                axis: { display: 'none' },
                ticks: { display: 'none' },
                tickLabels: { display: 'none' }
              }}
            />
          </VictoryChart>
        </Svg>
        <Text marginTop={4}>
          <Text fontWeight={600} fontSize={12} color="#000000">
            ${moneyValue}
          </Text>
          {'  '}
          <Text fontWeight={600} fontSize={12} color={chartTypeColor}>
            {percentIcon} {percentValue}%
          </Text>
        </Text>
      </Container>
    </TouchableOpacity>
  );
};
