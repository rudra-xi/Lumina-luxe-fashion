import { Shopping } from "../Assets/AssetsLink";
import { motion } from "framer-motion";

//? ShoppingSection is a component that renders a section displaying information about the brand's shopping options.
//? It imports the Shopping array from the AssetsLink file and the Framer Motion library.
//? The component renders a section with a title, a container, and a list of shopping options.
//? Each shopping option is displayed using a div with an image and a description.
//? The Framer Motion library is used to animate the elements, creating a smooth and visually appealing effect.
//? The containerVar and itemVar objects define the variants for the container and items, respectively.
//? These variants are used to control the appearance and behavior of the elements when they are shown or hidden.

const containerVar = {
	hidden: { opacity: 0 },
	show: { opacity: 1 },
	transition: { staggerChildren: 1 },
};
const itemVar = {
	hidden: { opacity: 0, y: 20 },
	show: { opacity: 1, y: 0 },
	transition: { duration: 0.8 },
};

function ShoppingSection() {
	return (
		<section id="shopping">
			<h2 className="my-8 text-center text-3x lg:text-4xl tracking-[.2rem]">
				Shop Here
			</h2>
			<motion.div
				initial="hidden"
				whileInView="show"
				variants={containerVar}
				className="container mx-auto px-4"
			>
				{Shopping.map((shop, idx) => (
					<motion.div
						variants={itemVar}
						className="flex items-center border-b-4 border-dotted border-neutral-700/40 py-2"
						key={idx}
					>
						<div className="w-1/3 flex-shrink-0">
							<img
								src={shop.image}
								alt="shopping"
								className="h-[22rem] rounded-3xl aspect-square object-cover"
							/>
						</div>
						<div className=" pl-8">
							<h3 className="text-2xl uppercase">
								{shop.title}
							</h3>
							<p className="mt-4 text-lg">
								{shop.description}
							</p>
						</div>
					</motion.div>
				))}
			</motion.div>
		</section>
	);
}

export default ShoppingSection;
