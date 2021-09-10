import React from "react";
import {
	HeroSection,
	HeroText,
	HeroTextHightlight,
	HeroDescription,
	Wrapper,
} from "./HeroContainer.style";
import { Hero as HeroImage } from "assets";

interface HeroContainerProps {
	heroText?: string;
}

const HeroContainer: React.FC<HeroContainerProps> = () => {
	return (
		<HeroSection>
			<Wrapper>
				<HeroText>
					Buy ticket concert
					<HeroTextHightlight> anytime</HeroTextHightlight> and
					<HeroTextHightlight> anywhere !</HeroTextHightlight>
				</HeroText>
				<HeroDescription>
					Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
					sint. Velit officia consequat duis enim velit mollit. Exercitation
					veniam consequat sunt nostrud amet.
				</HeroDescription>
			</Wrapper>
			<div>
				<img src={HeroImage} alt="Hero Images" className="hero-image" />
			</div>
		</HeroSection>
	);
};

export default HeroContainer;
