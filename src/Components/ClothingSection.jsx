import { Clothing } from "../Assets/AssetsLink";
import ClothCard from "./ClothCard";

//? ClothingSection is a component that renders a section displaying information about the clothing projects.
//? It imports the Clothing array from the AssetsLink file and the ClothCard component.
//? The component renders a section with a title and a grid of ClothCard components, each displaying information about a clothing project.
//? The Clothing array is mapped to create ClothCard components, which are then rendered in the grid.

function ClothingSection() {
	return (
		<section className="container mx-auto py-16" id="clothing">
			<h2 className="mb-8 text-center text-3xl tracking-[.2rem] lg:text-4xl">
				Our Clothings
			</h2>

			<div className="grid grid-cols-1 gap-8 md:grid-cols-5">
				{Clothing.map((project, idx) => (
					<ClothCard key={idx} project={project} />
				)) }
			</div>
		</section>
	);
}

export default ClothingSection;
