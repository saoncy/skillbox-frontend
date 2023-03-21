// Generics

const myArray: Array<number> = [1, 2, 3];

interface MyArray<T> {
  [N: number]: T

  map<U>(fn: (el: T, index: number, arr: MyArray<T>) => U): MyArray<U>
}

let variable = myArray[1];
myArray.map((f, index, arr) => f + 1);
myArray.map((f) => `f + ${f}`);


function identity<T>(arg: T): T {
  return arg;
}

let result = identity(12);


function getLength<T extends Array<any>>(arr: T): number {
  return arr.length;
}

getLength([1, 2, 3]);


interface IValueWithType<T> {
  type: string,
  value: T
}


function withType<U>(arg: U): IValueWithType<U> {
  return {
    type: typeof arg,
    value: arg
  };
}

const result2 = withType(123);


// Built-in generics

interface IExample<T> {
  type: string;
  value: T;
  isEmpty: boolean;
}

const omittedObject: Omit<IExample<string>, 'isEmpty' | 'value'> = {
  type: 'asd',
};

const picked: Pick<IExample<number>, 'isEmpty' | 'value'> = {
  isEmpty: true,
  value: 123
};

const partial: Partial<IExample<object>> = {

};
