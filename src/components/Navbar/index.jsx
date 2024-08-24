import { useState, useEffect, useCallback } from "react";
import { IoMdMenu, IoMdClose } from "react-icons/io";
import { navbarLists } from "../../datas/navbarLists.js";
import { motion } from "framer-motion";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const handleScroll = useCallback(() => {
    if (window.scrollY > 50) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* Navbar utama tanpa background */}
      <motion.nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          isScrolled ? "hidden" : "bg-transparent"
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 120, damping: 15 }}
      >
        <div className="container mx-auto flex justify-between items-center px-4 py-4 md:py-6">
          {/* Logo */}
          <div className="text-2xl font-bold">
            <a href="#" className={isScrolled ? "text-color-black" : "text-color-white"}>
              Cuisine Noir
            </a>
          </div>

          {/* Menu Desktop */}
          <div className="hidden md:flex space-x-6">
            {navbarLists.map((item, index) => (
              <a
                key={index}
                href={item.href}
                className={`transition-colors ${
                  isScrolled ? "text-color-black" : "text-color-white"
                } hover:text-gray-500`}
              >
                {item.title}
              </a>
            ))}
          </div>

          {/* Menu Icon for Mobile */}
          <div className="md:hidden">
            <button onClick={toggleMenu}>
              {isOpen ? (
                <IoMdClose
                  className={isOpen ? "text-color-black" : isScrolled ? "text-color-black" : "text-color-white"}
                  size={24}
                />
              ) : (
                <IoMdMenu
                  className={isScrolled ? "text-color-black" : "text-color-white"}
                  size={24}
                />
              )}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Navbar dengan background putih ketika di-scroll */}
      <motion.nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          isScrolled ? "bg-color-white shadow-lg" : "hidden"
        }`}
        initial={{ y: -100 }}
        animate={{ y: isScrolled ? 0 : -100 }}
        transition={{ type: "spring", stiffness: 120, damping: 15 }}
      >
        <div className="container mx-auto flex justify-between items-center px-4 py-4 md:py-6">
          {/* Logo */}
          <div className="text-2xl font-bold">
            <a href="#" className="text-color-black">
              Cuisine Noir
            </a>
          </div>

          {/* Menu Desktop */}
          <div className="hidden md:flex space-x-6">
            {navbarLists.map((item, index) => (
              <a
                key={index}
                href={item.href}
                className={`transition-colors ${
                  isScrolled ? "text-color-black" : "text-color-white"
                } hover:text-gray-500`}
              >
                {item.title}
              </a>
            ))}
          </div>

          {/* Menu Icon for Mobile */}
          <div className="md:hidden">
            <button onClick={toggleMenu}>
              {isOpen ? (
                <IoMdClose className="text-color-black" size={24} />
              ) : (
                <IoMdMenu className="text-color-black" size={24} />
              )}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <motion.div
        className={`fixed top-0 right-0 w-full h-1/2 bg-color-white flex flex-col items-center justify-center z-40 transition-transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
        initial={{ x: "100%" }}
        animate={{ x: isOpen ? "0%" : "100%" }}
        transition={{ type: "spring", stiffness: 100, damping: 20, duration: 0.2 }}
      >
        {navbarLists.map((item, index) => (
          <a
            key={index}
            href={item.href}
            className="text-base font-medium text-color-black mb-6"
            onClick={() => setIsOpen(false)}
          >
            {item.title}
          </a>
        ))}
      </motion.div>
    </>
  );
};

export default Navbar;
