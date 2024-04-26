import { Menu, X, ArrowRight } from "lucide-react";
import { useState } from "react";
import "../index.css";
import logo from "../assets/logo.png";

const Navbar = () => {
	const [menuNavMovil, setMenuNavMovil] = useState(false);

	const toggleNavbar = () => {
		setMenuNavMovil(!menuNavMovil);
	};

	return (
		<nav className="top-0 z-50 py-3 backdrop-blur-lg border-b-2 border-green-500">
			<div className="container px-4 mx-auto relative text-md">
				<div className="flex md:justify-center justify-between items-center">
					<div className="flex items-center flex-shrink-0">
						<a href="/">
							<img className="h-10 w-10 mr-2" src={logo} alt="CarRentalHub" />
						</a>
					</div>
					<ul className="hidden md:flex ml-14 space-x-12">
						<li className=" hover:text-green-500">
							<a href="/carlist">Coches</a>
						</li>
						<li className=" hover:text-green-500">
							<a href="/contacto">Contacto</a>
						</li>
						<li className=" hover:text-green-500">
							<a href="/about">Sobre nosotros</a>
						</li>
					</ul>
					<div className="md:hidden sm:flex flex-col justify-end">
						<button onClick={toggleNavbar}>{menuNavMovil ? <X /> : <Menu />}</button>
					</div>
				</div>
				{menuNavMovil && (
					<div className="fixed right-0 z-20 bg-neutral-900 w-full p-12 md:hidden border-b-2 border-green-500">
						<ul className="flex flex-col justify-around items-center">
							<li className="group flex hover:text-green-500 py-3 hover:text-xl text-lg font-semibold">
								<a href="/carlist">Coches</a>
								<ArrowRight className="hidden group-hover:flex relative ml-24" />
							</li>
							<li className="group flex hover:text-green-500 py-3 hover:text-xl text-lg font-semibold">
								<a href="/contacto">Contacto</a>
								<ArrowRight className="hidden group-hover:flex relative ml-24" />
							</li>
							<li className="group flex hover:text-green-500 py-3 hover:text-xl text-lg font-semibold">
								<a href="/about">Sobre nosotros</a>
								<ArrowRight className="hidden group-hover:flex relative ml-24" />
							</li>
						</ul>
					</div>
				)}
			</div>
		</nav>
	);
};

export default Navbar;
