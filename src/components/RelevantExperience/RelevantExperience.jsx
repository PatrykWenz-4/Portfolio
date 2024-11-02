import "./RelevantExperience.css";
import { GrCertificate } from "react-icons/gr";

const RelevantExperience = () => {
	return (
		<section className="experience-experience-section">
			<h1 className="ml-80 font-bold experience-experience-title">
				<GrCertificate />
				My certificates
			</h1>
			<div className="experience-content flex items-center">
				<div className="experience-text-container ml-4">
					<p className="text-base leading-relaxed mt-2 ml-2"></p>
					<div>AWS Academy Graduate - AWS Academy Cloud Foundations</div>
					<div>AWS Academy Graduate - AWS Academy Data Engineering</div>
					<div>AWS Academy Graduate - AWS Academy Introduction to Cloud</div>
					<div>Fundamentals of Accelerated Data Science</div>
					<div>Accelerating Data Engineering Pipelines</div>
					<div>98-361:MTA: Software Development Fundamentals</div>
					<div>CLA - C Programming Language Certified Associate</div>
					<div>[CLA-11-02] CLA – C Certified Associate Programmer</div>

				</div>
			</div>

		</section>
	);
};

export default RelevantExperience;
