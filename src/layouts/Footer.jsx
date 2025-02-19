import React from 'react'
import { BiCaretRight } from 'react-icons/bi'
import { BsFacebook, BsInstagram, BsLinkedin, BsTwitterX, BsYoutube } from 'react-icons/bs'
import { FaLocationPin } from 'react-icons/fa6'
import { IoCall } from 'react-icons/io5'
import { MdEmail, MdFacebook } from 'react-icons/md'
import { Link } from 'react-router-dom'
import MenuAccordion from '../components/home/PopularMenuAccordion'
const Footer = () => {
  return (
    <footer className="pb_bg_dark pt-8 md:pt-12 pb-4">
      <div className="max-w-screen-xl mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {/* Company Info Section */}
          <div className="space-y-6">
            <Link to="/" className="inline-block">
              <h2 className="text-white">
                <span className="block text-3xl font-medium">Aspiration</span>
                <span className="block text-xl">Academy</span>
              </h2>
            </Link>

            <p className="text-white/80 text-sm">
              Aspiration JEE & NEET Academy is a premier coaching institute dedicated to empowering students with top-notch guidance, expert faculty, and result-driven strategies. Our meticulously designed programs, available both online and offline, ensure comprehensive preparation for JEE and NEET, helping aspirants achieve their dreams with excellence and confidence.
            </p>

            <div className="space-y-4">
              <h5 className="text-white font-medium">Follow us on:</h5>
              <div className="flex gap-4">
                {[
                  { Icon: BsFacebook, bg: "bg-blue-600" },
                  { Icon: BsTwitterX, bg: "bg-white" },
                  { Icon: BsInstagram, bg: "bg-white" },
                  { Icon: BsLinkedin, bg: "bg-white" },
                  { Icon: BsYoutube, bg: "bg-white" }
                ].map(({ Icon, bg }, index) => (
                  <Link key={index} to="/" className={`${bg} p-2 rounded-full hover:opacity-80 transition-opacity`}>
                    <Icon className={`text-xl ${bg === "bg-white" ? "text-black" : "text-yellow-400"}`} />
                  </Link>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-white/20">
              <h4 className="text-white text-lg font-medium mb-4">Address:</h4>
              <div className="space-y-3 text-white/80">
                <div className="flex items-start gap-2">
                  <FaLocationPin className="mt-1 flex-shrink-0" />
                  <span>BC-16, Street Number 113, Action Area I, Newtown, Kolkata, West Bengal 700163</span>
                </div>
                <div className="flex items-center gap-2">
                  <IoCall />
                  <span>123 4567 890</span>
                </div>
                <div className="flex items-center gap-2">
                  <MdEmail />
                  <span>demoemail@gmail.com</span>
                </div>
              </div>
            </div>
          </div>

          {/* Popular Menus */}
         {/* <div className="text-white">
            <h4 className="text-lg font-medium mb-4">Popular Menus</h4>
            <ul className="space-y-2">
              {[
                { text: "Home", path: "/" },
                { text: "Courses", path: "/courses" },
                { text: "Target exams", path: "/exams" },
                { text: "Why choose us", path: "/whychooseus" },
                { text: "Career", path: "/career" },
                { text: "About", path: "/about" },
                { text: "Contact", path: "/contact" }
              ].map(({ text, path }) => (
                <li key={text}>
                  <Link to={path} className="inline-flex items-center hover:text-yellow-400 transition-colors">
                    <BiCaretRight className="mr-2" />
                    {text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>*/}
          <MenuAccordion/>

          {/* Aspiration Exams */}
          <div className="text-white">
            <h4 className="text-lg font-medium mb-4">Aspiration Exams</h4>
            <ul className="space-y-2">
              {[
                "Aspiration Talent Reward Exam",
                "Big Bang Edge Test",
                "DRONACHARYA (I)",
                "DRONACHARYA (II)",
                "Escape Velocity Test (EVT)",
                "JEE Advanced",
                "JEE Main",
                "Olympiads"
              ].map((exam) => (
                <li key={exam}>
                  <Link to={`/exams/${exam.toLowerCase().replace(/\s+/g, "-")}`} className="inline-flex items-center hover:text-yellow-400 transition-colors">
                    <BiCaretRight className="mr-2" />
                    {exam}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-8 pt-4 border-t border-white/20">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-white/80 text-sm">
            <div>
              © 2025 <Link to="/" className="pb_text_ylw hover:underline">Aspiration Academy</Link>. All Rights Reserved
            </div>
            <div>
              Designed & Developed by{" "}
              <Link to="https://kyleinfotech.co.in/" target="_blank" className="pb_text_ylw hover:underline">
                Kyle Infotech
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer
