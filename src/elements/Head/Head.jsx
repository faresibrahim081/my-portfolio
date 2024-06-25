import styles from "./Head.module.css";

function Head({ title }) {

  return (
    <div>
      <h1 className={styles.title}> {title} </h1>
    </div>
  );
}

export default Head;
