import React, { useState } from "react";
import Foot from "./Footer";
import Header from "./Header";
import Note from "./Note";
import CreateArea from "./CreateArea";

// to Display the Notes in the array dynamically.

function App() {

  const [noteList, setNoteList] = useState([]); 
  
  function addNote(note) {
    setNoteList( prevNote => {
      return [...prevNote, note];
    });
  }

  function deleteNote(id){
    setNoteList(  prevNote => {
      return prevNote.filter( (noteItem, index) => {
        return index !== id;
      })
    })
  }
  
  return (
    <div>
      <Header />
      <CreateArea 
        onAdd = {addNote}
      />
      {noteList.map( (noteItem, index) => {
        return <Note 
          key = {index}
          id = {index}
          title = {noteItem.title}
          content = {noteItem.content}
          onDelete = {deleteNote}
        />
      })}
      <Foot />
    </div>
  );
}

export default App;
