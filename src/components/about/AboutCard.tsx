import { SendOutlined } from "@ant-design/icons";
import { Button as AntButton, Card } from "antd";
import React from "react";

const { Meta } = Card;

const AboutCard = () => {
  return (
    <Card
      hoverable
      style={{ width: 300 }}
      cover={
        <img
          alt="example"
          src="https://wp-s.ru/wallpapers/5/16/330611935226681/risunok-mordy-kota-s-zel-nymi-glazami.jpg"
        />
      }
      actions={[
        <a key="Telegram" href='https://t.me/zehael' target='_blank'>
          <AntButton shape="circle" type="link" icon={<SendOutlined />} />
          t.me/zehael
        </a>,
      ]}
    >
      <Meta title="Zhalil" description="FullStack JS developer" />
    </Card>
  );
};

export default AboutCard;
