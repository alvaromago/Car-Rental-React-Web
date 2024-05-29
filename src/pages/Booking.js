import "../index.css";
import { useLocation } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Booking = () => {
	const location = useLocation();
	const { coche } = location.state || {};

	if (!coche) {
		return <div>No se han encontrado detalles del coche.</div>;
	}

	return (
		<div>
			<Navbar />
			<div className="bg-bg p-10 2xl:px-96">
				<div className="flex flex-col justify-center">
					<h1 className="text-transparent bg-clip-text pb-4 font-extrabold text-5xl lg:text-7xl bg-gradient-to-r from-green-500 to-purple-300">
						Reserva realizada correctamente
					</h1>
					<p className="text-lg">
						¡Felicidades, el{" "}
						<span className="text-purple-300 text-2xl">
							{coche.marca} {coche.modelo}
						</span>{" "}
						es suyo!
					</p>
					<div className="flex justify-center pt-14">
						<p className="text-3xl">Datos de la reserva</p>
					</div>
				</div>
			</div>
			<Footer />
		</div>
	);
};

export default Booking;
