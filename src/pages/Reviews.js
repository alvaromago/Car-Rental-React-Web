import "../index.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { CircleUserRound, Star } from "lucide-react";

function Reviews() {
	return (
		<div>
			<Navbar />
			<div className="bg-bg">
				<div className="px-7 md:px-20 lg:px-64 py-8">
					<div className="bg-white/90 p-3 md:p-6 text-black rounded-xl">
						<div className="text-center mb-10">
							<p className="text-sm opacity-75">Revisa las valoraciones</p>
							<p className="text-transparent bg-clip-text pb-5 font-extrabold text-5xl lg:text-8xl bg-gradient-to-r from-green-500 to-purple-300">
								¿Qué dicen nuestros clientes?
							</p>
							<p className="px-10 xl:px-20 2xl:px-40">
								Aquí encontrarás las valoraciones de nuestros clientes ordenadas de más reciente a más antigua. Puedes ver en tiempo
								real las opiniones de los últimos servicios contratados junto a las estrellas del mismo.
							</p>
						</div>
						<div className="space-y-4">
							<div className="bg-white/70 rounded-xl p-3">
								<div className="flex justify-between">
									<div className="flex items-center mb-1">
										<div className="flex items-center opacity-55 md:mr-5">
											<CircleUserRound />
											<p className="text-left ml-2 text-lg">Andre</p>
										</div>
										<p className=" bg-green-500 p-1 rounded-lg hidden md:flex text-xs">Recomendado</p>
									</div>
									<div className="flex">
										<p className="text-right mr-2">3</p>
										<Star />
										<Star />
										<Star />
									</div>
								</div>
								<p className="mr-20 md:mr-32">
									Mi experiencia con el servicio fue en general positiva. La reserva fue fácil de hacer y el proceso de recogida del
									vehículo fue rápido. Sin embargo, noté algunos pequeños problemas con el estado del coche que podrían mejorar. A
									pesar de eso, recomendaría este servicio.
								</p>
							</div>
							<div className="bg-white/70 rounded-xl p-3">
								<div className="flex justify-between">
									<div className="flex items-center mb-1">
										<div className="flex items-center opacity-55 md:mr-5">
											<CircleUserRound />
											<p className="text-left ml-2 text-lg">Soler</p>
										</div>
										<p className=" bg-green-500 p-1 rounded-lg hidden md:flex text-xs">Recomendado</p>
									</div>
									<div className="flex">
										<p className="text-right mr-2">4</p>
										<Star />
										<Star />
										<Star />
										<Star />
									</div>
								</div>
								<p className="mr-20 md:mr-32">
									Estoy muy satisfecho con el servicio. El personal fue amable y servicial, y el proceso de recogida y devolución
									del vehículo fue muy eficiente. El coche estaba en excelente estado y cumplió con mis expectativas. Recomiendo
									este servicio.
								</p>
							</div>
							<div className="bg-white/70 rounded-xl p-3">
								<div className="flex justify-between">
									<div className="flex items-center mb-1">
										<div className="flex items-center opacity-55 md:mr-5">
											<CircleUserRound />
											<p className="text-left ml-2 text-lg">Logan</p>
										</div>
										<p className=" bg-red-400 p-1 rounded-lg hidden md:flex text-xs">No Recomendado</p>
									</div>
									<div className="flex">
										<p className="text-right mr-2">1</p>
										<Star />
									</div>
								</div>
								<p className="mr-20 md:mr-32">
									Lamentablemente, mi experiencia dejó mucho que desear. El coche que me dieron tenía varios problemas mecánicos y
									no estaba limpio cuando lo recogí. Además, el proceso de devolución fue complicado y el personal no fue muy útil.
									No recomendaría este servicio.
								</p>
							</div>
							<div className="bg-white/70 rounded-xl p-3">
								<div className="flex justify-between">
									<div className="flex items-center mb-1">
										<div className="flex items-center opacity-55 md:mr-5">
											<CircleUserRound />
											<p className="text-left ml-2 text-lg">Malenia</p>
										</div>
										<p className=" bg-green-500 p-1 rounded-lg hidden md:flex text-xs">Recomendado</p>
									</div>
									<div className="flex">
										<p className="text-right mr-2">5</p>
										<Star />
										<Star />
										<Star />
										<Star />
										<Star />
									</div>
								</div>
								<p className="mr-20 md:mr-32">
									¡Increíble experiencia! Desde el momento en que realicé la reserva hasta la devolución del vehículo, todo fue
									perfecto. El coche estaba limpio y en excelentes condiciones, y el personal fue muy profesional y amigable.
									Recomiendo encarecidamente este servicio sin dudarlo.
								</p>
							</div>
							<div className="bg-white/70 rounded-xl p-3">
								<div className="flex justify-between">
									<div className="flex items-center mb-1">
										<div className="flex items-center opacity-55 md:mr-5">
											<CircleUserRound />
											<p className="text-left ml-2 text-lg">Lothric</p>
										</div>
										<p className=" bg-green-500 p-1 rounded-lg hidden md:flex text-xs">Recomendado</p>
									</div>
									<div className="flex">
										<p className="text-right mr-2">5</p>
										<Star />
										<Star />
										<Star />
										<Star />
										<Star />
									</div>
								</div>
								<p className="mr-20 md:mr-32">
									No puedo estar más contento con el servicio. La reserva fue fácil, el proceso de recogida fue rápido y el coche
									superó mis expectativas. Además, el personal fue extremadamente servicial y atento a todas mis necesidades.
									Definitivamente usaré este servicio nuevamente en el futuro con gusto.
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
			<Footer />
		</div>
	);
}

export default Reviews;
