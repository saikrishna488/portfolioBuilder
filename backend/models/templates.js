const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    name : {
        type : String,
        required : true
    },
    url : {
        type : String,
        required : true
    },
    description : {
        type : String,
        required : true
    },
},{
    timestamps : true
});

const Templates = mongoose.model('Templates',userSchema);


// const func = async ()=>{
//     let temp = await Templates.create({
//         name: "portfolio1",
//         url : "portfolio1",
//         description : "abcd"
//     });

//     temp.save();
// }

// func();


module.exports = Templates;