import React from 'react'
import styles from './InfoBar.module.scss';

function InfoBar({ room }) {
    return (
        <div className={styles.infoBar}>
            <div className={styles.leftInnerContainer}>
                {/* <img className="onlineIcon" src={onlineIcon} alt="online icon" />*/}
                <h3>Room ID: {room}</h3>
            </div>
            <div className={styles.rightInnerContainer}>
                {/* <a href="/"><img src={closeIcon} alt="close icon" /></a> */}
            </div>
        </div>
    )
}

export default InfoBar
