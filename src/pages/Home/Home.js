import "./Home.css";
//import { useState } from "react";

/*const navigation = [
	{ name: "About", href: "#" },
	{ name: "CarList", href: "#" },
	{ name: "Contact", href: "#" },
];*/

function Home() {
	return (
		<div className="bg-background">
			{
				//Nav
			}
			<div className="text-center">
				<h1 className="text-text py-10 font-extrabold">Título de la página</h1>
				<div className="bg-secondary mx-8">
					<div className="py-3">
						<div>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="24"
								height="24"
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								stroke-width="2"
								stroke-linecap="round"
								stroke-linejoin="round"
								class="lucide lucide-search"
							>
								<circle cx="11" cy="11" r="8" />
								<path d="m21 21-4.3-4.3" />
							</svg>
						</div>
						<div>Search</div>
					</div>
					<div className="py-3">
						<button className="bg-primary text-text font-semibold  py-3 px-10 border rounded-xl">Mostrar resultados</button>
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
