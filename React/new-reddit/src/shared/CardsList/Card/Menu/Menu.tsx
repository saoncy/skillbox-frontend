import React from 'react';
import styles from './menu.scss';
import { Dropdown } from '../../../Dropdown';
import { MenuList } from './MenuList/MenuList';

export function Menu() {
  return (
    <div className={styles.menu}>
      <Dropdown
          onClose={() => console.log('closed')}
          onOpen={() => console.log('opened')}
          isOpen={ false }
          button={ <button className={styles.menuButton}>
          <svg className={styles.buttonImage} width="5" height="20" viewBox="0 0 5 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="2.5" cy="2.5" r="2.5" fill="#D9D9D9"/>
            <circle cx="2.5" cy="10" r="2.5" fill="#D9D9D9"/>
            <circle cx="2.5" cy="17.5" r="2.5" fill="#D9D9D9"/>
          </svg>
        </button> }>
            <MenuList />
      </Dropdown>
    </div>
  );
}
