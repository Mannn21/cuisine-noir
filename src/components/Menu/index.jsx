import { menuLists } from "../../datas/menuLists";

const Menu = () => {
	return (
		<div className="w-full h-auto p-3">
			<div className="w-full h-auto flex flex-col justify-center items-center gap-8">
				<div className="w-full h-auto flex flex-col justify-start items-center">
					<span className="text-base font-light text-center text-color-darkGrey tracking-wider">
						SPICY AND TASTY
					</span>
					<h3 className="text-2xl md:text-4xl text-center font-bold text-color-black tracking-widest">
						DAFTAR MENU
					</h3>
					<p className="md:w-2/5 w-full text-sm md:text-base text-center font-light mt-2 text-color-darkGrey tracking-wider">
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Reprehenderit maiores quidem sit recusandae iure. Reprehenderit
						itaque repellat officiis suscipit veritatis sapiente deleniti ea
						sint inventore quisquam delectus magni, vitae accusamus, nisi.
					</p>
				</div>
				<div className="w-full h-auto p-3">
					<div className="w-full h-auto grid grid-cols-1 md:grid-cols-2 gap-4">
						{menuLists?.map((list, index) => {
							return (
								<div
									key={index}
									className="w-full h-auto px-4 py-2 flex flex-col justify-start items-start gap-2">
									<div className="w-full h-auto flex flex-row justify-between px-2">
										<span className="mr-2 text-base font-medium text-color-darkGrey tracking-wide">{list.title}</span>
										<p className="grow border border-dotted border-color-darkGrey my-4"></p>
										<span className="shrink-0 ml-4 text-base font-medium text-color-darkGrey">Rp. {list.price}.000</span>
									</div>
									<div className="w-full h-auto flex flex-row justify-between px-2">
										<p className="text-sm font-light text-color-grey tracking-wider">{list.desc}</p>
									</div>
								</div>
							);
						})}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Menu;
