import React, { FC } from 'react';
import { Button, Space } from 'antd';
import { addCartItem, CartItem, isCartOpen } from '../../store/cartStore';
import GoBackButton from '../common/GoBackButton';
import type { IProduct } from '../../types/product';

interface AddToCartFormProps {
  product: IProduct;
}

const AddToCartForm: FC<AddToCartFormProps> = ({ product }) => {

  function addToCart(e: React.MouseEvent) {
    e.preventDefault();
    isCartOpen.set(true);
    const cartItem = createCartItemByProduct();
    addCartItem(cartItem);
  }

  function createCartItemByProduct(): CartItem {
    return {
      id: product.id,
      name: product.title,
      imageSrc: product.image,
      quantity: 1
    }
  }

  return (
    <Space direction='vertical' align='end'>
      <GoBackButton />
      <Button onClick={addToCart}>Add to cart</Button>
    </Space>
  );
};

export default AddToCartForm;