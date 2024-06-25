"use client"
import UseImage from '@/elements/Image/Image';
import styles from './contact.module.css';
import image from "../../assets/icons/f2.jpg";
import Head from '@/elements/Head/Head';
import Button from '@/elements/Button/Button';

function Contact() {
  return (
    <>
    <Head title={'Contact'} />
    <div className={styles.contact} id='contact'>
        <div className={styles.container}>
            <form
            action=""
            method="post"
            onSubmit={(e) => {
                e.preventDefault();
            }}
            >
            <h4 className={styles.title}>
                Contact Me today, and get repaly with in 24 hours!
            </h4>
            <input
                className={styles.input}
                placeholder="Your name"
                type="text"
                tabIndex="1"
                required
                autoFocus
            />
            <input
                className={styles.input}
                placeholder="Your Email Address"
                type="email"
                tabIndex="2"
                required
            />
            <textarea
                className={styles.textarea}
                placeholder="Type your Message Here...."
                tabIndex="5"
                required
            ></textarea>
            <Button name={'Send'} />
            </form>
        </div>
        <div className={styles.image}>
            <UseImage src={image} />
        </div>
    </div>
    </>
  )
}

export default Contact
