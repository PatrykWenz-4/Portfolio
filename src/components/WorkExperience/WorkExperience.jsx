import "./WorkExperience.css";
import myImage from "../images/iGabinet.jpg";
import { FaBriefcase, FaJs, FaHtml5, FaDocker, FaReact } from "react-icons/fa";
import { SiPhp, SiMysql } from "react-icons/si";

const WorkExperience = () => {
	return (
		<section className="work-experience-section">
			<h1 className="ml-80 font-bold work-experience-title">
				<FaBriefcase />
				Work Experience
			</h1>
			<div className="work-content flex items-center">
				<div className="flex flex-col items-center">
					<img src={myImage} alt="" className="work-image mr-4" />
					<p className="text-sm mr-2">August 2024 - Today 2024</p>
				</div>
				<div className="work-text-container ml-4">
					<h1 className="mt-4 text-xl font-bold">
						Full-Stack Developer
					</h1>
					<h1 className="mt-4 text-xl font-bold work-experience-tech-used">
						<FaJs /> <SiPhp /> <FaHtml5 /> <FaDocker /> <FaReact />
						<SiMysql />
					</h1>
				</div>
			</div>
			<div className="work-spacer"></div>
		</section>
	);
};

export default WorkExperience;
