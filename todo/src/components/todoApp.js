import React, { useState } from "react";
import axios from 'axios';
import {BiEdit} from 'react-icons/bi'
import {AiFillDelete} from 'react-icons/ai'
import './style.css'
const Todo=({text,updateMode,deleteTodo}) =>{
    const [isChecked, setIsChecked] = useState(false);
  
    const handleCheck = () => {
      setIsChecked(!isChecked);
    }
  return (
    <div className={`todo ${isChecked ? "checked" : ""}`}>
      <input className="chkBox" type="checkbox" checked={isChecked} onChange={handleCheck} />
      <div  className={`text ${isChecked ? "checkedText" : ""}`}>{text}</div>
      <div className="icons">
        <BiEdit className="icon" onClick={updateMode}></BiEdit>
        <AiFillDelete className='icon' onClick={deleteTodo}></AiFillDelete>
      </div>
    </div>

  )
}

export default Todo;
