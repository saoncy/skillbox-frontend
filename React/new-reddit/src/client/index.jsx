import * as React from 'react';
import ReactDOMClient from 'react-dom/client';
import { Header } from '../shared/Header'


window.addEventListener('load', () => {
  ReactDOMClient.createRoot(document.getElementById('react-root')).render(
    <Header />
  );
});
