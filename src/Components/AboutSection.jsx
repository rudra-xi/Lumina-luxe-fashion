import about from "../Assets/Images/about.jpg";
import { About } from "../Assets/AssetsLink";
import { motion } from "framer-motion";

//? AboutSection is a component that renders a section displaying information about the company.
//? It imports the about image, About object, and Framer Motion library.
//? The component renders a section with a title, an image, a header, a divider, and a content paragraph.
//? The Framer Motion library is used to animate the elements, creating a smooth and visually appealing effect.

function AboutSection() {
	return (
		<div className="container mx-auto mb-8" id="about">
			<h2 className="mb-8 text-center text-3xl tracking-[.2rem] lg:text-4xl">
				About Us
			</h2>

			<div className="flex flex-wrap ">
				<div className="w-full p-4 lg:w-1/2">
					<img
						src={about}
						alt="about"
						className="rounded-3xl lg:-rotate-3"
					/>
				</div>
				<div className="w-full px-2 lg:w-1/2">
					<motion.h2
						initial={{ opacity: 0, y: 50 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.6, delay: 0.2 }}
						className="text-4xl lg:text-6xl text-white"
					>
						{About.header}
					</motion.h2>
					<motion.div
						initial={{ opacity: 0, y: 50 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.6, delay: 0.4 }}
						className="mb-8 mt-1 h-1.5 w-40 bg-[#ccb4d3] lg:-rotate-3"
					></motion.div>
					<motion.p
						initial={{ opacity: 0, y: 50 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.6, delay: 0.6 }}
						className="m-8 text-2xl leading-relaxed tracking-[.05rem] lg:max-w-xl "
					>
						{About.content}
					</motion.p>
				</div>
			</div>
		</div>
	);
}

export default AboutSection;
