import styles from "./Card.module.css";

const Card = () => {
        console.log(styles);
        console.log(styles.card);
        console.log(styles.title);
    return (
        <div className={styles.card}>
            <h2 className={styles.title}>Hellow from a scoped card</h2>
            <p className="border border-amber-100">Test</p>
        </div>
    )
}

export default Card;