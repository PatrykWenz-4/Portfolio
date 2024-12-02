import React from "react";
import styled from "styled-components";

const TextWrapper = styled.div`
	max-width: 60%;
	margin-left: 1.5rem;
	padding: 20rem;
`;

const DockerDetails = () => (
	<div>
		<div>
			<TextWrapper>
				To begin learning Docker, we first need to address a fundamental
				question: why is Docker necessary?
				<h1>Prerequsities</h1>
				<br />
				<br />
				To get started with Docker containers on Windows, it's essential
				to have Windows Subsystem for Linux (WSL) installed. WSL is a
				feature in Microsoft Windows that enables a native Linux
				environment without requiring a virtual machine or dual-boot
				setup. On Windows 11, WSL is installed by default, which
				streamlines the setup process. In this guide, we’ll focus on
				using Docker Desktop on Windows 11, while also exploring how to
				work with Docker both with and without Docker Desktop.
				<br/>
				<a
					href="https://github.com/PatrykWenz-4/dockerSite"
					target="_blank"
					rel="noopener noreferrer"
				>
					Relevant GitHub Repository
				</a>
			</TextWrapper>
		</div>
		<div></div>
	</div>
);

export default DockerDetails;
