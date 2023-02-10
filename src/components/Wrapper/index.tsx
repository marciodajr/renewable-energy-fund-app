import { IWrapper } from './interfaces';
import { WrapperBase } from './styles';

export const Wrapper = (props: IWrapper) => {
  const { children, horizontalCentralized, paddingTop, verticalCentralized } = props;

  return (
    <WrapperBase
      horizontalCentralized={horizontalCentralized}
      paddingTop={paddingTop}
      verticalCentralized={verticalCentralized}
    >
      {children}
    </WrapperBase>
  );
};
