import "./Footer.css";

const Footer = () => {
	return (
		<section className="Footer--Footer--section">
				<footer className="p-4 font-semibold">
					<h1>
						&copy;
						{" " + new Date().getFullYear()} Patryk Wenz
					</h1>
				</footer>
		</section>
	);
};

export default Footer;
