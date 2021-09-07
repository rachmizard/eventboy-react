import React from "react";
import {
	HeroSection,
	HeroText,
	HeroTextHightlight,
	HeroDescription,
	Wrapper,
} from "./Hero.style";
import { Hero as HeroImage } from "assets";

interface HeroProps {
	heroText?: string;
}

const Hero: React.FC<HeroProps> = () => {
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
				<img src={HeroImage} alt="Hero Images" />
			</div>
		</HeroSection>
	);
};

export default Hero;
