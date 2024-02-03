import React, { useState } from 'react';
import './App.css';
import ToDoList from './ToDoList';

const App = () => {

    const [enteredValue, setEnteredValue] = useState('');
    const [arrayItems, setArrayItems] = useState([]);

    const whenChanged = (e) => {
        setEnteredValue(e.target.value);
    }

    const addNote = () => {
        setArrayItems((oldValue) => {
            return [...oldValue, enteredValue];
        });
        setEnteredValue('');
    }

    const deleteNote = (id) => {
        console.log('clicked');
        setArrayItems((oldValue) => {
            return oldValue.filter((currEle, index) => {
                return index !== id;
            })
        })
    }


    return (
        <div className='listCont'>
            <div className='list-box'>

                <h1>ToDo List</h1>

                <div className='inpDiv'>
                    <input type='text' placeholder='enter an item' onChange={whenChanged} value={enteredValue} />
                    <button onClick={addNote}>+</button>
                </div>

                <ol>
                    {arrayItems.map((currEle, index) => {
                        return (
                            <ToDoList
                                id={index}
                                key={index}
                                onSelect={deleteNote}
                                text={currEle} />
                        )
                    })}

                </ol>
            </div>
        </div>
    )
}

export default App;