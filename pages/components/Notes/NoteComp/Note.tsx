import React from "react";
import DeleteIcon from "@material-ui/icons/Delete";
import styles from '../Notes.module.scss';



function Note(props) {
    function handleClick() {
        props.onDelete(props.id);
    }

    return (
        <div className={styles.note}>
            <h1>{props.title}</h1>
            <p>{props.content}</p>
            <button onClick={handleClick}>
                <DeleteIcon />
            </button>
        </div>
    );
}

export default Note;
