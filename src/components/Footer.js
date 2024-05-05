import "../index.css";
import { FaInstagram, FaXTwitter, FaFacebook, FaLinkedin, FaRegCompass } from "react-icons/fa6";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

export const Footer = () => {
	return (
		<footer className="border-t pb-12 pt-6 border-green-500 bg-black">
			<div className="flex justify-around items-center">
				<a href="/">
					<img className="w-20 h-20" src={logo} alt="CarRentalHub" />
				</a>
				<div className="flex">
					<FaInstagram className="mx-2 h-8 w-8 hover:scale-125 cursor-pointer" />
					<FaXTwitter className="mx-2 h-8 w-8 hover:scale-125 cursor-pointer" />
					<FaFacebook className="mx-2 h-8 w-8 hover:scale-125 cursor-pointer" />
					<FaLinkedin className="mx-2 h-8 w-8 hover:scale-125 cursor-pointer" />
				</div>
			</div>
			<div className="md:flex justify-center">
				<div className="grid shadow-md  md:shadow-2xl md:shadow-purple-400/30 p-7 place-items-center mx-8 md:mx-5 hover:text-green-500 cursor-pointer md:bg-blue-gray-900/30 rounded-xl">
					<FaRegCompass className="h-10 w-10 mb-3" />
					<p>Ctra. Su Eminencia, 4, 41006 Sevilla</p>
				</div>
				<div className="grid shadow-md md:shadow-2xl md:shadow-purple-400/30 md:p-7 place-items-center mx-8 md:mx-5 md:bg-blue-gray-900/30 rounded-xl">
					<Link to="/" className="text-lg  font-semibold hover:text-green-500">
						Inicio
					</Link>
					<Link to="/carlist" className="text-lg font-semibold hover:text-green-500">
						Coches
					</Link>
					<Link to="/contact" className="text-lg font-semibold hover:text-green-500">
						Contacto
					</Link>
					<Link to="/about" className="text-lg font-semibold hover:text-green-500">
						Sobre nosotros
					</Link>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
