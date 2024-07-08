"use client";
import { delay, motion } from "framer-motion";
import Head from "@/elements/Head/Head";
import styles from "./About.module.css";
import Image from "next/image";
import img from "../../assets/icons/f2.jpg";
import icon from "../../assets/icons/Download Folder.png";
import UseImage from "@/elements/Image/Image";
import Link from "next/link";

function About() {

  const info = [
    { title: "Adress", info: "Egypt, Cairo" },
    { title: "Phone", info: "01207129427" },
    {
      title: "Education",
      info: "Bachelor of Management Technology And Information System",
    },
    { title: "Degree", info: "very good" },
  ];
  const text =
    "As a Junior developer in ReactJS and Next JS Front-End Development, I bring a strong foundation in web development technologies and a passion for building dynamic and interactive user interfaces. I am eager to apply my knowledge and contribute to collaborative projects. Committed to ongoing learning and staying abreast of industry trends, I am excited about the prospect of working with design and back-end teams to bring innovative ideas to fruition.";
  const pVariant = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        delay:0,
      }
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
    <div id="about">
      <Head title={"About me"} />
      <div className={styles.content}>
        <div>
          <motion.p
            className={styles.text}
            variants={pVariant}
            initial="hidden"
            animate="visible"
          >
            {" "}
            {text.split("").map( (char,index) => {
              return(
                <>
                <motion.span variants={spanVariant} key={index}>{char}</motion.span>
                </>
              )
            })}
          </motion.p>
          {info.map((item, index) => {
            return (
                <p key={index}>
                  <span className={styles.span}>{item.title}: </span>
                  {item.info}
                </p>
            );
          })}
          <div className={styles.download}>
            <Link
            href='https://drive.google.com/file/d/1vUPnCAemccd-ouQsDJ1z1c8zcSSSb3bl/view'
            target="_blank"
            >
              Download CV
              <Image
                style={{ marginLeft: "10px" }}
                src={icon}
                width={20}
                height={20}
                alt="..."
              />
            </Link>
          </div>
        </div>
        <div>
          <UseImage src={img} />
        </div>
      </div>
    </div>
  );
}

export default About;
