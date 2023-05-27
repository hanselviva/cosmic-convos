import { useState } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { theme, ConfigProvider } from "antd";
const { defaultAlgorithm, darkAlgorithm } = theme;

const Main: React.FC = () => {
	const [isDarkMode, setIsDarkMode] = useState(false);
	const handleToggleTheme = () => {
		setIsDarkMode((previousValue) => !previousValue);
	};
	return (
		<ConfigProvider
			theme={{
				token: {
					colorPrimary: "#F2BD27",
				},
				algorithm: isDarkMode ? darkAlgorithm : defaultAlgorithm,
			}}
		>
			<App isDarkMode={isDarkMode} handleToggleTheme={handleToggleTheme} />
		</ConfigProvider>
	);
};

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
	<Main />,
);
