import React from 'react';
import Message from './Message/Message';
import ScrollToBottom from 'react-scroll-to-bottom';
import styles from './Messages.module.scss';

function Messages({ messages, name }) {
    return (
        <ScrollToBottom className={styles.messages} >
            {messages.map((message, i) =>

                <div key={i}>
                    {console.log(message)}
                    <Message message={message} name={name} />
                </div>)}
        </ScrollToBottom>
    )
}

export default Messages
