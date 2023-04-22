import { useState } from "react";
import { useEffect } from "react";
import Todo from "./components/todoApp";
import { getAllToDo,addToDo } from "./utils/handleApi";
import './index.css'
import '../src/components/style.css'
import { updateToDo ,deleteToDo} from "./utils/handleApi";
function App() {

  const [toDo,setToDo]=useState([]);
  const [text, setText] = useState("")
  const [isUpdating,setIsUpdating] = useState(false);
  const [toDoId, setToDoId] = useState("")

  useEffect(() => {
    getAllToDo(setToDo)
  }, [])
  
  const updateMode = (_id,text)=>{
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
        onChange={(e)=>setText(e.target.value)}
        />
        <div className="add" 
        onClick={isUpdating ?
           ()=>updateToDo(toDoId,text,setToDo,setText,setIsUpdating) 
           : ()=>addToDo(text,setText,setToDo)} >
          {isUpdating ? "Update":"ADD"}
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
