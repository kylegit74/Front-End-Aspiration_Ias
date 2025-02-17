import React, { useState } from "react";
import { BiCaretDown, BiSearch } from "react-icons/bi";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Header = () => {
  const [isCoursesOpen, setIsCoursesOpen] = useState(false);
  const [isTargetOpen, setIsTargetOpen] = useState(false);
   function handleMouseLeave()
   {
    setTimeout(() => {
      setIsCoursesOpen(false);
    }, 6000);
   }

  return (
    <header className="pb_bg_ylw fixed top-0 left-0 w-full z-50 shadow-md h-16">
      <div className="container max-w-7xl mx-auto flex justify-between items-center h-full relative">
        
        {/* Logo Section this is changed by sanjit */}
        <Link className="relative z-10 min-h-full flex items-center" to={"/"}>
          <div className="bg-red-600 text-white rounded-b-2xl pb-[-40px] px-6 py-4 text-center font-medium h-full flex flex-col justify-center">
            <span className="block text-xl pt-2">ASPIRATION</span>
            <span className="text-sm"> JEE  &  NEET </span>
            <span className="text-sm"> ACADEMY</span>
          </div>
        </Link>

        {/* Navigation Bar */}
        <nav className="hidden md:flex space-x-6 h-full items-center">
          <Link to="/" className="hover:pb_text_red font-medium">
            Home
          </Link>
          <div
            className="relative"
            onMouseEnter={() => setIsCoursesOpen(true)}
            onMouseLeave={() => handleMouseLeave()}
          >
            <Link to="/about" className="hover:pb_text_red font-medium">
              Courses <BiCaretDown className="inline-block" />
            </Link>

            {/* Dropdown Menu */}
            {isCoursesOpen && (
            <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="absolute left-[-140px] -translate-x-[-140px] top-[40px] z-20 flex bg-white shadow-xl border rounded-lg p-4 min-w-max"
          >
            {/* Course Categories */}
                <div className="w-48 ">
                  <h3 className="text-lg font-semibold text-gray-700 px-4 py-2 border-b">
                    Course Categories
                  </h3>
                  <ul className="mt-2 space-y-1">
                    <li>
                      <Link to="/course-1" className="block px-4 py-2 hover:bg-gray-100 rounded-lg">
                        Classroom
                      </Link>
                    </li>
                    <li>
                      <Link to="/course-2" className="block px-4 py-2 hover:bg-gray-100 rounded-lg">
                        Non-Classroom
                      </Link>
                    </li>
                    <li>
                      <Link to="/course-3" className="block px-4 py-2 hover:bg-gray-100 rounded-lg">
                        Integrated School Programme
                      </Link>
                    </li>
                    <li>
                      <Link to="/course-4" className="block px-4 py-2 hover:bg-gray-100 rounded-lg">
                        Online Course
                      </Link>
                    </li>
                  </ul>
                </div>

                {/* Targeted Exams */}
                <div className="w-48">
                  <h3 className="text-lg font-semibold text-gray-700 px-4 py-2 border-b">
                    Targeted Exams
                  </h3>
                  <ul className="mt-2 space-y-1">
                    <li>
                      <Link to="/exam-1" className="block px-4 py-2 hover:bg-gray-100 rounded-lg">
                        JEE Advanced
                      </Link>
                    </li>
                    <li>
                      <Link to="/exam-2" className="block px-4 py-2 hover:bg-gray-100 rounded-lg">
                        JEE Mains
                      </Link>
                    </li>
                    <li>
                      <Link to="/exam-3" className="block px-4 py-2 hover:bg-gray-100 rounded-lg">
                        NEET
                      </Link>
                    </li>
                    <li>
                      <Link to="/exam-4" className="block px-4 py-2 hover:bg-gray-100 rounded-lg">
                        Olympiads
                      </Link>
                    </li>
                  </ul>
                </div>
              </motion.div>
            )}
          </div>

          <Link to="/whychooseus" className="hover:pb_text_red font-medium">
            Why Choose Us
          </Link>
          <Link to="/about" className="hover:pb_text_red font-medium">
            About
          </Link>
          <Link to="/contact" className="hover:pb_text_red font-medium">
            Contact
          </Link>
          <Link to="/contact" className="hover:pb_text_red font-medium">
            Download
          </Link>
          <Link to="/contact" className="hover:pb_text_red font-medium">
            Scholarship
          </Link>
        </nav>

        {/* Buttons Section */}
        <div className="flex space-x-4 items-center">
          {/*<button className="pb_bg_red text-white px-6 font-medium py-2 rounded-full hover:bg-black">
            Register for NEET
          </button>*/}
          <button className="pb_bg_red text-white px-4 py-2 rounded-full hover:bg-black">
            <BiSearch />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
