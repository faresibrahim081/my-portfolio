import styles from "./Image.module.css";
import rect from "../../assets/icons/react.png";
import next from "../../assets/icons/next.png";
import redux from "../../assets/icons/redux-toolkit.png";
import Image from "next/image";

function UseImage({src}) {
  return (
    <div>
      <div className={styles.imgContainer}>
        <Image
          className={styles.image}
          height={350}
          width={300}
          src={src}
          alt="image"
        />
        <div className={styles.back}>
            <Image className={styles.img} src={rect} width={50} height={50} alt='react' />
            <Image className={styles.img} src={redux} width={50} height={50} alt='redux' />
            <Image className={styles.img} src={next} width={50} height={50} alt='next' />
        </div>
      </div>
    </div>
  );
}

export default UseImage;
