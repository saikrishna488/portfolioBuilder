const object = require('./globalSkeletons');

const port = (tem,data) => {
    if(tem in object){
        return object[tem](data);
    }
    return ;
}

module.exports = port;
