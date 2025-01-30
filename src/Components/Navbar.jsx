import { useState } from "react";
import logo from "../Assets/Images/logo.png";
import { Links } from "../Assets/AssetsLink";

import { FaBars } from "react-icons/fa6";
import { FaTimes } from "react-icons/fa";

//? Navbar is a component that renders the navigation bar for the website.
//? It includes a logo, a list of navigation links, and a hamburger menu for mobile devices.
//? The navigation links are defined in the Links array, which is imported from the AssetsLink file.
//? The component uses React's useState hook to manage the state of the mobile menu.
//? The handleScroll function is used to smoothly scroll to the target section when a navigation link is clicked.
//? The component renders different sets of navigation links based on the screen size, using CSS classes for responsive design.

function Navbar() {
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

	const toggleMobileMenu = () => {
		setIsMobileMenuOpen(!isMobileMenuOpen);
	};

	const handleScroll = (event, targetId) => {
		event.preventDefault();
		const targetEl = document.getElementById(targetId);
		if (targetEl) {
			const offsetTop = targetEl.offsetTop - 80;
			window.scrollTo({
				top: offsetTop,
				behavior: "smooth",
			});
		}
		setIsMobileMenuOpen(false);
	};

	return (
		<nav className="fixed top-4 flex w-full flex-col items-center justify-center z-50">
			<div className="flex w-full items-center justify-between overflow-y-hidden p-4 backdrop-blur-md lg:m-2 lg:w-[70rem] lg:rounded-full lg:shadow-lg">
				<img src={logo} alt="Lumina Luxe" width={120} height={22} />
				<div className="hidden space-x-6 lg:flex">
					{Links.map((link, idx) => (
						<a
							key={idx}
							href={`#${link.targetId}`}
							className={`text-sm ${
								idx !== 0
									? "border-l-2 border-neutral-300/20 pl-2"
									: ""
							} hover:text-[#ccb4d3] hover:opacity-80`}
							onClick={(e) =>
								handleScroll(e, link.targetId)
							}
						>
							{link.text}
						</a>
					))}
				</div>

				<div className="lg:hidden">
					<button onClick={toggleMobileMenu}>
						{isMobileMenuOpen ? <FaTimes /> : <FaBars />}
					</button>
				</div>
			</div>
			{isMobileMenuOpen && (
				<div className="w-full backdrop-blur-lg lg:hidden">
					{Links.map((link, idx) => (
						<a
							key={idx}
							href={`#${link.targetId}`}
							className="block p-4 uppercase tracking-wider"
							onClick={(e) =>
								handleScroll(e, link.targetId)
							}
						>
							{link.text}
						</a>
					))}
				</div>
			)}
		</nav>
	);
}

export default Navbar;
