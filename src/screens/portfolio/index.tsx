import * as React from 'react';
import { Text } from '~/components/Text';
import { Wrapper } from '~/components/Wrapper';

export const PortfolioScreen = () => {
  return (
    <Wrapper paddingTop={120}>
      <Text fontSize={24} fontWeight={600} marginBottom={12}>
        Lorem Ipsum
      </Text>
      <Text fontSize={14}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
        laborum
      </Text>
    </Wrapper>
  );
};
