import { atom, map } from 'nanostores';

export type CartItem = {
  id: string;
  name: string;
  imageSrc: string;
  quantity: number;
}

export const isCartOpen = atom(false);
export function setCartOpen(payload: boolean) {
  isCartOpen.set(payload);
}

export const cartItems = map<Record<string, CartItem>>({});

export function addCartItem({ id, name, imageSrc }: CartItem) {
	const existingEntry = cartItems.get()[id];
	if (existingEntry) {
		cartItems.setKey(id, {
			...existingEntry,
			quantity: existingEntry.quantity + 1,
		});
	} else {
		cartItems.setKey(id, {
			id,
			name,
			imageSrc,
			quantity: 1,
		});
	}
}