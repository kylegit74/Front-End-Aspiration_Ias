import React, { useEffect, useState } from "react";
import { BiArrowBack, BiChevronRight } from "react-icons/bi";
import FetchAllCourses from "../../Services/Course/FetchAllCourse";
import Spinner from "../Spinner";
import CourseAccordion from "./Accordion";

const AreaInterest = () => {
  const [courses, setCourses] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function fetchCourses() {
      try {
        setIsLoading(true);
        const fetchedCourses = await FetchAllCourses();
        setCourses(fetchedCourses.slice(0, 5));
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching courses:", error);
        setIsLoading(false);
      }
    }
    fetchCourses();
  }, []);

  return (
    <div className="relative overflow-hidden bg-yellow-100 py-10">
      <div className="container max-w-7xl px-4 mx-auto">
        <h4 className="text-center font-bold text-xl">
          Pick Course as per your Area of Interest
        </h4>
        <h2 className="text-center mt-3 mb-10 text-3xl sm:text-4xl font-bold">
          Top Ranked <span className="text-red-600">Courses</span>
        </h2>

        {isLoading ? (
          <Spinner />
        ) : (
          <div className="container mx-auto px-4 space-y-8 sm:space-y-12">
            {courses.map((course, index) => (
              <div
                key={course.id}
                className={`grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-0 items-stretch ${
                  index % 2 === 0 ? "" : "lg:flex-row-reverse"
                }`}
              >
                <div className="h-full">
                  <img
                    className="rounded-none w-full object-cover h-full"
                    src={course.image}
                    alt={course.heading}
                  />
                </div>

                <div className="bg-red-500 text-white h-full flex flex-col justify-between p-4 sm:p-6">
                  <div>
                    <h5 className="text-xl sm:text-2xl font-bold">{course.heading}</h5>
                    <p className="mt-2 text-white text-sm sm:text-base">{course.description}</p>
                    
                    <ul className="list-disc list-inside text-white text-sm mt-3">
                    
                      <CourseAccordion course={course} />
                     
                    </ul>
                    
                  </div>
                  <div className="flex flex-col sm:flex-row gap-4 mt-4">
                    <button className="bg-white text-red-500 rounded-full px-3 py-2 sm:px-4 sm:py-2 flex-grow sm:flex-grow-0 flex items-center justify-center font-medium text-sm sm:text-base w-full sm:w-auto">
                      Enroll Now <BiChevronRight className="text-xl" />
                    </button>
                    <button className="px-3 py-2 sm:px-4 sm:py-2 flex-grow sm:flex-grow-0 flex items-center justify-center font-medium border border-white text-white rounded-full text-sm sm:text-base w-full sm:w-auto">
                      Explore Course <BiArrowBack className="rotate-180 text-xl" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default AreaInterest;