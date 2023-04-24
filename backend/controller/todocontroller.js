const ToDOModel= require('../model/model')

module.exports.getToDo= async(req,res)=>{
    const toDo = await ToDOModel.find();
    res.send(toDo);
}

module.exports.saveToDo = (req, res) => {
    const { text, date } = req.body;
    ToDOModel.create({ text, date })
        .then((data) => {
            console.log("Added Successfully...");
            console.log(data);
            res.send(data);
        })
        .catch((err) => console.log(err));
};



module.exports.updateToDo= (req,res)=>{
    const {_id,text,date} = req.body;
    ToDOModel.findByIdAndUpdate(_id,{text, date})
    .then(()=>res.status(201).send("updated Successfully...")    )
    .catch((err)=>console.log(err));
}
module.exports.deleteToDo= (req,res)=>{
    const {_id} = req.body;
    ToDOModel.findByIdAndDelete(_id)
    .then(()=>res.status(201).send("Deleted Successfully..."))
    .catch((err)=>console.log(err))
}