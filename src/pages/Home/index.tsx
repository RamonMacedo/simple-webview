import React from 'react';

import {WebView} from 'react-native-webview';

const Home: React.FC = () => {
  return <WebView source={{uri: 'https://marketplace.realmapp.com.br'}} />;
};

export default Home;
