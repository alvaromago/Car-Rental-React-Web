import "../index.css";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Booking = () => {
	useEffect(() => {
		document.title = "Reserva";
	}, []);

	const location = useLocation();
	const { coche } = location.state || {};

	if (!coche) {
		return <div>No se han encontrado detalles del coche.</div>;
	}

	const min = 40;
	const max = 70;
	const number = Math.floor(Math.random() * (max - min + 1)) + min;

	return (
		<div>
			<Navbar />
			<div className="bg-bg p-10 px-15 md:px-28 2xl:px-96">
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
					<div className="flex justify-center pt-10 pb-5">
						<p className="text-3xl underline decoration-purple-600">Datos del titular</p>
					</div>
					<div className="md:flex justify-around text-lg">
						<p className="mb-3 md:mb-0">
							<span className="opacity-75">NOMBRE COMPLETO:</span> Alfonso Cuevas Garrido
						</p>
						<p>
							<span className="opacity-75">DNI:</span> 99999999R
						</p>
					</div>
					<div className="flex justify-center pt-10 pb-5">
						<p className="text-3xl underline decoration-purple-600">Datos de la reserva</p>
					</div>
					<div className="md:flex justify-around text-lg">
						<div className="grid gap-y-3">
							<p>
								<span className="opacity-75">MATRÍCULA:</span> 1111AAA
							</p>
							<p>
								<span className="opacity-75">MARCA: </span> {coche.marca}
							</p>
							<p>
								<span className="opacity-75">MODELO:</span> {coche.modelo}
							</p>
							<p className="mb-3 md:mb-0">
								<span className="opacity-75">SERVICIO:</span> Alquiler sin conductor
							</p>
						</div>
						<div className="grid gap-y-3">
							<p>
								<span className="opacity-75">F. DE MATRICULACIÓN:</span> 01/01/2024
							</p>
							<p>
								<span className="opacity-75">CAPACIDAD DEPÓSITO:</span> {number}L
							</p>
							<p>
								<span className="opacity-75">TRANSMISIÓN:</span> {coche.cambio}
							</p>
							<p>
								<span className="opacity-75">TIPO DE VEHÍCULO:</span> {coche.tipo}
							</p>
						</div>
					</div>
					<div className="flex justify-center mt-10">
						<img src={coche.img} alt={coche.modelo} className="w-1/3 h-auto" />
					</div>
				</div>
			</div>
			<Footer />
		</div>
	);
};

export default Booking;
