import Chef from "../../assets/chef.webp";
import Restaurant from "../../assets/restaurant.webp";
import { motion } from "framer-motion";
import { fadeIn } from "../../utils/animation.js";

const Images = () => {
	return (
		<div className="w-full md:w-3/4 h-auto p-2 flex flex-col gap-5 md:flex-row justify-start items-center">
			<motion.div className="w-full h-[250px] md:h-[300px]">
				<motion.img
					variants={fadeIn("right", 0.3)}
					initial="hidden"
					whileInView={"show"}
					viewport={{ once: false, amount: 0.7 }}
					src={Chef}
					alt="chef"
					className="w-full h-full object-cover"
				/>
			</motion.div>
			<motion.div
				variants={fadeIn("left", 0.2)}
				initial="hidden"
				whileInView={"show"}
				viewport={{ once: false, amount: 0.7 }}
				className="w-full h-[250px] md:h-[300px]">
				<img
					src={Restaurant}
					alt="restaurant image"
					className="w-full h-full object-cover object-center"
				/>
			</motion.div>
		</div>
	);
};

export default Images;
