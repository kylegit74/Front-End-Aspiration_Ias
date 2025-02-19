import React, { useState, useEffect } from "react";
import { BiCaretDown, BiSearch, BiMenu, BiX } from "react-icons/bi";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";

const Header = () => {
  const [isCoursesOpen, setIsCoursesOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
      if (window.innerWidth >= 768) {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleCoursesClick = () => {
    if (isMobile) {
      setIsCoursesOpen(!isCoursesOpen);
    }
  };

  const handleMouseEnter = () => {
    if (!isMobile) {
      setIsCoursesOpen(true);
    }
  };

  const handleMouseLeave = () => {
    if (!isMobile) {
      setTimeout(() => {
        setIsCoursesOpen(false);
      }, 1000);
    }
  };

  const menuVariants = {
    hidden: { opacity: 0, x: "-100%" },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: {
        duration: 0.3,
        type: "spring",
        stiffness: 100,
        when: "beforeChildren",
        staggerChildren: 0.1
      }
    },
    exit: { 
      opacity: 0, 
      x: "-100%",
      transition: {
        duration: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: {
        duration: 0.3
      }
    }
  };

  return (
    <header className="pb_bg_ylw fixed top-0 left-0 w-full z-50 shadow-md h-16">
      <div className="container max-w-7xl mx-auto flex justify-between items-center h-full relative px-4 md:px-0">
        {/* Logo Section */}
        <Link className="relative z-10 flex items-center" to={"/"}>
          <div className="bg-red-600 text-white rounded-b-2xl px-2 md:px-6 md:py-2   text-center font-medium flex flex-col justify-center">
            <span className="block text-xl pt-2">ASPIRATION</span>
            <span className="text-sm">JEE & NEET</span>
            <span className="text-sm">ACADEMY</span>
          </div>
        </Link>

        {/* Mobile Menu Toggle */}
        <motion.button
          className="md:hidden text-2xl z-20 "
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          whileTap={{ scale: 0.95 }}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={isMobileMenuOpen ? "close" : "menu"}
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              {isMobileMenuOpen ? <BiX /> : <BiMenu />}
            </motion.div>
          </AnimatePresence>
        </motion.button>

        {/* Navigation Bar */}
        <AnimatePresence>
          {(isMobileMenuOpen || !isMobile) && (
            <motion.nav
              variants={menuVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className={`md:flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6 fixed md:relative top-[70px] md:top-0 left-0 w-full md:w-auto pb_bg_ylw md:bg-transparent shadow-md md:shadow-none p-4 md:p-0 z-10 h-[calc(100vh-4rem)] md:h-auto ${
                isMobileMenuOpen ? "block overflow-y-auto" : "hidden"
              } md:flex`}
            >
              <motion.div variants={itemVariants}>
                <Link to="/" className="hover:pb_text_red font-medium block md:inline-block hover:scale-105 transition-transform">
                  Home
                </Link>
              </motion.div>

              <motion.div 
                variants={itemVariants}
                className="relative" 
                onMouseEnter={handleMouseEnter}
                
              >
                <button
                  onClick={handleCoursesClick}
                  className="hover:pb_text_red font-medium block md:inline-block w-full text-left group"
                >
                  Courses 
                  <BiCaretDown className={`inline-block transition-transform duration-300 ml-1 ${isCoursesOpen ? 'rotate-180' : ''} group-hover:scale-110`} />
                </button>

                {/* Dropdown Menu */}
                <AnimatePresence>
                  {isCoursesOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      onMouseLeave={handleMouseLeave}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className={`${
                        isMobile 
                          ? "relative w-full mt-2 bg-gray-50" 
                          : "absolute left-0 md:left-auto top-[40px] ml-[-140px]"
                      } z-20 bg-white shadow-xl border rounded-lg p-4`}
                    >
                      <div className={`flex flex-col md:flex-row ${isMobile ? 'max-h-[40vh] overflow-y-auto' : ''}`}>
                        <div className="w-full md:w-48 min-w-[200px]">
                          <h3 className="text-lg font-semibold text-gray-700 px-4 py-2 border-b sticky top-0 bg-white">Course Categories</h3>
                          <ul className="mt-2 space-y-1">
                            <motion.li whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
                              <Link to="/courses/classroom" className="block px-4 py-2 hover:bg-gray-100 rounded-lg transition-colors">Classroom</Link>
                            </motion.li>
                            <motion.li whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
                              <Link to="/courses/non-classroom" className="block px-4 py-2 hover:bg-gray-100 rounded-lg transition-colors">Non-Classroom</Link>
                            </motion.li>
                            <motion.li whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
                              <Link to="/courses/integrated" className="block px-4 py-2 hover:bg-gray-100 rounded-lg transition-colors">Integrated School Programme</Link>
                            </motion.li>
                            <motion.li whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
                              <Link to="/courses/online" className="block px-4 py-2 hover:bg-gray-100 rounded-lg transition-colors">Online Course</Link>
                            </motion.li>
                          </ul>
                        </div>
                        <div className="w-full md:w-48 mt-4 md:mt-0 min-w-[200px]">
                          <h3 className="text-lg font-semibold text-gray-700 px-4 py-2 border-b sticky top-0 bg-white">Targeted Exams</h3>
                          <ul className="mt-2 space-y-1">
                            <motion.li whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
                              <Link to="/exams/jee-advanced" className="block px-4 py-2 hover:bg-gray-100 rounded-lg transition-colors">JEE Advanced</Link>
                            </motion.li>
                            <motion.li whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
                              <Link to="/exams/jee-mains" className="block px-4 py-2 hover:bg-gray-100 rounded-lg transition-colors">JEE Mains</Link>
                            </motion.li>
                            <motion.li whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
                              <Link to="/exams/neet" className="block px-4 py-2 hover:bg-gray-100 rounded-lg transition-colors">NEET</Link>
                            </motion.li>
                            <motion.li whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
                              <Link to="/exams/olympiads" className="block px-4 py-2 hover:bg-gray-100 rounded-lg transition-colors">Olympiads</Link>
                            </motion.li>
                          </ul>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>

              {["Why Choose Us", "About", "Contact", "Download", "Scholarship"].map((item, index) => (
                <motion.div key={item} variants={itemVariants}>
                  <Link 
                    to={`/${item.toLowerCase().replace(/\s+/g, '')}`} 
                    className="hover:pb_text_red font-medium block text-[12px] lg:text-[16px] md:inline-block hover:scale-105 transition-transform"
                  >
                    {item}
                  </Link>
                </motion.div>
              ))}
            </motion.nav>
          )}
        </AnimatePresence>

        {/* Buttons Section */}
        <div className="hidden md:flex space-x-4 items-center">
          <motion.button 
            className="pb_bg_red text-white px-4 py-2 rounded-full hover:bg-black transition-colors"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <BiSearch />
          </motion.button>
        </div>
      </div>
    </header>
  );
};

export default Header;