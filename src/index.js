import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {createStore} from 'redux';
import App from './App';
import myApp from './reducers';
import registerServiceWorker from './registerServiceWorker';

let store = createStore(myApp);

function render() {
  ReactDOM.render(
    <App store={store}/>, document.getElementById('root')
  );
}

registerServiceWorker();
store.subscribe(render);
render();
