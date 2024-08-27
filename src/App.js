import React from 'react';

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.min.js';

import { BrowserRouter as Router, Routes,Route} from 'react-router-dom';
import Navbar from './Navbar.jsx';
import Home from './Home.jsx';
import About from './About.jsx';
import Contact from './Contact.jsx';
import Service from './Service.jsx';
import Blog from './Blog.jsx';

export default function App() {
  return (
    <React.StrictMode>
      <Router>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/service' element={<Service/>}/>
          <Route path='/blog' element={<Blog/>}/>
        </Routes>
        
      </Router>
    

    </React.StrictMode>
  )
}
