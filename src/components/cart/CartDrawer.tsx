import { Button, Card, Drawer, Empty, Popconfirm } from "antd";
import React, { useState } from "react";
import { useStore } from "@nanostores/react";
import { addCartItem, cartItems, isCartOpen } from "../../store/cartStore";
import { DeleteOutlined } from "@ant-design/icons";
import CartQtyHandler from "./CartQtyHandler";

const CartDrawer = () => {
  const $isCartOpen = useStore(isCartOpen);
  const $cartItems = useStore(cartItems);

  const showDrawer = () => {
    isCartOpen.set(true);
  };

  const onClose = () => {
    isCartOpen.set(false);
  };

  const onRemove = (id: number | string) => {
    const cartItem = $cartItems.find((item) => item.id === id);
    if (cartItem) {
      addCartItem({ ...cartItem, quantity: 0 });
    }
  };

  return (
    <>
      <Drawer
        title="Basic Drawer"
        placement="right"
        onClose={onClose}
        open={$isCartOpen}
      >
        {$cartItems.length > 0 && (
          <div>
            {$cartItems.map((item) => (
              <Card
                size="small"
                title={item.name}
                extra={
                  <Popconfirm
                    placement="left"
                    title="Убрать товар из корзины"
                    onConfirm={() => onRemove(item.id)}
                    okText="Да"
                    cancelText="Нет"
                  >
                    <Button
                      type="link"
                      icon={<DeleteOutlined />}
                      danger
                    />
                  </Popconfirm>
                }
                key={item.id}
              >
                <CartQtyHandler cartItem={item} />
              </Card>
            ))}
          </div>
        )}
        {$cartItems.length === 0 && (
          <Empty
            description={
              <span>
                Go to <a href="/">products page</a>.
              </span>
            }
          />
        )}
      </Drawer>
    </>
  );
};

export default CartDrawer;
