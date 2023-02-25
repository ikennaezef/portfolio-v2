import { useState } from "react";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import "./App.css";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

function App() {
	const [count, setCount] = useState(0);

	return (
		<div className="App">
			<Navbar />
			<Hero />
			<About />
			<Projects />
			<Contact />
		</div>
	);
}

export default App;
