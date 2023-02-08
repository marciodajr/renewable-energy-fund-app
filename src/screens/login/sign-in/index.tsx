import React, { useState } from 'react';
import { Text } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { Link } from '@react-navigation/native';
import { Container } from './styles';
import { Input } from '../../../components/Input';

export const SignInScreen = () => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  return (
    <Container>
      <Text>Login</Text>
      <Input label='E-mail' placeholder='Email' type='text' onChange={setEmail} />
      <Input label='Password' placeholder='Password' type='password' onChange={setPassword} />
      <Link to={{ screen: 'Register' }}>
        <Ionicons name="arrow-back" color="black" size={32} />
      </Link>
    </Container>
  );
}