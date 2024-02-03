import React from "react";

const ToDoList = (props) => {
    return (
        <div style={{ display: 'flex' }}>
            <span style={{ cursor: 'pointer' }} onClick={() => {
                props.onSelect(props.id);
            }}>❌</span>
            <li style={{ listStyle: 'none' }}>{props.text}</li>
        </div>
    )
}

export default ToDoList;