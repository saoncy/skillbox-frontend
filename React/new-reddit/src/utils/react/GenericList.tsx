import React from "react";

interface IGenericListItem {
  value: string;
  id: string;
  className?: string;
  As?: 'a' | 'li' | 'button' | 'div';
  href?: string;
  icon?: React.ReactNode;
}

interface IGenericListProps {
  list: IGenericListItem[];
}

export function GenericList({ list }: IGenericListProps) {
  return (
    <>
      {list.map(({ As = 'div', value, className, href, id, icon }) => (
        <As
          className={className}
          key={id}
          href={href}
        >
          {icon}
          {value}
        </As>
      ))}
    </>
  )
}
