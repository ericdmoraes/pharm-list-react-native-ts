import React from 'react';
import {useNavigation} from '@react-navigation/native';

import {Container, Label} from './styles';
import {Button} from 'react-native';

const App: React.FC = () => {
	const navigation = useNavigation();

	return (
		<Container>
			<Label>Bark to the moon, bro!</Label>
			<Button
				title="Back"
				onPress={() => {
					navigation.navigate('ModalScreen');
				}}
			/>
		</Container>
	);
};

export default App;
