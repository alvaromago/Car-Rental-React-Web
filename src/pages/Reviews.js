import "../index.css";
import { useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { CircleUserRound } from "lucide-react";
import { FaStar } from "react-icons/fa";

function Reviews() {
	useEffect(() => {
		document.title = "Valoraciones";
	}, []);

	return (
		<div>
			<Navbar />
			<div className="bg-bg">
				<div className="px-7 md:px-20 2xl:px-72 px py-8">
					<div className="p-3 md:p-6 rounded-xl">
						<div className="text-center mb-10">
							<p className="text-transparent bg-clip-text pb-5 font-extrabold text-6xl lg:text-8xl bg-gradient-to-r from-green-500 to-purple-300">
								¿Qué dicen nuestros clientes?
							</p>
							<p className="px-8 xl:px-20 2xl:px-36">
								Aquí encontrarás las valoraciones de nuestros clientes ordenadas de más reciente a más antigua. Puedes ver en tiempo
								real las opiniones de los últimos servicios contratados junto a las estrellas del mismo.
							</p>
						</div>
						<div className="space-y-4">
							<div className="bg-white/30 rounded-xl p-3">
								<div className="flex justify-between">
									<div className="flex items-center mb-1">
										<div className="flex items-center opacity-80 md:mr-5">
											<CircleUserRound />
											<p className="text-left ml-2 text-lg">Andre</p>
										</div>
										<p className=" bg-green-500 p-1 rounded-lg hidden md:flex text-xs">Recomendado</p>
									</div>
									<div className="flex items-center">
										<p className="text-right mr-2">3</p>
										<FaStar className="w-5 h-5" />
										<FaStar className="w-5 h-5" />
										<FaStar className="w-5 h-5" />
									</div>
								</div>
								<p className="mr-20 md:mr-32">
									Mi experiencia con el servicio fue en general positiva. La reserva fue fácil de hacer y el proceso de recogida del
									vehículo fue rápido. Sin embargo, noté algunos pequeños problemas con el estado del coche que podrían mejorar. A
									pesar de eso, recomendaría este servicio.
								</p>
							</div>
							<div className="bg-white/30 rounded-xl p-3">
								<div className="flex justify-between">
									<div className="flex items-center mb-1">
										<div className="flex items-center opacity-80 md:mr-5">
											<CircleUserRound />
											<p className="text-left ml-2 text-lg">Soler</p>
										</div>
										<p className=" bg-green-500 p-1 rounded-lg hidden md:flex text-xs">Recomendado</p>
									</div>
									<div className="flex">
										<p className="text-right mr-2">4</p>
										<FaStar className="w-5 h-5" />
										<FaStar className="w-5 h-5" />
										<FaStar className="w-5 h-5" />
										<FaStar className="w-5 h-5" />
									</div>
								</div>
								<p className="mr-20 md:mr-32">
									Estoy muy satisfecho con el servicio. El personal fue amable y servicial, y el proceso de recogida y devolución
									del vehículo fue muy eficiente. El coche estaba en excelente estado y cumplió con mis expectativas. Recomiendo
									este servicio.
								</p>
							</div>
							<div className="bg-white/30 rounded-xl p-3">
								<div className="flex justify-between">
									<div className="flex items-center mb-1">
										<div className="flex items-center opacity-80 md:mr-5">
											<CircleUserRound />
											<p className="text-left ml-2 text-lg">Gwyn</p>
										</div>
										<p className=" bg-red-400 p-1 rounded-lg hidden md:flex text-xs">No Recomendado</p>
									</div>
									<div className="flex">
										<p className="text-right mr-2">1</p>
										<FaStar className="w-5 h-5" />
									</div>
								</div>
								<p className="mr-20 md:mr-32">
									Lamentablemente, mi experiencia dejó mucho que desear. El coche que me dieron tenía varios problemas mecánicos y
									no estaba limpio cuando lo recogí. Además, el proceso de devolución fue complicado y el personal no fue muy útil.
									No recomendaría este servicio.
								</p>
							</div>
							<div className="bg-white/30 rounded-xl p-3">
								<div className="flex justify-between">
									<div className="flex items-center mb-1">
										<div className="flex items-center opacity-80 md:mr-5">
											<CircleUserRound />
											<p className="text-left ml-2 text-lg">Malenia</p>
										</div>
										<p className=" bg-green-500 p-1 rounded-lg hidden md:flex text-xs">Recomendado</p>
									</div>
									<div className="flex">
										<p className="text-right mr-2">5</p>
										<FaStar className="w-5 h-5" />
										<FaStar className="w-5 h-5" />
										<FaStar className="w-5 h-5" />
										<FaStar className="w-5 h-5" />
										<FaStar className="w-5 h-5" />
									</div>
								</div>
								<p className="mr-20 md:mr-32">
									¡Increíble experiencia! Desde el momento en que realicé la reserva hasta la devolución del vehículo, todo fue
									perfecto. El coche estaba limpio y en excelentes condiciones, y el personal fue muy profesional y amigable.
									Recomiendo encarecidamente este servicio sin dudarlo.
								</p>
							</div>
							<div className="bg-white/30 rounded-xl p-3">
								<div className="flex justify-between">
									<div className="flex items-center mb-1">
										<div className="flex items-center opacity-80 md:mr-5">
											<CircleUserRound />
											<p className="text-left ml-2 text-lg">Lothric</p>
										</div>
										<p className=" bg-green-500 p-1 rounded-lg hidden md:flex text-xs">Recomendado</p>
									</div>
									<div className="flex">
										<p className="text-right mr-2">5</p>
										<FaStar className="w-5 h-5" />
										<FaStar className="w-5 h-5" />
										<FaStar className="w-5 h-5" />
										<FaStar className="w-5 h-5" />
										<FaStar className="w-5 h-5" />
									</div>
								</div>
								<p className="mr-20 md:mr-32">
									No puedo estar más contento con el servicio. La reserva fue fácil, el proceso de recogida fue rápido y el coche
									superó mis expectativas. Además, el personal fue extremadamente servicial y atento a todas mis necesidades.
									Definitivamente usaré este servicio nuevamente en el futuro con gusto.
								</p>
							</div>
							<div className="bg-white/30 rounded-xl p-3">
								<div className="flex justify-between">
									<div className="flex items-center mb-1">
										<div className="flex items-center opacity-80 md:mr-5">
											<CircleUserRound />
											<p className="text-left ml-2 text-lg">Yuria</p>
										</div>
										<p className=" bg-green-500 p-1 rounded-lg hidden md:flex text-xs">Recomendado</p>
									</div>
									<div className="flex">
										<p className="text-right mr-2">4</p>
										<FaStar className="w-5 h-5" />
										<FaStar className="w-5 h-5" />
										<FaStar className="w-5 h-5" />
										<FaStar className="w-5 h-5" />
									</div>
								</div>
								<p className="mr-20 md:mr-32">
									El servicio fue impecable desde el principio hasta el final. Reservar fue sencillo y el personal fue
									extremadamente amable y profesional. El coche estaba en perfecto estado y fue un placer conducirlo.
									Definitivamente recomendaré este servicio a mis amigos y familiares.
								</p>
							</div>
							<div className="bg-white/30 rounded-xl p-3">
								<div className="flex justify-between">
									<div className="flex items-center mb-1">
										<div className="flex items-center opacity-80 md:mr-5">
											<CircleUserRound />
											<p className="text-left ml-2 text-lg">Logan</p>
										</div>
										<p className=" bg-green-500 p-1 rounded-lg hidden md:flex text-xs">Recomendado</p>
									</div>
									<div className="flex">
										<p className="text-right mr-2">5</p>
										<FaStar className="w-5 h-5" />
										<FaStar className="w-5 h-5" />
										<FaStar className="w-5 h-5" />
										<FaStar className="w-5 h-5" />
										<FaStar className="w-5 h-5" />
									</div>
								</div>
								<p className="mr-20 md:mr-32">
									Mi experiencia fue muy buena. El proceso de reserva y recogida del coche fue eficiente y sin problemas. El coche
									estaba en buen estado y limpio. El personal fue muy atento y servicial. Solo le doy 4 estrellas porque el precio
									podría ser un poco más competitivo, pero en general, lo recomiendo.
								</p>
							</div>
							<div className="bg-white/30 rounded-xl p-3">
								<div className="flex justify-between">
									<div className="flex items-center mb-1">
										<div className="flex items-center opacity-80 md:mr-5">
											<CircleUserRound />
											<p className="text-left ml-2 text-lg">Leonhard</p>
										</div>
										<p className=" bg-red-400 p-1 rounded-lg hidden md:flex text-xs">No Recomendado</p>
									</div>
									<div className="flex">
										<p className="text-right mr-2">2</p>
										<FaStar className="w-5 h-5" />
										<FaStar className="w-5 h-5" />
									</div>
								</div>
								<p className="mr-20 md:mr-32">
									El servicio fue en general aceptable. La reserva fue fácil y el coche estaba en buen estado, aunque no impecable.
									El proceso de devolución fue un poco más largo de lo esperado, pero el personal fue cortés y servicial. Es una
									opción decente por el precio.
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
