import "../index.css";
import { useParams, useNavigate, Link } from "react-router-dom";
import { useEffect } from "react";
import data from "../json/car.json";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Car = () => {
	useEffect(() => {
		document.title = "Coches";
	}, []);

	const { id } = useParams();
	const navigate = useNavigate();
	const coche = data.find((car) => car.id === parseInt(id));

	if (!coche) {
		return <div>Coche no encontrado</div>;
	}

	const handleReserve = () => {
		navigate(`/booking`, { state: { coche } });
	};

	return (
		<div>
			<Navbar />
			<div className="bg-bg p-10">
				<div className="mx-auto p-5 rounded-xl md:flex justify-center">
					<div className="bg-gradient-to-br from-blue-gray-900 to-blue-gray-300 rounded-xl p-7 mb-5 md:mb-0">
						<h1 className="text-xl md:text-4xl font-bold mb-4">
							{coche.marca} {coche.modelo}
						</h1>
						<div className="max-w-3xl">
							<img src={coche.img} alt={coche.modelo} className="w-full h-auto mb-2" />
						</div>
					</div>
					<div className="grid place-content-center md:ml-10 gap-y-5 text-2xl">
						<p>
							<strong>Asientos:</strong>
							<span className="ml-2">{coche.asientos}</span>
						</p>
						<p>
							<strong>Cambio:</strong>
							<span className="ml-2">{coche.cambio}</span>
						</p>
						<p>
							<strong>Puertas:</strong>
							<span className="ml-2">{coche.puertas}</span>
						</p>
						<p>
							<strong>Tipo:</strong>
							<span className="ml-2">{coche.tipo}</span>
						</p>
						<p>
							<strong>Precio:</strong>
							<span className="ml-2 text-3xl">{coche.precio} € / día</span>
							<span className="ml-3 text-sm opacity-75">Una semana: {(coche.precio * 7).toFixed(2)} € total</span>
						</p>
						<div className="flex justify-center">
							<button
								onClick={handleReserve}
								className="transition duration-300 max-w-max delay-150 ease-in-out hover:-translate-y-1 hover:bg-green-700/80 hover:scale-105 bg-green-700 font-semibold py-2 mt-5 px-6 rounded-xl"
							>
								Reservar
							</button>
						</div>
					</div>
				</div>
				<div className="grid place-items-center mt-10 text-xl p-5 gap-y-5">
					<p className="text-center lg:text-start">
						Para obtener más información sobre el coche, puedes hacer click en el botón inferior, donde se detallan las características
						más a fondo por su propio fabricante.
					</p>
					<Link
						to={coche.info}
						target="_blank"
						className="transition duration-300 max-w-max delay-150 ease-in-out hover:-translate-y-1 hover:bg-green-700/80 hover:scale-105 bg-green-700 font-semibold py-2 mt-5 px-6 rounded-xl"
					>
						Más información
					</Link>
				</div>
			</div>
			<Footer />
		</div>
	);
};

export default Car;
