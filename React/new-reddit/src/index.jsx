import * as React from 'react';
import * as ReactDOMClient from 'react-dom/client';
import { Header } from './Header'


window.addEventListener('load', () => {
  ReactDOMClient.createRoot(document.getElementById('react-root')).render(<Header />)
});
