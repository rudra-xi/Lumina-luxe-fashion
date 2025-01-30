//? ClothCard is a component that renders a card displaying information about a clothing project.
//? It takes a project object as a prop, which contains the image, title, and description of the clothing project.
//? The component renders an image of the clothing project, along with a title and description.
//? The image is displayed using an img tag with the appropriate source, alt text, and CSS classes for styling.
//? The title and description are displayed using h3 and p tags, respectively.

function ClothCard({ project }) {
	return (
		<div>
			<img
				src={project.image}
				alt={project.title}
				className="rounded-3xl p-2 h-[20rem] w-[20rem]  object-cover"
			/>
			<div className="p-4">
				<h3 className="mb-2 text-2xl font-bold">
					{project.title}
				</h3>
				<p className="text-sm"> {project.description}</p>
			</div>
		</div>
	);
}

export default ClothCard;
