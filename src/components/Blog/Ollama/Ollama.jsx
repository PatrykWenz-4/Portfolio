import React from "react";
import styled from "styled-components";

const TextWrapper = styled.div`
	margin-left: 1.5rem;
	padding: 2rem;
`;

const DockerDetails = () => (
	<div>
		<div>
			<TextWrapper>
				Spring AI.
				<h1>Prerequsities</h1>
				<br />
				<a
					href="https://github.com/PatrykWenz-4/Spring-ai"
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
