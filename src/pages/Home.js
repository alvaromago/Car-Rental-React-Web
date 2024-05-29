import "../index.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Search, Star, StarHalf, ArrowRight } from "lucide-react";
import { Carousel } from "@material-tailwind/react";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import TeslaCaru from "../assets/tesla-model-x-plaid-grey.jpg";
import BMWCaru from "../assets/bmw-serie-4-coupe.jpg";
import MercedesCaru from "../assets/mercedes-gle-coupe.jpg";
import SkodaCaru from "../assets/skoda-superb-combi.jpg";
import OpelCaru from "../assets/opel-mokka.jpg";
import ToyotaCaru from "../assets/toyota-corolla.png";
import SeatCaru from "../assets/seat-tarraco.jpg";
import AudiCaru from "../assets/audi-a7.png";
import VWCaru from "../assets/VWCaru.png";
import PeugeotCaru from "../assets/peugeot-2008.jpg";
import Skoda from "../assets/skoda.png";
import BMW from "../assets/bmw.png";
import Tesla from "../assets/tesla.png";
import Mercedes from "../assets/mercedes_benz.png";
import Peugeot from "../assets/peugeot.png";
import VW from "../assets/vw.png";

function Home() {
	const [searchTerm, setSearchTerm] = useState("");
	const navigate = useNavigate();

	const handleSearchChange = (event) => {
		setSearchTerm(event.target.value);
	};

	const handleSearchSubmit = (event) => {
		event.preventDefault();
		navigate(`/carlist?search=${searchTerm}`);
	};

	return (
		<div>
			<Navbar />
			<div className="text-center bg-bg pb-5">
				<div>
					<h1 className="text-transparent bg-clip-text pt-5 lg:pt-16 pb-8 font-extrabold text-5xl lg:text-8xl bg-gradient-to-r from-green-500 to-purple-300">
						Tu viaje comienza aquí
					</h1>
					<div className="pb-10 mx-5 lg:mx-60 text-balance">
						<p className="text-slate-50/70 text-xl">
							En <span className="text-purple-300 text-2xl">CarRentalHub</span> nos dedicamos a hacer que tu experiencia de alquiler de
							coches sea rápida, fácil y sin complicaciones. Tarifas transparentes, atención al cliente excepcional y una variedad de
							servicios adicionales.
							<br />
							<br />
							<span className="text-2xl text-slate-50/80">
								¡Reserva ahora y prepárate para explorar nuevos horizontes con nosotros!
							</span>
						</p>
					</div>
					<div className="mx-auto rounded-md container">
						<form onSubmit={handleSearchSubmit}>
							<div className="py-3 lg:px-32">
								<div className="mx-5 justify-center">
									<div className="bg-white flex p-1 border-4 rounded-md border-purple-400">
										<div className="flex py-4 pr-1 mr-3 items-center">
											<Search className="text-black" />
										</div>
										<div className="flex justify-center items-center">
											<input
												type="search"
												className="bg-white text-black text-lg w-72 pl-1 md:w-96"
												placeholder="Introduce el nombre del coche a buscar"
												required
												value={searchTerm}
												onChange={handleSearchChange}
											/>
										</div>
									</div>
								</div>
							</div>
							<div className="py-3">
								<button
									type="submit"
									className="transition duration-300 delay-150 ease-in-out hover:-translate-y-1 hover:bg-green-700/80 hover:scale-105 bg-green-700 font-semibold py-3 my-2 px-6 rounded-xl"
								>
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
								<img className="w-10 h-12 md:w-12 md:h-14 mx-3" src={Tesla} alt="Tesla" />
							</div>
							<div>
								<img className="w-10 h-10 md:w-14 md:h-14 mx-3" src={Peugeot} alt="Peugeot" />
							</div>
							<div>
								<img className="w-10 h-10 md:w-14 md:h-14 mx-3" src={VW} alt="VolksWagen" />
							</div>
							<div>
								<img className="w-12 h-10 md:w-16 lg:h-12 mx-3" src={Skoda} alt="Skoda" />
							</div>
							<div>
								<img className="w-10 h-10 md:w-14 md:h-14 mx-3" src={BMW} alt="BMW" />
							</div>
						</div>
					</div>
				</div>
				<div className="py-10 mx-3 md:mx-20 xl:mx-0 xl:flex justify-center">
					<div className="lg:mx-12 xl:ml-0 xl:mr-15">
						<Carousel className="rounded-xl w-fit xl:w-[750px] h-fit xl:h-[475px]" autoplay="true">
							<img src={TeslaCaru} alt="Tesla" className="h-full w-full object-cover" />
							<img src={PeugeotCaru} alt="Tesla" className="h-full w-full object-cover" />
							<img src={BMWCaru} alt="Tesla" className="h-full w-full object-cover" />
							<img src={VWCaru} alt="Tesla" className="h-full w-full object-cover" />
							<img src={SkodaCaru} alt="Tesla" className="h-full w-full object-cover" />
							<img src={MercedesCaru} alt="Tesla" className="h-full w-full object-cover" />
							<img src={OpelCaru} alt="Tesla" className="h-full w-full object-cover" />
							<img src={SeatCaru} alt="Tesla" className="h-full w-full object-cover" />
							<img src={ToyotaCaru} alt="Tesla" className="h-full w-full object-cover" />
							<img src={AudiCaru} alt="Tesla" className="h-full w-full object-cover" />
						</Carousel>
					</div>
					<div>
						<p className="text-2xl mt-5 mb-5">Todos los coches a tu alcance</p>
						<p className="flex opacity-70 mb-3 justify-center">
							<ArrowRight className="mr-2" />
							Desde 33€ al día
						</p>
						<p className="flex opacity-70 justify-center">
							<ArrowRight className="mr-2" />
							<span className="mr-2">Al menos</span>
							<Star />
							<Star />
							<Star />
							<StarHalf />
						</p>
						<p className="mt-7 p-5 mb-8 text-xl opacity-75">
							En nuestra página con el listado
							<br />
							completo de coches podrás
							<br />
							acceder a filtros para hacer
							<br />
							tu búsqueda más rápida y eficaz.
						</p>
						<div className="flex justify-center">
							<Link
								to="/carlist"
								className="transition duration-300 delay-150 ease-in-out hover:-translate-y-1 hover:bg-green-700/80 hover:scale-105 bg-green-700 font-semibold py-3 px-6 rounded-xl"
							>
								Lista completa
							</Link>
						</div>
					</div>
				</div>
			</div>
			<Footer />
		</div>
	);
}

export default Home;
