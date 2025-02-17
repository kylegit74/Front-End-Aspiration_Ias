import './App.css';
import AboutUs from '../src/pages/About'
import ContactPage from '../src/pages/Contact'
import Home from '../src/pages/Home'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import WhyChooseUs from '../src/pages/WhyChooseUs'
import AdminRoute from './components/AdminPanel/Layouts/AdminRoute';

import Login from './components/Login/Login';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<AboutUs />} />
        <Route path='/contact' element={<ContactPage/>}/>
        <Route path='/whychooseus' element={<WhyChooseUs/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path="/admin/*" element={<AdminRoute />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
