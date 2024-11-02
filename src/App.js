import About from "./components/About/About";
import WorkExperience from "./components/WorkExperience/WorkExperience";
import RelevantExperience from "./components/RelevantExperience/RelevantExperience";
import ContactMe from "./components/ContactMe/ContactMe";
import Footer from "./components/Footer/Footer";
// import Header from "./components/Header/Header";


function App() {
	return (
		<div className="App">
			<header className="App-header">
				<section id="about">
					<About />
				</section>
				<section id="workExperience">
					<WorkExperience />
				</section>
				<section id="about">
					<RelevantExperience />
				</section>
				<section id="ContactMe">
					<ContactMe />
				</section>
				<section id="footer">
					<Footer />
				</section>
			</header>
		</div>
	);
}

export default App;
