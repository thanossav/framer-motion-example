import React, { useState, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router';
import { AnimatePresence } from 'framer-motion';

import Navbar from './Navbar/Navbar.js'
import Home from '../pages/Home/Home.js'
import About from '../pages/About/About.js'
import OurWork from '../pages/OurWork/OurWork.js';
import Contact from '../pages/Contact/Contact.js';

const Main = () => {
   const location = useLocation()
   return (
      <>
         <Navbar />

         {/* Animate Presents updates whenever a direct child updates */}
         {/* So Routes component need to be updated whenever the route is change */}
         {/* This is possible throught useLocation */}
         <AnimatePresence initial={true} exitBeforeEnter>
            <div style={{ padding: '4rem', paddingTop: '4rem', paddingBottom: '4rem' }}>
               <Routes location={location} key={location.pathname}>
                  {/* <Route path="/" element={<App />} /> */}
                  <Route path="/" element={<Home />} />
                  <Route path="work" element={<OurWork />} />
                  <Route path="about" element={<About />} />
                  <Route path="contact" element={<Contact />} />
               </Routes>
            </div>
         </AnimatePresence>
      </>
   );
}

export default Main;