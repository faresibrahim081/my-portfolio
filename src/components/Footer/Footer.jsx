import { socials } from '@/assets/data'
import Image from 'next/image'
import Link from 'next/link'
import styles from './Footer.module.css'
import logo from '../../assets/icons/framar-motion.png'

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.logo}>
      <Image width={50} height={50} src={logo} alt="social icon" />
      </div>
      <div className={styles.text}>
        <p>@2024 <span className={styles.span}>FARSE IBRAHIM</span> ALL RIGHTS RESERVED</p>
      </div>
      <div className={styles.social}>
        {socials.map((item,index) => {
            return(
                <div key={index}>
                    <Link href={item.link} className={styles.link}>
                      <Image width={25} height={25} src={item.img} alt="social icon" />
                    </Link>
                </div>
            )
        })}
      </div>
    </footer>
  )
}

export default Footer
