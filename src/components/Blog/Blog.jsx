import React from "react";
import docker from "./docker.png";
import styled from "styled-components";
import { Link } from "react-router-dom";

const BlogWrapper = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 2rem;
	@media (max-width: 768px) {
		flex-direction: column;
		align-items: flex-start;
	}
`;

const TextWrapper = styled.div`
	max-width: 60%;
	margin-left: 1.5rem;
`;

const ImageLink = styled(Link)`
	/* Use Link component instead of a */
	display: inline-block;
	width: 20vw;
	height: auto;
	margin-left: 1.5rem;
	text-decoration: none;

	@media (max-width: 768px) {
		width: 100%;
		margin-left: 0;
	}
`;

const Image = styled.img`
	width: 100%;
	height: auto;
	border-radius: 80px;
	transition: transform 0.3s ease, border-radius 0.3s ease;

	&:hover {
		transform: scale(1.05);
		border-radius: 20px;
	}
`;

const Blog = () => (
	<BlogWrapper>
		<TextWrapper>
			<h1>First Steps to Understanding Docker</h1>
		</TextWrapper>
		<ImageLink to="/Portfolio/docker-details">
			<Image src={docker} alt="Blog Visual" />
		</ImageLink>
	</BlogWrapper>
);

export default Blog;
