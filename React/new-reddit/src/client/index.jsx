import * as React from 'react';
import ReactDOM from 'react-dom';
import { Header } from '../shared/Header'
import { StarWarsNameClass } from '../shared/StarWarsNameClass'


window.addEventListener('load', () => {
  ReactDOM.hydrate(<Header />, document.getElementById('react-root'));
});
