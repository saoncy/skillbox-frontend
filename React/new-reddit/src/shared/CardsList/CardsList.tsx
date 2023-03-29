import React from 'react';
import { Card } from './Card/Card';
import styles from './cardslist.scss';

export function CardsList() {
  return (
    <ul className={styles.cardsList}>
      <Card />
    </ul>
  );
}
