"use client";
import UseImage from "@/elements/Image/Image";
import styles from "./Landing.module.css";
import img from "../../assets/icons/f1.jpg";
import { socials } from "@/assets/data";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

function Landing() {
  const text = `hello I am
  fares ibrahim 
  a frontend devolper`;

  const pVariant = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };
  const spanVariant = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
    },
  };

  return (
    <div id="#" className={styles.landing}>
      <div>
        <motion.p
          className={styles.text}
          variants={pVariant}
          initial="hidden"
          animate="visible"
        >
          {text.split("").map((char, index) => {
            return (
                <motion.span variants={spanVariant} key={index}>
                  {char}
                </motion.span>
            );
          })}
        </motion.p>
        <div className={styles.social}>
          {socials.map((item, index) => {
            return (
              <div key={index}>
                <Link
                  target="_blank"
                  href={item.link}
                  className={styles.link}
                >
                  <Image
                    width={25}
                    height={25}
                    src={item.img}
                    alt="social icon"
                  />
                </Link>
              </div>
            );
          })}
        </div>
      </div>
      <UseImage src={img} />
    </div>
  );
}

export default Landing;
