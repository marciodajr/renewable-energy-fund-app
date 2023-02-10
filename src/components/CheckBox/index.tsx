import { useState } from 'react';
import { TouchableOpacity } from 'react-native';
import { ICheckBox } from './interfaces';
import { CheckBoxBase, CheckIconBase } from './styled';

export const CheckBox = (props: ICheckBox) => {
  const { onCheck } = props;
  const [checked, setChecked] = useState(false);

  const handleOnChecked = () => {
    onCheck(!checked);
    setChecked(!checked);
  };

  return (
    <TouchableOpacity activeOpacity={1} onPress={handleOnChecked}>
      <CheckBoxBase checked={checked}>{checked && <CheckIconBase />}</CheckBoxBase>
    </TouchableOpacity>
  );
};
