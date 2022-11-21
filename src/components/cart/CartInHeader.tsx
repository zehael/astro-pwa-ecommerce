import { ShoppingCartOutlined } from '@ant-design/icons';
import { useStore } from '@nanostores/react';
import { Avatar, Badge, Button } from 'antd';
import React, { useMemo } from 'react';
import { cartItems, isCartOpen } from '../../store/cartStore';

const CartInHeader = () => {
  const $cartItems = useStore(cartItems);
  const $isCartOpen = useStore(isCartOpen);

  const itemsLengths = useMemo<number>(() => {
    return $cartItems.length || 0;
  }, [$cartItems]);

  const showCart = () => {
    isCartOpen.set(true);
  }

  return (
    <>
     <Button onClick={showCart} type='link' shape='circle' icon={<ShoppingCartOutlined />} />
    </>
  );
};

export default CartInHeader;