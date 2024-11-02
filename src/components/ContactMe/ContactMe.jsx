import "./ContactMe.css";
import { TiContacts } from "react-icons/ti";

const ContactMe = () => {
	return (
		<section className="contactMe-contactMe-section">
			<h1 className="ml-80 font-bold contactMe-contactMe-title">
				<TiContacts />
				Contact me
			</h1>
			<div className="contactMe-content flex items-center">
				<div className="contactMe-text-container ml-4">
					<p className="text-base leading-relaxed mt-2 ml-2"></p>
					<div>
						You can write to me through mail. I will always try to
						respond.
					</div>
				</div>
			</div>

			<div className="contactMe-mail">
				<div className="contactMe-email">My email:</div>
				<div className="contactMe-email">Patryk.Wenz@gmail.com</div>
			</div>
		</section>
	);
};

export default ContactMe;
