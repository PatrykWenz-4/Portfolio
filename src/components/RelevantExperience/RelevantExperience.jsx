import "./RelevantExperience.css";
import { GrCertificate } from "react-icons/gr";


const RelevantExperience = () => {
	return (
		<section className="work-experience-section">
			<h1 className="ml-80 font-bold work-experience-title">
			<GrCertificate />
			My certificates
			</h1>
			<div className="work-content flex items-center">

				<div className="work-text-container ml-4">
					<p className="text-base leading-relaxed mt-2 ml-2"></p>
				</div>
			</div>
		</section>
	);
};

export default RelevantExperience;
