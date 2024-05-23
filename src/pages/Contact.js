import "../index.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Phone, Send, Earth } from "lucide-react";

function Contact() {
	return (
		<div>
			<Navbar />
			<div className="bg-bg">
				<div className="mx-3">
					<h1 className="text-center text-transparent bg-clip-text pt-5 lg:pt-16 pb-8 font-extrabold text-5xl lg:text-7xl bg-gradient-to-r from-green-500 to-purple-300">
						Habla con nosotros.
						<br />
						Fácil y sencillo.
					</h1>
					<div className="md:flex justify-center items-center mt-10 pb-20">
						<div className="md:border-r-2 md:mr-10 md:pr-10 mb-10 md:mb-0">
							<form>
								<div className="md:flex mt-5">
									<input
										type="text"
										placeholder="Nombre"
										className="border-b-2 mr-5 lg:mr-10 w-full mb-10 hover:border-b-purple-400 bg-transparent"
										required
									/>
									<input
										type="text"
										placeholder="Apellidos"
										className="border-b-2 w-full mb-10 hover:border-b-purple-400 bg-transparent"
									/>
								</div>
								<div>
									<input
										type="email"
										placeholder="Correo electrónico"
										className="border-b-2 mb-10 w-full hover:border-b-purple-400 bg-transparent"
										required
									/>
								</div>
								<div>
									<textarea
										type="text"
										placeholder="Escribe tu mensaje"
										className="resize-none w-full border-b-2 mb-5 hover:border-b-purple-400 bg-transparent"
										required
									/>
								</div>
								<div className="flex justify-center items-center">
									<button
										type="submit"
										className="transition duration-300 delay-150 ease-in-out hover:-translate-y-1 hover:bg-green-700/80 hover:scale-105 bg-green-700 font-semibold py-3 my-2 px-6 rounded-xl"
									>
										Enviar mensaje
									</button>
								</div>
							</form>
						</div>
						<div className="flex justify-center items-center">
							<div>
								<h3 className="text-2xl">Información de contacto</h3>
								<p className="opacity-50">Estamos abiertos a cualquier sugerencia.</p>
								<div className="mt-8">
									<div className="flex mb-10 items-center">
										<Phone />
										<p className="ml-3">
											Teléfono <span className="ml-2 opacity-50">(+34) 694 25 91 85</span>
										</p>
									</div>
									<div className="flex mb-10">
										<Send />
										<p className="ml-3">
											Correo <span className="ml-2 opacity-50">carrentalhub@info.com</span>
										</p>
									</div>
									<div className="flex mb-5">
										<Earth />
										<p className="ml-3">
											Sitio Web <span className="ml-2 opacity-50">carrentalhub.com</span>
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<Footer />
		</div>
	);
}

export default Contact;
