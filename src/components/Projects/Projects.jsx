import Head from "@/elements/Head/Head";
import styles from "./Projects.module.css";
import github from "@/assets/icons/github.svg";
import serve from "@/assets/icons/view.png";
import { myProjects } from "@/assets/data";
import Image from "next/image";
import Link from "next/link";

function Projects() {
  return (
    <div id="projects" className={styles.projects}>
      <Head title={"Projects"} />
      <div className={styles.projectCard}>
      {myProjects.map((item) => {
        return (
          <div key={item.id}>
            <div className={styles.card}>
              <div className={styles.cardInner}>
                <div className={styles.cardFront}>
                  <Image src={item.img} width={300} height={250} alt="projct" />
                  <span className={styles.title}> {item.title} </span>
                  <div className={styles.tools}>
                    {item.tools.map((toole,index) => {
                      return(
                        <>
                        <span key={index}>
                          <Image src={toole} width={50} height={50} alt="tools" />
                        </span>
                        </>
                      )
                    })}
                  </div>
                </div>
                <div className={styles.cardBack}>
                  <Link href={item.githup} target="_blank">
                    <Image src={github} width={75} height={75} alt="github" />
                  </Link>
                  <Link href={item.link} target="_blank">
                    <Image src={serve} width={75} height={75} alt="serve" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        );
      })}
      </div>
    </div>
  );
}

export default Projects;
