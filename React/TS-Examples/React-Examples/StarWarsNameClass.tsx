import React from "../../new-reddit/node_modules/@types/react";
import { uniqueNamesGenerator, starWars } from '../../new-reddit/node_modules/unique-names-generator';
import styles from './starWarsNameClass.module.scss';

interface IStarWarsClassState {
  name: string;
  count: number;
}

export class StarWarsNameClass extends React.PureComponent<{}, IStarWarsClassState> {
state: Readonly<IStarWarsClassState> = { name: this.randomName(), count: 0 };

  // constructor(props: {}) {
  //   super(props);

  //   this.state = { name: '123' };
  // }

  public render() {
    console.log('>>', this.state.count);
    return (
      <section className={styles.container}>
        <span className={styles.name}>{this.state.name}</span>
        <div className={styles.gap}></div>
        <button className={styles.button} onClick={this.handleClick}>Мне нужно имя</button>
      </section>
    );
  }

  private randomName(): string {
    return uniqueNamesGenerator({ dictionaries: [starWars], length: 1 });
  }

  private handleClick = () => {
    this.setState({ name: this.randomName() });
    this.setState((state, props) => ({ count: state.count + 1 }));
    // this.setState({ count: this.state.count + 1 }); // WRONG!!!
  };
}
