import "./Footer.css";
import { GrCertificate } from "react-icons/gr";

const Footer = () => {
	return (
		<section className="header-header-section">
			<h1 className="ml-80 font-bold header-header-title">
				<GrCertificate />
				Contact me
			</h1>
			<div className="header-content flex items-center">
				<div className="header-text-container ml-4">
					<p className="text-base leading-relaxed mt-2 ml-2"></p>
					<div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Footer;
