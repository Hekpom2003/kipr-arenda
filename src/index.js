import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import App from './App';
import { BrowserRouter as Router,Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store/store';


ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Route exact path="/services/arenda-nedvizhimosti/" component={App}/>
      <Route exact path="/services/arenda-nedvizhimosti/filter/:filter/" component={App}/>
    </Router>
  </Provider>
  , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
