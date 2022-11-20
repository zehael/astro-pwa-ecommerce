import type { FC } from "react";
import {
  UploadOutlined,
  UserOutlined,
  AppstoreOutlined,
} from "@ant-design/icons";
import { Button, Layout, Menu } from "antd";
import type { MenuProps } from 'antd';

const { Sider } = Layout;

const items: MenuProps['items'] = [
  {
    label: <a href='/'>Products</a>,
    key: 'products',
    icon: <AppstoreOutlined />,
  },
  {
    label: <a href='/about'>About</a>,
    key: 'about',
    icon: <UserOutlined />,
  },
]

interface AppNavigationProps {
  pageName: string;
}

const AppNavigation: FC<AppNavigationProps> = ({ pageName }) => {
  const onItemClick = (e: any) => {
    console.log('on click', e);
  }
  return (
    <div>
      <Menu
        mode="horizontal"
        defaultSelectedKeys={["products"]}
        selectedKeys={[pageName]}
        items={items}
      />
    </div>
  );
};

export default AppNavigation;
