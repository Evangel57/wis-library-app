import styles from "./logo.module.css"

function Logo(){
    return(
        <div className={styles.container}>
            <span className={styles.containerName}>БИБЛИОТЕКА</span>
            <h1>МУДРОСТИ</h1>
        </div>
    )
}

export default Logo;
