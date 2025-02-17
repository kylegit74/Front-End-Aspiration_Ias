import React from 'react'
import { BiCaretRight } from 'react-icons/bi'
import { BsFacebook, BsInstagram, BsLinkedin, BsTwitterX, BsYoutube } from 'react-icons/bs'
import { FaLocationPin } from 'react-icons/fa6'
import { IoCall } from 'react-icons/io5'
import { MdEmail, MdFacebook } from 'react-icons/md'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className='pb_bg_dark relative  overflow-hidden'>
      <div className='max-w-screen-xl mx-auto pt-10'>
        <div className='flex gap-8'>
          <div className='w-full md:w-1/2 xl:w-1/3'>
          <div className='text-white'>
            <Link className='text-right text-white text-4xl font-medium w-fit block mb-5' to={'/'}>
              <span className='block'>Aspiration</span> 
              <span className='text-xl block'>Academy</span>
            </Link>

            <p className='text-sm my-5'> Aspiration JEE & NEET Academy is a premier coaching institute dedicated to empowering students with top-notch guidance, expert faculty, and result-driven strategies. Our meticulously designed programs, available both online and offline, ensure comprehensive preparation for JEE and NEET, helping aspirants achieve their dreams with excellence and confidence.</p>

            <h5 className='mb-5'>Follow us on:</h5>
            <div className="flex gap-5 text-4xl items-center">
              <Link className='bg-red-700 rounded-full' to={'/'}>
                <BsFacebook className='text-yellow-400' />
              </Link>
              <Link className='bg-white rounded-full' to={'/'}>
                <BsTwitterX className='text-black p-2' />
              </Link>
              <Link className='bg-white rounded-full' to={'/'}>
                <BsInstagram className='text-black p-2' />
              </Link>
              <Link className='bg-white rounded-full' to={'/'}>
                <BsLinkedin className='text-black p-2' />
              </Link>
              <Link className='bg-white rounded-full' to={'/'}>
                <BsYoutube className='text-black p-2' />
              </Link>
            </div>
              
          </div>
          <hr className='my-8' />

          <p className='text-white text-xl font-medium mb-4'>Address:</p>

          <div className='text-white flex gap-2 items-center'>
              <FaLocationPin /> 
              <span>
                BC-16, Street Number 113, Action Area I, Newtown, Kolkata,
                West Bengal 700163
              </span>
          </div>

          <div className='text-white flex gap-2 items-center'>
              <IoCall /> 
              <span>
                123 4567 890
              </span>
          </div>

          <div className='text-white flex gap-2 items-center'>
              <MdEmail /> 
              <span>
                demoemail@gmail.com
              </span>
          </div>

          </div>
          <div className='w-full md:w-1/2 xl:w-1/3 text-white'>
            <h4 className='font-medium text-lg mb-3'>Popular Menus</h4>
            <ul className='text-sm'>
              <li className="mb-3">
                <Link> <BiCaretRight className='inline-block mr-2' /> Home</Link>
              </li>
              <li className="mb-3">
                <Link> <BiCaretRight className='inline-block mr-2' /> Courses</Link>
              </li>
              <li className="mb-3">
                <Link>  <BiCaretRight className='inline-block mr-2' />Target exams</Link>
              </li>
              <li className="mb-3">
                <Link>  <BiCaretRight className='inline-block mr-2' />Why choose us</Link>
              </li>
              <li className="mb-3">
                <Link>  <BiCaretRight className='inline-block mr-2' />Career</Link>
              </li>
              <li className="mb-3">
                <Link>  <BiCaretRight className='inline-block mr-2' />About</Link>
              </li>
              <li className="mb-3">
                <Link>  <BiCaretRight className='inline-block mr-2' />Contact</Link>
              </li>
            </ul>
          </div>
          <div className='w-full md:w-1/2 xl:w-1/3 text-white'>
            
            <h4 className='font-medium text-lg mb-3'>Aspiration Exams</h4>
            <ul className='text-sm'>
              <li className="mb-3">
                <Link>  <BiCaretRight className='inline-block mr-2' />Aspiration Talent Reward Exam</Link>
              </li>
              <li className="mb-3">
                <Link>  <BiCaretRight className='inline-block mr-2' />Big Bang Edge Test</Link>
              </li>
              <li className="mb-3">
                <Link>  <BiCaretRight className='inline-block mr-2' />DRONACHARYA (I)</Link>
              </li>
              <li className="mb-3">
                <Link>  <BiCaretRight className='inline-block mr-2' />DRONACHARYA (II)</Link>
              </li>
              <li className="mb-3">
                <Link>  <BiCaretRight className='inline-block mr-2' />Escape Velocity Test (EVT)</Link>
              </li>
              <li className="mb-3">
                <Link>  <BiCaretRight className='inline-block mr-2' />JEE Advanced</Link>
              </li>
              <li className="mb-3">
                <Link>  <BiCaretRight className='inline-block mr-2' />JEE Main</Link>
              </li>
              <li className="mb-3">
                <Link>  <BiCaretRight className='inline-block mr-2' />Olympiads</Link>
              </li>
            </ul>
          </div>
        </div>
        <hr className='mt-5' />

        <div className='flex items-center justify-between py-1'>
          <div className='font-bold text-white text-xs'>
            © 2025 <Link className='pb_text_ylw' to={'/'}>Aspiration Academy</Link>. All Rights Reserved
          </div>
          <div className='font-bold text-white text-xs'>
            Designed & Developed by <Link className='pb_text_ylw' target='_blank' to={'https://kyleinfotech.co.in/'}>Kyle Infotech</Link>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Footer
