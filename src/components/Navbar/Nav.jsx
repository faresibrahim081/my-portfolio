"use client"
import motion from 'framer-motion'
import Link from 'next/link'
import styles from './Nav.module.css'
import Image from 'next/image'
import code from '../../assets/icons/framar-motion.png'

import { useState } from 'react'

function Nav() {
  const links = [ 
    { name:'About' , link:'#about'} ,
    { name:'Skills' , link:'#skills'} ,
    { name:'Projets' , link:'#projects'} ,
    { name:'Contact' , link:'#contact'} ,
];

const [isClick, setIsClick] = useState(false);

const toggleNav = () => {
  if(!isClick){
    setIsClick(true)
  } else {
    setIsClick(false)
  }
};

  return (
      <div className={styles.navbar}> 
        <div className={styles.logo}>
          <Link href='#'>
            <Image width={90} height={60} src={code} alt="logo" />
          </Link>
        </div>
        {/* DeskTob */}
        <div className={styles.links}>
          {links.map( (link, index) => {
            return(
              <div key={index}>
                <Link href={link.link} className={styles.link}> {link.name} </Link>
              </div>
            )
          })}
        </div>
        {/* Mobile */}
        <div style={isClick === true ? {display:'flex'} : {display:'none'}} className={styles.MobileLinks}>
          {links.map( (link, index) => {
            return(
              <div key={index} className={styles.MobileLink}>
                <Link onClick={()=> toggleNav()} href={link.link}> {link.name} </Link>
              </div>
            )
          })}
        </div>
        <div className={styles.toggle} onClick={ ()=> toggleNav()}>
          <span className={styles.span}></span>
          <span className={styles.span}></span>
          <span className={styles.span}></span>
        </div>
      </div>
  )
}

export default Nav
