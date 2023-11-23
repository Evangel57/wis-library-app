import styles from "./main.module.css";
import img from './images/main-background.svg';
import Logo from "./logo/logo.jsx";
import Menu from './menu/menu.jsx';
import Updates from './updates/updates.jsx';
import SearchBar from './search/search.jsx';

const works = [
    {
        title: 'Притча о сеяне и жнеце',
        link: 'https://example.com/pritcha-o-seyane-i-zhnec'
    },
    {
        title: 'Миф о создании мира',
        link: 'https://example.com/mif-o-sozdanii-mira'
    },
    {
        title: 'Сказка о золотой рыбке',
        link: 'https://example.com/skazka-o-zolotoy-rybke'
    }
];

function Main(){
    
    return(
        <section className={styles.mainSection}>
            <div className={styles.imgContainer}>
                <img alt="background" className={styles.img} src={img} />
                <div className={styles.sectionContainer}>
                    <div className={styles.infoContainer}>
                        <Logo/>
                        <div className={styles.separator}></div>
                        <Menu />
                    </div>
                    <div className={styles.dopContainer}>
                        <Updates />
                        <SearchBar works={works}/>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Main;
