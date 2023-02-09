import { ITextBase } from './interfaces';
import { TextBase } from './styles';

export const Text = (props: ITextBase) => {
  const { color, children, fontSize, fontWeight, marginBottom, marginTop } = props;

  return (
    <TextBase
      color={color}
      fontSize={fontSize}
      fontWeight={fontWeight}
      marginBottom={marginBottom}
      marginTop={marginTop}
    >
      {children}
    </TextBase>
  );
};
