import "../index.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import bgAU from "../assets/bgAU.jpg";

function About() {
	return (
		<div>
			<Navbar />
			<div>
				<div className="bg-bg">
					<p className="text-center text-transparent pt-5 lg:pt-16 bg-clip-text font-extrabold text-5xl lg:text-7xl bg-gradient-to-r from-green-500 to-purple-300">
						Sobre Nosotros
					</p>
					<div className="md:flex justify-around py-10 px-10">
						<div className="md:w-5/12 mb-5 md:mb-0">
							<img src={bgAU} alt="Luces frontales de un coche en la oscuridad" />
						</div>
						<div className="md:w-5/12 text-justify text-xl">
							<p className="opacity-70">
								Nuestra empresa nació de la pasión por ofrecer soluciones de movilidad flexibles y convenientes. Tenemos como misión
								proporcionar a nuestros clientes una experiencia de renting de coches excepcional, ofreciendo vehículos de calidad y
								un servicio personalizado. Nos esforzamos por ser la opción preferida en cuanto a movilidad, mientras que nuestra
								visión es liderar la innovación en la industria y mejorar continuamente la forma en que las personas se desplazan.
							</p>
							<br />
							<p className="opacity-70">
								En CarRentalHub, creemos en proporcionar soluciones de movilidad flexibles y convenientes que se adapten a todas las
								necesidades. Nos esforzamos por ofrecer una experiencia de renting de coches sin complicaciones, respaldada por un
								servicio excepcional y una flota de vehículos de calidad anteponiendo la transparencia y la honestidad en todas
								nuestras operaciones. Precios claros y sin sorpresas y políticas de alquiler justas.
							</p>
							<br />
							<p className="opacity-70">
								Descubre lo que dicen nuestros clientes sobre su experiencia. Desde viajes familiares hasta viajes de negocios,
								nuestros clientes confían en nosotros para proporcionarles la solución de movilidad perfecta.
							</p>
							<div className="flex justify-center items-center mt-5">
								<Link to="/reviews" className="bg-green-700 text-lg font-semibold py-2 px-8 rounded-xl mx-3 hover:scale-110 mb-3">
									Valoraciones
								</Link>
								<Link to="/contact" className="bg-green-700 text-lg font-semibold py-2 px-8 rounded-xl mx-3 hover:scale-110 mb-3">
									Contacto
								</Link>
							</div>
						</div>
					</div>
				</div>
			</div>
			<Footer />
		</div>
	);
}

export default About;
