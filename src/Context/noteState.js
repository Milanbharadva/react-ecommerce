import React from "react";
import NoteContext from "./noteContext";
import { useState } from "react";

const NoteState = (props) => {
  
    const [state,setState]=useState({
      "status":false
  })
  const  update=()=>{
        setState({
            "status":!state.status
        })
    }
  return <NoteContext.Provider value={{state,update}}>{props.children} </NoteContext.Provider>;
};
export default NoteState;
