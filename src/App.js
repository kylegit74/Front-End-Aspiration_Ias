import './App.css';


import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { lazy, Suspense } from 'react';
import AdminRoute from './components/AdminPanel/Layouts/AdminRoute';
import Login from './components/Login/Login';

import SkeletonLoader from './components/Loader';
import ScrollToTop from './layouts/ScrollTop';
const Home=lazy(()=>import('../src/pages/Home'));
const AboutUs=lazy(()=>import('../src/pages/About'));
const ContactPage=lazy(()=>import('../src/pages/Contact'));
const WhyChooseUs=lazy(()=>import('../src/pages/WhyChooseUs'));

function App() {
  return (
    <BrowserRouter>
     
        <Suspense fallback={<SkeletonLoader/>}>
        <ScrollToTop/>
        <Routes>
      
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<AboutUs />} />
        <Route path='/contact' element={<ContactPage/>}/>
        <Route path='/whychooseus' element={<WhyChooseUs/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path="/admin/*" element={<AdminRoute />} />
      </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
