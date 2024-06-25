"use client"
import { useEffect, useState } from 'react';
import styles from './Cursor.module.css'

function Cursor() {

    const [x , setX] = useState(0);
    const [y , setY] = useState(0);
  
    useEffect( () => {
      const handleCursor = (e) => {
        setX(e.clientX - 15)
        setY(e.clientY - 10)
      }
      window.addEventListener('mousemove', handleCursor);
      return() => {
        window.removeEventListener('mousemove', handleCursor);
      }
    },[])

  return (
    <div>
      
      <div className={styles.cursor} style={{top: y, left:x}}></div>
    </div>
  )
}

export default Cursor
