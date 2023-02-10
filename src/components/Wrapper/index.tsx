import { useState } from 'react';
import { LayoutChangeEvent, ScrollView, View } from 'react-native';
import { useNormalize } from '~/hooks/normalize';
import { IWrapper } from './interfaces';
import { WrapperBase } from './styles';

export const Wrapper = (props: IWrapper) => {
  const { children, horizontalCentralized, paddingTop, verticalCentralized } = props;
  const [scrollEnabled, setScrollEnabled] = useState(false);

  const handleOnLayout = (event: LayoutChangeEvent) => {
    const { height } = event.nativeEvent.layout;
    const heightNormalized = useNormalize(height, 'height');
    const heightBase = useNormalize(736, 'height');
    setScrollEnabled(heightNormalized > heightBase);
  };

  return (
    <ScrollView
      scrollEnabled={scrollEnabled}
      showsVerticalScrollIndicator={false}
      keyboardDismissMode="on-drag"
      style={{ backgroundColor: '#ffffff' }}
    >
      <View onLayout={handleOnLayout}>
        <WrapperBase
          horizontalCentralized={horizontalCentralized}
          paddingTop={paddingTop}
          verticalCentralized={verticalCentralized}
        >
          {children}
        </WrapperBase>
      </View>
    </ScrollView>
  );
};
