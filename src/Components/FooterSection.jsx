import { Social } from "../Assets/AssetsLink";

//? FooterSection is a component that renders a section displaying social media links and copyright information.
//? It imports the Social object from the AssetsLink file.
//? The component renders a section with a list of social media icons and a copyright notice.
//? The social media icons are displayed using a div with a flex container, and each icon is assigned a unique key.
//? The component does not use any additional libraries or dependencies.

function FooterSection() {
	return (
		<div className="mb-8 mt-20">
			<div className="flex items-center justify-center gap-8">
				{Social.map((link, idx) => (
					<a
						key={idx}
						href={link.href}
						target="_blank"
						rel="noopener noreferrer"
					>
						{link.icon}
					</a>
				))}
			</div>
			<p className="mt-8 text-center text-neutral-500">
				&copy;Lumina Luxe ~ Copyright 2024 ~ All rights reserved.
			</p>
		</div>
	);
}

export default FooterSection;
