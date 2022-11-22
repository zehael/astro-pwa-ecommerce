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
import { isAuth } from "../../store/authStore";

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
  const $isAuth = useStore(isAuth);
  const navItems = useMemo<MenuProps["items"]>(() => {
    // const authKeys = ["login", "register"];
    // if ($isAuth) {
    //   return items.filter((item) => !authKeys.includes(String(item?.key)));
    // }

    // if (!$isAuth) {
    //   return items.filter((item) => authKeys.includes(String(item?.key)));
    // }

    return items;
  }, []);

  return (
    <Menu
      mode="horizontal"
      defaultSelectedKeys={["products"]}
      selectedKeys={[pageName]}
      items={navItems}
    />
  );
};

export default AppNavigation;
