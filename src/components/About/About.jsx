import "./About.css";

const About = () => {
	return (
		<section className="about-section">
			<div className="about-text-container">
				<h2>Hello, my name is</h2>
				<h1>Patryk</h1>
				<h3>
					I am a software engineer with a passion for developing
					innovative solutions. I am currently researching vector
					databases, including
				</h3>
				<h3 className="about-text-container-special">
					Qdrant and Streamlit.
				</h3>
				<a
					target="_blank"
					rel="noopener noreferrer"
					href="https://github.com/PatrykWenz-4"
					aria-label="Github profile link">
					Visit my GitHub
				</a>
				
			</div>
		</section>
	);
};

export default About;
