import { IButton } from './interfaces';
import { ButtonBase, ButtonLabel } from './styles';

export const Button = (props: IButton) => {
  const { label, onPress, marginBottom, marginTop } = props;

  return (
    <ButtonBase onPress={onPress} marginBottom={marginBottom} marginTop={marginTop} activeOpacity={1}>
      <ButtonLabel>{label}</ButtonLabel>
    </ButtonBase>
  );
};
