import { TouchableOpacity } from 'react-native';
import { ILink } from './interfaces';
import { LinkBase } from './styles';

export const Link = (props: ILink) => {
  const { algin, color, children, fontSize, fontWeight, marginBottom, marginTop, onPress } = props;
  return (
    <TouchableOpacity activeOpacity={1} onPress={onPress}>
      <LinkBase
        algin={algin}
        color={color}
        fontSize={fontSize}
        fontWeight={fontWeight}
        marginBottom={marginBottom}
        marginTop={marginTop}
      >
        {children}
      </LinkBase>
    </TouchableOpacity>
  );
};
