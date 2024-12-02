import { HashRouter as Router, Route, Routes } from "react-router-dom";
import About from "./components/About/About";
import WorkExperience from "./components/WorkExperience/WorkExperience";
import RelevantExperience from "./components/RelevantExperience/RelevantExperience";
import ContactMe from "./components/ContactMe/ContactMe";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Blog from "./components/Blog/Blog";
import DockerDetails from "./components/Blog/docker_11_10_24/DockerDetails";
import Ollama from "./components/Blog/Ollama/Ollama";
import 'primereact/resources/themes/lara-light-blue/theme.css'; 
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css'; 



function App() {
	return (
		<Router>
			<div className="App">
				<header className="App-header">
					<Header />
					<Routes>
						<Route
							path="/Portfolio"
							element={
								<>
									<section id="About">
										<About />
									</section>
									<section id="workExperience">
										<WorkExperience />
									</section>
									<section id="RelevantExperience">
										<RelevantExperience />
									</section>
									<section id="ContactMe">
										<ContactMe />
									</section>
									<section id="Footer">
										<Footer />
									</section>
								</>
							}
						/>
						<Route path="/Portfolio/blog" element={<Blog />} />
						<Route path="/Portfolio/Blog/DockerDetails" element={<DockerDetails />} />
						<Route path="/Portfolio/Blog/Ollama" element={<Ollama />} />

					</Routes>
				</header>
			</div>
		</Router>
	);
}

export default App;
