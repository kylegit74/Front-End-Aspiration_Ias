import React from 'react';
import { BiBulb, BiPaperclip, BiPaperPlane, BiPhone, BiSolidGraduation, BiSolidQuoteAltLeft, BiSolidQuoteAltRight, BiSpreadsheet } from 'react-icons/bi';
import { BsLightbulb } from 'react-icons/bs';
import { TfiQuoteLeft, TfiQuoteRight } from 'react-icons/tfi';
import { Link } from 'react-router-dom';

const AboveFooter = () => {
  return (
    <div className='mt-20 relative'>

      <div className='pb_bg_dark max-w-screen-xl mx-auto rounded-s-3xl p-4 sm:p-8'>
        <h2 className='text-3xl sm:text-4xl font-bold text-white my-2 sm:my-3'>
          What a <span className='pb_text_ylw'>Aspiration</span> Classroom Program does to you?
        </h2>
        <div className='relative my-2 sm:my-4'>

          <span className='absolute z-0 top-0 left-4 sm:left-9 h-full border-dashed border-l-4 border-[var(--pb-ylw)]' ></span>

          <div className='flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-3'>
            <span className='relative'>
              <BiSolidGraduation className='p-3 sm:p-4 w-16 sm:w-20 rounded-full h-16 sm:h-20 pb_bg_ylw pb_text_red' />
            </span>
            <p className='text-white text-base sm:text-lg'>
              1. Structured Learning Path: Provides a clear, well-planned curriculum to guide you step by step through all topics.
            </p>
          </div>

          <div className='flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-3 my-4 sm:my-6'>
            <span className='relative'>
              <BsLightbulb className='p-3 sm:p-4 w-16 sm:w-20 rounded-full h-16 sm:h-20 pb_bg_ylw pb_text_red' />
            </span>
            <p className='text-white text-base sm:text-lg'>
              2. Conceptual Clarity: Focus on building a strong foundation in Physics, Chemistry, and Mathematics/Biology.
            </p>
          </div>

          <div className='flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-3'>
            <span className='relative'>
              <BiPaperPlane className='p-3 sm:p-4 w-16 sm:w-20 rounded-full h-16 sm:h-20 pb_bg_ylw pb_text_red' />
            </span>
            <p className='text-white text-base sm:text-lg'>
              3. Regular Assessments: Continuous testing, including mock exams and weekly tests, ensures that you're well-prepared for real exams.
            </p>
          </div>

          <div className='flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-3 my-4 sm:my-6'>
            <span className='relative'>
              <BiPaperPlane className='p-3 sm:p-4 w-16 sm:w-20 rounded-full h-16 sm:h-20 pb_bg_ylw pb_text_red' />
            </span>
            <p className='text-white text-base sm:text-lg'>
              4. Doubt Resolution: Regular doubt-solving sessions to ensure you grasp every concept thoroughly.
            </p>
          </div>

          <div className='flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-3'>
            <span className='relative'>
              <BiPaperPlane className='p-3 sm:p-4 w-16 sm:w-20 rounded-full h-16 sm:h-20 pb_bg_ylw pb_text_red' />
            </span>
            <p className='text-white text-base sm:text-lg'>
              5. Time Management Skills: Helps you develop crucial skills to manage time efficiently during exams.
            </p>
          </div>
        </div>
      </div>

      <div className='max-w-screen-xl mx-auto p-4 sm:p-8 border-r-4 border-b-4 rounded-ee-3xl flex flex-wrap border-dashed border-[var(--pb-ylw)] relative'>
        <img className='absolute bottom-2 sm:bottom-3 m-0 left-0 w-[250px] sm:w-[410px] rounded-se-3xl' src='https://kyletest.in/aspiration-academy/images/logonew.png' alt="Logo" />
        <div className='relative w-full sm:w-1/2 ml-0 sm:ml-auto'>

          <h3 className='font-bold text-3xl sm:text-4xl'>
            Aspiration <span className='pb_text_red'>eAcademy</span>
          </h3>
          <p className='font-bold text-base sm:text-lg my-2 sm:my-3'>
            M.Sc Calcutta University
          </p>

          <p className='text-sm sm:text-base'>
            With Aspiration IAS Academy as our foundation, we have built Aspiration JEE & NEET Academy to provide exceptional coaching for students aspiring to clear JEE and NEET. Our experienced faculty, who have guided numerous Civil Services aspirants to success, now bring their expertise to help JEE and NEET students achieve their goals. By combining a rigorous curriculum, personalized attention, and practical exam strategies, we ensure our students are equipped for success. Our online and offline learning modes cater to a diverse range of students, helping them prepare efficiently for these exams.
          </p>
          <div className='flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-4 mt-2 sm:mt-3'>
            <div className="text-sm font-extralight sm:text-base whitespace-nowrap">
              Signature here
            </div>
            <Link className='flex items-center gap-2 font-bold' to={'/'}>
              <BiPhone className='pb_text_red pb_bg_ylw w-6 h-6 sm:w-8 sm:h-8 rounded-full p-1 sm:p-2' />
              <span className="text-sm sm:text-base">123 4567 890</span>
            </Link>
          </div>
        </div>
      </div>

      <div className='pb_bg_red mt-8 sm:mt-[75px] relative py-6 sm:py-10'>
        <div className='max-w-screen-xl mx-auto'>
          <div className='text-white text-lg sm:text-2xl font-medium text-center'>
            <p>
              <TfiQuoteLeft className='inline-block text-2xl sm:text-3xl mr-1' />
              Success in JEE and NEET is a journey of persistence and hard work. Every challenge faced today will prepare you for the victory tomorrow. Stay focused, remain positive, and keep pushing your limits to achieve your dreams.
              <TfiQuoteRight className='inline-block text-2xl sm:text-3xl ml-1' />
            </p>

            <h4 className='mt-2 sm:mt-4 mb-1 sm:mb-2 text-base sm:text-xl'>
              ---- Aspiration JEE & NEET Academy
            </h4>
            <p className='text-xs sm:text-sm'>
              CHAIRMAN & CHIEF MENTOR - ASPIRATION ACADEMY GROUP
            </p>

          </div>

        </div>
      </div>

    </div>
  );
};

export default AboveFooter;