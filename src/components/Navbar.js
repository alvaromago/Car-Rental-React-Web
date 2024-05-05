import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import "../index.css";
import logo from "../assets/logo.png";

const Navbar = () => {
	const [menuNavMovil, setMenuNavMovil] = useState(false);

	const toggleNavbar = () => {
		setMenuNavMovil(!menuNavMovil);
	};

	return (
		<nav className="top-0 z-50 py-3 backdrop-blur-lg border-b-2 border-green-500 bg-black">
			<div className="container px-4 mx-auto relative text-md">
				<div className="flex md:justify-center justify-between items-center">
					<div className="flex items-center flex-shrink-0">
						<a href="/">
							<img className="h-10 w-10 mr-2" src={logo} alt="CarRentalHub" />
						</a>
					</div>
					<ul className="hidden md:flex ml-14 space-x-12">
						<li className=" hover:text-green-500">
							<Link to="/carlist">Coches</Link>
						</li>
						<li className=" hover:text-green-500">
							<Link to="/contact">Contacto</Link>
						</li>
						<li className=" hover:text-green-500">
							<Link to="/about">Sobre nosotros</Link>
						</li>
					</ul>
					<div className="md:hidden sm:flex flex-col justify-end">
						<button onClick={toggleNavbar}>{menuNavMovil ? <X /> : <Menu />}</button>
					</div>
				</div>
				{menuNavMovil && (
					<div className="fixed right-0 z-20 bg-black w-full p-12 md:hidden border-b-2 border-green-500">
						<ul className="flex flex-col justify-around items-center">
							<li className="group flex hover:text-green-500 py-3 hover:text-xl text-lg font-semibold">
								<Link to="/carlist">Coches</Link>
							</li>
							<li className="group flex hover:text-green-500 py-3 hover:text-xl text-lg font-semibold">
								<Link to="/contact">Contacto</Link>
							</li>
							<li className="group flex hover:text-green-500 py-3 hover:text-xl text-lg font-semibold">
								<Link to="/about">Sobre nosotros</Link>
							</li>
						</ul>
					</div>
				)}
			</div>
		</nav>
	);
};

export default Navbar;
