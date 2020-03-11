import React from 'react';
import './App.css';
import { AppRouter } from './AppRouter';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';

const store = configureStore();

const App = () => {
  console.log('Store is: ', store);

  return (
    <Provider store={store}>
      <div className="App">
        <AppRouter></AppRouter>
      </div>
    </Provider>
  );
}

export default App;
