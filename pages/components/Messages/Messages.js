import React from 'react';
import Message from './Message/Message';
import ScrollToBottom from 'react-scroll-to-bottom';
import styles from './Messages.module.scss';

function Messages({ messages, name }) {
    return (
        <ScrollToBottom className={styles.messages} >
            {messages.map((message, i) =>
                <div key={i}>

                    <Message message={message} name={name} />
                    {/* {!!message ? message : { text: "Check", user: "NAMe" }}  */}


                </div>)}
        </ScrollToBottom>
    )
}

export default Messages
