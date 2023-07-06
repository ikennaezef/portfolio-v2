import React from "react";
import { projects } from "../data";
import SingleProject from "./SingleProject";

const Projects = () => {
	return (
		<section id="projects" className="py-8 bg-gray-200">
			<div className="container mx-auto px-2">
				<div>
					<h2 className="font-serif text-gray-900 text-4xl text-center font-bold mb-2">
						Projects
					</h2>
					<h5 className="text-gray-500 text-sm text-center">
						Some work I've done
					</h5>
				</div>
				<div className="mt-16">
					{projects.map((project) => (
						<SingleProject key={project.id} project={project} />
					))}
				</div>
				<div className="my-2">
					<h4 className="text-center font-medium text-gray-800">
						You can check out more of my works{" "}
						<a
							href="https://github.com/ikennaezef/"
							target="_blank"
							className="text-blue-700 underline">
							HERE
						</a>
					</h4>
				</div>
			</div>
		</section>
	);
};

export default Projects;
