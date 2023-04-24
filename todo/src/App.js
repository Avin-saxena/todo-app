import { useState } from "react";
import { useEffect } from "react";
import Todo from "./components/todoApp";
import { getAllToDo, addToDo } from "./utils/handleApi";
import './index.css'
import '../src/components/style.css'
import { updateToDo, deleteToDo } from "./utils/handleApi";
import DatePicker from "react-datepicker";
import 'react-datepicker/dist/react-datepicker-cssmodules.css';  
import "react-datepicker/dist/react-datepicker.css";
import { FaCalendar } from 'react-icons/fa';
// import CalendarIcon from "react-calendar-icon";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons'


function App() {
  const [date, setDate] = useState(new Date());
  const [toDo, setToDo] = useState([]);
  const [text, setText] = useState("")
  const [isUpdating, setIsUpdating] = useState(false);
  const [toDoId, setToDoId] = useState("")

function padTo2Digits(num) {
  return num.toString().padStart(2, '0');
}

function formatDate(date) {
  return [
    date.getUTCFullYear(),
    padTo2Digits(date.getUTCMonth() + 1),
    padTo2Digits(date.getUTCDate()),
  ].join('-');
}



  useEffect(() => {
    getAllToDo(setToDo)
  }, [])


const updateMode = (_id, text) => {
    setIsUpdating(true)
    setText(text)
    setToDoId(_id)
}


  return (
    <div className="App">
      <div className="conatiner">
        <h1>ToDo APP</h1>
        <div className="top">
          <input
            className="addTodos"
            type="text"
            placeholder="Add ToDos..."
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <DatePicker 
          selected={date} 
          onChange={date => setDate(date)}
          dateFormat="MM/dd/yyyy"  
          customInput={
            <div className="calendar-icon-container">
              <FontAwesomeIcon icon={faCalendarAlt} style={{ color: 'white' }} size="2x" className="calendar-icon" />
            </div>
          }
          />
          <div className="add"
            onClick={isUpdating ?
              () => updateToDo(toDoId, text,formatDate(date), setToDo, setText, setIsUpdating)
              : () => addToDo(text,formatDate(date), setText, setToDo)} >
            {isUpdating ? "Update" : "ADD"}
          </div>
        </div>
        <div className="list">
          {
            toDo.map((item) => {
              if (item.text !== "") {
                return (
                  <Todo
                    key={item._id}
                    text={item.text}
                    date={item.date}
                    updateMode={() => updateMode(item._id, item.text)}
                    deleteTodo={() => deleteToDo(item._id, setToDo)}
                  />
                );
              }
            })
          }
        </div>
      </div>
    </div>
  );
}

export default App;