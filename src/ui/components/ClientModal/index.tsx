import React from 'react';
import { Modal, Pressable, Text, View } from 'react-native';

import { Label } from './styles';

export default ({ close, status }: { close: Function; status: boolean }) => {
  return (
    <Modal
      animationType="slide"
      transparent={false}
      presentationStyle="overFullScreen"
      visible={status}
      onRequestClose={() => {
        close(!status);
      }}>
      <View>
        <Label>This is a modal!</Label>
        <Pressable onPress={() => close(!status)}>
          <Text>Close</Text>
        </Pressable>
      </View>
    </Modal>
  );
};
