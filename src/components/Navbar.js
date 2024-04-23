import { Menu, X } from "lucide-react";
import { useState } from "react";
import "../index.css";
import logo from "../logo.png";

const Navbar = () => {
	const { menuNavMovil, setMenuNavMovil } = useState(false);

	const toggleNavbar = () => {
		setMenuNavMovil(!menuNavMovil);
	};

	return (
		<nav className="top-0 z-50 py-3 backdrop-blur-lg border-b-2 border-green-500">
			<div className="container px-4 mx-auto relative text-md">
				<div className="flex md:justify-center justify-between items-center">
					<div className="flex items-center flex-shrink-0">
						<a href="/">
							<img className="h-10 w-10 mr-2" src={logo} alt="Logo" />
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
			</div>
		</nav>
	);
};

export default Navbar;
