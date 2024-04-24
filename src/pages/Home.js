import "../index.css";
import Navbar from "../components/Navbar";
import { Search } from "lucide-react";
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
				<h1 className="text-transparent bg-clip-text pt-5 lg:pt-16 pb-8 font-extrabold text-5xl lg:text-8xl bg-gradient-to-r from-green-500 to-violet-400">
					Tu viaje comienza aquí
				</h1>
				<div className="pb-10 mx-5 text-balance">
					<p className="text-slate-50/70">
						En <span className="text-violet-500 text-xl">CarRentalHub</span> nos dedicamos a hacer que tu experiencia de alquiler de
						coches sea rápida, fácil y sin complicaciones. Tarifas transparentes, atención al cliente excepcional y una variedad de
						servicios adicionales.
						<br />
						<br />
						<span className="text-xl text-slate-50/80">¡Reserva ahora y prepárate para explorar nuevos horizontes con nosotros!</span>
					</p>
				</div>
				<div className="bg-white mx-auto rounded-md container">
					<form>
						<div className="py-3">
							<div className="mx-5 justify-center">
								<div className="flex p-1 border-4 rounded-md border-violet-500">
									<div className="flex py-4 pr-1 mr-3 items-center">
										<Search className="text-black" />
									</div>
									<div className="flex justify-center items-center">
										<input
											type="search"
											className="bg-white text-black text-lg w-72 pl-1 md:w-96"
											placeholder="Introduce el nombre del coche a buscar"
											required
										/>
									</div>
								</div>
							</div>
						</div>
						<div className="py-3">
							<button type="submit" className="bg-green-700 font-semibold py-3 px-10 border rounded-xl">
								Mostrar resultados
							</button>
						</div>
					</form>
				</div>
			</div>
			{
				// Footer
			}
		</div>
	);
}

export default Home;
