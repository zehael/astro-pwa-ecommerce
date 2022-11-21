import React from 'react';
import { Button, Space } from 'antd';
import { addCartItem, CartItem, isCartOpen } from '../../store/cartStore';
import GoBackButton from '../common/GoBackButton';

const AddToCartForm = () => {

   // we'll hardcode the item info for simplicity!
   const hardcodedItemInfo: CartItem = {
    id: 'astronaut-figurine',
    name: 'Astronaut Figurine',
    imageSrc: '/images/astronaut-figurine.png',
    quantity: 1,
  }

  function addToCart(e: React.MouseEvent) {
    e.preventDefault();
    isCartOpen.set(true);
    addCartItem(hardcodedItemInfo);
  }

  return (
    <Space direction='vertical' align='end'>
      <GoBackButton />
      <Button onClick={addToCart}>Add to cart</Button>
    </Space>
  );
};

export default AddToCartForm;