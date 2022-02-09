import React, { useState } from 'react';
import { Pressable, Text } from 'react-native';
import ClientModal from '../../components/ClientModal';

import { Container, Label } from './styles';

const App: React.FC = () => {
  const [visible, setVisible] = useState(false);

  return (
    <Container>
      <Label>Bark to the moon, bro!</Label>
      <ClientModal close={setVisible} status={visible} />
      <Pressable onPress={() => setVisible(!visible)}>
        <Text>Press-me</Text>
      </Pressable>
    </Container>
  );
};

export default App;
