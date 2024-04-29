import { FaInstagram, FaXTwitter, FaFacebook, FaLinkedin } from "react-icons/fa6";
import logo from "../assets/logo.png";

export const Footer = () => {
	return (
		<footer className="mt-12 border-t pb-12 pt-6 border-green-500">
			<div className="flex justify-around items-center mb-5">
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
			<div className="grid grid-cols-2 lg:grid-cols-3 gap-4 place-items-center">
				<div>
					<h3 className="mb-4 text-purple-400 font-semibold text-2xl">Titulo 1</h3>
					<ul className="space-y-2">
						<li className="hover:text-green-500 cursor-pointer">Opción 1</li>
						<li className="hover:text-green-500 cursor-pointer">Opción 2</li>
						<li className="hover:text-green-500 cursor-pointer">Opción 3</li>
					</ul>
				</div>
				<div>
					<h3 className="mb-4 text-purple-400 font-semibold text-2xl">Titulo 2</h3>
					<ul className="space-y-2">
						<li className="hover:text-green-500 cursor-pointer">Opción 1</li>
						<li className="hover:text-green-500 cursor-pointer">Opción 2</li>
						<li className="hover:text-green-500 cursor-pointer">Opción 3</li>
					</ul>
				</div>
				<div>
					<h3 className="mb-4 text-purple-400 font-semibold text-2xl">Titulo 3</h3>
					<ul className="space-y-2">
						<li className="hover:text-green-500 cursor-pointer">Opción 1</li>
						<li className="hover:text-green-500 cursor-pointer">Opción 2</li>
						<li className="hover:text-green-500 cursor-pointer">Opción 3</li>
					</ul>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
