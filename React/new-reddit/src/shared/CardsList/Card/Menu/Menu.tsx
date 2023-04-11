import React from 'react';
import styles from './menu.scss';
import { Dropdown } from '../../../Dropdown';
import { MenuList } from './MenuList/MenuList';
import { MenuIcon } from '../../../icons';

export function Menu() {
  return (
    <div className={styles.menu}>
      <Dropdown
        onClose={() => console.log('closed')}
        onOpen={() => console.log('opened')}
        isOpen={ false }
        button={
          <button className={styles.menuButton}>
            <MenuIcon style={styles.buttonImage} />
          </button>
        }
      >
        <MenuList />
      </Dropdown>
    </div>
  );
}
