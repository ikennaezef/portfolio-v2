import React, { useEffect, useRef } from "react";
import TechTab from "./TechTab";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

const About = () => {
	gsap.registerPlugin(ScrollTrigger);
	const techs = [
		"React JS",
		"React Native",
		"TypeScript",
		"CSS3",
		"JavaScript(ES6+)",
		"Apollo Client",
		"Next JS",
		"Git",
		"SCSS",
		"HTML5",
		"TailwindCSS",
		"Firebase",
	];
	const about = gsap.timeline();
	const heading = useRef(null);
	const sub = useRef(null);

	useEffect(() => {
		about
			.from(heading.current, {
				duration: 1.5,
				delay: 2,
				opacity: 0,
				y: 30,
			})
			.from(sub.current, {
				opacity: 0,
				y: 30,
			})
			.from(".about-grid p", {
				duration: 1.5,
				opacity: 0,
				y: 30,
				stagger: {
					amount: 1.5,
				},
				scrollTrigger: {
					trigger: ".about-grid",
					start: "top 80%",
					end: "bottom center",
					scrub: 1,
				},
			})
			.from(".tabs-title", {
				duration: 1.5,
				opacity: 0,
				scrollTrigger: {
					trigger: ".about-grid",
					start: "top 80%",
					scrub: 1,
				},
			})
			.from(".tech-tab", {
				duration: 2.5,
				opacity: 0,
				y: 30,
				stagger: {
					amount: 1.5,
				},
				scrollTrigger: {
					trigger: ".about-grid",
					start: "top 80%",
					scrub: 1,
				},
			});
	}, []);

	return (
		<div className="py-12 bg-gray-100">
			<div className="container mx-auto px-2">
				<div>
					<h2
						className="font-serif text-gray-900 text-4xl text-center font-bold mb-2"
						ref={heading}>
						About Me
					</h2>
					<h5 className="text-gray-500 text-sm text-center" ref={sub}>
						A Brief Introduction
					</h5>
				</div>
				<div className="about-grid mt-8 grid grid-cols-1 md:grid-cols-2 gap-8 md:divide-x-2">
					<div>
						<p className="mb-4 text-base md:text-lg text-gray-900">
							Hello there! I'm Ikenna and I enjoy creating things that live on
							the web.I'm passionate about deciphering challenging problems and
							creating exceptional digital experience.
						</p>
						<p className="mb-4 text-base md:text-lg text-gray-900">
							I'm a frontend web developer with over 2 years of experience
							focused on crafting great web experiences with pixel perfect
							design.
						</p>
						<p className="mb-4 text-base md:text-lg text-gray-900">
							Through my studies, I've gained a solid understanding of web
							development concepts, and have dedicated a lot of time to apply
							these concepts to real-world scenarios and applications.
						</p>
						<p className="mb-4 text-base md:text-lg text-gray-900">
							In my spare time, I like to learn Spanish, play video games and
							play football.
						</p>
					</div>
					<div className="pl-4">
						<h3 className="font-serif text-xl text-gray-900 font-bold tabs-title">
							Skills
						</h3>
						<div className="mt-4 techs-container">
							{techs.map((tech) => (
								<TechTab key={tech} tech={tech} />
							))}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default About;
