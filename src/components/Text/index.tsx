import { ITextBase } from './interfaces';
import { TextBase } from './styles';

export const Text = (props: ITextBase) => {
  const { fontSize, fontWeight } = props;

  return <TextBase fontSize={fontSize} fontWeight={fontWeight} />;
};
