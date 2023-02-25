import React, { useEffect, useRef } from "react";
import gsap from "gsap";

const SingleProject = ({ project }) => {
	const tl = gsap.timeline();
	const proj = useRef(null);

	useEffect(() => {
		tl.from(proj.current, {
			duration: 2,
			opacity: 0,
			y: 60,
			scrollTrigger: {
				trigger: proj.current,
				start: "top 60%",
				end: "bottom 90%",
				scrub: 1,
			},
		});
	}, []);

	return (
		<div
			className="single-project flex flex-col-reverse md:flex-row mb-12 max-w-4xl mx-auto shadow-sm border border-gray-100 bg-gray-50"
			ref={proj}>
			<div className="w-full md:w-3/5 p-4">
				<span className="mb-6 font-serif text-xl text-gray-400">
					0{project.id}
				</span>
				<h3 className="font-serif font-bold text-gray-900 text-2xl md:text-3xl mb-4">
					{project.title}
				</h3>
				<div className="mb-4">
					{project.tools.map((tool) => (
						<span
							key={tool}
							className="inline-block bg-blue-400 px-4 py-1 font-semibold text-gray-800 text-xs md:text-sm mr-4 mb-2">
							{tool}
						</span>
					))}
				</div>
				<p className="text-sm text-gray-500 md:w-4/5">{project.description}</p>
				<div className="flex space-x-8 sm:space-x-12 mt-8">
					<a
						href={project.liveLink}
						target="_blank"
						rel="noreferrer"
						className="relative z-30 bg-gray-900 text-sm md:text-md text-white font-semibold w-fit px-4 py-2 sm:px-6  hover:scale-105 transition-transform before:block before:absolute before:z-10 before:w-full before:h-full before:right-[-5px] before:bottom-[-5px] before:border-2 before:border-gray-900">
						View Project
					</a>
					{project.githubLink && (
						<a
							href={project.githubLink}
							target="_blank"
							rel="noreferrer"
							className="border-2 border-gray-900 text-gray-900 text-sm md:text-md font-semibold px-4 py-2 sm:px-6">
							View Code
						</a>
					)}
				</div>
			</div>
			<div className="w-full md:w-2/5">
				<img
					src={project.image}
					alt={project.title}
					className="w-full h-full object-cover object-left-top"
				/>
			</div>
		</div>
	);
};

export default SingleProject;
