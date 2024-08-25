import { motion } from "framer-motion";
import { fadeIn } from "../../utils/animation.js";

const Description = () => {
	return (
		<motion.div
			variants={fadeIn("up", 0.2)}
			initial="hidden"
			whileInView={"show"}
			viewport={{ once: false, amount: 0.7 }}
			className="w-full md:w-3/4 h-auto px-6 md:px-12 py-2 flex flex-col justify-start items-center gap-3">
			<span className="text-sm md:text-base font-light text-center text-color-darkGrey tracking-wider">
				SPICY AND TASTY
			</span>
			<h3 className="text-2xl md:text-4xl text-center font-bold text-color-black tracking-widest">
				TENTANG KAMI
			</h3>
			<p className="text-sm md:text-base text-center font-light mt-2 text-color-darkGrey tracking-wider">
				Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis
				saepe minima neque animi hic labore quod consequuntur rerum modi laborum
				Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniam earum
				et nulla officia atque iusto necessitatibus suscipit assumenda pariatur
				similique? delectus, repellat, quibusdam ipsam. Corrupti labore.
			</p>
		</motion.div>
	);
};

export default Description;
