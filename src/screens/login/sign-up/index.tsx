import { Button } from '~/components/Button';
import { Input } from '~/components/Input';
import { Link } from '~/components/Link';
import { Text } from '~/components/Text';
import { useLinkTo } from '@react-navigation/native';
import { Wrapper } from '~/components/Wrapper';
import { CheckBox } from '~/components/CheckBox';
import { TermGroup } from './styles';
import { View } from 'react-native';
import { useState } from 'react';

export const SignUpScreen = () => {
  const linkTo = useLinkTo();
  const [acceptedTerm, setAcceptedTerm] = useState(false);

  const handleAcceptTerm = () => {
    setAcceptedTerm(!acceptedTerm);
  };

  return (
    <Wrapper paddingTop={20} horizontalCentralized>
      <Text algin="center" fontSize={18} fontWeight={600} marginBottom={34} color="#000000">
        Create your account
      </Text>
      <Input label="First Name" onChange={() => null} placeholder="First Name" type="text" />
      <Input label="Last Name" onChange={() => null} placeholder="Last Name" type="text" />
      <Input label="E-mail" onChange={() => null} placeholder="Email" type="text" />
      <Input onChange={() => null} type="password" label="Password" placeholder="Minimum 8 characters" />
      <TermGroup>
        <View style={{ flexGrow: 0, marginRight: 12 }}>
          <CheckBox onCheck={handleAcceptTerm} />
        </View>
        <View style={{ flexGrow: 1 }}>
          <Text fontSize={9}>I am over 18 years of age and I have read and agree</Text>
          <Text>
            <Text fontSize={9}>to the</Text>{' '}
            <Text color="#000000" fontSize={9}>
              Terms of Service
            </Text>{' '}
            <Text fontSize={9}>and</Text>{' '}
            <Text color="#000000" fontSize={9}>
              Privacy policy.
            </Text>
          </Text>
        </View>
      </TermGroup>
      <Button disabled={!acceptedTerm} label="Create account" marginTop={25} onPress={() => linkTo('/login')} />
      <Text marginTop={13}>
        <Text algin="center" fontSize={12}>
          Already have an account?
        </Text>{' '}
        <Link algin="center" color="#000000" fontSize={12} onPress={() => linkTo('/login')}>
          Log in Here
        </Link>
      </Text>
    </Wrapper>
  );
};
