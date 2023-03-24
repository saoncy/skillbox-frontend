import React from "../../new-reddit/node_modules/@types/react";
import { uniqueNamesGenerator, starWars } from '../../new-reddit/node_modules/unique-names-generator';
import styles from './starWarsNameClass.module.scss';

interface IStarWarsFunctionState {
  name: string;
  count: number;
}


export function StarWarsNameFunction() {
  const randomName = () => uniqueNamesGenerator({ dictionaries: [starWars], length: 1});

  // const [name, setName] = React.useState(randomName); // S / () => S
  // const [count, setCount] = React.useState(0);
  // const handleClick = () => {
  //   setName(randomName)
  //   setCount((prevCount) => prevCount + 1);
  // };

  // console.log(">>", count);

  const [state, setState] = React.useState<IStarWarsFunctionState>({ name: randomName(), count: 0 });
  const handleClick = () => {
    setState((prevState) => ({ name: randomName(),  count: prevState.count + 1 }));
    // setState((prevState) => ({ ...prevState, count: prevState.count + 1 }));
  }
  console.log(">>", state.count);

  return (
    <section className={styles.container}>
      <span className={styles.name}>{state.name}</span>
      <div className={styles.gap}></div>
      <button className={styles.button} onClick={handleClick}>мне нужно имя!</button>
    </section>
  )
}
