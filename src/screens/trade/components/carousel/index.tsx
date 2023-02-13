import { Link } from '~/components/Link';
import { Text } from '~/components/Text';
import { normalize } from '~/utils/normalize';
import { Container, Item, ItemContent, Scroll } from './styles';
import LogoAspira from './svg/logo-aspira.svg';
import LogoClimeWorks from './svg/logo-clime-works.svg';
import PhotoAspira from './svg/photo-aspira.svg';

export const Carousel = () => {
  return (
    <Scroll horizontal={true} showsHorizontalScrollIndicator={false}>
      <Container>
        <Item>
          <PhotoAspira width={normalize(220)} height={normalize(106)} />
          <ItemContent>
            <LogoAspira width={normalize(80)} height={normalize(20)} />
            <Text color="#000000" fontSize={14} marginTop={12}>
              Aspira is building a modular, direct air capture system with the energy supply integrated into the
              modules.
            </Text>
            <Link color="#000000" fontSize={12} marginTop={12} marginBottom={12} onPress={() => null}>
              Read More
            </Link>
          </ItemContent>
        </Item>
        <Item>
          <PhotoAspira width={normalize(220)} height={normalize(106)} />
          <ItemContent>
            <LogoClimeWorks width={normalize(80)} height={normalize(20)} />
            <Text color="#000000" fontSize={14} marginTop={12}>
              Uses renewable geothermal energy and waste heat to capture CO₂ directly from the air. Read more
            </Text>
            <Link color="#000000" fontSize={12} marginTop={12} marginBottom={12} onPress={() => null}>
              Read More
            </Link>
          </ItemContent>
        </Item>
      </Container>
    </Scroll>
  );
};
