"use client";

import { useState, useEffect } from "react";
import Navbar from "../Navbar";
import { jumbotronLists } from "../../datas/jumbotronLists.js";
import { motion } from "framer-motion";
import "../../index.css";

const Jumbotron = () => {
	const [currentIndex, setCurrentIndex] = useState(0);
	const [zoomIn, setZoomIn] = useState(true);
	const [imageLoaded, setImageLoaded] = useState(false);

	useEffect(() => {
		const interval = setInterval(() => {
			setImageLoaded(false);
			setCurrentIndex(prevIndex => (prevIndex + 1) % jumbotronLists.length);
			setZoomIn(prevZoomIn => !prevZoomIn);
		}, 5000);

		return () => clearInterval(interval);
	}, []);

	const currentJumbotron = jumbotronLists[currentIndex];

	return (
		<div id="home" className="w-full min-h-[500px] md:h-screen overflow-hidden relative">
			<img
				src={currentJumbotron.image}
				alt="Jumbotron"
				className={`w-full h-full object-cover object-center absolute top-0 left-0 jumbotron-image ${
					zoomIn ? "zoom-in" : "zoom-out"
				}`}
				onLoad={() => setImageLoaded(true)}
			/>
			<div className="w-full h-full flex justify-center items-center absolute top-0 left-0">
				<Navbar />
				{imageLoaded && (
					<div className="w-full sm:w-2/3 px-3 text-center flex flex-col justify-center items-center">
						<motion.span
							animate={{ y: [-50, 0], opacity: 1, scale: 1 }}
							transition={{
								duration: 0.5,
								delay: 0,
								ease: [0.2, 0.31, 1, 1],
							}}
							initial={{ opacity: 0 }}
							className="text-base font-extralight text-color-white tracking-wider">
							{currentJumbotron.slogan}
						</motion.span>
						<motion.h1
							animate={{ y: [-50, 0], opacity: 1, scale: 1 }}
							transition={{
								duration: 0.5,
								delay: 0.8,
								ease: [0.2, 0.31, 1, 1],
							}}
							initial={{ opacity: 0 }}
							className="text-4xl md:text-6xl font-bold text-color-white tracking-widest">
							{currentJumbotron.title}
						</motion.h1>
						<motion.p
							animate={{ y: [-50, 0], opacity: 1, scale: 1 }}
							transition={{
								duration: 0.5,
								delay: 1.1,
								ease: [0.2, 0.31, 1, 1],
							}}
							initial={{ opacity: 0 }}
							className="text-base md:text-lg font-light mt-2 text-color-white tracking-wider">
							{currentJumbotron.description}
						</motion.p>
						<motion.button
							animate={{ y: [-50, 0], opacity: 1, scale: 1 }}
							transition={{
								duration: 0.5,
								delay: 1.4,
								ease: [0.2, 0.31, 1, 1],
							}}
							initial={{ opacity: 0 }}
							className="px-5 py-3 mt-5 text-sm md:text-base font-normal text-color-darkGrey bg-color-white tracking-widest hover:text-color-white hover:bg-color-gold cursor-pointer shadow-md">
							Daftar Menu
						</motion.button>
					</div>
				)}
			</div>
		</div>
	);
};

export default Jumbotron;
