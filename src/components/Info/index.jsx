import Spice from "../../assets/spice.png";

const Info = () => {
	return (
		<div className="w-full h-auto md:h-[350px] bg-color-gold">
			<div className="w-full h-full py-2 px-10 flex flex-col md:flex-row justify-center items-center gap-4 bg-color-silver">
				<div className="w-full md:w-1/2 h-full py-2 px-5 flex flex-col justify-center items-center md:items-start">
					<span className="text-base font-light text-center text-color-darkGrey tracking-wider">
						SPICY AND TASTY
					</span>
					<h3 className="text-2xl md:text-4xl text-center font-bold text-color-black tracking-widest">
						KOMPOSISI
					</h3>
					<p className="text-sm md:text-base text-center md:text-left font-light mt-2 text-color-darkGrey tracking-wider">
						Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse
						aliquam minus expedita praesentium obcaecati excepturi, odio aperiam
						voluptates laboriosam nobis eligendi cumque harum totam nemo iure
						cupiditate at molestiae architecto!
					</p>
					<button className="px-5 py-3 mt-5 text-sm md:text-base font-normal text-color-darkGrey bg-color-white tracking-widest hover:text-color-white hover:bg-color-gold transition-all duration-300 ease-in-out cursor-pointer shadow-md">
						Daftar Menu
					</button>
				</div>
                <div className="w-3/4 md:w-1/2 h-full flex flex-col justify-center items-center">
                    <div className="md:w-3/4 w-full h-[300px] md:h-full p-3 object-cover object-center">
                        <img src={Spice} alt="spice" className="w-full h-full object-cover object-center"/>
                    </div>
                </div>
			</div>
		</div>
	);
};

export default Info;
