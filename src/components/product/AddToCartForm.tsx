import React, { FC } from "react";
import { Button, Space } from "antd";
import {
  addCartItem,
  CartItem,
  cartItems,
  isCartOpen,
} from "../../store/cartStore";
import GoBackButton from "../common/GoBackButton";
import type { IProduct } from "../../types/product";
import { useStore } from "@nanostores/react";

interface AddToCartFormProps {
  product: IProduct;
}

const AddToCartForm: FC<AddToCartFormProps> = ({ product }) => {
  const $cartItems = useStore(cartItems);

  function addToCart(e: React.MouseEvent) {
    e.preventDefault();
    isCartOpen.set(true);
    const isExists = checkProductInCart();
    if (!isExists) {
      const cartItem = createCartItemByProduct();
      addCartItem(cartItem);
    }
  }

  function createCartItemByProduct(): CartItem {
    return {
      id: product.id,
      name: product.attributes.title,
      imageSrc: product.attributes.image.data?.attributes?.url || "",
      quantity: 1,
    };
  }

  function checkProductInCart(): boolean {
    const item = $cartItems.find((item) => item.id === product.id);
    return item !== undefined;
  }

  return (
    <Space size="middle" direction="vertical" align="end">
      <GoBackButton />
      <Button size="large" type="primary" onClick={addToCart}>
        Add to cart
      </Button>
    </Space>
  );
};

export default AddToCartForm;
