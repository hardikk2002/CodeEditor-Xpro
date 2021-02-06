import React from 'react';
import ReactEmoji from 'react-emoji';
import styles from './Message.module.scss'

function Message({ message, name }) {

    if (!message) {
        return null
    }

    const { text, user } = message;
    let isSentByCurrentUser = false;
    console.log(text, name, user);

    const trimmedName = name.trim().toLowerCase();
    if (user === trimmedName) {
        isSentByCurrentUser = true;
    }

    return (
        isSentByCurrentUser
            ? (
                <div className={[styles.messageContainer, styles.justifyEnd].join(" ")} >
                    <p className={[styles.sentText, styles.pr10].join(" ")} >{trimmedName}</p>
                    <div className={[styles.messageBox, styles.backgroundBlue].join(" ")}>
                        <p className={[styles.messageText, styles.colorWhite].join(" ")}>{ReactEmoji.emojify(text)}</p>
                    </div>
                </div>
            )
            : (
                <div className={[styles.messageContainer, styles.justifyStart].join(" ")} >
                    <div className={[styles.messageBox, styles.backgroundLight].join(" ")}>
                        <p className={[styles.messageText, styles.colorDark].join(" ")} >{ReactEmoji.emojify(text)}</p>
                    </div>
                    <p className={[styles.sentText, styles.pl10].join(" ")} >{user}</p>
                </div>
            )
    );
}


export default Message
