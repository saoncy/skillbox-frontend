import React from "../../new-reddit/node_modules/@types/react";
import { pickFromSyntheticEvent } from "../../new-reddit/src/utils/react/pickFromSyntheticEvent";

const withIdKey = withKey('id');

interface IBlockProps {
  title: string;
  id: string;
}

function Feed(props: { blocks: IBlockProps[] }) {
  return (
    <div>
      {props.blocks.map(withIdKey(Block))}
    </div>
  );
}

function Block(props: IBlockProps) {
  return (
    <div>{props.title}</div>
  )
}

function withKey(key?: string) {
  return <E, T extends React.ComponentType<E>>(component: T) =>
    (props: E, index: number) =>
      React.createElement(
        component,
        { ...props, key: `${key ? props[key as keyof E] : index}`},
        []
      )
}


function Input({ onChange, value }: { onChange: (value: string) => void, value: string }) {
  return (
    <input value={value} onChange={getValue(onChange)}/>
  )
}

function CheckBox({ onChange, value }: { onChange: (value: boolean) => boolean , value: boolean }) {
  return (
    <input type="checkbox" checked={value} onChange={getChecked(onChange)}/>
  )
}


export const getValue = pickFromSyntheticEvent<HTMLInputElement>()('value');
export const getChecked = pickFromSyntheticEvent<HTMLInputElement>()('checked');

