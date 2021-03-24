import React from 'react';
import {createStore} from 'redux';
import {Provider} from 'react-redux';

import rootReducer from './src/reducers';
import Items from './src/Items';

const store = createStore(rootReducer);

const App: () => Node = () => {
  return (
    <Provider store={store}>
      <Items />
    </Provider>
  );
};

export default App;
