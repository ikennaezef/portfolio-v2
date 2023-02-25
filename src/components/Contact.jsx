import React from "react";

const Contact = () => {
	return (
		<section id="contact" className="py-12 bg-gray-100">
			<div className="container max-w-3xl mx-auto px-2 grid items-center grid-cols-1 md:grid-cols-2 gap-6 md:gap-12">
				<h2 className="font-serif text-3xl text-gray-900 font-bold text-center md:text-left">
					Contact
				</h2>
				<div>
					<p className="text-gray-500 text-sm text-center">
						You can reach me at{" "}
						<a
							href="mailto:iykee0333@gmail.com"
							className="font-semibold text-gray-700">
							iykee0333@gmail.com
						</a>
					</p>
					<h3 className="font-serif font-bold text-xl text-gray-800 text-center my-6">
						OR
					</h3>
					<div className="flex flex-col items-center">
						<h4 className="text-sm font-medium text-gray-700">
							Let's connect via
						</h4>
						<div className="flex items-center space-x-6 mt-2">
							<a
								href="https://github.com/ikennaezef"
								target="_blank"
								rel="noreferrer"
								className="text-gray-700 font-semibold underline hover:text-blue-500">
								Github
							</a>
							<a
								href="https://twitter.com/lkennae_"
								target="_blank"
								className="text-gray-700 font-semibold underline hover:text-blue-500">
								Twitter
							</a>
							<a
								href="https://linkedin.com/in/ikenna-eze-29b245159"
								rel="noreferrer"
								className="text-gray-700 font-semibold underline hover:text-blue-500">
								LinkedIn
							</a>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Contact;
