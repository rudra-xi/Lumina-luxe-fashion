import React from "react";
import HeroSection from "./Components/HeroSection";
import Navbar from "./Components/Navbar";
import ClothingSection from "./Components/ClothingSection";
import AboutSection from "./Components/AboutSection";
import MissionSection from "./Components/MissionSection";
import ShoppingSection from "./Components/ShoppingSection";
import ReviewSection from "./Components/ReviewSection";
import ContactSection from "./Components/ContactSection";
import FooterSection from "./Components/FooterSection";

//? App is the main component of the website. It renders the entire application by importing and using various other components.
//? The components imported and used in the App function include:
//? - HeroSection: Displays the main hero image/video.
//? - Navbar: Renders the navigation bar with links to different sections of the website.
//? - ClothingSection: Displays a collection of clothing items.
//? - AboutSection: Provides information about the brand.
//? - MissionSection: Outlines the brand's mission or vision.
//? - ShoppingSection: Allows users to browse and purchase clothing items.
//? - ReviewSection: Displays customer reviews for the brand.
//? - ContactSection: Provides a form for users to contact the brand.
//? - FooterSection: Displays the website's footer with links and social media icons.

function App() {
	return (
		<main className="overflow-y-hidden text-neutral-200 antialiased">
			<HeroSection />
			<Navbar />
			<ClothingSection />
			<AboutSection />
			<MissionSection />
			<ShoppingSection />
			<ReviewSection />
			<ContactSection />
			<FooterSection />
		</main>
	);
}

export default App;
