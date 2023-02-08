import React, { useState } from "react"
import { View } from "react-native"
import { IInput } from "./interfaces"
import { Label, TextInput } from "./styles"

export const Input = (props: IInput) => {
  const { defaultValue, label, onChange, type, placeholder } = props
  const [value, setValue] = useState(defaultValue || '')

  const handleOnChangeText = (str: string) => {
    setValue(str)
    onChange(str)
  }

  return (
    <View>
      <Label>{label}</Label>
      <TextInput
        value={value}
        placeholder={placeholder}
        secureTextEntry={type === "password"}
        onChangeText={handleOnChangeText}
      />
    </View>
  )
}