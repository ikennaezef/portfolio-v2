import React, { useEffect, useRef } from "react";
import gsap, { Power4 } from "gsap";

const Hero = () => {
	const home = gsap.timeline();
	const span1 = useRef(null);
	const span2 = useRef(null);
	const pText = useRef(null);
	const btn = useRef(null);
	const resumeBtn = useRef(null);
	useEffect(() => {
		home
			.from(span1.current, {
				duration: 2,
				clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0% 100%)",
			})
			.from(
				span2.current,
				{
					duration: 2,
					clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0% 100%)",
				},
				"-=1.5"
			)
			.from(
				pText.current,
				{
					duration: 1.5,
					opacity: 0,
					y: 45,
					ease: Power4.easeIn,
				},
				"-=2"
			)
			.from(btn.current, {
				duration: 1,
				opacity: 0,
			})
			.from(
				resumeBtn.current,
				{
					duration: 1,
					opacity: 0,
				},
				"-=0.5"
			);
	}, []);

	return (
		<div className="bg-gray-200 min-h-[70vh] flex items-center">
			<div className="container mx-auto py-12 px-2 grid grid-cols-1 md:grid-cols-2">
				<div className="flex flex-col space-y-8">
					<h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-serif text-black opacity-100">
						<span className="full-clip" ref={span1}>
							Hi, I'm Ikenna,
						</span>
						<br />{" "}
						<span className="full-clip" ref={span2}>
							Fullstack Developer
						</span>
					</h2>
					<p className="text-sm text-gray-500" ref={pText}>
						I create interactive web experiences using modern technologies. I am
						interested in user experience, accessibility, design systems, and
						web animations.
					</p>
					<div className="flex space-x-8 mt-8">
						<a
							href="#projects"
							className="relative z-30 bg-gray-900 text-white font-semibold text-sm sm:text-base w-fit px-4 py-2 sm:px-6 hover:scale-105 transition-transform before:block before:absolute before:z-10 before:w-full before:h-full before:right-[-5px] before:bottom-[-5px] before:border-2 before:border-gray-900"
							ref={btn}>
							See My Works
						</a>
						<a
							href="https://drive.google.com/file/d/1P3oSy4ORlTJzE4_mndLhKuxosc0SY16N/view?usp=sharing"
							className="border-2 border-gray-900 text-gray-900 font-semibold text-sm sm:text-base w-fit px-4 py-2 sm:px-6 hover:scale-105 transition-transform "
							ref={resumeBtn}>
							My Resume
						</a>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Hero;
