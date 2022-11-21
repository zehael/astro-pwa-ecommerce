import { persistentAtom } from '@nanostores/persistent';
import { atom, map } from 'nanostores';

export type CartItem = {
  id: number | string;
  name: string;
  imageSrc: string;
  quantity: number;
}

export const isCartOpen = atom<boolean>(false);

export const cartItems =persistentAtom<CartItem[]>('cartItems', [], {
  encode: JSON.stringify,
  decode: JSON.parse,
});

export function addCartItem({ id, name, imageSrc, quantity }: CartItem) {
	const $cartItems = cartItems.get();
  const existingEntry = $cartItems.find((item) => item.id === id);
  let modifiedItems: CartItem[] = [];

	if (existingEntry && quantity > 0) {
    modifiedItems = $cartItems.map(item => {
      if (item.id === id)
          return {
            ...item,
            quantity: quantity,
          };
        else return item;
    });
	}

  if (existingEntry && quantity === 0) {
    modifiedItems = $cartItems.filter((item) => item.id !== id);
  }

  if (!existingEntry) {
    modifiedItems = [...$cartItems, { id, name, imageSrc, quantity}];
  }

  cartItems.set(modifiedItems);
}