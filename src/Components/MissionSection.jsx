import { Mission } from "../Assets/AssetsLink";
import missionVideo from "../Assets/Videos/missionSection.mp4";
import missionImage from "../Assets/Images/missionSection.jpg";
import { motion } from "framer-motion";

//? MissionSection is a component that renders a section displaying information about the brand's mission.
//? It imports the Mission object, missionVideo, and missionImage from the AssetsLink and Assets files, respectively.
//? The component renders a section with a title, a video, and a text paragraph.
//? The video is displayed using a video tag with the appropriate source and styling.
//? The text paragraph is displayed using a p tag, and it is positioned absolutely over the video.
//? The Framer Motion library is used to animate the elements, creating a smooth and visually appealing effect.

function MissionSection() {
	return (
		<section id="mission">
			<div className="container mx-auto text-center">
				<h2 className="mb-4 text-3xl lg:text-4xl tracking-[.2rem] ">
					Our Mission
				</h2>
				<div className="relative flex items-center justify-center">
					<motion.video
						initial={{ opacity: 0 }}
						whileInView={{ opacity: 1 }}
						viewport={{ once: true }}
						transition={{ duration: 1 }}
						autoPlay
						loop
						muted
						playsInline
						poster={missionImage}
						className="w-[90rem] rounded-3xl"
					>
						<source src={missionVideo} type="video/mp4" />
					</motion.video>
					<motion.div
						initial={{ opacity: 0 }}
						whileInView={{ opacity: 1 }}
						viewport={{ once: true }}
						transition={{ duration: 0.5, delay: 0.5 }}
						className="absolute h-full w-[90rem] rounded-3xl bg-[#141619]/70"
					></motion.div>
					<motion.p
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 1, delay: 0.5 }}
						className="absolute max-w-lg lg:text-1xl"
					>
						{Mission}
					</motion.p>
				</div>
			</div>
		</section>
	);
}

export default MissionSection;
