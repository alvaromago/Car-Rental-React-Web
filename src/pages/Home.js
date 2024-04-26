import "../index.css";
import Navbar from "../components/Navbar";
import { Search } from "lucide-react";
import Skoda from "../assets/skoda.png";
import BMW from "../assets/bmw.png";
import Tesla from "../assets/tesla.png";
import Mercedes from "../assets/mercedes_benz.png";
import Peugeot from "../assets/peugeot.png";
import VW from "../assets/vw.png";

function Home() {
	return (
		<div>
			<Navbar />
			<div className="text-center">
				<h1 className="text-transparent bg-clip-text pt-5 lg:pt-16 pb-8 font-extrabold text-5xl lg:text-8xl bg-gradient-to-r from-green-500 to-violet-400">
					Tu viaje comienza aquí
				</h1>
				<div className="pb-10 mx-5 lg:mx-60 text-balance">
					<p className="text-slate-50/70">
						En <span className="text-violet-500 text-xl">CarRentalHub</span> nos dedicamos a hacer que tu experiencia de alquiler de
						coches sea rápida, fácil y sin complicaciones. Tarifas transparentes, atención al cliente excepcional y una variedad de
						servicios adicionales.
						<br />
						<br />
						<span className="text-xl text-slate-50/80">¡Reserva ahora y prepárate para explorar nuevos horizontes con nosotros!</span>
					</p>
				</div>
				<div className="mx-auto rounded-md container">
					<form>
						<div className="py-3 lg:px-32">
							<div className="mx-5 justify-center">
								<div className="bg-white flex p-1 border-4 rounded-md border-violet-500">
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
							<button type="submit" className="bg-green-700 font-semibold py-3 px-10 rounded-xl">
								Mostrar resultados
							</button>
						</div>
					</form>
				</div>
				<div className="mx-auto py-5 rounded-md container">
					<div className="py-5 flex justify-center items-center">
						<div>
							<img className="w-10 h-10 md:w-14 md:h-14 mx-3" src={Mercedes} alt="Mercedes Benz" />
						</div>
						<div>
							<img className="w-10 h-10 md:w-14 md:h-14 mx-3" src={Peugeot} alt="Peugeot" />
						</div>
						<div>
							<img className="w-10 h-10 md:w-14 md:h-14 mx-3" src={BMW} alt="BMW" />
						</div>
						<div>
							<img className="w-10 h-10 md:w-14 md:h-14 mx-3" src={VW} alt="VolksWagen" />
						</div>
						<div>
							<img className="w-12 h-10 md:w-16 lg:h-12 mx-3" src={Skoda} alt="Skoda" />
						</div>
						<div>
							<img className="w-10 h-12 md:w-12 md:h-14 mx-3" src={Tesla} alt="Tesla" />
						</div>
					</div>
				</div>
			</div>
			{
				// Footer
			}
		</div>
	);
}

export default Home;
