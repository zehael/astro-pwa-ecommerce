import { Button, Card, Drawer } from 'antd';
import React, { useState } from 'react';
import { useStore } from '@nanostores/react';
import { cartItems, isCartOpen, setCartOpen } from '../../store/cartStore';
import { DeleteOutlined } from '@ant-design/icons';

const CartDrawer = () => {
  const $isCartOpen = useStore(isCartOpen);
  const $cartItems = useStore(cartItems);

  const showDrawer = () => {
    setCartOpen(true);
  };

  const onClose = () => {
    setCartOpen(false);
  };

  return (
    <>
      <Button type="primary" onClick={showDrawer}>
        Open
      </Button>
      <Drawer title="Basic Drawer" placement="right" onClose={onClose} open={$isCartOpen}>
        {Object.values($cartItems).length ? (
          <div>
           {Object.values($cartItems).map((item) => (<Card extra={<Button type='link' icon={<DeleteOutlined />} danger />} key={item.id}>
            {item.name}
           </Card>))}
          </div>
        ) : null}
      </Drawer>
    </>
  );
};

export default CartDrawer;