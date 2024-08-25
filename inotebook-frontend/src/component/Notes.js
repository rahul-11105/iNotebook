import React, { useContext, useEffect } from 'react';
import './Notes.css';
import NotesItems from './NotesItems';
import context from '../context/notes/NoteContext';

const Notes = () => {
  const a = useContext(context);

  useEffect(()=>{
    a.getNotes();
  },[a.getNotes]);
  
  let arr = a.notes;
  return (
    <div className='container'>
        <div className='inner-container'>
          
          {arr.map((element)=>{
            return(<NotesItems key={element._id} id={element._id} title={element.title} description={element.description}/>);
          })}
        </div>
    </div>
    
  )
}

export default Notes;