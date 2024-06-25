"use client"
import Head from '@/elements/Head/Head'
import styles from './Skills.module.css'
import { skillsIcon } from '@/assets/data'
import Image from 'next/image'
import { motion } from 'framer-motion'

function Skills() {
  return (
    <div id='skills'>
      <Head title={'Skills'} />
      <div className={styles.content}>
          {
            skillsIcon.map( (skill) => {
              return(
                <motion.div  
                className={styles.skills} 
                key={skill.id}
                initial={{opacity: 0 , scale: 0 }}
                whileInView={{opacity: 1 , scale: 1}}
                >
                <p> {skill.name} </p>
                <Image src={skill.icon} width={75} height={75} alt='icon' />
                </motion.div>
              )
            })
          }
        </div>
      </div>
  )
}

export default Skills
