import React, { useState, useEffect } from 'react';
import styles from './Navbar.module.css'
import { Link, useLocation } from "react-router-dom";
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';


const Navbar = () => {

   const location = useLocation()
   const [openSidebar, setOpenSidebar] = useState(false);

   const [animationRef, inView] = useInView({ threshold: 0.5 })
   const animation = useAnimation()

   useEffect(() => {
      if (inView) { animation.start({ y: 0, transition: { type: 'spting', duration: 0.5 } }) }
      else { animation.start({ y: -70 }) }
   }, [inView]);

   return (
      <div ref={animationRef}>
         <motion.div animate={animation} className={styles.navbar}>

            <Link to="/" className={styles.logo_container}>
               <img className={styles.logo} src='img/logo.png' alt="" />
               <h2 className={styles.logo_text}>Company Name</h2>
            </Link>

            <nav className={styles.navigation_container}>

               <img className={styles.burger_menu_icon} src='img/burger-icon.png' alt="" onClick={() => setOpenSidebar(true)} />

               <ul className={(!openSidebar) ? `${styles.navigation_list_hidden} ${styles.navigation_list}` : `${styles.navigation_list}`}>

                  <img className={styles.sidebar_close_icon} src='img/close-icon.png' alt="" onClick={() => setOpenSidebar(false)} />

                  <li className={styles.list_item}>
                     <Link to="/" className={(location.pathname == "/" ? ` ${styles.nav_link} ${styles.nav_link_active}` : `${styles.nav_link}`)}
                        onClick={() => { setOpenSidebar(false) }} href="#"> Home </Link>
                  </li>

                  <li className={styles.list_item}>
                     <Link to="/work" className={(location.pathname == "/work" ? ` ${styles.nav_link} ${styles.nav_link_active}` : `${styles.nav_link}`)}
                        onClick={() => { setOpenSidebar(false) }} href="#"> Our Work </Link>
                  </li>

                  <li className={styles.list_item}>
                     <Link to="/about" className={(location.pathname == "/about" ? ` ${styles.nav_link} ${styles.nav_link_active}` : `${styles.nav_link}`)}
                        onClick={() => { setOpenSidebar(false) }} href="#"> About </Link>
                  </li>

                  <li className={styles.list_item}>
                     <Link to="/contact" className={(location.pathname == "/contact" ? ` ${styles.nav_link} ${styles.nav_link_active}` : `${styles.nav_link}`)}
                        onClick={() => { setOpenSidebar(false) }} href="#"> Contact </Link>
                  </li>
               </ul>

            </nav>

         </motion.div>
      </div>
   );
}

export default Navbar;