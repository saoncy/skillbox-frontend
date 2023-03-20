import * as React from 'react';
import { hot } from 'react-hot-loader/root'


function HeaderComponent() {
  return (
    <header>
      <h1>Reddit for our own</h1>
    </header>
  )
}


export const Header = hot(HeaderComponent);
