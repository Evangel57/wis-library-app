import styles from "./menu.module.css"

function Menu(){
    return(
        <nav className={styles.menu}>
            <div className={styles.menuItem}>
                <p>АВТОРИЗАЦИЯ</p>
                
                <p>АФОРИЗМЫ</p>
                <p>ОБСУЖДЕНИЯ</p>
                <p>БАСНИ</p>
            </div>
            <div className={styles.menuDivider}></div>
            <div className={styles.menuItem}>
                <p>ПОСЛОВИЦЫ И ПОГОВОРКИ</p>
                <p>ПРИТЧИ</p>
                <p>МИФЫ</p>
                <p>СКАЗКИ</p>
            </div>
        </nav>
    )
}

export default Menu;
