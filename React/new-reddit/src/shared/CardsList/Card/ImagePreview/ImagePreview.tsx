import React from 'react';
import styles from './imagepreview.scss';

export function ImagePreview() {
  return (
    <div className={styles.preview}>
      <img
        src="https://picsum.photos/800/600"
        alt="content"
        className={styles.previewImg}
      />
    </div>
  );
}
