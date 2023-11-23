// import styles from "./library.module.css"
import React from 'react';
import styles from './library.module.css'

function Library({title, nav}){
    return(
        <section className={styles.container}>
            <h2>{title}</h2>
            <nav>
                <ul>
                    {nav.map((item, index) => (
                        <li key={index}><a href={item.link}>{item.text}</a></li>
                    ))}
                </ul>
            </nav>
        </section>
    )
}

export default Library;
