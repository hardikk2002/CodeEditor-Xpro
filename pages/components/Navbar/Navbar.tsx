import React from 'react';
import styles from './Nav.module.scss';

function Navbar() {
    return (

        <div className={styles.navContainer}>
            <div className={styles.content}>
                <div className={styles.left}>
                    <img src="./logo5.png" alt="" />
                </div>
                <div className={styles.right}>
                    <nav className={styles.Nav}>
                        <ul>
                            <li><a href="https://hardikk2002.hashnode.dev/how-i-made-xpro-a-next-generation-code-editor">About</a></li>
                            <li><a href="https://github.com/hardikk2002/CodeEditor-Xpro">⭐️ Star on Github</a></li>
                             {/*<li><a href="">Developer</a></li>*/}
                        </ul>
                    </nav>
                </div>

            </div>
        </div>
    )
}

export default Navbar;
