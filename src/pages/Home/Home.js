import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

import './Home.css'

const Home = () => {

   const fade = {
      offscreen: { opacity: 0 },
      onscreen: { opacity: 1, transition: { duration: 1 } }
   }

   const fadeUp = {
      offscreen: { y: 500, opacity: 0 },
      onscreen: { y: 0, opacity: 1, transition: { type: "spring", duration: 2 } }
   };

   const fadeDown = {
      offscreen: { y: -500, opacity: 0 },
      onscreen: { y: 0, opacity: 1, transition: { type: "spring", duration: 2 } }
   };

   const leftToRight = {
      offscreen: { x: '-100vw' },
      onscreen: { x: 0, transition: { type: 'spring', bounce: 0.2, duration: 2 } }
   }

   const rightToLeft = {
      offscreen: { x: '+100vw' },
      onscreen: { x: 0, transition: { type: 'spring', bounce: 0.2, duration: 2 } }
   }

   return (
      // PAGE TRANSITION EFFECT
      <motion.div
         initial={{ opacity: 0 }}
         animate={{ opacity: 1 }}
         exit={{ opacity: 0 }}
         transition={{ duration: 0.5 }}
      >

         <motion.section initial="offscreen" whileInView="onscreen" viewport={{ once: true, amount: 0.5 }} className="section_full section_first">
            <motion.div className="flex col center center_h" style={{ width: '100%', height: '100%' }} variants={fadeUp}>
               <span className="sec_header">Company Name</span>
               <span className="sec_header2">Something here </span>
               <span className="sec_text">Something else </span>
            </motion.div>
         </motion.section>

         <motion.section initial="offscreen" whileInView="onscreen" viewport={{ once: true, amount: 0.5 }} className="section_white" style={{ minHeight: '25vh', padding: '4rem', color: 'black' }}>
            <motion.div className="flex center center_h" style={{ width: '100%', height: '100%' }} variants={fade}>
               <span style={{ fontSize: '1.3rem', textAlign: 'justify', paddingRight: '4rem' }}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris aliquet id tellus sit amet convallis. Mauris pellentesque justo eu metus rhoncus, vitae molestie nibh tincidunt. Sed in scelerisque enim. Praesent porttitor, urna quis dapibus facilisis, orci lorem cursus nunc, sed eleifend orci ipsum at sem. Cras sit amet dolor a turpis pretium ornare sed eu eros. Aenean in scelerisque odio, sit amet interdum urna. Integer in fermentum metus, a ultricies quam. Ut lacinia volutpat volutpat. Maecenas consequat magna felis, eget dictum quam vestibulum at. Aliquam pretium tellus ut tortor ornare posuere. Nullam non magna dapibus purus laoreet aliquam. Nullam laoreet elit metus, a feugiat orci vehicula eget.
               </span>
               <img style={{ borderRadius: '50%' }} src="https://picsum.photos/300" alt=""></img>
            </motion.div>
         </motion.section>

         <motion.section initial="offscreen" whileInView="onscreen" viewport={{ once: true, amount: 0.5 }} style={{ minHeight: '25vh', padding: '4rem', backgroundColor: '#777777', color: 'white' }}>
            <motion.div className="flex center center_h" style={{ width: '100%', height: '100%' }} variants={fade}>
               <img style={{ borderRadius: '50%' }} src="https://picsum.photos/301" alt=""></img>
               <span style={{ fontSize: '1.3rem', textAlign: 'justify', paddingLeft: '4rem' }}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris aliquet id tellus sit amet convallis. Mauris pellentesque justo eu metus rhoncus, vitae molestie nibh tincidunt. Sed in scelerisque enim. Praesent porttitor, urna quis dapibus facilisis, orci lorem cursus nunc, sed eleifend orci ipsum at sem. Cras sit amet dolor a turpis pretium ornare sed eu eros. Aenean in scelerisque odio, sit amet interdum urna. Integer in fermentum metus, a ultricies quam. Ut lacinia volutpat volutpat. Maecenas consequat magna felis, eget dictum quam vestibulum at. Aliquam pretium tellus ut tortor ornare posuere. Nullam non magna dapibus purus laoreet aliquam. Nullam laoreet elit metus, a feugiat orci vehicula eget.
               </span>
            </motion.div>
         </motion.section>

         <section className="section_full section_white flex col center_h" style={{ padding: '2rem', boxSizing: 'border-box', color: 'black' }}>

            <span className="sec_text" style={{ fontWeight: 'bold', padding: 0, marginBottom: '2rem' }}>Our Services</span>

            <motion.div id="card-container" className="flex" initial="offscreen" whileInView="onscreen" viewport={{ once: true, amount: 0.5 }} style={{ height: '70%', width: '80%', background: 'white', justifyContent: 'space-between' }}>

               <motion.div className="card" variants={leftToRight}>
                  <img style={{ borderRadius: '50%' }} src="https://picsum.photos/90" />
                  <span style={{ fontSize: '3rem' }}> Card Title</span>
                  <p style={{ textAlign: 'justify' }}>
                     Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris aliquet id tellus sit amet convallis. Mauris pellentesque justo eu metus rhoncus, vitae molestie nibh tincidunt. Sed in scelerisque enim. Praesent porttitor, urna quis dapibus facilisis, orci lorem cursus nunc, sed eleifend orci ipsum at sem. Cras sit amet dolor a turpis pretium ornare sed eu eros. Aenean in scelerisque odio, sit amet interdum urna. Integer in fermentum metus, a ultricies quam. Ut lacinia volutpat volutpat.
                  </p>
               </motion.div>

               <motion.div className="card" variants={fadeUp}>                  <img style={{ borderRadius: '50%' }} src="https://picsum.photos/90" />
                  <span style={{ fontSize: '3rem' }}> Card Title</span>
                  <p style={{ textAlign: 'justify' }}>
                     Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris aliquet id tellus sit amet convallis. Mauris pellentesque justo eu metus rhoncus, vitae molestie nibh tincidunt. Sed in scelerisque enim. Praesent porttitor, urna quis dapibus facilisis, orci lorem cursus nunc, sed eleifend orci ipsum at sem. Cras sit amet dolor a turpis pretium ornare sed eu eros. Aenean in scelerisque odio, sit amet interdum urna. Integer in fermentum metus, a ultricies quam. Ut lacinia volutpat volutpat.
                  </p>
               </motion.div>

               <motion.div className="card" variants={rightToLeft}>
                  <img style={{ borderRadius: '50%' }} src="https://picsum.photos/90" />
                  <span style={{ fontSize: '3rem' }}> Card Title</span>
                  <p style={{ textAlign: 'justify' }}>
                     Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris aliquet id tellus sit amet convallis. Mauris pellentesque justo eu metus rhoncus, vitae molestie nibh tincidunt. Sed in scelerisque enim. Praesent porttitor, urna quis dapibus facilisis, orci lorem cursus nunc, sed eleifend orci ipsum at sem. Cras sit amet dolor a turpis pretium ornare sed eu eros. Aenean in scelerisque odio, sit amet interdum urna. Integer in fermentum metus, a ultricies quam. Ut lacinia volutpat volutpat.
                  </p>
               </motion.div>

            </motion.div>

         </section>

      </motion.div> // PAGE TRANSITION div
   );
}

export default Home;