import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import CarList from "./pages/CarList";
import Car from "./pages/Car";
import Contact from "./pages/Contact";
import Reviews from "./pages/Reviews";

function App() {
	return (
		<Router>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/about" element={<About />} />
				<Route path="/carlist" element={<CarList />} />
				<Route path="/contact" element={<Contact />} />
				<Route path="/reviews" element={<Reviews />} />
				<Route path="/car/:id" element={<Car />} />
			</Routes>
		</Router>
	);
}

export default App;
