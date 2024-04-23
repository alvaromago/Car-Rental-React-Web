import "../index.css";
import Navbar from "../components/Navbar";
//import { useState } from "react";

/*const navigation = [
	{ name: "About", href: "#" },
	{ name: "CarList", href: "#" },
	{ name: "Contact", href: "#" },
];*/

function Home() {
	return (
		<div>
			<Navbar />
			<div className="text-center">
				<h1 className="py-10 font-extrabold">Título de la página</h1>
				<div className="bg-white mx-auto container">
					<div className="py-3">
						<div></div>
						<div className="text-black text-xl font-semibold">Search</div>
					</div>
					<div className="py-3">
						<button className="text-text bg-green-700 font-semibold  py-3 px-10 border rounded-xl">Mostrar resultados</button>
					</div>
				</div>
				<div>
					<ul>
						<li>
							<img src="" alt="" />
						</li>
					</ul>
				</div>
			</div>
			{
				// Footer
			}
		</div>
	);
}

export default Home;
