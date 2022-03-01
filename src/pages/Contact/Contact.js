import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Contact = () => {

   const leftToRight = {
      offscreen: { x: '-100vw' },
      onscreen: { x: 0, transition: { type: 'spring', duration: 1 } }
   }

   const rightToLeft = {
      offscreen: { x: '+100vw' },
      onscreen: { x: 0, transition: { type: 'spring', duration: 1 } }
   }

   return (
      // PAGE TRANSITION
      <motion.div
         initial={{ opacity: 0 }}
         animate={{ opacity: 1 }}
         exit={{ opacity: 0 }}
         transition={{ duration: 0.25 }}
      >
         {/* ANIMATION ON MOUNT */}
         <div className="flex_column">
            {/* BOX */}
            <motion.div
               className="box_horizontal bg_burlywood"
               initial={{ x: '-100vw' }}
               animate={{ x: 0 }}
               transition={{ type: 'spring', bounce: 0 }}
            />

            {/* BOX */}
            <motion.div
               className="box_horizontal bg_burlywood margin_top"
               initial={{ x: '+100vw' }}
               animate={{ x: 0 }}
               transition={{ type: 'spring', bounce: 0, delay: 0.5 }}
            />
         </div>

         {/* ANIMAATION ON SCROLL */}
         <motion.div className="flex_column margin_top" initial="offscreen" whileInView="onscreen" viewport={{ once: true, amount: 0.5 }}>
            {/* BOX */}
            <motion.div className="box_horizontal bg_burlywood" variants={leftToRight} />
         </motion.div>

         {/* ANIMAATION ON SCROLL */}
         <motion.div className="flex_column margin_top" initial="offscreen" whileInView="onscreen" viewport={{ once: true, amount: 0.5 }}>
            {/* BOX */}
            <motion.div className="box_horizontal bg_burlywood" variants={rightToLeft} />
         </motion.div>

      </motion.div>
   );
}

export default Contact;