import React from "../../new-reddit/node_modules/@types/react";

function InputExample({ value, onChange }: any) {
  return (
    <input
    type="text"
    value={value}
    onChange={pipe()} />
  )
}

function compose<U>(...fns: Function[]) {
  return <E, >(initialValue: any): U =>
    fns.reduceRight((previousValue, fn) => fn(previousValue), initialValue);
}

function pipe<U>(...fns: Function[]) {
  return <E, >(initialValue: any): U =>
    fns.reduce((previousValue, fn) => fn(previousValue), initialValue)
}

type Fn = (...args: any) => any;

type lastReturnType<F extends Fn[]> = F extends [...any, infer L extends Fn] ? ReturnType<L> : never;

function compose2<F extends Fn[]>(initValue: any, ...fns: F) {
  return fns.reduceRight((acc, fn) => fn(acc), initValue);
}


function pipe2<F extends Fn[]>(initValue: any, ...fns: F) {
  return fns.reduce((acc, fn) => fn(acc), initValue) as lastReturnType<F>;
}

function pick<K extends string>(prop: K) {
  return <O extends Record<K, any>>(obj: O) => obj[prop];
}

const some = pick('value')({ value: 1 });

function isEqual<T>(left: T) {
  return <E extends T>(right: E) => left === right;
}

const comments = [{ id: 22, text: 'text One' }, { id: 44, text: 'text Two' }];

const createFilterBy = (prop: string) => (id: number) => pipe(pick(prop), isEqual(id), cond);
const createFilterBy2 = (prop: string) => (value: any) => pipe2(prop, pick, isEqual(value), cond);
const filterWithID = createFilterBy('id');
const filterWithID2 = createFilterBy2('id');
const filterWithId22 = createFilterBy('id')(22);
const filterWithId222 = createFilterBy2('id')(22);
const filterByValue = createFilterBy('value');

const filteredComments = comments.filter(filterWithID(22));


function cond(b: boolean) {
  return !b;
}
