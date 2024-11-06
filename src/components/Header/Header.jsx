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
						<a href="#/About">About</a>
					</li>
					<li>
						<a href="#/workExperience">Work Experience</a>
					</li>
					<li>
						<a href="#/RelevantExperience">Relevant Experience</a>
					</li>
					<li>
						<a href="#/ContactMe">Contact Me</a>
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
