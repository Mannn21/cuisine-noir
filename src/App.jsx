import Jumbotron from "./components/Jumbotron";
import About from "./components/About";
import Info from "./components/Info";
import Menu from "./components/Menu";
import Footer from "./components/Footer";

const App = () => {
	return (
		<div className="w-screen h-auto">
			<div className="w-full h-auto flex flex-col justify-center items-center gap-6">
				<Jumbotron />
				<About />
				<Info />
				<Menu />
				<Footer />
			</div>
		</div>
	);
};

export default App;
