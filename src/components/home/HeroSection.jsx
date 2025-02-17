import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import Images from '../../images/Images';
import { Link } from 'react-router-dom';
import FetchAllBanner from '../../Services/Banner/FetchAllBanner';

import Spinner from '../Spinner';

const HeroSection = () => {
  const[Banners, SetBanners]=useState([]);
  const [isLoading, setIsLoading]=useState(false)
  async function fetchbanners()
  {
    try{
      setIsLoading(true)
     
      const banners=await FetchAllBanner();
      console.log('banners',banners);
      SetBanners(banners)
      setIsLoading(false)
    }catch(error)
    {
      setIsLoading(false)
      console.log('error',error);
    }
  }
  useEffect(()=>{
     fetchbanners();
  },[])

  Images.map((image)=>{
    console.log('image',image.url)
  })
  return (
  <>
   {isLoading? <Spinner/>:<div className="hero-section mt-[60px]">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
      >
        {Banners?.map((banner, index) => (
          <SwiperSlide key={index}>
            <Link to={banner?.link}>
                <img className='w-full max-h-[70vh]' src={banner.image} alt={`Slide ${index + 1}`} />
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>}

  </>
   

    
  );
};

export default HeroSection;
