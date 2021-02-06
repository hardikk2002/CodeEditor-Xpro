import React from 'react';
import Message from './Message/Message';
import ScrollToBottom from 'react-scroll-to-bottom';
import styles from './Messages.module.scss';

function Messages({ messages, name }) {
    return (
        <ScrollToBottom className={styles.messages} >
            {messages
                ? messages.map((message, i) =>
                    message && (
                        <div key={i}>
                            <Message message={message} name={name} />
                        </div>
                    )
                )
                : null}
        </ScrollToBottom>
    )
}

export default Messages
