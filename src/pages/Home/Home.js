import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

import './Home.css'

const Home = () => {

   const fade = {
      offscreen: { opacity: 0 },
      onscreen: { opacity: 1, transition: { duration: 1.5 } }
   }

   const fadeUp = {
      offscreen: { y: 500, opacity: 0 },
      onscreen: { y: 0, opacity: 1, transition: { type: 'spring', ease: "easeOut", duration: 1.5 } }
   };

   const fadeDown = {
      offscreen: { y: -500, opacity: 0 },
      onscreen: { y: 0, opacity: 1, transition: { type: 'spring', duration: 1.5 } }
   };

   const leftToRight = {
      offscreen: { x: '-100vw' },
      onscreen: { x: 0, transition: { type: 'spring', duration: 1.5 } }
   }

   const rightToLeft = {
      offscreen: { x: '+100vw' },
      onscreen: { x: 0, transition: { type: 'spring', duration: 1.5 } }
   }

   return (
      // PAGE TRANSITION EFFECT
      <motion.div
         initial={{ opacity: 0 }}
         animate={{ opacity: 1 }}
         exit={{ opacity: 0 }}
         transition={{ duration: 0.5 }}
         style={{ overflow: 'hidden' }}
      >

         <motion.section className="flex jcc aic vh-100 section_first" initial="offscreen" whileInView="onscreen" viewport={{ once: true, amount: 0.5 }}>
            <motion.div className="flex col jcc aic w-100 h-100" variants={fadeUp}>
               <span className="header bold mb-2">Company Name</span>
               <span className="header2 bold">Something here </span>
               <span className="header3">Something else </span>
            </motion.div>
         </motion.section>

         {/* SMALL TEXT SECTION */}
         <motion.section className="small_text_section light" initial="offscreen" whileInView="onscreen" viewport={{ once: true, amount: 0.5 }}>

            <motion.div className="flex jcc aic w-100 h-100 col-reverse" style={{ gap: '4rem' }} variants={fade}>
               <span style={{ fontSize: '1.3rem', textAlign: 'justify' }}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris aliquet id tellus sit amet convallis. Mauris pellentesque justo eu metus rhoncus, vitae molestie nibh tincidunt. Sed in scelerisque enim. Praesent porttitor, urna quis dapibus facilisis, orci lorem cursus nunc, sed eleifend orci ipsum at sem. Cras sit amet dolor a turpis pretium ornare sed eu eros. Aenean in scelerisque odio, sit amet interdum urna. Integer in fermentum metus, a ultricies quam. Ut lacinia volutpat volutpat. Maecenas consequat magna felis, eget dictum quam vestibulum at. Aliquam pretium tellus ut tortor ornare posuere. Nullam non magna dapibus purus laoreet aliquam. Nullam laoreet elit metus, a feugiat orci vehicula eget.
               </span>
               <img style={{ borderRadius: '50%' }} src="https://picsum.photos/300" alt=""></img>
            </motion.div>

         </motion.section>

         {/* SMALL TEXT SECTION */}
         <motion.section className="small_text_section dark" initial="offscreen" whileInView="onscreen" viewport={{ once: true, amount: 0.5 }}>

            <motion.div className="flex jcc aic w-100 h-100" style={{ gap: '4rem' }} variants={fade}>
               <img style={{ borderRadius: '50%' }} src="https://picsum.photos/301" alt=""></img>
               <span style={{ fontSize: '1.3rem', textAlign: 'justify' }}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris aliquet id tellus sit amet convallis. Mauris pellentesque justo eu metus rhoncus, vitae molestie nibh tincidunt. Sed in scelerisque enim. Praesent porttitor, urna quis dapibus facilisis, orci lorem cursus nunc, sed eleifend orci ipsum at sem. Cras sit amet dolor a turpis pretium ornare sed eu eros. Aenean in scelerisque odio, sit amet interdum urna. Integer in fermentum metus, a ultricies quam. Ut lacinia volutpat volutpat. Maecenas consequat magna felis, eget dictum quam vestibulum at. Aliquam pretium tellus ut tortor ornare posuere. Nullam non magna dapibus purus laoreet aliquam. Nullam laoreet elit metus, a feugiat orci vehicula eget.
               </span>
            </motion.div>

         </motion.section>

         {/* SERVICES / CARD SECTION */}
         <section className="flex col light" style={{ padding: '2rem', boxSizing: 'border-box' }}>

            <span className="header3 bold mb-2">Our Services</span>

            <motion.div className="card_container" initial="offscreen" whileInView="onscreen" viewport={{ once: true, amount: 0.5 }}>

               <motion.div className="card" variants={leftToRight}>
                  <img style={{ borderRadius: '50%' }} src="https://picsum.photos/90" />
                  <span style={{ fontSize: '3rem', textAlign: 'center' }}> Card Title</span>
                  <p style={{ textAlign: 'justify' }}>
                     Lorem ipsum dolor sit amet, consectetur adipiscing elit.Mauris aliquet id tellus sit amet convallis.Mauris pellentesque justo eu metus rhoncus, vitae molestie nibh tincidunt.Sed in scelerisque enim.Praesent porttitor, urna quis dapibus facilisis, orci lorem cursus nunc, sed eleifend orci ipsum at sem.Cras sit amet dolor a turpis pretium ornare sed eu eros.Aenean in scelerisque odio, sit amet interdum urna.Integer in fermentum metus, a ultricies quam.Ut lacinia volutpat volutpat.
                  </p>
               </motion.div>

               <motion.div className="card" variants={fadeUp}>
                  <img style={{ borderRadius: '50%' }} src="https://picsum.photos/90" />
                  <span style={{ fontSize: '3rem', textAlign: 'center' }}> Card Title</span>
                  <p style={{ textAlign: 'justify' }}>
                     Lorem ipsum dolor sit amet, consectetur adipiscing elit.Mauris aliquet id tellus sit amet convallis.Mauris pellentesque justo eu metus rhoncus, vitae molestie nibh tincidunt.Sed in scelerisque enim.Praesent porttitor, urna quis dapibus facilisis, orci lorem cursus nunc, sed eleifend orci ipsum at sem.Cras sit amet dolor a turpis pretium ornare sed eu eros.Aenean in scelerisque odio, sit amet interdum urna.Integer in fermentum metus, a ultricies quam.Ut lacinia volutpat volutpat.
                  </p>
               </motion.div>

               <motion.div className="card" variants={rightToLeft}>
                  <img style={{ borderRadius: '50%' }} src="https://picsum.photos/90" />
                  <span style={{ fontSize: '3rem', textAlign: 'center' }}> Card Title</span>
                  <p style={{ textAlign: 'justify' }}>
                     Lorem ipsum dolor sit amet, consectetur adipiscing elit.Mauris aliquet id tellus sit amet convallis.Mauris pellentesque justo eu metus rhoncus, vitae molestie nibh tincidunt.Sed in scelerisque enim.Praesent porttitor, urna quis dapibus facilisis, orci lorem cursus nunc, sed eleifend orci ipsum at sem.Cras sit amet dolor a turpis pretium ornare sed eu eros.Aenean in scelerisque odio, sit amet interdum urna.Integer in fermentum metus, a ultricies quam.Ut lacinia volutpat volutpat.
                  </p>
               </motion.div>

            </motion.div>

         </section >

      </motion.div > // PAGE TRANSITION div
   );
}

export default Home;