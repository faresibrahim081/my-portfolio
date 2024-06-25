import styles from './Button.module.css'

function Button({name}) {
    return (
        <div>
            <button className={styles.btn}> {name} </button>
        </div>
    )
}

export default Button
