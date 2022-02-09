import React from 'react';
// import 'react-native-gesture-handler';
import { StatusBar } from 'react-native';

// Styles
import { colors } from './styles/global';

// Navigator
import Routes from './routes';

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor={colors.statusBar} />
      <Routes />
    </>
  );
};

export default App;
