import React from "../../new-reddit/node_modules/@types/react";

interface IItem {
  value: string;
  id: string;
  onClick: (id: string) => void;
  className?: string;
  As?: 'a' | 'li' | 'button' | 'div';
  href?: string;
};

interface IMyListProps {
  list: IItem[];
};

export function MyList({ list }: IMyListProps) {
  return (
    <ul>
      {
        list.map((item, index) => (
          <li onClick={() => item.onClick(item.id)} key={item.id}>{item.value}</li>
        ))
      }
    </ul>
  )
}


export function GenericList({ list }: IMyListProps) {
  return (
    <>
      {list.map(({ As = 'div', value, onClick, className, href, id }) => (
        <As
          className={className}
          onClick={() => onClick(id)}
          key={id}
          href={href}
        >
          {value}
        </As>
      ))}
    </>
  )
}

/**
import React from "react";
import './main.module.scss'
import { hot } from "react-hot-loader/root";
import { Layout } from './shared/Layout/Layout'
import { Header } from "./shared/Header/Header";
import { Content } from "./shared/Content";
import { CardsList } from "./shared/CardsList";
import { GenericList, MyList } from "./GenericList";
import { generateID, generateRandomString } from "./utils/js/generateRandomIndex";
import { merge } from "./utils/js/merge";

const LIST = [
  {value: 'some'},
  {value: 'another some'},
  {value: 'some'},
].map(generateID);

function AppComponent() {
  const [list, setList] = React.useState(LIST);

  const handleItemClick = (id: string) => {
    console.log(id);
    setList(list.filter((item) => item.id !== id));
  }

  const handleAdd = () => setList(list.concat(generateID({value: generateRandomString()})));

  return (
    <Layout>
      <Header />
      <Content>
        <CardsList />
        <button onClick={handleAdd}>Add element</button>
        <GenericList list={list.map(merge({ onClick: handleItemClick }))} />
      </Content>
    </Layout>
  );
}

export const App = hot(() => <AppComponent /> );

 */
