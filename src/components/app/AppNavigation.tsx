import { FC, useMemo } from "react";
import {
  UploadOutlined,
  UserOutlined,
  AppstoreOutlined,
  LockOutlined,
} from "@ant-design/icons";
import { Menu } from "antd";
import type { MenuProps } from "antd";
import { useStore } from "@nanostores/react";

const items: MenuProps["items"] = [
  {
    label: <a href="/">Products</a>,
    key: "products",
    icon: <AppstoreOutlined />,
  },
  {
    label: <a href="/about">About</a>,
    key: "about",
    icon: <UserOutlined />,
  },
  {
    label: <a href="/auth/login">Login</a>,
    key: "login",
    icon: <LockOutlined />,
  },
  {
    label: <a href="/auth/register">Register</a>,
    key: "register",
    icon: <UserOutlined />,
  },
];

interface AppNavigationProps {
  pageName: string;
}

const AppNavigation: FC<AppNavigationProps> = ({ pageName }) => {
  const getNavItems = () => {
    // const authKeys = ["login", "register"];
    // const isAuth = localStorage.getItem("isAuth");
    // if (!isAuth) {
    //   return items.filter((item) => authKeys.includes(String(item?.key)));
    // }

    // return items.filter((item) => !authKeys.includes(String(item?.key)));

    return items;
  };

  return (
    <nav>
      <Menu
        mode="horizontal"
        defaultSelectedKeys={["products"]}
        selectedKeys={[pageName]}
        items={getNavItems()}
      />
    </nav>
  );
};

export default AppNavigation;
