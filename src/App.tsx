import React from "react";
import "./App.css";
import { MoonStarsFill, BrightnessHighFill } from "react-bootstrap-icons";
import { Layout, theme, Button } from "antd";
import UniverseMenu from "./components/UniverseMenu";
import logo from "./assets/universe.svg";
import ChatBox from "./components/ChatBox";

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
    <div
      className="app-container"
      style={{
        background: colorBgContainer,
      }}
    >
      <div className="App">
        <Layout>
          <Header
            style={{
              background: colorBgContainer,
              height: "auto",
            }}
          >
            <div className="title">
              <img
                src={logo}
                aria-label="logo"
                style={{ width: "4rem", marginRight: "1rem" }}
              />
              <h1>Cosmic Conversations</h1>
              <Button onClick={handleToggleTheme}>
                {isDarkMode ? (
                  <BrightnessHighFill color={colorPrimary} />
                ) : (
                  <MoonStarsFill color={colorPrimary} />
                )}
              </Button>
            </div>

            <UniverseMenu />
          </Header>

          <Content
            style={{
              padding: "0 50px",
              background: colorBgContainer,
              color: colorText,
            }}
          >
            <ChatBox />
          </Content>

          <Footer style={{ textAlign: "center" }}>
            Cosmic Conversations ©2023 Created by HanselV
          </Footer>
        </Layout>
      </div>
    </div>
  );
};

export default App;
