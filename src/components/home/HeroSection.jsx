import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import Images from "../../images/Images";
import { Link } from "react-router-dom";
import FetchAllBanner from "../../Services/Banner/FetchAllBanner";
import Spinner from "../Spinner";

const HeroSection = () => {
  const [Banners, SetBanners] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  async function fetchBanners() {
    try {
      setIsLoading(true);
      const banners = await FetchAllBanner();
      SetBanners(banners);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      console.log("error", error);
    }
  }

  useEffect(() => {
    fetchBanners();
  }, []);

  return (
    <>
      {isLoading ? (
        <Spinner />
      ) : (
        <div className="hero-section mt-[60px] w-full overflow-hidden">
          <Swiper
            key={Banners.length || 0}
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={10}
            slidesPerView={1}
            loop={true}
            navigation
            pagination={{ clickable: true }}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            className="w-full max-w-[1600px] mx-auto"
          >
            {Banners?.map((banner, index) => (
              <SwiperSlide key={index}>
                <Link to={banner?.link}>
                  <img
                    className="w-full h-[50vh] md:h-[70vh] object-fit"
                    src={banner.image}
                    alt={`Slide ${index + 1}`}
                  />
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      )}
    </>
  );
};

export default HeroSection;
