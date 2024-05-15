import data from "../json/car.json";
import "../index.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { UserRound, DoorClosed, Cog } from "lucide-react";

const CarList = () => {
	return (
		<div>
			<Navbar />
			<div className="bg-bg">
				<div className="p-5">
					<div>
						<p className="text-center text-transparent bg-clip-text pb-5 font-extrabold text-3xl lg:text-6xl bg-gradient-to-r from-green-500 to-purple-300">
							¿Qué vehículo quieres conducir?
						</p>
					</div>
					<div className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-5 mx-5 md:mx-24 xl:mx-30 2xl:mx-36 mt-7">
						{data.map((coche, index) => (
							<div className="bg-gradient-to-br col-span-1 from-blue-gray-900 to-blue-gray-300 rounded-xl flex flex-col" key={index}>
								<div>
									<p className="ml-4 mt-4 text-lg">
										{coche.marca} {coche.modelo}
									</p>
									<div className="flex ml-3 mt-1 text-sm">
										<div className="flex items-center bg-blue-gray-400 p-1.5 rounded-2xl">
											<UserRound className="h-4 w-4" />
											<p className="ml-1">{coche.asientos}</p>
										</div>
										<div className="flex items-center ml-5 bg-blue-gray-400 p-1.5 rounded-2xl opacity-90">
											<Cog className="h-4 w-4" />
											<p className="ml-1">{coche.cambio}</p>
										</div>
										<div className="flex items-center ml-5 bg-blue-gray-400 p-1.5 rounded-2xl">
											<DoorClosed className="w-4 h-4" />
											<p className="ml-1">{coche.puertas}</p>
										</div>
									</div>
								</div>
								<div className="flex justify-center mt-3">
									<img src={coche.img} alt={coche.modelo} />
								</div>
								<div className="mt-auto">
									<p className="ml-4 mb-4">
										<span className="text-3xl">{coche.precio}</span> € / día
									</p>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
			<Footer />
		</div>
	);
};

export default CarList;
