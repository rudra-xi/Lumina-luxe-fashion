import { Contact } from "../Assets/AssetsLink";

//? ContactSection is a component that renders a section displaying information about how to contact the brand.
//? It imports the Contact object from the AssetsLink file.
//? The component renders a section with a title and a list of contact details.
//? The contact details are displayed using p tags, and each p tag is assigned a unique key.
//? The component does not use any additional libraries or dependencies.

function ContactSection() {
	return (
		<section className="container mx-auto py-16" id="contact">
			<h2 className="mb-8 text-center text-3xl lg:text-4xl">
				Contact Us
			</h2>
			<div className="text-neutral-400">
				{Contact.map((contactDetails) => (
					<p
						key={contactDetails.key}
						className="my-20 border-b-2 border-dotted border-neutral-700 pb-12 text-center text-2xl tracking-[.1rem] lg:text-3xl"
					>
						{contactDetails.value}
					</p>
				))}
			</div>
		</section>
	);
}

export default ContactSection;
