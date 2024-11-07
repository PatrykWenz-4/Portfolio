import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
	return (
		<section className="header-header-section">
			<div className="header-content">
				<div className="header-text-container">
					<p>Patryk Wenz</p>
				</div>
			</div>
			<nav className="header-nav">
				<ul className="nav-links">
					<li>
						<Link to="/Home#About">About</Link>{" "}
					</li>
					<li>
						<Link to="/Home#workExperience">Work Experience</Link>
					</li>
					<li>
						<Link to="/Home#RelevantExperience">
							Relevant Experience
						</Link>
					</li>
					<li>
						<Link to="/Home#ContactMe">Contact Me</Link>
					</li>
					<li>
						<Link to="/blog">My Blog</Link>
					</li>
				</ul>
			</nav>
		</section>
	);
};

export default Header;
