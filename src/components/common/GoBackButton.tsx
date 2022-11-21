import { ArrowLeftOutlined } from "@ant-design/icons";
import { Button } from "antd";
import React from "react";

const GoBackButton = () => {
  const onBack = () => {
    window.history.back();
  };

  return (
    <>
      <Button onClick={onBack} icon={<ArrowLeftOutlined />} type="link">
        Go back
      </Button>
    </>
  );
};

export default GoBackButton;
