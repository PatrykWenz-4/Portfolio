import React from "react";
import docker from "./docker.png";
import springOllama from "./springOllama.png";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

import CardGroup from "react-bootstrap/CardGroup";

const Blog = () => (
	<CardGroup className="gap-3">
		<Card style={{ width: "18rem" }}>
			<Card.Img variant="top" src={docker} />
			<Card.Header></Card.Header>
			<Card.Body>
				<Card.Title>
					Basic Docker Setup Using SQL and phpMyAdmin Images as an
					Example. Practical usage.
				</Card.Title>
				<Card.Text></Card.Text>
				<Button
					variant="primary"
					as={Link}
					to="/Portfolio/blog/DockerDetails"
				>
					Go to the article
				</Button>
			</Card.Body>
		</Card>

		<Card style={{ width: "18rem" }}>
			<Card.Img variant="top" src={springOllama} />
			<Card.Header></Card.Header>

			<Card.Body>
				<Card.Title>
					Basic usage of Ollama models with spring boot AI.
				</Card.Title>
				<Card.Text></Card.Text>
				<Button
					variant="primary"
					as={Link}
					to="/Portfolio/blog/Ollama"
				>
					Go to the article
				</Button>
			</Card.Body>
		</Card>
	</CardGroup>
);

export default Blog;
