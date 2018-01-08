import React from 'react';
import { Provider } from 'react-redux';
import store from './src/stores';
import HelloContainer from './src/containers/HelloContainer';

const App = () => (
  <Provider store={store}>
    <HelloContainer />
  </Provider>
);

export default App;
