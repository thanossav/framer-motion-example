import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const About = () => {
   return (
      // <motion.div initial={{ scaleY: 0 }} animate={{ scaleY: 1 }} exit={{ scaleY: 0 }}>
      <motion.div
         initial={{ opacity: 0 }}
         animate={{ opacity: 1 }}
         exit={{ opacity: 0 }}
         transition={{ duration: 0.5 }}
      >

         {/* ANIMATE ON MOUNT */}
         <div className='flex_row'>
            <motion.div className='box_vertical bg_blueviolet'
               initial={{ y: '-100vh' }}
               animate={{ y: 0 }}
               transition={{ type: 'spring', bounce: 0 }}
            />

            <motion.div className='box_vertical bg_blueviolet'
               initial={{ y: '+100vh' }}
               animate={{ y: 0 }}
               transition={{ type: 'spring', bounce: 0 }}
            />
         </div>

      </motion.div>
   );
}

export default About;