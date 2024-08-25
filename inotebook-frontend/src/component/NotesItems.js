import React, { useContext, useEffect } from 'react'
import './NotesItems.css'
import context from '../context/notes/NoteContext';
const NotesItems = (props) => {

  const a = useContext(context);
  const handleonclick = ()=>{
    a.deleteNote(`${props.id}`);
  }

  return (
    <div className="card">
      <div className="card-content">
        <h2 className="card-title">{props.title}</h2>
        <i onClick={handleonclick}  className="fa-solid fa-trash"></i>
        <p className="card-description">{props.description}</p>
      </div>
    </div>
  )
}

export default NotesItems;
