import React from 'react';
import {Provider} from 'react-redux'
import { store } from './redux/store'
import {render} from 'react-dom';
import App from './App';




const app = (
  <Provider store={store}>
    <App />
  </Provider>
)

render(app, document.getElementById('root'));