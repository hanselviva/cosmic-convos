import React, { useState } from "react";
import { MenuProps, theme } from "antd";
import { Menu } from "antd";
import ring from "../assets/one-ring.png";
import saber from "../assets/lightsaber.png";
import hp from "../assets/deathly-hallows.png";

const UniverseMenu: React.FC = () => {
  const {
    token: { colorPrimary, colorBorderSecondary },
  } = theme.useToken();
  const [current, setCurrent] = useState("harryPotter");

  const items: MenuProps["items"] = [
    {
      style: { display: "flex" },
      label: "Harry Potter",
      key: "harryPotter",
      icon: <img src={hp} style={{ width: "30px", alignSelf: "center" }} />,
    },
    {
      style: { display: "flex" },
      label: "Lord of the Rings",
      key: "lotr",
      icon: <img src={ring} style={{ width: "30px", alignSelf: "center" }} />,
    },
    {
      style: { display: "flex" },
      label: "Star Wars",
      key: "starwars",
      icon: <img src={saber} style={{ width: "30px", alignSelf: "center" }} />,
    },
  ];

  const onClick: MenuProps["onClick"] = (e) => {
    console.log("click ", e);
    setCurrent(e.key);
  };

  return (
    <Menu
      style={{ backgroundColor: colorBorderSecondary }}
      onClick={onClick}
      selectedKeys={[current]}
      mode="horizontal"
      items={items}
    />
  );
};

export default UniverseMenu;
