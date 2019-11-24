import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import store from './redux/store'
import App from './components/App'

import 'bootstrap/dist/css/bootstrap.min.css';

const AppWithStore = () => (
  <Provider store={store}>
    <App />
  </Provider>
)

ReactDOM.render(<AppWithStore />, document.getElementById('root'));
