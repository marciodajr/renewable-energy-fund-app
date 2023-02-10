import React from 'react';
import { Button } from '~/components/Button';
import { Input } from '~/components/Input';
import { Link } from '~/components/Link';
import { Text } from '~/components/Text';
import { useLinkTo } from '@react-navigation/native';
import { Wrapper } from '~/components/Wrapper';

export const SignInScreen = () => {
  const linkTo = useLinkTo();

  const handleLogin = () => {
    linkTo('/Main');
  };

  return (
    <Wrapper paddingTop={80} horizontalCentralized>
      <Text algin="center" fontSize={18} fontWeight={600} marginBottom={36} color="#000000">
        Login
      </Text>
      <Input label="E-mail" onChange={() => null} placeholder="Email" type="text" />
      <Input onChange={() => null} type="password" label="Password" placeholder="Minimum 8 characters" />
      <Button label="Login" marginTop={25} onPress={handleLogin} />
      <Text marginTop={13}>
        <Text algin="center" fontSize={12}>
          Don’t have an account?
        </Text>{' '}
        <Link algin="center" color="#000000" fontSize={12} onPress={() => linkTo('/Register')}>
          Sign up
        </Link>{' '}
        <Text algin="center" fontSize={12}>
          here
        </Text>
      </Text>
    </Wrapper>
  );
};
