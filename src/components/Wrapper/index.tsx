import { useState } from 'react';
import { LayoutChangeEvent, View } from 'react-native';
import { normalize } from '~/utils/normalize';
import { IWrapper } from './interfaces';
import { ScrollViewBase, WrapperBase } from './styles';

export const Wrapper = (props: IWrapper) => {
  const { children, horizontalCentralized, paddingTop, verticalCentralized } = props;
  const [scrollEnabled, setScrollEnabled] = useState(false);

  const handleOnLayout = (event: LayoutChangeEvent) => {
    const { height } = event.nativeEvent.layout;
    const heightNormalized = normalize(height, 'height');
    const heightBase = normalize(736, 'height');
    setScrollEnabled(heightNormalized > heightBase);
  };

  return (
    <ScrollViewBase
      scrollEnabled={scrollEnabled}
      showsVerticalScrollIndicator={false}
      keyboardDismissMode="interactive"
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
    </ScrollViewBase>
  );
};
