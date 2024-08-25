import Description from "./Description";
import Images from "./Images";

const About = () => {
	return (
		<div id="about" className="w-full h-auto m-3 flex flex-col justify-center items-center gap-2">
			<Description />
			<Images />
		</div>
	);
};

export default About;
