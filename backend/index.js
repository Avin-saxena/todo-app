const mongoose = require('mongoose');
const express=require('express')
const cors=require('cors');
const routes=require('./routes/todoRoute')
const app=express();
const PORT=process.env.port || 9002
app.use(express.json())
app.use(express.urlencoded());
app.use(cors());

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/todo-list').then(()=>{
    console.log("connection with dbms succesfully");
  })

  }
app.use(routes)

app.listen(PORT, () => {
  console.log('Server started on port 9002');
});
