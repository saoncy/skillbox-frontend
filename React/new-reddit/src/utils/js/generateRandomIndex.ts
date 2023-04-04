import { assoc } from "./assoc";

export const generateRandomString = () => Math.random().toString(36).substring(2, 15);

export const assignID = assoc('id', generateRandomString());

export const generateID = <O extends object>(obj: O) => assoc('id', generateRandomString())(obj);
