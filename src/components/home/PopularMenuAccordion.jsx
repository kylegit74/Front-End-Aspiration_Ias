import { useState } from "react";
import { Link } from "react-router-dom";
import { BiCaretRight, BiChevronDown } from "react-icons/bi";

const MenuAccordion = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { text: "Home", path: "/" },
    { text: "Courses", path: "/courses" },
    { text: "Target exams", path: "/exams" },
    { text: "Why choose us", path: "/whychooseus" },
    { text: "Career", path: "/career" },
    { text: "About", path: "/about" },
    { text: "Contact", path: "/contact" }
  ];

  return (
    <div className="text-white">
      {/* Menu Header */}
      <h4 className="text-lg font-medium mb-4">Popular Menus</h4>

      {/* Accordion Toggle for Small Devices */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="sm:hidden flex items-center text-white font-semibold mb-4"
      >
        Menu
        <BiChevronDown
          className={`ml-2 transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>

      {/* Menu List */}
      <ul
        className={`space-y-2 transition-all duration-500 overflow-hidden ${
          isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        } sm:max-h-none sm:opacity-100`}
      >
        {menuItems.map(({ text, path }) => (
          <li key={text}>
            <Link
              to={path}
              className="inline-flex items-center hover:text-yellow-400 transition-colors"
            >
              <BiCaretRight className="mr-2" />
              {text}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MenuAccordion;
