import React from 'react';
import { Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { Container, Label } from './styles';

export default () => {
  const navigation = useNavigation();
  return (
    <Container>
      <Label>This is a modal!</Label>
      <Button onPress={() => navigation.goBack()} title="Dismiss" />
    </Container>
  );
};
