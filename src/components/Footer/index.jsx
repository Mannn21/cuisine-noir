import { accountLists } from "../../datas/accountLists";

const Footer = () => {
	return (
		<div className="w-full h-auto bg-color-darkGrey p-3">
			<div className="w-full h-auto p-1 flex flex-col justify-center items-center gap-4">
				<ul className="w-full h-auto flex flex-row justify-center items-center gap-3">
					{accountLists?.map((account, index) => {
                        const IconComponent = account.icon;
						return (
							<li key={index} className="text-color-white text-xl hover:text-color-gold transition-all duration-300 ease-in-out">
								<a href={account.link} title={account.title}>
									<IconComponent />
								</a>
							</li>
						);
					})}
				</ul>
                <div className="w-full h-auto flex flex-row justify-center items-center">
                    <span className="text-color-white text-base font-light tracking-wider">&copy; 2024 Aimanurrofi, All Rights Reserved</span>
                </div>
			</div>
		</div>
	);
};

export default Footer;
