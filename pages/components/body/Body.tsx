import React from 'react'
import SplitPane from 'react-split-pane';
import { Drawer, Button } from "antd";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'

import 'react-tabs/style/react-tabs.css';
import Editor from '../Editor/Editor';

import styles from './Body.module.scss';
import "antd/dist/antd.dark.css";

import Join from '../Join/Join';
import Notes from '../Notes/Notes';


const style = {
    background: '#000',
    width: '2px',
    cursor: 'col-resize',
    margin: '0 2px',

};

function Body() {



    const [html, setHtml] = React.useState("<h1>HTML goes here...</h1>");
    const [css, setCss] = React.useState("  body{font-family: cursive;background: linear-gradient(to right, #ffffff , #ece9e6);}");
    const [js, setJs] = React.useState("// I will help in Adding interactive behavior:)");

    const [srcDoc, setSrcDoc] = React.useState("");


    React.useEffect(() => {
        const timeDelay = setTimeout(() => {
            setSrcDoc(`
            <html>
               <body>  ${html} </body>
               <style> ${css}  </style>
               <script>${js}  </script>
            </html>
           `)
        }, 350)
        // TO GIVE RESULT IN IFRAME WINDOW

        return () => clearTimeout(timeDelay);
        // to clear the old time delay
    }, [html, css, js])


    const [visible1, setVisible1] = React.useState(false);

    const showDrawer1 = () => {
        setVisible1(true);
    };

    const onClose1 = () => {
        setVisible1(false);
    };

    const [visible2, setVisible2] = React.useState(false);

    const showDrawer2 = () => {
        setVisible2(true);
    };

    const onClose2 = () => {
        setVisible2(false);
    };




    return <div className={styles.mainContainer}>
        <Drawer
            className={styles.sideBar}
            title="X-Chat"
            placement="right"
            width={450}
            closable={true}
            onClose={onClose1}
            visible={visible1}
        >
            <div className={styles.sidePanel} >
                <Join />
            </div>
        </Drawer>
        <Drawer
            className={styles.sideBar}
            title="X-Notes"
            placement="right"
            width={450}
            closable={true}
            onClose={onClose2}
            visible={visible2}
        >
            <div className={styles.sidePanel} >
                <Notes />
            </div>
        </Drawer>
        <SplitPane split="vertical"
            minSize={430}
            maxSize={1200}
            defaultSize="40%"
            resizerStyle={style}
            className={styles.mainContent}
        >
            <div className={styles.leftPanel} >
                <Tabs className={styles.editorName} >


                    <TabList>
                        <Tab className={styles.tab}>HTML</Tab>
                        <Tab className={styles.tab}>CSS</Tab>
                        <Tab className={styles.tab}>JavaScript</Tab>
                    </TabList>

                    <TabPanel className={styles.code}>
                        <Editor

                            displayName="HTML"
                            language="xml"
                            value={html}
                            onChange={setHtml}
                        />

                    </TabPanel>
                    <TabPanel className={styles.code}>
                        <Editor

                            displayName="CSS"
                            language="css"
                            value={css}
                            onChange={setCss}
                        />
                    </TabPanel>
                    <TabPanel className={styles.code}>
                        <Editor

                            displayName="JavaScript"
                            language="javascript"
                            value={js}
                            onChange={setJs}
                        />
                    </TabPanel>
                </Tabs>


                <div className={styles.leftfooter}>
                    <div className={styles.footerContent}>
                        <h1>Think, Code and Explore!</h1>
                        <p>Make notes, Connect with others and then count your Progress.</p>
                        <div className={styles.bottom}>

                            <Button onClick={showDrawer2} >NOTES</Button>
                            &nbsp;&nbsp;
                            <Button onClick={showDrawer1} >ROOM</Button>



                            {/* <div className="site-card-wrapper">
                                <button onClick={showDrawer}>
                                    Open
                                </b>
                            </div> */}


                        </div>

                        {/* <p>Made with 💙 in 🇮🇳 </p> */}
                    </div>
                </div>


            </div>
            <div className={styles.rightPanel} >
                <iframe
                    srcDoc={srcDoc}
                    title="result"
                    sandbox="allow-popups allow-scripts"
                    // for little security purpose, cookies
                    width="100%"
                    height="100%"
                    frameBorder="0"
                />
            </div>

        </SplitPane>
    </div>

}

export default Body;
