import React, { useEffect, useState } from "react";
import { BiArrowBack, BiChevronRight } from "react-icons/bi";
import FetchAllCourses from "../../Services/Course/FetchAllCourse";

const AreaInterest = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    async function fetchCourses() {
      try {
        const fetchedCourses = await FetchAllCourses();
        setCourses(fetchedCourses.slice(0, 5)); // Fetch only 5 courses
      } catch (error) {
        console.error("Error fetching courses:", error);
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
        <h2 className="text-center mt-3 mb-10 text-4xl font-bold">
          Top Ranked <span className="text-red-600">Courses</span>
        </h2>

        <div className="container mx-auto px-4 space-y-12">
          {courses.map((course, index) => (
            <div
              key={course.id}
              className={`grid grid-cols-1 md:grid-cols-2 gap-0 items-stretch ${
                index % 2 === 0 ? "" : "md:flex-row-reverse"
              }`}
            >
              {/* Image Section */}
              <div className="h-full">
                <img
                  className="rounded-none w-full object-cover h-full"
                  src={course.image}
                  alt={course.heading}
                />
              </div>

              {/* Content Section */}
              <div className="bg-red-500 text-white h-full flex flex-col justify-between p-6">
                <div>
                  <h5 className="text-2xl font-bold">{course.heading}</h5>
                  <p className="mt-2 text-white">{course.description}</p>
                  <h4 className="font-bold mt-3 mb-2">Explore Courses:</h4>
                  <ul className="list-disc list-inside text-white text-sm">
                    {course.Explore_Courses?.map((explore, i) => (
                      <li key={i}>{explore}</li>
                    ))}
                  </ul>
                </div>
                <div className="flex gap-4 mt-4">
                  <button className="bg-white text-red-500 rounded-full px-4 py-2 flex gap-2 items-center font-medium">
                    Enroll Now <BiChevronRight className="text-2xl" />
                  </button>
                  <button className="px-4 py-2 flex gap-2 items-center font-medium border border-white text-white rounded-full">
                    Explore Course <BiArrowBack className="rotate-180 text-xl" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AreaInterest;
