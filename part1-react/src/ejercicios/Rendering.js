import React, { useEffect, useState } from "react"
import {Notemodule} from "./Note"

export default function Rendering(){

    const [notes , setNotes] = useState([])
    const [ newNote, setNewNote] = useState("");
    const [loading, setLoading] = useState(false)

    useEffect(()=>{
        setLoading(true)
        setTimeout(()=>{
            fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then((json)=>{
                setNotes(json)
                setLoading(false)
            })
        },2000)
    }, [])
    

    const handleChange = (event) => {
        setNewNote(event.target.value)
    }
    const handleSubmit= (event) => {
        event.preventDefault()
        const noteToAddToState = {
            id: notes.length +1,
            title: newNote,
            body: newNote
        }
        setNotes(notes.concat(noteToAddToState))
        setNewNote('')
    }
    return (
        <div>
            <h1>Notes</h1>
            {loading ? "Cargando..." : ''}
            <ul>
                {notes.map(note => 
                    <Notemodule key={note.id} {...note}/>
                )}
            </ul>
            <form onSubmit={handleSubmit}>
                <input type="text" onChange={handleChange} value={newNote}/>
                <button>añadir nota</button>
            </form>
        </div>
    )
}  