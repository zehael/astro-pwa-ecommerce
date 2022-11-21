import { MinusOutlined, PlusOutlined } from "@ant-design/icons";
import { Button, Input, InputNumber, Tooltip } from "antd";
import React, { FC } from "react";
import { addCartItem, CartItem } from "../../store/cartStore";

interface CartQtyHandlerProps {
  cartItem: CartItem
}

const CartQtyHandler: FC<CartQtyHandlerProps> = ({ cartItem }) => {
  const min = 1;
  const max = 20;

  const onInputChange = (value: number | null) => {
    if (value === null) {
      return;
    }

    if (value >= min && value <= max) {
      console.log('value', value);
      addCartItem({...cartItem, quantity: value})
    }
  };

  return (
    <>
      <Input.Group compact>
        <Tooltip title="Убавить количество">
          <Button
            onClick={() => onInputChange(cartItem.quantity - 1)}
            type="primary"
            icon={<MinusOutlined />}
          />
        </Tooltip>
        <InputNumber
          onChange={onInputChange}
          value={cartItem.quantity}
          controls={false}
          style={{ width: 54, textAlign: "center" }}
          disabled
          size="middle"
          min={min}
          max={max}
        />
        <Tooltip title="Добавить количество">
          <Button
            onClick={() => onInputChange(cartItem.quantity + 1)}
            type="primary"
            icon={<PlusOutlined />}
          />
        </Tooltip>
      </Input.Group>
    </>
  );
};

export default CartQtyHandler;
