import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Home = () => {

   const downToUp = {
      offscreen: { y: 500, opacity: 0 },
      onscreen: { y: 0, opacity: 1, transition: { type: "spring", bounce: 0.2, duration: 2 } }
   };

   const leftToRight = {
      offscreen: { x: '-100vw' },
      onscreen: { x: 0, transition: { type: 'spring', bounce: 0.2, duration: 2 } }
   }

   return (
      // PAGE TRANSITION EFFECT
      <motion.div
         initial={{ opacity: 0 }}
         animate={{ opacity: 1 }}
         exit={{ opacity: 0 }}
         transition={{ duration: 0.5 }}>

         {/* ANIMATION ON MOUNT */}
         <div className='flex_row'>

            {/* BOX */}
            <motion.div className='box_vertical bg_coral'
               initial={{ x: '-100vw' }}
               animate={{ x: 0 }}
               transition={{ type: 'spring', bounce: 0 }}
            />

            {/* BOX */}
            <motion.div className='box_vertical bg_coral'
               initial={{ x: '+100vw' }}
               animate={{ x: 0 }}
               transition={{ type: 'spring', bounce: 0, delay: 0.5 }}
            />

         </div>

         {/* ANIMATION ON SCROLL ONLY ON OPACITY */}
         <div className='flex_column margin_top'>
            <motion.div className='box_horizontal bg_coral'
               initial={{ opacity: 0 }}
               whileInView={{ opacity: 1, transition: { duration: 1 } }}
               viewport={{ once: true, amount: 0.5 }}
            />
         </div>

         {/* ANIMATION ON SCROLL */}
         {/* NEEDS A PARENT motion.div */}
         <motion.div className='flex_row margin_top' initial="offscreen" whileInView="onscreen" viewport={{ once: true, amount: 0.5 }}          >
            {/* BOX */}
            <motion.div className='box_horizontal bg_coral' variants={downToUp} />
         </motion.div>


         {/* ROW */}
         <motion.div className='flex_row margin_top' initial="offscreen" whileInView="onscreen" viewport={{ once: true, amount: 0.5 }}          >
            {/* BOX */}
            <motion.div className='box_horizontal bg_coral' variants={leftToRight} />
         </motion.div>

      </motion.div> // PAGE TRANSITION div
   );
}

export default Home;