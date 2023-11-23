import styles from "./search.module.css";
import React, { useState } from 'react';
import imgSearch from './images/icon-search.svg';


function SearchBar({ works }) {
    const [searchTerm, setSearchTerm] = useState('');
    const [displayedWorks, setDisplayedWorks] = useState([]);

    const handleSearch = (searchText) => {
    setSearchTerm(searchText);
    const filteredWorks = works.filter(work =>
        work.title.toLowerCase().includes(searchText.toLowerCase())
    );
    setDisplayedWorks(filteredWorks.slice(0, 3)); // Отобразить первые три элемента
    };
    const handleInputChange = (e) => {
        handleSearch(e.target.value);
    };
    return(
        <div className={styles.serchContainer}>
            <div>
                <input className={styles.searchInput}
                    type="text"
                    placeholder="Поиск по названию произведения"
                    value={searchTerm}
                    onChange={handleInputChange}
                />
                <ul className={styles.searchList}>
                    {displayedWorks.map((work, index) => (
                        <li className={styles.listItem} key={index}>
                            <a className={styles.listLink} href={work.link}>{work.title}</a>
                        </li>
                    ))}
                </ul>
            </div>
            <img src={imgSearch} alt="" srcset="" />
        </div>
    );
}

export default SearchBar;
