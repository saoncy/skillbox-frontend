import React from 'react';

// 1.  Напишите тип функции, конкатенирующей две строки
// concat('Hello', 'World') -> Hello World;
type FnType = (left: string, right: string) => string;

// 2. Напишите интерфейс для описания следующих данных
// const MyHometask = {
//   howIDoIt: "I Do It Wel",
//   simeArray: ["string one", "string two", 42],
//   withData: [{ howIDoIt: "I Do It Wel", simeArray: ["string one", 23] }],
//   }


interface IHomeTask {
  howIDoIt: string,
  simeArray: (string | number)[],
}

interface ITask extends IHomeTask {
  withData: IHomeTask[]
}

const MyHometask: ITask = {
  howIDoIt: "I Do It Wel",
  simeArray: ["string one", "string two", 42],
  withData: [{ howIDoIt: "I Do It Wel", simeArray: ["string one", 23] }],
}

// 3. Типизация функций, используя Generic
const arr: MyArray<number> = [1, 2, 3];
interface MyArray<T> {
  [N: number]: T;

  // добавьте типизацию для метода reduce
  reduce<U>(callbackfn: (accumulator: U, value: T, index: number, arr: T[]) => U, initialValue: U): U;
}

const value = arr.reduce((accumulator, value) => accumulator + value, '');


// 4. Работа с MappedTypes
interface IBigHomeTask {
  data: string;
  numbericData: number;
  date: Date;
  externalData: {
    basis: number;
    value: string;
  }
};

type MyPartial<T> = {
  [N in keyof T]?: T[N] extends object ? MyPartial<T[N]> : T[N];
}

const homeTask: MyPartial<IBigHomeTask> = {
  externalData: {
    value: 'win',
  }
}

// 5*. Работа с Generic, Mapped Types, Type inference №1
// Напишите такой тип, который извлечет тип props из этого или любого другого React компонента.
function HomeComponent(props: { firstProp: string }) {
  return (
    <div>
      { props.firstProp }
    </div>
  )
}


type ReactComponentPropType<T> = T extends React.ComponentType<infer P> ? P : never;
type t = ReactComponentPropType<typeof HomeComponent>;

// 6*. Работа с Generic, Mapped Types, Type inference №2
// Напишите такой тип TGetJSXPropsProp, который извлекает все HTML свойства, доступные для любого jsx элемента.

type TGetJSXPropsProp<T extends keyof JSX.IntrinsicElements> = JSX.IntrinsicElements[T];

type TDivProps = TGetJSXPropsProp<'div'>;
const props: TDivProps = {
  className: 'container',
  // some: '123',
  id: '123',
}
