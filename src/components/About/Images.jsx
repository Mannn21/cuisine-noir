import Chef from "../../assets/chef.webp";
import Restaurant from "../../assets/restaurant.webp";

const Images = () => {
	return (
		<div className="w-full md:w-3/4 h-auto p-2 flex flex-col gap-5 md:flex-row justify-start items-center">
			<div className="w-full h-[250px] md:h-[300px]">
				<img src={Chef} alt="chef" className="w-full h-full object-cover" />
			</div>
			<div className="w-full h-[250px] md:h-[300px]">
				<img
					src={Restaurant}
					alt="restaurant image"
					className="w-full h-full object-cover object-center"
				/>
			</div>
		</div>
	);
};

export default Images;
