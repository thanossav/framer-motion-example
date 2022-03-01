import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const OurWork = () => {

   const downToUp = {
      offscreen: { y: 500, opacity: 0 },
      onscreen: { y: 0, opacity: 1, transition: { type: "spring", duration: 1 } }
   };

   const upToDown = {
      offscreen: { y: -500, opacity: 0 },
      onscreen: { y: 0, opacity: 1, transition: { type: "spring", duration: 1 } }
   };

   return (
      // PAGE TRANSITION EFFECT
      <motion.div
         initial={{ opacity: 0 }}
         animate={{ opacity: 1 }}
         exit={{ opacity: 0 }}
         transition={{ duration: 0.5 }}
      >
         {/* ANIMATION ON MOUNT */}
         <div className="flex_column">
            <motion.div className="box_horizontal bg_aquamarine"
               initial={{ x: '+100vw' }}
               animate={{ x: 0 }}
               transition={{ type: 'spring', bounce: 0.2, duration: 2 }}
            />

            <motion.div className="box_horizontal bg_aquamarine margin_top"
               initial={{ x: '-100vw' }}
               animate={{ x: 0 }}
               transition={{ type: 'spring', bounce: 0.2, duration: 2 }}
            />
         </div>

         {/* ANIMATE ON SCROLL */}
         <motion.div className='flex_row margin_top' initial="offscreen" whileInView="onscreen" viewport={{ once: true, amount: 0.5 }}>
            {/* BOX */}
            <motion.div className='box_horizontal bg_aquamarine' variants={downToUp} />
         </motion.div>

         {/* ANIMATE ON SCROLL */}
         <motion.div className='flex_row margin_top' initial="offscreen" whileInView="onscreen" viewport={{ once: true, amount: 0.5 }}>
            {/* BOX */}
            <motion.div className='box_horizontal bg_aquamarine' variants={upToDown} />
         </motion.div>

      </motion.div>
   );
}

export default OurWork;