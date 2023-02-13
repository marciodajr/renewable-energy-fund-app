import { useState } from 'react';
import { TouchableOpacity } from 'react-native';
import { Item, Tab, UnderItem } from './styles';

export const Tabs = () => {
  const [active, setActive] = useState(0);
  const tabs = ['Highlighted', 'Value', 'Vintage', 'Registry'];

  return (
    <Tab>
      {tabs.map((value, key) => (
        <TouchableOpacity key={key} onPress={() => setActive(key)}>
          <Item active={active === key}>{value}</Item>
          <UnderItem active={active === key} />
        </TouchableOpacity>
      ))}
    </Tab>
  );
};
