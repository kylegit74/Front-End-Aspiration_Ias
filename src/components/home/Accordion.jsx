import { useState } from "react";
import { BiChevronDown, BiChevronRight, BiArrowBack } from "react-icons/bi";

const CourseAccordion = ({ course }) => {
  const [isOpen, setIsOpen] = useState(false);
  console.log('couse',course)

  return (
    <div className=" rounded-lg">
      {/* Accordion Header */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center p-4 bg-red-500 text-white text-lg font-bold rounded-t-lg"
      >
        Explore Courses
        <BiChevronDown
          className={`transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>

      {/* Accordion Content */}
      {isOpen && (
  <div
    className="bg-red-500 text-white p-4 sm:p-6 transition-all duration-500 ease-in-out overflow-hidden opacity-0 scale-y-0 origin-top"
    style={{ opacity: isOpen ? 1 : 0, transform: isOpen ? "scaleY(1)" : "scaleY(0)" }}
  >
    <ul className="list-disc list-inside text-white text-sm transition-all duration-500 ease-in-out overflow-hidden opacity-0 scale-y-0 origin-top"  style={{ opacity: isOpen ? 1 : 0, transform: isOpen ? "scaleY(1)" : "scaleY(0)" }}>
      {course.Explore_Courses?.map((explore, i) => (
        <li key={i}>{explore}</li>
      ))}
    </ul>
  </div>
)}

    </div>
  );
};

export default CourseAccordion;
