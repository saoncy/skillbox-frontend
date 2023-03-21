type StrOrNumber = string | number;
const strOrNumber1: StrOrNumber = '2';


// Array
const tsArray: number[] = [1,2,3];
const tsArrayGeneric: Array<number> = [];

const unionArray: (string | number)[] = [1, 2, '3'];
const unionArray2: Array<(string | number)> = [1, 2, '3'];


// Tuple
const myTuple: [number, string] = [1, '2'];
const [val1, val2] = myTuple;

//const [state, setState] = useState();


// Object
type myObjType = { a: number, b: string };
const myObj: myObjType = { a: 1, b: '2' };

interface MyFirstInterface {
  readonly a: number,
  readonly b: string,
  c?: Array<number>, // optional type -> array / undefined
};

const myObj2: MyFirstInterface = {
  a: 1,
  b: '2'
}

const value = myObj2.b;
if (myObj2.c) {
  const val = myObj2.c;
}


const ApiAnswer: IndexInterface = {
  key: 'asd',
  key1: 'asd',
};

const val = ApiAnswer.randomkey;

interface IndexInterface {
  [N: string]: string;
}


// Functions

enum Methods {
  add,
  sub,
};

function calculate(method: Methods, left: number, right: number): number {
  switch(method) {
    case Methods.add: return left + right;
    case Methods.sub: return left - right;
  }
}

const sum = calculate(Methods.add, 2, 2);


const ArrowFn:TypeFn = () => 2;

type TypeFn = () => number; // type-alias

interface FnInterface {
  (a: number): void;
}


type StrangeTsTypes = any | unknown | never;

const some: any = '2';
some.reduce();

const un: unknown = '2';
if (typeof un === 'string') {
  un.concat();
}

function neverFn(): never {
  throw new Error('my exception');
}

const someValue = neverFn();
