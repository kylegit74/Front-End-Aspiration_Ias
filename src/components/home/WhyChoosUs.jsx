import React from 'react'
import { FaGraduationCap, FaSchool } from 'react-icons/fa'

const WhyChoosUs = () => {
  return (
    <div className='relative overflow-hidden  '>
      <div className='pb_bg_ylw w-28 h-28 rounded-full absolute -left-20 top-24 z-10'></div>
      <div className='pb_bg_red w-36 h-36 rounded-full absolute -left-[87px] top-[79px] scale-125'></div>
      <div className='pb_bg_ylw w-96 h-96 rounded-full absolute -top-72 right-0'></div>

      <div className='container max-w-7xl px-4 mx-auto my-10 '>
      <h4 className='text-center font-bold text-xl'>Why choose us</h4>
      <h2 className='text-center mt-3 mb-10 text-4xl font-bold'>Our Approach is <span className='pb_text_red'>Uniquely Different.</span></h2>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          
            
            <div style={{background:"#e5f4fc"}} className="p-6 rounded-2xl shadow">
              <div className="flex space-x-4 flex-col items-start gap-3">
                <span>
                  <FaGraduationCap className='p-4 w-20 rounded-full h-20 pb_bg_ylw'/>
                  
                </span>
                
                <div>
                  <h5 className="text-xl font-semibold">1.	Personalized Learning Approach </h5>
                  <p className="mt-2">Unlike traditional coaching centres, Aspiration Academy customizes study plans and teaching methods based on each student's strengths and weaknesses.</p>
                </div>
              </div>
            </div>

            <div style={{background:"#fcf0ea"}} className="p-6 rounded-2xl shadow">
              <div className="flex space-x-4 flex-col items-start gap-3">
                <span>
                  <FaGraduationCap className='p-4 w-20 rounded-full h-20 pb_bg_ylw'/>
                </span>
                
                <div>
                  <h5 className="text-xl font-semibold">2.	Expert Faculty</h5>
                  <p className="mt-2">The academy boasts a team of highly qualified and experienced faculty who have consistently guided students to top ranks in JEE & NEET.</p>
                </div>
              </div>
            </div>
            <div style={{background:"#fffceb"}} className="p-6 rounded-2xl shadow">
              <div className="flex space-x-4 flex-col items-start gap-3">
                <span>
                  <FaGraduationCap className='p-4 w-20 rounded-full h-20 pb_bg_ylw'/>
                </span>
                
                <div>
                  <h5 className="text-xl font-semibold">3.	Innovative Teaching Techniques </h5>
                  <p className="mt-2">With a blend of smart classes, conceptual learning, and real-world applications, the academy ensures deep understanding rather than rote memorization.</p>
                </div>
              </div>
            </div>

            <div style={{background:"#daead3"}} className="p-6 rounded-2xl shadow">
              <div className="flex space-x-4 flex-col items-start gap-3">
                <span>
                  <FaGraduationCap className='p-4 w-20 rounded-full h-20 pb_bg_ylw'/>
                </span>
                
                <div>
                  <h5 className="text-xl font-semibold">4.	Comprehensive Study Material & Test Series </h5>
                  <p className="mt-2">Students get meticulously designed study materials and regular mock tests that simulate real exam conditions, boosting confidence and performance.</p>
                </div>
              </div>
            </div>
            <div style={{background:"#f1e9f7"}} className="p-6 rounded-2xl shadow">
              <div className="flex space-x-4 flex-col items-start gap-3">
                <span>
                  <FaGraduationCap className='p-4 w-20 rounded-full h-20 pb_bg_ylw'/>
                </span>
                
                <div>
                  <h5 className="text-xl font-semibold">5.	Small Batch Size for Individual Attention </h5>
                  <p className="mt-2">Maintaining limited students per batch allows personalized mentoring and doubt-clearing sessions, ensuring better understanding.</p>
                </div>
              </div>
            </div>

            <div style={{background:"#e6eced"}} className="p-6 rounded-2xl shadow">
              <div className="flex space-x-4 flex-col items-start gap-3">
                <span>
                  <FaGraduationCap className='p-4 w-20 rounded-full h-20 pb_bg_ylw'/>
                </span>
                
                <div>
                  <h5 className="text-xl font-semibold">6.	Motivational & Psychological Support </h5>
                  <p className="mt-2">Beyond academics, Aspiration Academy provides mentorship, stress management sessions, and regular motivation to keep students focused and positive.</p>
                </div>
              </div>
            </div>
          
        </div>
      </div>

    </div>
    </div>
    
  )
}

export default WhyChoosUs
