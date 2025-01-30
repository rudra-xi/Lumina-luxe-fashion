import reviewImage from "../Assets/Images/reviewSection.jpg";
import { Review } from "../Assets/AssetsLink";
import customer1 from "../Assets/Images/customer-1.jpg";
import customer2 from "../Assets/Images/customer-2.jpg";
import customer3 from "../Assets/Images/customer-3.jpg";
import customer4 from "../Assets/Images/customer-4.jpg";
import { motion } from "framer-motion";

//? ReviewSection is a component that renders a section displaying information about the brand's customer reviews.
//? It imports the reviewImage, Review object, and customer images from the Assets file.
//? The component renders a section with a content paragraph, an author image and information, and a grid of customer images.
//? The Framer Motion library is used to animate the elements, creating a smooth and visually appealing effect.
//? The containerVar and itemsVar objects define the variants for the container and items, respectively.
//? These variants are used to control the appearance and behavior of the elements when they are shown or hidden.

const containerVar = {
	hidden: { opacity: 0 },
	show: { opacity: 1, transition: { staggerChildren: 0.8 } },
};

const itemsVar = {
	hidden: { opacity: 0, y: 20 },
	show: { opacity: 1, y: 0, transition: { duration: 1 } },
};

function ReviewSection() {
	return (
		<section className="container mx-auto mb-8 mt-12 " id="review">
			<motion.div
				initial="hidden"
				whileInView="show"
				variants={containerVar}
				viewport={{ once: true }}
				className="flex flex-col"
			>
				<motion.p
					variants={itemsVar}
					className="mb-10 text-3xl leading-normal tracking-[.1rem] lg:mx-40 lg:mt-40 lg:text-[3.5rem]"
				>
					{Review.content}
				</motion.p>
				<div className="flex items-center justify-center gap-6">
					<img
						src={reviewImage}
						alt={Review.name}
						className="w-[80px] aspect-square object-cover rounded-full border"
					/>
					<div className="tracking-[.1rem] ">
						<h6>{Review.name}</h6>
						<p className="text-sm text-neutral-500">
							{Review.profession}
						</p>
					</div>
				</div>
			</motion.div>
			<motion.div
				initial="hidden"
				whileInView="show"
				variants={itemsVar}
				viewport={{ once: true }}
				className="mt-14 flex flex-col items-center justify-center gap-2 md:flex-row"
			>
				{[customer1, customer2, customer3, customer4].map(
					(customer, idx) => (
						<motion.img
							variants={itemsVar}
							key={idx}
							src={customer}
							alt="customer"
							className="h-[300px] w-[200px] rounded-t-3xl object-cover"
						/>
					)
				)}
			</motion.div>
		</section>
	);
}

export default ReviewSection;
