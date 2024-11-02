import "./About.css";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const About = () => {
	return (
		<section className="about-section">
			<div className="about-text-container">
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
					{/* Github Link */}
					<a
						target="_blank"
						rel="noopener noreferrer"
						href="https://github.com/PatrykWenz-4"
						aria-label="GitHub profile link"
					>
						<FaGithub />
					</a>
					{/* LinkedIn Link */}
					<a
						target="_blank"
						rel="noopener noreferrer"
						href="https://www.linkedin.com/in/patryk-wenz-37710a1a8/"
						aria-label="LinkedIn profile link"
					>
						<FaLinkedin />
					</a>
				</div>
			</div>
		</section>
	);
};

export default About;
