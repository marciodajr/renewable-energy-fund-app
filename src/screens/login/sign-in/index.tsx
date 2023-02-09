import React from 'react';
import { useLinkTo } from '@react-navigation/native';
import { Title, Wrapper } from './styles';
import { Input } from '~/components/Input';
import { Button } from '~/components/Button';

export const SignInScreen = () => {
  const linkTo = useLinkTo();

  return (
    <Wrapper>
      <Title>Login</Title>
      <Input label="E-mail" onChange={() => null} placeholder="Email" type="text" />
      <Input onChange={() => null} type="password" label="Password" placeholder="Minimum 8 characters" />
      <Button label="Login" marginTop={25} onPress={() => linkTo('/Register')} />
    </Wrapper>
  );
};
