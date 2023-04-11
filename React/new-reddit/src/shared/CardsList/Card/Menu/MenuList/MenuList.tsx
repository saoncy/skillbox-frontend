import React from 'react';
import styles from './menulist.scss';
import { GenericList } from '../../../../../utils/react/GenericList';
import { generateID } from '../../../../../utils/js/generateRandomIndex';
import { CommentsIcon } from '../../../../icons/CommentsIcon';
import { ShareIcon } from '../../../../icons/ShareIcon';

export function MenuList() {
  const menuItems = [
    {value: 'Комментарии', className: styles.listItem, icon: <CommentsIcon />},
    {value: 'Поделиться', className: styles.listItem, icon: <ShareIcon />},
    {value: 'Скрыть', className: styles.listItem},
    {value: 'Сохранить', className: styles.listItem},
    {value: 'Пожаловаться', className: styles.listItem},
  ].map(generateID);

  return (
    <GenericList list={menuItems}/>
  );
}
