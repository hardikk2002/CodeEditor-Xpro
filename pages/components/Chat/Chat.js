import React, { useState, useEffect } from 'react'
import InfoBar from '../InfoBar/InfoBar';
import Input from '../Input/Input';
import Messages from '../Messages/Messages';
import styles from "./Chat.module.scss";
import io from "socket.io-client";

const ENDPOINT = 'https://xpro-chatapp.herokuapp.com/';
// const ENDPOINT = 'localhost:4000';
let socket;

var connectionOptions = {
    "force new connection": true,
    "reconnectionAttempts": "Infinity",
    "timeout": 10000,
    "transports": ["websocket"]
};


function Chat({ _name, _room }) {

    const [name, setName] = useState('');
    const [room, setRoom] = useState('');
    const [users, setUsers] = useState('');
    const [message, setMessage] = useState('');
    const [messages, setMessages] = useState([]);



    useEffect(() => {

        socket = io(ENDPOINT, connectionOptions);
        setRoom(_room);
        setName(_name)

        socket.emit('join', { name: _name, room: _room }, (error) => {
            if (error) {
                alert(error);
            }
        });
    }, []);

    useEffect(() => {
        socket.on('message', message => {
            // console.log("Comming");
            setMessages(messages => [...messages, message]);

        });

        socket.on("roomData", ({ users }) => {
            setUsers(users);
        });
    }, []);

    const sendMessage = (event) => {
        event.preventDefault();

        if (message) {
            socket.emit('sendMessage', message, () => setMessage(''));
        }
    }

    return (
        <div>


            <div className={styles.outerContainer} >
                <div className={styles.container}>

                    <InfoBar room={room} />
                    <Messages messages={messages} name={name} />
                    <Input message={message} setMessage={setMessage} sendMessage={sendMessage} />


                </div>
            </div>
        </div>
    )
}

export default Chat;
