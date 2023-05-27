import React from "react";
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
		token: { colorBgContainer },
	} = theme.useToken();

	return (
		<Layout className="layout">
			<Header
				style={{
					display: "flex",
					flexDirection: "row",
					alignItems: "center",
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
					Change Theme to {isDarkMode ? "Light" : "Dark"}
				</Button>
			</Header>
			<Content style={{ padding: "0 50px" }}>
				<div
					className="site-layout-content"
					style={{ background: colorBgContainer }}
				>
					This is a content
				</div>
			</Content>
			<Footer style={{ textAlign: "center" }}>
				Cosmic Conversations ©2023 Created by HanselV
			</Footer>
		</Layout>
	);
};

export default App;
