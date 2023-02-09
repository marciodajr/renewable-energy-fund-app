import React from 'react';
import { useLinkTo } from '@react-navigation/native';
import { Title, Wrapper } from './styles';
import { Input } from '~/components/Input';
import { Button } from '~/components/Button';
import { Text } from '~/components/Text';
import { Link } from '~/components/Link';

export const SignInScreen = () => {
  const linkTo = useLinkTo();

  const handleLogin = () => {
    linkTo('/Main');
  };

  return (
    <Wrapper>
      <Title>Login</Title>
      <Input label="E-mail" onChange={() => null} placeholder="Email" type="text" />
      <Input onChange={() => null} type="password" label="Password" placeholder="Minimum 8 characters" />
      <Button label="Login" marginTop={25} onPress={handleLogin} />
      <Text marginTop={13}>
        <Text fontSize={12}>Don’t have an account?</Text>{' '}
        <Link fontSize={12} onPress={() => linkTo('/Register')}>
          Sign up
        </Link>{' '}
        <Text fontSize={12}>here</Text>
      </Text>
    </Wrapper>
  );
};
