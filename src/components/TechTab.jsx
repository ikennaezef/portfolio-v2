import React from "react";

const TechTab = ({ tech }) => {
	return (
		<span className="tech-tab inline-block bg-gray-300 text-gray-900 px-4 py-2 mr-8 mb-4 shadow-md border-l-2 border-l-gray-800 text-sm md:text-base">
			{tech}
		</span>
	);
};

export default TechTab;
