import { Svg } from 'react-native-svg';
import { VictoryAxis, VictoryChart, VictoryLine } from 'victory-native';
import { Text } from '~/components/Text';
import { normalize } from '~/utils/normalize';
import { IChart } from './interfaces';
import { Button, ButtonActive, Container, GroupButton } from './styles';

export const LineChartTrade = (props: IChart) => {
  const { data } = props;

  return (
    <Container>
      <VictoryChart padding={0} height={normalize(153)}>
        <VictoryLine
          interpolation="linear"
          style={{
            data: {
              stroke: '#0FDF8F',
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

      <GroupButton>
        <Button>
          <Text fontWeight={500} fontSize={14}>
            1h
          </Text>
        </Button>
        <ButtonActive>
          <Text color="#770FDF" fontWeight={500} fontSize={14}>
            1d
          </Text>
        </ButtonActive>
        <Button>
          <Text fontWeight={500} fontSize={14}>
            1w
          </Text>
        </Button>
        <Button>
          <Text fontWeight={500} fontSize={14}>
            1m
          </Text>
        </Button>
        <Button>
          <Text fontWeight={500} fontSize={14}>
            1y
          </Text>
        </Button>
        <Button>
          <Text fontWeight={500} fontSize={14}>
            All
          </Text>
        </Button>
      </GroupButton>
    </Container>
  );
};
