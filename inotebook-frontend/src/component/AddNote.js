import React, { useContext, useEffect } from 'react'
import './AddNotes.css'
import context from '../context/notes/NoteContext'

const AddNote = () => {
    let context2 = useContext(context);
    useEffect(() => {
        const form = document.querySelector('form');
        const handleSubmit = (e) => {
            e.preventDefault();
            const title = document.querySelector('#title');
            const description = document.querySelector('#description');
    
            context2.addNotes(title.value, description.value, 'hello');
        };
    
        form.addEventListener('submit', handleSubmit);
        return () => {
            form.removeEventListener('submit', handleSubmit);
        };
    }, []);
    return (
        <div className="form-container">
            <form action="#" method="post">
                <div className="form-group">
                    <label htmlFor="name">Title</label>
                    <input type="text" id="title" name="title" required />
                </div>
                <div className="form-group">
                    <label htmlFor="description">description</label>
                    <textarea id="description" name="description" rows="4" required></textarea>
                </div>
                <div className="form-group">
                    <button type="submit">Add</button>
                </div>
            </form>
        </div>
    )
}
export default AddNote
