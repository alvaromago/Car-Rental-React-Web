import "../index.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import bgAU from "../assets/bgAU.jpg";
import bgAU2 from "../assets/bgAU2.jpg";
import bgAU3 from "../assets/bgAU3.png";

function About() {
	useEffect(() => {
		document.title = "Sobre nosotros";
	}, []);

	return (
		<div>
			<Navbar />
			<div>
				<div className="bg-bg">
					<p className="text-center text-transparent pt-5 lg:pt-10 bg-clip-text font-extrabold text-5xl lg:text-7xl bg-gradient-to-r from-green-500 to-purple-300">
						Sobre Nosotros
					</p>
					<div className="lg:flex justify-around py-10 px-10 md:px-32 lg:px-10">
						<div className="lg:w-5/12 mb-5 lg:mb-0">
							<img src={bgAU} alt="Coches de renting" />
							<img src={bgAU2} className="hidden lg:flex 2xl:hidden mt-16" alt="Intercambio de llaves" />
							<img src={bgAU3} className="hidden lg:flex xl:hidden mt-16" alt="Coches de renting" />
						</div>
						<div className="lg:w-5/12 text-justify text-xl">
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
								<Link
									to="/reviews"
									className="transition duration-300 delay-150 ease-in-out hover:-translate-y-1 hover:bg-green-700/80 hover:scale-105 bg-green-700 font-semibold py-2 my-2 px-6 rounded-xl mr-5"
								>
									Valoraciones
								</Link>
								<Link
									to="/contact"
									className="transition duration-300 delay-150 ease-in-out hover:-translate-y-1 hover:bg-green-700/80 hover:scale-105 bg-green-700 font-semibold py-2 my-2 px-6 rounded-xl"
								>
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
