import React from 'react';
import styles from './card.scss';
import { TextContent } from './TextContent';
import { ImagePreview } from './ImagePreview';
import { Menu } from './Menu';
import { Controls } from './Controls';

export function Card() {
  return (
    <li className={styles.card}>
      <TextContent />
      <ImagePreview />
      <Menu />
      <Controls />
    </li>
  );
}
