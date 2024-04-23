import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import CarList from "./pages/CarList";
import Contact from "./pages/Contact";

function App() {
	return (
		<Router>
			<Routes>
				<Route exact path="/" element={<Home />} />
				<Route path="/about" element={<About />} />
				<Route path="/carlist" element={<CarList />} />
				<Route path="/contact" element={<Contact />} />
			</Routes>
		</Router>
	);
}

export default App;
