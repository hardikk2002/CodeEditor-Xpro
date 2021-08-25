import React, { useEffect, useState } from 'react';
import Body from './components/body/Body';
import styles from '../styles/App.module.scss';
import Navbar from './components/Navbar/Navbar';
import ClimbingBoxLoader from "react-spinners/ClimbingBoxLoader";

const override = {
    position: "absolute",
    top: "45%",
    left: "45%"
};


function App() {
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true)
        // true
        setTimeout(() => {
            setLoading(false)
        }, 1000);
    }, [])

    return (
        <div className={styles.App}>
            {            loading ? <ClimbingBoxLoader

                color={"#00FFCC"} loading={loading} css={override} size={30} />
                : <div className={styles.container}>
                    <Navbar />
                    <Body />
                </div>}

        </div>
    )
}

export default App;
