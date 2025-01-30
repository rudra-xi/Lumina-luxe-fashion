//? AssetsLink.jsx is a file that contains various constants and objects used throughout the application.
//? It exports the following data:
//? - Links: an array of objects representing navigation links.
//? - Clothing: an array of objects representing clothing items.
//? - Shopping: an array of objects representing shopping options.
//? - About: an object containing information about the company.
//? - Mission: a string representing the company's mission.
//? - Review: an object containing information about a customer's review.
//? - Contact: an array of objects representing contact details.
//? - Social: an array of objects representing social media icons and their corresponding URLs.
//? This file is used to centralize and organize data, making it easier to maintain and update throughout the application.

import { FaTwitter, FaInstagram, FaFacebook } from "react-icons/fa6";

import mainImage1 from "./Images/img-1.jpg";
import mainImage2 from "./Images/img-2.jpg";
import mainImage3 from "./Images/img-3.jpg";
import mainImage4 from "./Images/img-4.jpg";
import mainImage5 from "./Images/img-5.jpg";
import mainImage6 from "./Images/img-6.jpg";
import mainImage7 from "./Images/img-7.jpg";
import mainImage8 from "./Images/img-8.jpg";
import mainImage9 from "./Images/img-9.jpg";
import mainImage10 from "./Images/img-10.jpg";

import forHer from "./Images/forHer.jpg";
import forHim from "./Images/forHim.jpg";
import forUs from "./Images/forUs.jpg";

export const Links = [
	{ text: "Clothing", targetId: "clothing" },
	{ text: "About", targetId: "about" },
	{ text: "Mission", targetId: "mission" },
	{ text: "Shopping", targetId: "shopping" },
	{ text: "Review", targetId: "review" },
	{ text: "Contact", targetId: "contact" },
];

export const Clothing = [
	{
		image: mainImage1,
		title: "Emerald Chic",
		description:
			"Oversized green jacket, bold red heels, minimalist backdrop.",
	},
	{
		image: mainImage2,
		title: "Comfort Chic",
		description:
			"Displaying casual outfit featuring beige jacket, black tee, cap.",
	},
	{
		image: mainImage3,
		title: "Bohemian Chic",
		description:
			"Earthy skirt, white top embody bohemian style.",
	},
	{
		image: mainImage4,
		title: "Twilight Chic",
		description:
			"Street-style ensemble in dynamic silhouette.",
	},
	{
		image: mainImage5,
		title: "Vest Chic",
		description:
			"Navy vest, white shirt, modern look.",
	},
	{
		image: mainImage6,
		title: "Cowboy Chic",
		description:
			"Dusk silhouette in wide-brim hat, vest.",
	},
	{
		image: mainImage7,
		title: "Rebel Chic",
		description:
			"Person wears black leather jacket and denim.",
	},
	{
		image: mainImage8,
		title: "Urban Chic",
		description:
			"High-waisted trousers, white shirt, trendy, classic outfit ensemble.",
	},
	{
		image: mainImage9,
		title: "Street Chic",
		description:
			"Stylish monochrome outfit with statement shoes.",
	},
	{
		image: mainImage10,
		title: "Retro Chic",
		description:
			"Elegant tweed jumpsuit with bold blazer.",
	},
];

export const Shopping = [
	{
		number: "01.",
		image: forHer,
		title: "For Her",
		description:
			"Welcome to a world of fashion designed exclusively for ladies! Step in and explore the latest in fashion that celebrates femininity and sophistication.",
	},
	{
		number: "02.",
		image: forHim,
		title: "For Him",
		description:
			"Welcome to a hub of style crafted exclusively for boys and men! Dive into the latest fashion that embodies masculinity and elegance.",
	},
	{
		number: "03.",
		image: forUs,
		title: "For Us",
		description:
			"Welcome to a stylish haven for couples! Explore the latest in couple’s fashion and step out in style together, showcasing your love and sophistication.",
	},
];

export const About = {
	header: "Discover the Essence of Elegance with Lumina Luxe",
	content: "Welcome to Lumina Luxe, where elegance meets innovation. Our brand is dedicated to crafting timeless, luxurious fashion pieces that empower you to shine with confidence and grace. Discover the perfect blend of sophistication and modernity with Lumina Luxe.",
};

export const Mission =
	"At Lumina Luxe, our mission is to blend timeless elegance with innovative design, empowering individuals to express their unique style with confidence and sophistication.";

export const Review = {
	name: "Isabella Hart",
	profession: "Fashion Critic",
	content: "Lumina Luxe epitomizes elegance and sophistication, offering timeless fashion pieces that exude glamour and allure, making every wearer feel like a star on the red carpet.",
};

export const Contact = [
	{
		key: "address",
		value: "Address: 123 Fashion Street, Bandra West, Mumbai, Maharashtra, India",
	},
	{
		key: "phone",
		value: "Phone: +91 98765 43210",
	},
	{
		key: "email",
		value: "Email: contact@luminaluxe.in",
	},
];

export const Social = [
	{
		href: "http://instagram.com/",
		icon: <FaInstagram fontSize={30} className=" hover:text-[#ccb4d3]" />,
	},
	{
		href: "http://x.com/",
		icon: <FaTwitter fontSize={30} className="hover:text-[#ccb4d3]" />,
	},
	{
		href: "http://facebook.com/",
		icon: <FaFacebook fontSize={30} className="hover:text-[#ccb4d3]" />,
	},
];
