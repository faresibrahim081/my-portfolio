"use client"
import Image from "next/image";
import styles from "./Card.module.css";
import github from "@/assets/icons/github.svg";
import serve from "@/assets/icons/view.png";
import Link from "next/link";


function Card({src , title , tools , linkGit , linkView}) {
  return (
    <>
      <div className={styles.card}>
        <div className={styles.cardInner}>
            <div className={styles.cardFront}>
                <Image src={src} width={300} height={250} alt="projct" />
                <span> {title} </span>
                <div className={styles.tools}>
                    <span> {tools} </span>
                </div>
            </div>
            <div className={styles.cardBack}>
                <Link href={linkGit}>
                    <Image src={github} width={75} height={75} alt="github" />
                </Link>
                <Link href={linkView} >
                    <Image src={serve} width={75} height={75} alt="serve" />
                </Link>
            </div>
        </div>
      </div>
    </>
  );
}

export default Card;
