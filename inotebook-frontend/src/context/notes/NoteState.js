import { useState } from "react";
import context from "./NoteContext";

const NoteState = (props) => {
    
    const [state, setState] = useState('default');
    const [notes, setNotes] = useState([]);
    const deleteNote = async (id) => {
        const res = await fetch("http://localhost:8000/deletenotes", {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ id: id }),
        });
        let notes = await res.json();
        setNotes(notes);
    }
    /*const getNode = ()=>{
        const result = fetch(url,{}) 
    }*/
    const getNotes = async () => {
        const res = await fetch("http://localhost:8000/getnotes", {
            method: 'get'
        });
        let notes = await res.json();
        setNotes(notes);
    }

    const addNotes = async (title, description, tag) => {
        const res = await fetch("http://localhost:8000/addnote", {
            method: 'post',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify({ title, description, tag }),
        });
    }
    return (
        <context.Provider value={{ state, deleteNote, setState, addNotes, getNotes, notes }}>
            {props.children}
        </context.Provider>
    );
}

export default NoteState; 