import 'react-native-gesture-handler';

import {NavigationContainer} from '@react-navigation/native';

import React from 'react';
import {View, StatusBar} from 'react-native';

import Routes from './routes/index';

const App: React.FC = () => {
  return (
    <NavigationContainer>
      <StatusBar barStyle="light-content" backgroundColor="#F15A24" />
      <View style={{flex: 1, backgroundColor: '#F9F9F9'}}>
        <Routes />
      </View>
    </NavigationContainer>
  );
};

export default App;
