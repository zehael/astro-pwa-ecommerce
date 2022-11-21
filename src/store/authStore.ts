import { persistentAtom } from "@nanostores/persistent";


export const token = persistentAtom<string>('token', '');

export const isAuth = persistentAtom<boolean>('isAuth', false,  {
  encode: JSON.stringify,
  decode: JSON.parse,
});