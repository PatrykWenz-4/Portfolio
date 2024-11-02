import "./WorkExperience.css";
import myImage from "../images/iGabinet.jpg";

const WorkExperience = () => {
	return (
		<section className="work-experience-section">
			<h1 className="ml-80 font-bold">Work Experience</h1>
			<div className="work-content flex items-center">
				<div className="flex flex-col items-center">
					<img src={myImage} alt="" className="work-image mr-4" />
					<p className="text-sm mr-2">August 2024 - Today 2024</p>
				</div>
				<div className="work-text-container ml-4">
					<h1 className="mt-4 text-xl font-bold">
						Full-Stack Developer
					</h1>
					<p className="text-base leading-relaxed mt-2 ml-2">

					</p>
				</div>
			</div>
		</section>
	);
};

export default WorkExperience;
