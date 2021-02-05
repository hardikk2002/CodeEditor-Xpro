import React from "react";
import styles from './Editor.module.scss';
import "codemirror/lib/codemirror.css";
import "codemirror/theme/ayu-dark.css";

if (typeof navigator !== "undefined") {
    require("codemirror/mode/xml/xml");
    require("codemirror/mode/css/css")
    require("codemirror/mode/javascript/javascript");

}
import { Controlled } from "react-codemirror2";
// For embeding Editor, used react-codemirror2

// import styles from './main.module.scss';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faCompressAlt, faExpandAlt } from '@fortawesome/free-solid-svg-icons'



function Editor(props) {

    const {
        displayName,
        value,
        language,
        onChange,
    } = props;

    const [screen, setScreen] = React.useState(true)


    function handleChange(editor, data, value) {
        onChange(value);
    }
    function screenSize() {
        let value = "";
        (screen) ? value = [styles.mainContainer,].join('') : value = [styles.mainContainer, styles.collapse].join('')
        console.log(value);

        return value;
    }

    return (
        <div className={styles.editorContainer}>
            <div className={styles.wrapper}>
                <div className={styles.coloumnTitle}>
                    {displayName}
                </div>

                <Controlled
                    onBeforeChange={handleChange}
                    // similar onChange
                    value={value}
                    className={styles.codeMirrorWrapper}
                    options={{
                        lineWrapping: true,
                        lint: true,
                        mode: language,
                        lineNumbers: true,
                        theme: "ayu-dark"
                    }}
                // from code mirror
                />
            </div>


        </div >
    )
}

export default Editor;
