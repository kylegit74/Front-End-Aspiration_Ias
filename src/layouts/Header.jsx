import React, { useState } from "react";
import { BiCaretDown, BiSearch, BiMenu, BiX } from "react-icons/bi";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Header = () => {
  const [isCoursesOpen, setIsCoursesOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  function handleMouseLeave() {
    setTimeout(() => {
      setIsCoursesOpen(false);
    }, 100);
  }

  return (
    <header className="pb_bg_ylw fixed top-0 left-0 w-full z-50 shadow-md h-16">
      <div className="container max-w-7xl mx-auto flex justify-between items-center h-full relative px-4 md:px-0">
        {/* Logo Section */}
        <Link className="relative z-10 flex items-center" to={"/"}>
          <div className="bg-red-600 text-white rounded-b-2xl px-6 py-4 text-center font-medium flex flex-col justify-center">
            <span className="block text-xl pt-2">ASPIRATION</span>
            <span className="text-sm">JEE & NEET</span>
            <span className="text-sm">ACADEMY</span>
          </div>
        </Link>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-2xl z-20"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <BiX /> : <BiMenu />}
        </button>

        {/* Navigation Bar */}
        <nav
          className={`md:flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6 h-screen md:h-auto items-center absolute md:relative top-16 md:top-0 left-0 w-full md:w-auto bg-white md:bg-transparent shadow-md md:shadow-none p-4 md:p-0 transition-all duration-300 z-10 ${
            isMobileMenuOpen ? "block" : "hidden"
          } md:flex`}
        >
          <Link to="/" className="hover:pb_text_red font-medium block md:inline-block">
            Home
          </Link>
          <div className="relative" onMouseEnter={() => setIsCoursesOpen(true)}>
            <Link to="/courses" className="hover:pb_text_red font-medium block md:inline-block"> {/* Added /courses path */}
              Courses <BiCaretDown className="inline-block" />
            </Link>

            {/* Dropdown Menu */}
            {isCoursesOpen && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="absolute left-0 md:left-auto top-[40px] ml-[-140px] z-20 flex flex-col md:flex-row bg-white shadow-xl border rounded-lg p-4 min-w-max"
                onMouseLeave={handleMouseLeave}
              >
                <div className="w-48">
                  <h3 className="text-lg font-semibold text-gray-700 px-4 py-2 border-b">Course Categories</h3>
                  <ul className="mt-2 space-y-1">
                    <li><Link to="/courses/classroom" className="block px-4 py-2 hover:bg-gray-100 rounded-lg">Classroom</Link></li> {/* Added /courses prefix */}
                    <li><Link to="/courses/non-classroom" className="block px-4 py-2 hover:bg-gray-100 rounded-lg">Non-Classroom</Link></li> {/* Added /courses prefix */}
                    <li><Link to="/courses/integrated" className="block px-4 py-2 hover:bg-gray-100 rounded-lg">Integrated School Programme</Link></li> {/* Added /courses prefix */}
                    <li><Link to="/courses/online" className="block px-4 py-2 hover:bg-gray-100 rounded-lg">Online Course</Link></li> {/* Added /courses prefix */}
                  </ul>
                </div>
                <div className="w-48">
                  <h3 className="text-lg font-semibold text-gray-700 px-4 py-2 border-b">Targeted Exams</h3>
                  <ul className="mt-2 space-y-1">
                    <li><Link to="/exams/jee-advanced" className="block px-4 py-2 hover:bg-gray-100 rounded-lg">JEE Advanced</Link></li> {/* Added /exams prefix */}
                    <li><Link to="/exams/jee-mains" className="block px-4 py-2 hover:bg-gray-100 rounded-lg">JEE Mains</Link></li> {/* Added /exams prefix */}
                    <li><Link to="/exams/neet" className="block px-4 py-2 hover:bg-gray-100 rounded-lg">NEET</Link></li> {/* Added /exams prefix */}
                    <li><Link to="/exams/olympiads" className="block px-4 py-2 hover:bg-gray-100 rounded-lg">Olympiads</Link></li> {/* Added /exams prefix */}
                  </ul>
                </div>
              </motion.div>
            )}
          </div>
          <Link to="/whychooseus" className="hover:pb_text_red font-medium block text-[12px] lg:text-[16px]  md:inline-block">Why Choose Us</Link>
          <Link to="/about" className="hover:pb_text_red font-medium block text-[12px] lg:text-[16px]  md:inline-block">About</Link>
          <Link to="/contact" className="hover:pb_text_red font-medium block text-[12px] lg:text-[16px]  md:inline-block">Contact</Link>
          <Link to="/download" className="hover:pb_text_red font-medium block text-[12px] lg:text-[16px]  md:inline-block">Download</Link>
          <Link to="/scholarship" className="hover:pb_text_red font-medium text-[12px] lg:text-[16px] block md:inline-block">Scholarship</Link>
        </nav>

        {/* Buttons Section */}
        <div className="hidden md:flex space-x-4 items-center">
          <button className="pb_bg_red text-white px-4 py-2 rounded-full hover:bg-black">
            <BiSearch />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;