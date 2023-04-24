import axios from "axios";
const baseUrl = "http://localhost:9002"

const getAllToDo = (setToDo)=>{
    axios.get(baseUrl)
    .then(({data})=>{
        console.log(data);
        setToDo(data)
    })
}

const addToDo=(text,date,setText,setToDo)=>{
    if (text.trim() === '') {
      return;
    }
  
    axios
    .post(`${baseUrl}/save`,{text, date})
    .then((data)=>{
      console.log(data);
      setText("")
      getAllToDo(setToDo)
    })
    .catch((err)=>console.log(err))
  }

const updateToDo=(toDoId,text,date,setToDo,setText,setIsUpdating)=>{
    axios
        .post(`${baseUrl}/update`,{_id: toDoId,text,date})
        .then((data)=>{
        setText("")
        setIsUpdating(false)
        getAllToDo(setToDo)
})
.catch((err)=>console.log(err));

}
const deleteToDo=(_id,setToDo)=>{
    axios
        .post(`${baseUrl}/delete`,{_id})
        .then((data)=>{
            console.log(data);
            getAllToDo(setToDo)
})
.catch((err)=>console.log(err));
}
export {getAllToDo,addToDo,updateToDo,deleteToDo}