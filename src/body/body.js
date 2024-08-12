import React from "react";
import styles from './body.module.css';
import S1 from '../assets/S1.jpeg';
import S2 from '../assets/S2.jpeg';
import S3 from '../assets/S3.jpeg';
// 模擬的購票資訊資料
const tickets = [
    { artist: '歌手A', url: '' },
    { artist: '歌手B', url: '' },
    { artist: '歌手C', url: '' },
];

// 模擬的最新消息資料
const news = [
    { imgSrc: S1, text: '最新消息 1' },
    { imgSrc: S2, text: '最新消息 2' },
    { imgSrc: S3, text: '最新消息 3' },
];

const Body = () => {
    return (
        <div className={styles.bodyDiv}>
            
            {/* 購票資訊區塊 */}
            <div className={styles.ticketSection}>
                <h2>購票資訊</h2>
                <div className={styles.ticketList}>
                    {tickets.map((ticket, index) => (
                        <a key={index} href={ticket.url} target="_blank" rel="noopener noreferrer">
                            {ticket.artist} 演唱會
                        </a>
                    ))}
                </div>
            </div>

            {/* 最新消息區塊 */}
            <div className={styles.newsSection}>
                <h2>最新消息</h2>
                <div className={styles.newsSlider}>
                    {news.map((item, index) => (
                        <div key={index} className={styles.newsItem}>
                            <img src={item.imgSrc} alt={item.text} />
                            <p>{item.text}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Body;

