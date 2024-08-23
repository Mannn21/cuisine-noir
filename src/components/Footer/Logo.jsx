import Icon from "../../assets/logo.png";

const Logo = () => {
    return (
        <div className="w-full md:w-3/4 h-auto flex flex-col gap-5 md:flex-row justify-center items-center">
            <div className="w-[150px] md:w-[200px] h-[150px] md:h-[200px]">
                <img src={Icon} alt="icon image" className="w-full h-full object-cover object-center" />
            </div>
        </div>
    )
}

export default Logo;