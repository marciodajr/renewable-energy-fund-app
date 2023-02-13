import { IButton } from './interfaces';
import { ButtonBase, ButtonLabel } from './styles';

export const ButtonTrade = (props: IButton) => {
  const { color, label, onPress, marginBottom, marginTop } = props;

  return (
    <ButtonBase color={color} onPress={onPress} marginBottom={marginBottom} marginTop={marginTop}>
      <ButtonLabel color={color}>{label}</ButtonLabel>
    </ButtonBase>
  );
};
