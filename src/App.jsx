import Jumbotron from "./components/Jumbotron";
import About from "./components/About";
import Info from "./components/Info";
import Menu from "./components/Menu";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const App = () => {
	return (
		<div className="w-screen h-auto overflow-hidden">
			<div className="w-full h-auto flex flex-col justify-center items-center gap-6 overflow-hidden">
				<Jumbotron />
				<About />
				<Info />
				<Menu />
				<Contact />
				<Footer />
			</div>
		</div>
	);
};

export default App;
