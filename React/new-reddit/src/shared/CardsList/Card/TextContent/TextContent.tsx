import React from 'react';
import styles from './textcontent.scss';

export function TextContent() {
  return (
    <div className={styles.textContent}>
      <div className={styles.metaData}>
        <div className={styles.userLink}>
          <img
            src="https://cdn.dribbble.com/users/1338391/avatars/mini/f997f0f5cf87d50e0a89d927ed8fa367.jpg?1645879198"
            alt="avatar"
            className={styles.avatar}
          />
          <a href="#user-url" className={styles.username}>Дмитрий Гришин</a>
        </div>
        <span className={styles.createdAt}>
          <span className={styles.publishedAt}>опубликовано </span>
          4 часа назад
        </span>
      </div>
      <h2 className={styles.title}>
        <a href="#post-url" className={styles.postLink}>
          Следует отметить, что новая модель организационной деятельности Следует отметить, что новая модель организационной деятельности
        </a>
      </h2>
    </div>
  );
}
