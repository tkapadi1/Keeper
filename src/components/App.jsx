import React from "react";
import Foot from "./Footer";
import Header from "./Header";
import Note from "./Note";
import noteArray from "../note";

// to Display the Notes in the array dynamically.
function createNote(noteValues){
  return(
    <Note 
      key={noteValues.key}
      head={noteValues.title}
      para={noteValues.content}
    />
  );
}


function App() {
  return (
    <div>
      <Header />
      {/* to go through every element in the note Array and print it. */}
      {noteArray.map(createNote)};
      <Foot />
    </div>
  );
}

export default App;
