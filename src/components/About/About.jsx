import "./About.css";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import styled from "styled-components";
import Face from "./Face.png";
import { motion } from "framer-motion";

const Section = styled.section`
	display: flex;
	align-items: center;
	padding: 2rem;
`;

const TextContainer = styled.div`
	max-width: 640px;
	margin-right: 2rem;
`;

const Image = styled.img`
	width: 100%;
	height: auto;
	margin-left: 15rem;
	flex-direction: column;
	display: flex;
`;
const About = () => {
	return (
		<motion.h1
			initial={{ opacity: 0, scale: 0.5 }}
			animate={{ opacity: 1, scale: 1 }}
			transition={{ duration: 0.5 }}
		>
			<Section className="about-section">
				<TextContainer className="about-text-container">
					<h2>Hi, my name is</h2>
					<h1>Patryk Wenz</h1>
					<h3>
						I am a software engineer with a passion for developing
						innovative solutions. I am currently researching vector
						databases, including
					</h3>
					<h3 className="about-text-container-special">
						Qdrant and Streamlit.
					</h3>
					<div className="about-social-links">
						<a
							target="_blank"
							rel="noopener noreferrer"
							href="https://github.com/PatrykWenz-4"
							aria-label="GitHub profile link"
						>
							<FaGithub />
						</a>
						<a
							target="_blank"
							rel="noopener noreferrer"
							href="https://www.linkedin.com/in/patryk-wenz-37710a1a8/"
							aria-label="LinkedIn profile link"
						>
							<FaLinkedin />
						</a>
					</div>
				</TextContainer>
				<Image src={Face} alt="Blog Visual" />
			</Section>
		</motion.h1>
	);
};

export default About;
