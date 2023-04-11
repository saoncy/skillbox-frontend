import React from 'react';
import styles from './menulist.scss';
import { GenericList } from '../../../../../utils/react/GenericList';
import { generateID } from '../../../../../utils/js/generateRandomIndex';
import { CommentsIcon } from '../../../../icons/CommentsIcon';
import { ShareIcon } from '../../../../icons/ShareIcon';
import { HideIcon } from '../../../../icons/HideIcon';
import { SaveIcon } from '../../../../icons/SaveIcon';
import { ReportIcon } from '../../../../icons/ReportIcon';

export function MenuList() {
  const menuItems = [
    {value: 'Комментарии', className: styles.listItem, icon: <CommentsIcon />},
    {value: 'Поделиться', className: styles.listItem, icon: <ShareIcon />},
    {value: 'Скрыть', className: styles.listItem, icon: <HideIcon />},
    {value: 'Сохранить', className: styles.listItem, icon: <SaveIcon />},
    {value: 'Пожаловаться', className: styles.listItem, icon: <ReportIcon />},
  ].map(generateID);

  return (
    <GenericList list={menuItems}/>
  );
}
