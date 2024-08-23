import { navbarLists } from "../../datas/navbarLists.js";

const Navbar = () => {
	return (
		<div className="w-full h-auto absolute top-4 left-0">
			<div className="w-full h-full flex flex-row gap-5 md:gap-10 justify-center items-center">
				{
					navbarLists.map((data, index) => {
						return (
							<button key={index} className="text-sm md:text-base text-color-white font-medium hover:text-color-gold">{data.title}</button>
						)
					})
				}
			</div>
		</div>
	);
};

export default Navbar;
