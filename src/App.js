import React, { useState } from "react";
import {
	createBrowserRouter,
	RouterProvider,
	Route,
	Link,
} from "react-router-dom";
import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import TextArea from "./components/TextArea";
import About from "./components/About";
import Alert from "./components/Alert";

function App() {
	const [mode, setMode] = useState("light");
	const [invMode, setInvMode] = useState("dark");
	const [alert, setAlert] = useState(null);

	const handleAlert = (msg, type) => {
		setAlert({
			type: type,
			msg: msg,
		});
		setTimeout(() => {
			setAlert(null);
		}, 1500);
	};

	const toggleMode = () => {
		if (mode === "light") {
			setMode("dark");
			setInvMode("light");
			document.body.style.backgroundColor = "#001111";
			handleAlert("Dark mode has been enabled", "Success");
		} else {
			setMode("light");
			setInvMode("dark");
			document.body.style.backgroundColor = "white";
			handleAlert("Light mode has been enabled", "Success");
		}
	};

	return (
		<>
			<Navbar
				name="TextUtils"
				link="/"
				mode={mode}
				invMode={invMode}
				toggleFunc={toggleMode}
			/>
			<Alert alert={alert} />
			<TextArea
				mode={mode}
				invMode={invMode}
				toggleFunc={toggleMode}
				handleAlert={handleAlert}
			/>
			<About
				mode={mode}
				invMode={invMode}
				toggleFunc={toggleMode}
				handleAlert={handleAlert}
			/>
		</>
	);
}

export default App;
