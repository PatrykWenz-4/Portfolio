import About from "./components/About/About";
import WorkExperience from "./components/WorkExperience/WorkExperience";
import RelevantExperience from "./components/RelevantExperience/RelevantExperience";


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
			</header>
		</div>
	);
}

export default App;
