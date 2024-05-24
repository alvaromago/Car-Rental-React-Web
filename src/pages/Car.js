import "../index.css";
import { useParams } from "react-router-dom";
import data from "../json/car.json";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Car = () => {
	const { id } = useParams();
	const coche = data.find((car) => car.id === parseInt(id));

	if (!coche) {
		return <div>Coche no encontrado</div>;
	}

	return (
		<div>
			<Navbar />
			<div className="bg-bg p-5">
				<div className="max-w-4xl mx-auto p-5 rounded-xl shadow-lg">
					<h1 className="text-4xl font-bold mb-4">
						{coche.marca} {coche.modelo}
					</h1>
					<img src={coche.img} alt={coche.modelo} className="w-full h-auto mb-4" />
					<p>
						<strong>Asientos:</strong> {coche.asientos}
					</p>
					<p>
						<strong>Cambio:</strong> {coche.cambio}
					</p>
					<p>
						<strong>Puertas:</strong> {coche.puertas}
					</p>
					<p>
						<strong>Tipo:</strong> {coche.tipo}
					</p>
					<p>
						<strong>Precio:</strong> {coche.precio} € / día
					</p>
				</div>
			</div>
			<Footer />
		</div>
	);
};

export default Car;
