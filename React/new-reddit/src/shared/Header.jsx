import * as React from 'react';
import { hot } from 'react-hot-loader/root'
import styles from './Header.scss'


function HeaderComponent() {
  return (
    <header>
      <h1 className={styles.example}>Reddit for our own</h1>
    </header>
  )
}


export const Header = hot(HeaderComponent);
