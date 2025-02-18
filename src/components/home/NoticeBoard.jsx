import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation } from "swiper/modules";
import {
  BiArrowBack,
  BiChevronRight,
  BiChevronsRight,
  BiLeftArrow,
} from "react-icons/bi";
import FetchallNotice from "../../Services/Notice/FetchAllNotice";
import Spinner from "../Spinner";

const NoticeBoard = () => {
  const [Notices, setNotices] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  async function fetchnotices() {
    try {
      setIsLoading(true);
      const notices = await FetchallNotice();
      console.log("notices", notices);
      setNotices(notices);
      setIsLoading(false);
    } catch (error) {
      console.log("error", error);
      setIsLoading(false);
    }
  }
  {/*const SortedNotices = [...Notices].sort((a, b) => {
    const dateA = new Date(a.updatedAt);
    const dateB = new Date(b.updatedAt);

    // If updatedAt is the same, sort by createdAt
    if (dateA - dateB === 0) {
      return new Date(b.createdAt) - new Date(a.createdAt);
    }

    return dateB - dateA;
  });*/}

  useEffect(() => {
    fetchnotices();
  }, []);
  return (
    <div className="flex items-center justify-center bg-gray-100 py-20 relative">
      {isLoading ? (
        <Spinner />
      ) : (
        <div className="notice-board-card pb_bg_red text-white shadow-lg p-6 rounded-3xl w-full max-w-screen-xl relative overflow-hidden">
          <h2 className="text-3xl font-bold mb-4 ml-4">Notice Board</h2>
          <span className="absolute top-20 w-full h-[2px] bg-white left-0"></span>
          <div className="pb_bg_ylw w-24 h-24 rounded-full absolute -left-20 top-24"></div>
          <div className="pb_bg_ylw w-32 h-32 rounded-full absolute -right-20 bottom-12"></div>
          <Swiper
            className="my-10"
            modules={[Navigation]}
            navigation={{
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            }}
            spaceBetween={30}
            slidesPerView={1}
          >
            <SwiperSlide>
              <div className="px-4">
                {/* <p className="text-lg font-bold mb-4">Results Declared :  </p> */}
                <ul className="list-disc pl-5 space-y-4 text-lg mb-5 mt-3">
                  {Notices.slice(0, 5)?.map((notice, index) => (
                    <li key={index}>
                      {notice.text}
                      {index <= 2 && (
                        <span className="px-4 py-1 bg-gradient-to-r from-green-600 ml-2 to-green-800 rounded-full text-white font-bold shadow-md uppercase text-sm transition-all duration-300 hover:scale-105">
                          New
                        </span>
                      )}
                    </li>
                  ))}
                </ul>

                <a
                  href="#"
                  className="bg-white pb_text_red rounded-full px-5 py-2 font-medium mt-3 flex w-fit items-center"
                >
                  Click here to learn more{" "}
                  <BiChevronRight className="text-2xl mt-[2px]" />
                </a>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              {/* <p className="text-lg font-bold mb-4">Results Declared :  </p> */}
              <ul className="list-disc pl-5 space-y-4 text-lg mb-5">
                {Notices.slice(5, 12)?.map((notice, index) => (
                  <li key={index}>{notice.text}</li>
                ))}
              </ul>
            </SwiperSlide>
            <SwiperSlide>
              {/* <p className="text-lg font-bold mb-4">Results Declared :  </p> */}
              <ul className="list-disc pl-5 space-y-4 text-lg mb-5">
                {Notices.slice(12, 18)?.map((notice, index) => (
                  <li key={index}>{notice.text}</li>
                ))}
              </ul>
            </SwiperSlide>
          </Swiper>

          {/* Custom Navigation Arrows */}
          <div className="swiper-button-prev pb_text_red bg-white rounded-full hover:text-gray-900 cursor-pointer nav_none p-2">
            <BiArrowBack className="pb_text_red" />
          </div>
          <div className="swiper-button-next bg-white rounded-full hover:text-gray-900 cursor-pointer nav_none p-2">
            <BiArrowBack className="pb_text_red rotate-180" />
          </div>
        </div>
      )}
    </div>
  );
};

export default NoticeBoard;
