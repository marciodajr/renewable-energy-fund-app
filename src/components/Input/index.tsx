import React, { useState } from 'react';
import { View } from 'react-native';
import { IInput } from './interfaces';
import { EyeIcon, EyeSlashIcon, Label, TextInput, Touchable } from './styles';

export const Input = (props: IInput) => {
  const { defaultValue, label, onChange, type, placeholder } = props;
  const [value, setValue] = useState(defaultValue || '');
  const [showPassword, setShowPassword] = useState(false);

  const handleOnChangeText = (str: string) => {
    setValue(str);
    onChange(str);
  };

  return (
    <View>
      <Label adjustsFontSizeToFit>{label}</Label>
      <TextInput
        value={value}
        placeholder={placeholder}
        secureTextEntry={type === 'password' && !showPassword}
        onChangeText={handleOnChangeText}
        maxLength={type === 'password' ? 30 : 1000}
      />
      {type === 'password' && !showPassword && (
        <Touchable onPress={() => setShowPassword(!showPassword)}>
          <EyeIcon />
        </Touchable>
      )}
      {type === 'password' && showPassword && (
        <Touchable onPress={() => setShowPassword(!showPassword)}>
          <EyeSlashIcon />
        </Touchable>
      )}
    </View>
  );
};
