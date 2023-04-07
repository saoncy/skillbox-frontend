import React from 'react';
import styles from './menulist.scss';
import { GenericList } from '../../../../../utils/react/GenericList';
import { generateID } from '../../../../../utils/js/generateRandomIndex';

export function MenuList() {
  const menuItems = [
    {value: 'Комментарии', className: styles.listItem},
    {value: 'Поделиться', className: styles.listItem},
    {value: 'Скрыть', className: styles.listItem},
    {value: 'Сохранить', className: styles.listItem},
    {value: 'Пожаловаться', className: styles.listItem},
  ].map(generateID);

  return (
    <GenericList list={menuItems}/>
  );
}
