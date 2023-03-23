const mistake = [] as Array<number>;
mistake.push(1);
// mistake.push('1');

let objects = {
  id_1: {
      id: 1,
      name: "John",
      age: 23
  },
  id_2: {
      id: 2,
      name: "Samuel",
      age: 21
  },
  id_3: {
      id: 3,
      name: "marvin",
      age: 26
  },
  id_4: {
      id: 4,
      name: "james",
      age: 28
  },
  "compare_same_ref": false,
};

objects.compare_same_ref = true;

type TMyObjects = typeof objects;

const typedObject: MyReadonly<TMyObjects> = objects;

// typedObject.compare_same_ref = false;
typedObject.id_1.id = 123;

type TObjKeys = keyof TMyObjects;
type TCompareSameRefType = TMyObjects['compare_same_ref'];

type MyReadonly<T> = {
  readonly [N in keyof T]: T[N];
};

type MyPartial<T> = {
  [N in keyof T]?: T[N];
};

type MyPick<T, K extends keyof T> = {
  [N in K]: T[N];
};

type picked = MyPick<TMyObjects, 'id_1' | 'compare_same_ref'>;

type MyReadonlyDeep<T> = {
  readonly [N in keyof T]: T[N] extends object ? MyReadonlyDeep<T[N]> : T[N];
}

const typedObjectDeep: MyReadonlyDeep<TMyObjects> = objects;

// typedObjectDeep.compare_same_ref = false;
// typedObjectDeep.id_1.id = 123;


type TSomeType = MyReadonlyDeep<TMyObjects>;

// Type inference
type RemoveReadonly<T> = T extends MyReadonlyDeep<infer E> ? E : T;

type TTest = RemoveReadonly<TSomeType>;


function greaterThanZero(a: number) {
  return a > 0;
}


type FnReturnType<T> = T extends (( ...ars: any[]) => infer R) ? R : never;
type FnParameters<T> = T extends (( ...ars: infer P) => any) ? P : never;

type TReturnType = FnReturnType<typeof greaterThanZero>;
type TParameters = FnParameters<typeof greaterThanZero>;
