import * as React from 'react';
import ReactDOM from 'react-dom';
import { Header } from '../shared/Header'


window.addEventListener('load', () => {
  ReactDOM.hydrate(<App />, document.getElementById('react-root'));
});
