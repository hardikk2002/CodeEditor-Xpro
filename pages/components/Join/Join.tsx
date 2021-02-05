import React, { useState } from 'react';
import styles from './Join.module.scss';
import Chat from '../Chat/Chat';

function Join() {

    const [name, setName] = useState('');
    const [room, setRoom] = useState('');

    const [login, setLogin] = useState(true);




    function handleClick(e) {

        if (!name || !room) { console.log("Both fields are important!") }
        else {
            setLogin(!login);
        }






    }

    return (
        <>
            {(login) ? <div className={styles.joinOuterContainer}>
                <div className={styles.joinInnerContainer}>
                    <h1 className={styles.heading}>ROOM</h1>
                    <div>
                        <input placeholder="Name" className={styles.joinInput} type="text" onChange={(event) => setName(event.target.value)} />
                    </div>
                    <div>
                        <input placeholder="Room" className={[styles.joinInput, styles.mt20].join(' ')} type="text" onChange={(event) => setRoom(event.target.value)} />
                    </div>

                    <button
                        className={[styles.button, styles.mt20].join(' ')}
                        type="submit"
                        value={[`${name}`, `${room}`].join("")}
                        onClick={handleClick}
                    >Sign In</button>
                    {/* <Link href={`/Chat/Chat?name=${name}&room=${room}`} replace>
                    

                </Link> */}
                </div>
            </div> : <div><Chat _name={`${name}`} _room={`${room}`} />




                    <button
                        className={[styles.button, styles.mt20].join(' ')}
                        type="submit"
                        value={[`${name}`, `${room}`].join("")}
                        onClick={handleClick}
                    >Go Back</button></div>}

        </>
    );
}

export default Join;
