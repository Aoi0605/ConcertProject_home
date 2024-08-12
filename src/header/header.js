import React, { useState } from 'react';
import styles from './header.module.css';
import search_icon from '../assets/search.png';
import sing_icon from '../assets/sing.png';


const Header = () => {
    return (
        <div className={styles.headerST}>
            {/* Logo 圖片 */}
            <img src={sing_icon} alt="" className={styles.logo}/>

            {/* 導航列 */}
            <ul>
                <li>Home</li>
                <li>Products</li>
                <li>Features</li>
                <li>About</li>
            </ul>

            {/* 搜尋框 */}
            <div className={styles['search-box']}>
                <input type="text" placeholder='Search'/>
                <img src={search_icon} alt=""/>
            </div>
            <div class="user-actions">
                <a href="/jsp/login" class="btn btn-outline-secondary">👤 MY ACCOUNT</a>
                <a href="#" class="btn btn-outline-secondary ml-2">🛒 CART</a>
            </div>
        </div>
    );
};

export default Header;

