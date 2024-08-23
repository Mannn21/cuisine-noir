import Description from "./Description";
import Images from "./Images";
// import Logo from "./Logo";

const About = () => {
	return (
		<div className="w-full h-auto m-3 flex flex-col justify-center items-center gap-2">
			<Description />
			{/* <Logo /> */}
			<Images />
		</div>
	);
};

export default About;
