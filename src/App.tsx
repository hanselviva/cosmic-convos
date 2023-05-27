import React from "react";
import { MoonStarsFill, BrightnessHighFill } from "react-bootstrap-icons";
import { Layout, theme, Button } from "antd";
import Navigation from "./components/Navigation";
import logo from "./assets/universe.svg";

interface Props {
  isDarkMode: boolean;
  handleToggleTheme: () => void;
}

const { Header, Content, Footer } = Layout;

const App: React.FC<Props> = ({ isDarkMode, handleToggleTheme }) => {
  const {
    token: { colorBgContainer, colorText, colorPrimary },
  } = theme.useToken();

  return (
    <Layout className="layout">
      <Header
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          background: colorBgContainer,
        }}
      >
        <img
          src={logo}
          aria-label="logo"
          style={{ height: "4rem", marginRight: "1rem" }}
        />

        <Navigation />

        <Button onClick={handleToggleTheme}>
          {isDarkMode ? (
            <BrightnessHighFill color={colorPrimary} />
          ) : (
            <MoonStarsFill color={colorPrimary} />
          )}
        </Button>
      </Header>

      <Content
        style={{
          padding: "0 50px",
          background: colorBgContainer,
          color: colorText,
        }}
      >
        This is a content
      </Content>

      <Footer style={{ textAlign: "center" }}>
        Cosmic Conversations ©2023 Created by HanselV
      </Footer>
    </Layout>
  );
};

export default App;
