const people=[
    {id:1, name:"Manik"},
    {id:2, name:"Shaun"},
    {id:3, name:"Mrigan"},
    {id:4, name:"Jessica"}
]

exports.all = async (req, res, next) => {

    return res.status(200).json(people);
};

exports.byId = async (req, res, next) => {
  
    try{
      if(people.length<req.params.id){
        throw "Not valid"
      }
    const person = await people.find(p=> p.id === parseInt(req.params.id));
     res.status(200).json(person);
    }
    catch(err){
      res.status(400).send(err)
    }
  
};
