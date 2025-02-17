import React from 'react'
import { BiChevronRight } from 'react-icons/bi'

const Eacademy = () => {
  return (
    <>
    <div className='pb_bg_ylw'>
      <div className='container max-w-7xl px-4 mx-auto py-10 flex items-center justify-between'>
        <div className='w-2/5 z-[10px]'>
          <h2 className='font-bold text-4xl'>Aspiration <span className='pb_text_red'>Online Campus </span></h2>
          <p className='my-4'>Aspiration Digital Campus is an advanced online classroom program, designed to run parallel to offline batches, ensuring seamless, high-quality learning anytime, anywhere. .</p>

          <p className='font-medium mb-4 text-lg'>Join from anywhere & experience <span className='pb_text_red'>Aspiration Online Campus</span> pedagogy.</p>
          <button className='pb_bg_red rounded-full px-4 py-2 flex gap-2 text-white items-center font-medium z-[10px]'>Enroll Now <BiChevronRight className='text-2xl' /> </button>
        </div>
        <div className='w-1/5'>
          <img src="images/dsgfs.png" alt="" />
        </div>
      </div>
    </div>

    {/* next */}
    <div className='pb_bg_red relative'>

  {/* Yellow Circle - Reduce overlap by adjusting position */}
  <div className='pb_bg_ylw w-36 h-36 rounded-full absolute -left-[30px] -top-[35px] scale-110 z-[1]'></div>

  <div className='container max-w-7xl px-4 mx-auto py-10 flex items-center justify-between relative z-[10]'>
    <div className='text-center text-white mx-10 px-5 my-3 relative z-[10]'>
      <h2 className='font-bold text-6xl text-white'>A MUST READ FOR ALL PARENTS</h2>
      <span className='text-xs italic text-gray-900'>-A Special Message to Parents</span>
      <h5 className='font-semibold'>Dear Parents,</h5>
      <p className='my-4'>
        Your child’s future is one of the most precious things in your life. As parents, you always want the best for them—whether it's education, career opportunities, or personal growth. Choosing the right coaching institute plays a crucial role in shaping their success, especially when preparing for highly competitive exams like JEE & NEET.
        <br/>
        At <strong className='text-black'>Aspiration JEE & NEET Academy</strong>, we understand that your child is unique, with their own strengths, learning pace, and aspirations. That’s why we are committed to providing not just coaching, but a complete mentorship journey—one that nurtures their academic excellence, confidence, and emotional well-being.
      </p>

      {/* Enroll Button - Ensure it's above the yellow circle */}
      <button className='relative z-[10] mx-auto my-4 pb_bg_ylw rounded-full px-4 py-2 flex gap-2 text-black items-center font-medium'>
        Enroll Now <BiChevronRight className='text-2xl' />
      </button>
    </div>
  </div>

  {/* Bottom yellow strip adjustments */}
  <div className='pb_bg_ylw h-8 w-[97%] block z-[5] rounded-es-2xl absolute right-0 bottom-3'></div>
  <span className='absolute left-[3%] top-0 h-[90%] w-8 block pb_bg_ylw'></span>
</div>

    </>
    
  )
}

export default Eacademy
