import React from "react";

interface IGenericListItem {
  value: string;
  id: string;
  className?: string;
  As?: 'a' | 'li' | 'button' | 'div';
  href?: string;
}

interface IGenericListProps {
  list: IGenericListItem[];
}

export function GenericList({ list }: IGenericListProps) {
  return (
    <>
      {list.map(({ As = 'div', value, className, href, id }) => (
        <As
          className={className}
          key={id}
          href={href}
        >
          {value}
        </As>
      ))}
    </>
  )
}
